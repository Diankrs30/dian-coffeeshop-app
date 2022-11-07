import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../../redux/action/auth";
import styles from "./Login.module.css";
import withNavigate from "../../helpers/withNavigate";
import { login } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import asideImg from "../../assets/img/aside-img.png";
import coffee from "../../assets/img/coffee-1.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";
import eyeSlash from "../../assets/img/eyeSlash.png";
import eye from "../../assets/img/eye.png";

function Login({ navigate }) {
  const dispatch = useDispatch();
  const [isPwdShown, setIsPwdShown] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    try {
      // const result = await login(body);
      const result = await dispatch(authAction.loginAction(body));
      console.log(result.action.payload.data.data);
      localStorage.setItem(
        "login",
        JSON.stringify(result.action.payload.data.data)
      );
      toast.success("Login success", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      // alert("success login");
      toast.error("Email/password is wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  const onClickHandler = (to) => {
    navigate(to);
  };
  return (
    <>
      <main className={styles.container}>
        <aside className={styles["side-content"]}>
          <img
            className={`${styles["side-image"]} ${styles["full-width"]}`}
            src={asideImg}
            alt="dian-coffeeshop"
          />
        </aside>
        <section className={styles["form-content"]}>
          <section className={styles["wrapper-form"]}>
            <header
              className={`${styles["header-content"]} ${styles["full-width"]}`}
            >
              <section className={styles["logo-coffeeshop"]}>
                <img
                  className={styles.logo}
                  src={coffee}
                  alt="dian-coffeeshop"
                />
                <div
                  onClick={() => onClickHandler("/")}
                  className={styles["text-logo"]}
                >
                  Coffee Shop
                </div>
              </section>
              <section className={styles["text-login"]}>
                <p>Login</p>
              </section>
            </header>
            <section
              className={`${styles["register-form"]} ${styles["full-width"]}`}
            >
              <form
                className={`${styles["full-width"]} ${styles.form}`}
                onSubmit={handleSubmit}
              >
                <div className={styles["input-div"]}>
                  <label className={styles.label}>Email Address:</label>
                  <input
                    className={`${styles["full-width"]} ${styles.input}`}
                    type="text"
                    name="email"
                    required="true"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className={styles["input-div"]}>
                  <label className={styles.label}>Password:</label>
                  <input
                    className={`${styles.input} ${styles["full-width"]}`}
                    type={isPwdShown ? "text" : "password"}
                    name="password"
                    required="true"
                    placeholder="Enter your password"
                  />
                  <span>show password  </span>
                  <img
                    className={styles["icon-eye"]}
                    src={isPwdShown ? eye : eyeSlash}
                    alt=""
                    onClick={()=>setIsPwdShown(!isPwdShown)}
                  />
                </div>
                <div className={styles["input-div2"]}>
                  <label
                    onClick={() => onClickHandler("/forgot-password")}
                    className={`${styles.label} ${styles.forgot} ${styles.cursor}`}
                  >
                    Forgot password?
                  </label>
                </div>
                <button
                  className={`${styles.button} ${styles.primary} ${styles.cursor}`}
                  type="submit"
                >
                  <p className={styles["btn-text1"]}>Login</p>
                </button>
                <ToastContainer />
                <div
                  className={`${styles.button} ${styles.secondary} ${styles.cursor}`}
                >
                  <img className={styles["logo-google"]} src={google} alt="" />
                  <p className={styles["btn-text2"]}>Login with Google</p>
                </div>
              </form>
            </section>
            <section
              className={`${styles["other-content"]} ${styles["flex-center"]}`}
            >
              <p className={styles["text-signup"]}>Don't have an account?</p>
              <div
                onClick={() => onClickHandler("/register")}
                className={`${styles.button} ${styles.login} ${styles.cursor}`}
              >
                <div className={styles["btn-text3"]}>Sign up Here</div>
              </div>
            </section>
          </section>
          <footer className={`${styles["footer-content"]} ${styles.footer}`}>
            <aside className={styles["about-coffeeshop"]}>
              <section className={styles["logo-coffeeshop"]}>
                <img
                  className={styles.logo}
                  src={coffee}
                  alt="dian-coffeeshop"
                />
                <div
                  onClick={() => onClickHandler("/")}
                  className={styles["text-logo"]}
                >
                  Coffee Shop
                </div>
              </section>
              <p className={styles.coffeeshop}>
                Coffee Shop is a store that sells some good meals, and
                especially coffee. We provide high quality beans
              </p>
              <div className={styles["oauth-btn"]}>
                <img
                  className={`${styles.cursor} ${styles["bg-sosmed"]}`}
                  src={facebook}
                  alt="google"
                />
                <img
                  className={`${styles.cursor} ${styles["bg-sosmed"]}`}
                  src={twitter}
                  alt="facebook"
                />
                <img
                  className={`${styles.cursor} ${styles["bg-sosmed"]}`}
                  src={instagram}
                  alt="twitter"
                />
              </div>
              <p className={styles.copyright}>&#169;2020CoffeeStore</p>
            </aside>
            <aside className={styles["app-info"]}>
              <div className={styles.app}>
                <p className={styles["text-app"]}>Product</p>
                <div className={styles.text}>
                  <div className={styles.text1}>
                    <p className={styles["text-info"]}>Download</p>
                    <p className={styles["text-info"]}>Locations</p>
                    <p className={styles["text-info"]}>Blog</p>
                  </div>
                  <div className={styles.text2}>
                    <p className={styles["text-info"]}>Pricing</p>
                    <p className={styles["text-info"]}>Contries</p>
                  </div>
                </div>
                <p className={styles["text-app"]}>Engage</p>
                <div className={styles.text}>
                  <div className={styles.text1}>
                    <p className={styles["text-info"]}>Coffee Shop?</p>
                    <p className={styles["text-info"]}>FAQ</p>
                    <p className={styles["text-info"]}>Term of Service</p>
                  </div>
                  <div className={styles.text2}>
                    <p className={styles["text-info"]}>About Us</p>
                    <p className={styles["text-info"]}>Privacy Policy</p>
                  </div>
                </div>
              </div>
            </aside>
          </footer>
        </section>
      </main>
    </>
  );
}

export default withNavigate(Login);
