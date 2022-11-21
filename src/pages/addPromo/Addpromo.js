import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import promoAction from "../../redux/action/promo";
import { useNavigate } from "react-router-dom";
import productActions from "../../redux/action/product";

import styles from "./AddPromo.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer2/Footer2";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import icon from "../../assets/img/icon-food.png";

function AddPromo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.getAllProduct.allProduct);
  // console.log(product);
  const [imgPrev, setImgPrev] = useState(null);
  const target = useRef(null);
  const [body, setBody] = useState({
    promo_name: "",
    promo_description: "",
    image: null,
    products_id: null,
    discount: null,
    start_discount: null,
    end_discount: null,
    code_promo: null,
  });

  console.log(body);
  const handleImage = (e) => {
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
  const handlePromoName = (e) => {
    setBody({ ...body, promo_name: e.target.value });
  };
  const handlePromoDesc = (e) => {
    console.log(body);
    setBody({ ...body, promo_description: e.target.value });
  };
  const handleStartDiscount = (e) => {
    const time = e.target.value;
    console.log(time);

    setBody({ ...body, start_discount: time });
  };
  const handleEndDiscount = (e) => {
    const time = e.target.value;
    console.log(time);

    setBody({ ...body, end_discount: time });
  };
  const handleCouponCode = (e) => {
    setBody({ ...body, code_promo: e.target.value });
    console.log(body);
  };
  const handleProduct = (e) => {
    e.preventDefault();
    console.log();
    setBody({ ...body, products_id: e.target.value });
  };
  const handleDiscount = (e) => {
    setBody({ ...body, discount: e.target.value });
    console.log(body);
  };
  const handleSave = async (e) => {
    e.preventDefault();
    if (
      body.image === null ||
      body.products_id === null ||
      body.discount === null ||
      body.start_discount === null ||
      body.end_discount === null ||
      body.code_promo === null
    ) {
      return toast.error("You have to fill all data", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    // console.log(body);
    const formData = new FormData();
    formData.append("promo_name", body.promo_name);
    formData.append("promo_description", body.promo_description);
    formData.append("image", body.image);
    formData.append("products_id", body.products_id);
    if (body.start_discount !== null) {
      formData.append("start_discount", body.start_discount);
    }
    if (body.end_discount !== null) {
      formData.append("end_discount", body.end_discount);
    }
    formData.append("code_promo", body.code_promo);
    formData.append("discount", body.discount);
    try {
      await dispatch(promoAction.createPromoAction(formData));
      setBody({
        promo_name: "",
        promo_description: "",
        image: null,
        products_id: null,
        discount: null,
        start_discount: null,
        end_discount: null,
        code_promo: null,
      });
      toast.success("Add new promo success", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(productActions.getAllProductAction({page:1,limit:100000}));
  }, []);

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
                  <img
                    className={styles.icon}
                    src={imgPrev !== null ? imgPrev : icon}
                    alt=""
                  ></img>
                </div>
                <button className={`${styles.btn} ${styles["take-image"]}`}>
                  Take a pitcure
                </button>
                <button
                  className={`${styles.btn} ${styles["choose-image"]}`}
                  onClick={(e) => {
                    e.preventDefault();
                    target.current.click();
                  }}
                >
                  Choose from gallery
                </button>
                <input
                  type="file"
                  ref={target}
                  onChange={(e) => handleImage(e)}
                  style={{ display: "none" }}
                />
                <div className={styles["wrapper-input"]}>
                  <div className={styles["wrapper-expired-date"]}>
                    <label className={styles["label-text"]}>
                      Expired date:
                    </label>
                    <input
                      className={styles["input-div"]}
                      placeholder="Select start hour"
                      onChange={handleStartDiscount}
                      type="date"
                      // name="timestamp"
                    ></input>
                    <input
                      className={styles["input-div"]}
                      placeholder="Select end hour"
                      onChange={handleEndDiscount}
                      type="date"
                      // name="timestamp"
                    ></input>
                  </div>
                  <div className={styles["wrapper-input-code"]}>
                    <label className={styles["label-text"]}>
                      Input coupon code:
                    </label>
                    <input
                      className={styles["input-div"]}
                      placeholder="Input coupon code"
                      onChange={handleCouponCode}
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
                      placeholder="Type promo name min. 50 characters"
                      defaultValue={body.promo_name}
                      onChange={handlePromoName}
                    />
                    <label className={styles["label-text-form"]}>
                      Description:
                    </label>
                    <input
                      className={styles["input-div-right"]}
                      type="text"
                      placeholder="Description  your product min. 150 characters"
                      onChange={handlePromoDesc}
                    />
                  </div>
                  <div>
                    <p className={styles["label-text-form"]}>Input product:</p>
                    <p className={styles["text-click"]}>
                      Click product you want to use for this promo
                    </p>
                    <select className={styles["dropdown-product"]} onChange={handleProduct}>
                      <option value="">Product name: </option>
                      {product.map((item, idx) => {
                        return (
                          <option
                            key={idx}
                            value={item.id}
                            // onClick={(e) => handleProduct(e, item)}
                          >
                            {item.product_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className={styles["wrapper-input-discount"]}>
                    <label className={styles["label-text"]}>
                      Enter the discount:
                    </label>
                    <input
                      className={styles["input-div"]}
                      placeholder="Input discount"
                      onChange={handleDiscount}
                    ></input>
                  </div>
                  <div className={styles["wrapper-button"]}>
                    <button
                      className={`${styles["button-save"]} ${styles["text-save"]}`}
                      onClick={(e) => handleSave(e)}
                    >
                      Save Promo
                    </button>
                    <ToastContainer />
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

export default AddPromo;
