import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../redux/action/user";

import { editProfile } from "../../utils/api";
import styles from "./Profile.module.css";
import withNavigate from "../../helpers/withNavigate";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import dayjs from "dayjs";

import pen from "../../assets/img/pen.png";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../../components/modals/modalLogout/Modal";
import IsLoading from "../../components/isLoading/IsLoading";

import "react-toastify/dist/ReactToastify.css";

function Profile({ navigate }) {
  const dispatch = useDispatch();
  const target = useRef(null);
  const profile = useSelector((state) => state.getProfile.profile);
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [imgPrev, setImgPrev] = useState(null);
  const [body, setBody] = useState({});
  const [show, setShow] = useState(false);
  const isPending = useSelector((state) => state.getProfile.IsLoading);

  const [delivery_address, setDelivery_address] = useState("");
  const [display_name, setDisplay_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");

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
    // console.log(e);
    console.log(e.target.files[0]);
    const photo = e.target.files[0];
    const defaultSize = 2 * 1024 * 1024;

    if (
      photo.type !== "image/jpeg" &&
      photo.type !== "image/jpg" &&
      photo.type !== "image/png"
    ) {
      return toast.error(
        "Extension file wrong! Only .jpeg, .jpg, .png are allowed.",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        }
      );
    }
    if (photo.size > defaultSize) {
      return toast.error("File to large. Max. file size 2 Mb", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    setBody({ ...body, image: e.target.files[0] });
    setImgPrev(URL.createObjectURL(e.target.files[0]));
  };

  const handleRemoveImg = async () => {
    if (body.image) {
      setBody({});
    }
    setImgPrev(null);
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
      await dispatch(userActions.getProfileAction());
      toast.success("Edit profile success", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setDelivery_address("");
    setDisplay_name("");
    setFirst_name("");
    setLast_name("");
    setDate_of_birth("");
    setIsEdit(true);
  };

  const handleLogout = async () => {
    setOpen(!open);
  };

  const getProfile = async () => {
    try {
      await dispatch(userActions.getProfileAction());
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === 403) {
        localStorage.removeItem("login");
        navigate("/login");
      }
      if (error.response.data.status === "You have to login first") {
        localStorage.removeItem("login");
        navigate("/login");
      }

    }
  }

  useEffect(() => {
    getProfile();
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
              {isPending ? (
                <div className={styles.loading}>
                  <IsLoading />
                </div>
              ) : (
                <img
                  className={styles.photo}
                  src={imgPrev !== null ? imgPrev : profile.image}
                  alt="photos-profile"
                />
              )}
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
              <ToastContainer />
              <button
                className={`${styles.btn} ${styles.remove} ${styles.cursor}`}
                onClick={handleRemoveImg}
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
                <ToastContainer />
                <button
                  className={`${styles.btn2} ${styles.cancel} ${styles.cursor}`}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className={`${styles.btn2} ${styles.logout} ${styles.cursor}`}
                  onClick={handleLogout}
                >
                  Log out
                </button>
                <Modal show={show} />
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
                {isEdit ? (
                  <input
                    className={styles["input-text"]}
                    type="text"
                    placeholder={profile.delivery_address}
                    disabled={isEdit}
                    value={delivery_address}
                  />
                ) : (
                  <input
                    className={styles["input-text"]}
                    type="text"
                    onChange={handleAddress}
                  />
                )}
              </div>
              <div className={styles.detail}>
                <p className={styles["text-header"]}>Details</p>
              </div>
              <div className={styles["detail-profile2"]}>
                <div className={`${styles.display} ${styles.border}`}>
                  <label className={styles.label}>Display name :</label>
                  {isEdit ? (
                    <input
                      className={styles["input-text"]}
                      type="text"
                      placeholder={profile.display_name}
                      disabled={isEdit}
                      value={display_name}
                    />
                  ) : (
                    <input
                      className={styles["input-text"]}
                      type="text"
                      onChange={handleDisplayName}
                    />
                  )}
                </div>
                <div className={`${styles.bod} ${styles.border}`}>
                  <label className={styles.label}>Date of Birth :</label>
                  {isEdit ? (
                    <div className={styles["input-text"]}>
                      {dayjs(profile.date_of_birth).format("DD/MM/YYYY")}
                    </div>
                  ) : (
                    <input
                      className={styles["input-text"]}
                      onChange={handleDOB}
                      type="date"
                    />
                  )}
                </div>
              </div>
              <div className={`${styles["first-name"]} ${styles.border}`}>
                <label className={styles.label}>First name :</label>
                {isEdit ? (
                  <input
                    className={styles["input-text"]}
                    type="text"
                    placeholder={profile.first_name}
                    disabled={isEdit}
                    value={first_name}
                  />
                ) : (
                  <input
                    className={styles["input-text"]}
                    onChange={handleFirstName}
                    type="text"
                  />
                )}
              </div>
              <div className={`${styles["last-name"]} ${styles.border}`}>
                <label className={styles.label}>Last name :</label>
                {isEdit ? (
                  <input
                    className={styles["input-text"]}
                    type="text"
                    placeholder={profile.last_name}
                    disabled={isEdit}
                    value={last_name}
                  />
                ) : (
                  <input
                    className={styles["input-text"]}
                    onChange={handleLastName}
                    type="text"
                  />
                )}
              </div>
              <div className={styles.gender}>
                <div className={styles.male}>
                  {isEdit ? (
                    <input
                      className={`${styles.circle} ${styles.cursor}`}
                      // onChange={handleGender}
                      type="radio"
                      value="male"
                      checked={profile.gender === "male" ? true : false}
                      name="gender"
                    />
                  ) : (
                    <input
                      className={`${styles.circle} ${styles.cursor}`}
                      onChange={handleGender}
                      type="radio"
                      value="male"
                      name="gender"
                    />
                  )}
                  <p className={styles["text-gender"]}>Male</p>
                </div>
                <div className={styles.female}>
                  {isEdit ? (
                    <input
                      className={`${styles.circle} ${styles.cursor}`}
                      // onChange={handleGender}
                      type="radio"
                      value="female"
                      checked={profile.gender === "female" ? true : false}
                      name="gender"
                    />
                  ) : (
                    <input
                      className={`${styles.circle} ${styles.cursor}`}
                      onChange={handleGender}
                      type="radio"
                      value="female"
                      name="gender"
                    />
                  )}

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
                onClick={handleSaveChange}
              >
                Save Change
              </button>
              <ToastContainer />
              <button
                className={`${styles.btn2} ${styles.cancel} ${styles.cursor}`}
                onClick={handleCancel}
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
      <Modal
        open={open}
        setOpen={setOpen}
        title="Log out"
        body="Are you sure want to log out?"
      />
    </>
  );
}

export default withNavigate(Profile);
