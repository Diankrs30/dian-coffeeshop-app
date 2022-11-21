import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import promoAction from "../../redux/action/promo";

import styles from "./EditPromo.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer2/Footer2";
import withNavigate from "../../helpers/withNavigate";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import icon from "../../assets/img/photo-camera-black-tool 4.png";

function EditPromo({ navigate }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.getDetailProduct.detail);
  const [body, setBody] = useState({
    image: null,
    promo_description: null,
    discount: null,
    start_discount: null,
    end_discount: null,
    code_promo: null,
    product_id: null,
  });
  console.log(body);

  const [imgPrev, setImgPrev] = useState(null);
  const target = useRef(null);
  return (
    <>
      <div className={styles["body-container"]}>
        <Header />
        <main className={styles["main-container"]}>
          <section>
            <span className={styles["text-title"]}>Favorite &#38; Promo </span>
            <span className={styles["text-title2"]}>&#62; Edit promo</span>
          </section>
          <section className={styles["wrapper-form-product"]}>
            <section className={`${styles.flex} ${styles.content}`}>
              <section className={`${styles["wrapper-left"]} ${styles.flex}`}>
                <div className={`${styles["img-prod"]} ${styles.flex}`}>
                  <img className={styles.icon} src={icon} alt=""></img>
                </div>
                <button className={`${styles.btn} ${styles["take-image"]}`}>
                  Take a pitcure
                </button>
                <button className={`${styles.btn} ${styles["choose-image"]}`}>
                  Choose from gallery
                </button>
                <div className={styles["wrapper-input"]}>
                  <div className={styles["wrapper-expired-date"]}>
                    <label className={styles["label-text"]}>
                      Expired date:
                    </label>
                    <input
                      className={styles["input-div"]}
                      id={styles.time1}
                      placeholder="Select start date"
                      type="date"
                    ></input>
                    <input
                      className={styles["input-div"]}
                      placeholder="Select end date"
                      type="time"
                      name="timestamp"
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
                      placeholder="Description  your promo min. 150 characters"
                    />
                  </div>
                  <div>
                    <p className={styles["label-text-form"]}>Product name:</p>
                    <p className={styles["text-click"]}>
                      Product used this promo
                    </p>
                    <input
                      className={styles["input-div"]}
                      placeholder="Product name"
                    ></input>
                  </div>
                  <div className={styles["wrapper-input-discount"]}>
                    <label className={styles["label-text"]}>
                      Enter the discount:
                    </label>
                    <input
                      className={styles["input-div"]}
                      placeholder="Input discount"
                    ></input>
                  </div>
                  <div className={styles["wrapper-button"]}>
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
                  placeholder="Select start date"
                ></input>
                <input
                  className={styles["input-div"]}
                  placeholder="Select end date"
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

export default withNavigate(EditPromo);
