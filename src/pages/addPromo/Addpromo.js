import React from "react";
import { useDispatch, useSelector } from "react-redux";
import promoAction from "../../redux/action/promo";

import styles from "./AddPromo.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer2/Footer2";
import withNavigate from "../../helpers/withNavigate";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import icon from "../../assets/img/photo-camera-black-tool 4.png";

function AddProduct() {
  return (
    <>
      <div className={styles["body-container"]}>
        <Header />
        <main className={styles["main-container"]}>
          <section>
            <span className={styles["text-title"]}>Favorite &#38; Promo </span>
            <span className={styles["text-title2"]}>&#62; Add new promo</span>
          </section>
          <section className={styles["wrapper-form-product"]}>
            <section className={`${styles.flex} ${styles.content}`}>
              <section className={`${styles["wrapper-left"]} ${styles.flex}`}>
                <div className={`${styles["img-prod"]} ${styles.flex}`}>
                  <img clasName={styles.icon} src={icon} alt=""></img>
                </div>
                <button className={`${styles.btn} ${styles["take-image"]}`}>
                  Take a pitcure
                </button>
                <button className={`${styles.btn} ${styles["choose-image"]}`}>
                  Choose from gallery
                </button>
                <div className={styles["wrapper-input"]}>
                  <div className={styles["wrapper-input-discount"]}>
                    <label className={styles["label-text"]}>
                      Enter the discount:
                    </label>
                    <input
                      className={styles["input-div"]}
                      placeholder="Input discount"
                    ></input>
                  </div>
                  <div className={styles["wrapper-expired-date"]}>
                    <label className={styles["label-text"]}>
                      Expired date:
                    </label>
                    <input
                      className={styles["input-div"]}
                      placeholder="Select start hour"
                    ></input>
                    <input
                      className={styles["input-div"]}
                      placeholder="Select end hour"
                    ></input>
                  </div>
                  <div className={styles["wrapper-input-code"]}>
                    <label className={styles["label-text"]}>
                      Input coupon code:
                    </label>
                    <input
                      className={styles["input-div"]}
                      placeholder="Input coupon code"
                    ></input>
                  </div>
                </div>
              </section>
              <section className={`${styles["wrapper-right"]}`}>
                <form>
                  <div>
                    <label className={styles["label-text-form"]}>Name:</label>
                    <input
                      className={styles["input-div-right"]}
                      type="text"
                      placeholder="Type product name min. 50 characters"
                    />
                    <label className={styles["label-text-form"]}>Price:</label>
                    <input
                      className={styles["input-div-right"]}
                      type="number"
                      placeholder="Type the price"
                    />
                    <label className={styles["label-text-form"]}>
                      Description:
                    </label>
                    <input
                      className={styles["input-div-right"]}
                      type="text"
                      placeholder="Description  your product min. 150 characters"
                    />
                  </div>
                  <div>
                    <p className={styles["label-text-form"]}>
                      Input product size:
                    </p>
                    <p className={styles["text-click"]}>
                      Click size you want to use for this product
                    </p>
                    <div
                      className={`${styles.flex} ${styles["wrapper-circle"]}`}
                    >
                      <div
                        className={`${styles.flex} ${styles["wrapper-circle-drink"]}`}
                      >
                        <div
                          className={`${styles.circle} ${styles.textsizedrink}`}
                        >
                          R
                        </div>
                        <div
                          className={`${styles.circle} ${styles.textsizedrink}`}
                        >
                          L
                        </div>
                        <div
                          className={`${styles.circle} ${styles.textsizedrink}`}
                        >
                          XL
                        </div>
                      </div>
                      <div
                        className={`${styles.flex} ${styles["wrapper-circle-food"]}`}
                      >
                        <div
                          className={`${styles.circle} ${styles.textsizefood}`}
                        >
                          250 gr
                        </div>
                        <div
                          className={`${styles.circle} ${styles.textsizefood}`}
                        >
                          300 gr
                        </div>
                        <div
                          className={`${styles.circle} ${styles.textsizefood}`}
                        >
                          500 gr
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["wrapper-delivery"]}>
                    <p className={styles["label-text-form"]}>
                      Input delivery methods:
                    </p>
                    <p className={styles["text-click"]}>
                      Click methods you want to use for this product
                    </p>
                    <div
                      className={`${styles.flex} ${styles["wrapper-btn-method"]}`}
                    >
                      <div className={`${styles["btn-method-delivery"]}`}>
                        Home Delivery
                      </div>
                      <div className={`${styles["btn-method-delivery"]}`}>
                        Dine in
                      </div>
                      <div className={`${styles["btn-method-delivery"]}`}>
                        Take away
                      </div>
                    </div>
                  </div>
                  <div className={styles["wrapper-button"]}>
                    <button
                      className={`${styles["button-save"]} ${styles["text-save"]}`}
                    >
                      Save Product
                    </button>
                    <button
                      className={`${styles["button-cancel"]} ${styles["text-cancel"]}`}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </section>
            </section>
            <div className={styles["wrapper-input-hide"]}>
              <div className={styles["wrapper-input-discount"]}>
                <label className={styles["label-text"]}>
                  Enter the discount:
                </label>
                <input
                  className={styles["input-div"]}
                  placeholder="Input discount"
                ></input>
              </div>
              <div className={styles["wrapper-expired-date"]}>
                <label className={styles["label-text"]}>Expired date:</label>
                <input
                  className={styles["input-div"]}
                  placeholder="Select start hour"
                ></input>
                <input
                  className={styles["input-div"]}
                  placeholder="Select end hour"
                ></input>
              </div>
              <div className={styles["wrapper-input-code"]}>
                <label className={styles["label-text"]}>
                  Input coupon code:
                </label>
                <input
                  className={styles["input-div"]}
                  placeholder="Input coupon code"
                ></input>
              </div>
            </div>
            <div className={`${styles["wrapper-button-hide"]} ${styles.flex}`}>
              <button
                className={`${styles["button-save"]} ${styles["text-save"]}`}
              >
                Save Promo
              </button>
              <button
                className={`${styles["button-cancel"]} ${styles["text-cancel"]}`}
              >
                Cancel
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default AddProduct;
