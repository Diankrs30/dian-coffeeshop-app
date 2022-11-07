import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../redux/action/product";

import withNavigate from "../../helpers/withNavigate";
import styles from "./AddProduct.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer2/Footer2";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import icon from "../../assets/img/icon-food.png";

function AddProduct({ navigate }) {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.getCategory.category);
  const [body, setBody] = useState({
    product_name: "",
    price: null,
    product_description: "",
    image: null,
    start_delivery: null,
    end_delivery: null,
    stock_product: null,
    category_id: null,
  });

  const [imgPrev, setImgPrev] = useState(null);
  const target = useRef(null);
  
  const handleProductName = (e) => {
    setBody({ ...body, product_name: e.target.value });
  };
  const handleProductDescription = (e) => {
    setBody({ ...body, product_description: e.target.value });
  };
  const handlePrice = (e) => {
    setBody({ ...body, price: e.target.value });
  };
  const handleStock = (e) => {
    setBody({ ...body, stock_product: e.target.value });
  };
  const handleStartDelivery = (e) => {
    const time = e.target.value + ":00";
    console.log(time);

    setBody({ ...body, start_delivery: time });
  };
  const handleEndDelivery = (e) => {
    const time = e.target.value + ":00";
    console.log(time);

    setBody({ ...body, end_delivery: time });
  };
  const handleCategory = (e, item) => {
    e.preventDefault();
    setBody({ ...body, category_id: item.id });
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
  // console.log(body);
  const handleSaveChange = async (e) => {
    e.preventDefault();
    if (
      body.product_name === null ||
      body.price === null ||
      body.product_description === null ||
      body.image === null ||
      body.stock_product === null ||
      body.category_id === null
    ) {
      return toast.error("You have to fill all data", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    // console.log(body);
    const formData = new FormData();
    formData.append("product_name", body.product_name);
    formData.append("price", body.price);
    formData.append("product_description", body.product_description);
    formData.append("image", body.image);
    if (body.start_delivery !== null) {
      formData.append("start_delivery", body.start_delivery);
    }
    if (body.end_delivery !== null) {
      formData.append("end_delivery", body.end_delivery);
    }
    formData.append("stock_product", body.stock_product);
    formData.append("category_id", body.category_id);
    try {
      await dispatch(productActions.createProductAction(formData));
      setBody({
        product_name: "",
        price: null,
        product_description: "",
        image: null,
        start_delivery: null,
        end_delivery: null,
        stock_product: null,
        category_id: null,
      });
      toast.success("Add new product success", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = async () => {
    navigate("/product");
  };

  useEffect(() => {
    dispatch(productActions.getCategoryAction());
  }, []);

  return (
    <>
      <div className={styles["body-container"]}>
        <Header />
        <main className={styles["main-container"]}>
          <section>
            <span className={styles["text-title"]}>Favorite &#38; Promo </span>
            <span className={styles["text-title2"]}>&#62; Add new product</span>
          </section>
          <section className={styles["wrapper-form-product"]}>
            <section className={`${styles.flex} ${styles.content}`}>
              <section className={`${styles["wrapper-left"]} ${styles.flex}`}>
                <div className={`${styles.flex} ${styles["wrapper-img-prod"]}`}>
                  <img
                    className={styles["img-prod"]}
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
                <ToastContainer />
                <div className={styles["wrapper-input"]}>
                  <div className={styles["wrapper-delivery-hour"]}>
                    <label className={styles["label-text"]}>
                      Delivery Hour:
                    </label>
                    <input
                      className={styles["input-div"]}
                      placeholder="Select start hour"
                      onChange={handleStartDelivery}
                      type="time"
                      name="timestamp"
                      // value= {start_delivery}
                    ></input>
                    <input
                      className={styles["input-div"]}
                      placeholder="Select end hour"
                      onChange={handleEndDelivery}
                      type="time"
                      name="timestamp"
                      // value={end_delivery}
                    ></input>
                  </div>
                </div>
                <div className={styles["wrapper-button-cancel"]}>
                  <button
                    className={`${styles["button-cancel"]} ${styles["text-cancel"]}`}
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
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
                      defaultValue={body.product_name}
                      onChange={handleProductName}
                      // value={product_name}
                    />
                    <label className={styles["label-text-form"]}>Price:</label>
                    <input
                      className={styles["input-div-right"]}
                      type="number"
                      placeholder="Type the price"
                      onChange={handlePrice}
                      // value={price}
                    />
                    <label className={styles["label-text-form"]}>
                      Description:
                    </label>
                    <input
                      className={styles["input-div-right"]}
                      type="text"
                      placeholder="Description  your product min. 150 characters"
                      onChange={handleProductDescription}
                      // value={product_description}
                    />
                  </div>
                  <div className={styles["wrapper-delivery"]}>
                    <p className={styles["label-text-form"]}>Input category:</p>
                    <p className={styles["text-click"]}>
                      Click category you want to use for this product
                    </p>
                    <div
                      className={`${styles.flex} ${styles["wrapper-btn-method"]}`}
                    >
                      {category.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={`${styles["btn-method-category"]}`}
                          >
                            <button
                              className={`${styles["btn-method-category"]}`}
                              onClick={(e) => handleCategory(e, item)}
                            >
                              {item.category_name}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles["wrapper-input-stock"]}>
                    <label className={styles["label-text-stock"]}>
                      Input stock:
                    </label>
                    <input
                      className={styles["input-div"]}
                      placeholder="Input stock"
                      onChange={handleStock}
                    ></input>
                  </div>
                  <div className={styles["wrapper-button-save"]}>
                    <button
                      className={`${styles["button-save"]} ${styles["text-save"]}`}
                      onClick={(e) => handleSaveChange(e)}
                    >
                      Save Product
                    </button>
                    <ToastContainer />
                  </div>
                </form>
              </section>
            </section>
            <div className={styles["wrapper-input-hide"]}>
              <div className={styles["wrapper-delivery-hour"]}>
                <label className={styles["label-text"]}>Delivery Hour:</label>
                <input
                  className={styles["input-div"]}
                  placeholder="Select start hour"
                  onChange={handleStartDelivery}
                  type="time"
                  name="timestamp"
                ></input>
                <input
                  className={styles["input-div"]}
                  placeholder="Select end hour"
                  onChange={handleEndDelivery}
                  type="time"
                  name="timestamp"
                ></input>
              </div>
              <div className={styles["wrapper-input-stock-hide"]}>
                <label className={styles["label-text"]}>Input stock:</label>
                <input
                  className={styles["input-div"]}
                  placeholder="Input stock"
                  onChange={handleStock}
                ></input>
              </div>
            </div>
            <div className={`${styles["wrapper-button-hide"]} ${styles.flex}`}>
              <button
                className={`${styles["button-save"]} ${styles["text-save"]}`}
                onClick={(e) => handleSaveChange(e)}
              >
                Save Product
              </button>
              <ToastContainer />
              <button
                className={`${styles["button-cancel"]} ${styles["text-cancel"]}`}
                onClick={handleCancel}
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

export default withNavigate(AddProduct);
