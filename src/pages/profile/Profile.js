import React, { useEffect, useRef, useState } from "react";
import styles from "./Profile.module.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { editProfile, getProfile } from "../../utils/api";
import withNavigate from "../../helpers/withNavigate";
import dayjs from "dayjs";
import { logout } from "../../utils/api";

import pen from "../../assets/img/pen.png";

function Profile({ navigate }) {
  const target = useRef(null);
  const [profile, setProfile] = useState({});
  const [isEdit, setIsEdit] = useState(true);
  const [imgPrev, setImgPrev] = useState();
  const [body, setBody] = useState({});
  console.log(body);

  const handleAddress = (e) => {
    setBody({ ...body, delivery_address: e.target.value });
  };
  const handleDisplayName = (e) => {
    setBody({ ...body, display_name: e.target.value });
  };
  const handleFirstName = (e) => {
    setBody({ ...body, first_name: e.target.value });
  };
  const handleLastName = (e) => {
    setBody({ ...body, last_name: e.target.value });
  };
  const handleDOB = (e) => {
    setBody({ ...body, date_of_birth: e.target.value });
  };
  const handleGender = (e) => {
    setBody({ ...body, gender: e.target.value });
  };
  const handleImage = (e) => {
    console.log(e);
    setBody({ ...body, image: e.target.files[0] });
    setImgPrev(URL.createObjectURL(e.target.files[0]));
  };

  

  const getDataProfile = async () => {
    try {
      const result = await getProfile();
      setProfile(result.data.data[0]);
      console.log(result);
    } catch (error) {
      // console.log(error);
      // console.log(error.response.data.statusCode);
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };

  const handleSaveChange = async () => {
    const formData = new FormData();
    Object.keys(body).forEach((key, idx) => {
      formData.append(key, body[key]);
    });
    //   for (var pair of formData.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]);
    // }
    try {
      await editProfile(formData);
      setBody({});
      setIsEdit(true);
      await getDataProfile();
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = async () => {
    try {
      console.log('apaaaaa');
      const result = await logout();
      localStorage.removeItem("login");
      navigate('/')
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <>
      <div className={styles["body-container"]}>
        <Header />
        <main className={styles["container-main"]}>
          <section className={styles["user-profile"]}>
            <p className={styles["text-user"]}>User Profile</p>
          </section>
          <section
            className={`${styles["detail-profile"]} ${styles["full-width"]}`}
          >
            <section className={styles.profile}>
              <img
                className={styles.photo}
                src={imgPrev ?? "http://localhost:8070" + profile.image}
                alt="photos-profile"
              />
              <p className={styles.name}>{profile.display_name}</p>
              <p className={styles.mail}>{profile.email}</p>
              <button
                className={`${styles.btn} ${styles.choose} ${styles.cursor}`}
                onClick={(e) => {
                  e.preventDefault();
                  target.current.click();
                }}
              >
                Choose photo
              </button>
              <input
                type="file"
                ref={target}
                onChange={(e) => handleImage(e)}
                style={{ display: "none" }}
              />
              <button
                className={`${styles.btn} ${styles.remove} ${styles.cursor}`}
              >
                Remove photo
              </button>
              <button
                className={`${styles.btn2} ${styles.edit} ${styles.cursor}`}
              >
                Edit Password
              </button>
              <div className={styles.wrapperChange}>
                <div className={styles["text-confirmation"]}>
                  Do you want to save the change?
                </div>
                <button
                  className={`${styles.btn2} ${styles.save} ${styles.cursor}`}
                  onClick={handleSaveChange}
                >
                  Save Change
                </button>
                <button
                  className={`${styles.btn2} ${styles.cancel} ${styles.cursor}`}
                >
                  Cancel
                </button>
                <button
                  className={`${styles.btn2} ${styles.logout} ${styles.cursor}`}
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            </section>
            <form className={styles["detail-user"]}>
              <div className={styles.contact}>
                <p className={styles["text-header"]}>Contacts</p>
                <button
                  className={`${styles["logo-pen"]} ${styles.cursor}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsEdit(!isEdit);
                  }}
                >
                  <img className={styles.pen} src={pen} alt="pen" />
                </button>
              </div>
              <div className={styles["email-mobile"]}>
                <div className={`${styles.email} ${styles.border}`}>
                  <label className={styles.label}>Email address :</label>
                  <input
                    className={styles["input-text"]}
                    type="text"
                    disabled={isEdit}
                    placeholder={profile.email}
                  />
                </div>
                <div className={`${styles.mobile} ${styles.border}`}>
                  <label className={styles.label}>Mobile number :</label>
                  <input
                    className={styles["input-text"]}
                    type="tel"
                    disabled={isEdit}
                    placeholder={profile.phone_number}
                  />
                </div>
              </div>
              <div className={`${styles.address} ${styles.border}`}>
                <label className={styles.label}>Delivery address :</label>
                <input
                  className={styles["input-text"]}
                  type="text"
                  onChange={handleAddress}
                  disabled={isEdit}
                  placeholder={profile.delivery_address}
                />
              </div>
              <div className={styles.detail}>
                <p className={styles["text-header"]}>Details</p>
              </div>
              <div className={styles["detail-profile2"]}>
                <div className={`${styles.display} ${styles.border}`}>
                  <label className={styles.label}>Display name :</label>
                  <input
                    className={styles["input-text"]}
                    type="text"
                    onChange={handleDisplayName}
                    disabled={isEdit}
                    placeholder={profile.display_name}
                  />
                </div>
                <div className={`${styles.bod} ${styles.border}`}>
                  <label className={styles.label}>Date of Birth :</label>
                  {isEdit ? (
                    <input
                      className={styles["input-text"]}
                      onChange={handleDOB}
                      type="date"
                      disabled={isEdit}
                    />
                  ) : (
                    <div className={styles["input-text"]}>
                      {dayjs(profile.date_of_birth).format("DD/MM/YYYY")}
                    </div>
                  )}
                </div>
              </div>
              <div className={`${styles["first-name"]} ${styles.border}`}>
                <label className={styles.label}>First name :</label>
                <input
                  className={styles["input-text"]}
                  onChange={handleFirstName}
                  type="text"
                  disabled={isEdit}
                  placeholder={profile.first_name}
                />
              </div>
              <div className={`${styles["last-name"]} ${styles.border}`}>
                <label className={styles.label}>Last name :</label>
                <input
                  className={styles["input-text"]}
                  onChange={handleLastName}
                  type="text"
                  disabled={isEdit}
                  placeholder={profile.last_name}
                />
              </div>
              <div className={styles.gender}>
                <div className={styles.male}>
                  <input
                    className={`${styles.circle} ${styles.cursor}`}
                    onChange={handleGender}
                    type="radio"
                    value="male"
                    defaultChecked={
                      profile.gender === "male" ? "true" : "false"
                    }
                    name="gender"
                  />
                  <p className={styles["text-gender"]}>Male</p>
                </div>
                <div className={styles.female}>
                  <input
                    className={`${styles.circle} ${styles.cursor}`}
                    onChange={handleGender}
                    type="radio"
                    value="female"
                    name="gender"
                  />
                  <p className={styles["text-gender"]}>Female</p>
                </div>
              </div>
            </form>
            <div className={styles.wrapperChangeHidden}>
              <div className={styles["text-confirmation"]}>
                Do you want to save the change?
              </div>
              <button
                className={`${styles.btn2} ${styles.save} ${styles.cursor}`}
              >
                Save Change
              </button>
              <button
                className={`${styles.btn2} ${styles.cancel} ${styles.cursor}`}
              >
                Cancel
              </button>
              <button
                className={`${styles.btn2} ${styles.logout} ${styles.cursor}`}
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default withNavigate(Profile);
