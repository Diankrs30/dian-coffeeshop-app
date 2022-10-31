import React from "react";
import styles from "./Footer2.module.css";

import coffee from "../../assets/img/coffee-1.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";

function Footer() {
  return (
    <>
      <div className={styles.wrapper}>
        <footer className={styles.footer}>
          <section className={styles["about-us"]}>
            <div className={styles["logo-coffeeshop"]}>
              <img className={styles.logo} src={coffee} alt="dian-coffeeshop" />
              <p className={styles["text-logo"]}>Coffee Shop</p>
            </div>
            <div className={styles.info}>
              <p>
                Coffee Shop is a store that sells some good meals, and
                especially coffee. We provide high quality beans
              </p>
            </div>
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
            <div className={styles.copyright}>
              <p>&#169;2020CoffeeStore</p>
            </div>
          </section>
          <section className={styles["other-info"]}>
            <section className={styles.product}>
              <p className={styles["text-product"]}>Product</p>
              <ul className={styles.ul}>
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
            </section>
            <section className={styles.engage}>
              <p className={styles["text-engage"]}>Engage</p>
              <ul className={styles.ul}>
                <li>Coffee Shop?</li>
                <li>FOQ</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Term of Service</li>
              </ul>
            </section>
          </section>
        </footer>
      </div>
    </>
  );
}

export default Footer;
