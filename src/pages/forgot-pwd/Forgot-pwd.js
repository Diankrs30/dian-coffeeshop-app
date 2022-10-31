import React from "react";
import styles from "./Forgot-pwd.module.css";

import asideImg2 from "../../assets/img/asideImg2.png";
import coffee from "../../assets/img/coffee-1.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";

function ForgotPwd() {
  return (
    <>
      <main className={styles.container}>
        <aside className={styles["side-content"]}>
          <img
            className={`${styles["side-image"]} ${styles["full-width"]}`}
            src={asideImg2}
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
                <a href="./index.html" className={styles["text-logo"]}>
                  Coffee Shop
                </a>
              </section>
            </header>
            <section
              className={`${styles["register-form"]} ${styles["full-width"]}`}
            >
              <form className={`${styles["full-width"]} ${styles.form}`}>
                <div className={styles["input-div"]}>
                  <p className={styles.textForgot}>Forgot your password&#63;</p>
                  <p className={styles.textForgot2}>
                    Don&#39;t worry, we got your back&#33;
                  </p>
                </div>
                <div className={styles["input-div2"]}>
                  <input
                    className={`${styles["full-width"]} ${styles.input}`}
                    type="password"
                    placeholder="Enter your email adress to get link"
                  />
                </div>
                <div
                  className={`${styles.button} ${styles.primary} ${styles.cursor}`}
                >
                  <p className={styles["btn-text1"]}>Send</p>
                </div>
              </form>
              <p className={styles["text-link"]}>Click here if you didn&#39;t receive any link in 2 minutes</p>
              <p className={styles["text-link2"]}>Timer</p>
              <div
                className={`${styles.button} ${styles.link} ${styles.cursor}`}
              >
                <a href="./register.html" className={styles["btn-text3"]}>
                  Resend Link
                </a>
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
                <a href="./index.html" className={styles["text-logo"]}>
                  Coffee Shop
                </a>
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

export default ForgotPwd;
