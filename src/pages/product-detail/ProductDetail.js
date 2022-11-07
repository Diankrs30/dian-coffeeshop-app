import React, { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";
import withNavigate from "../../helpers/withNavigate";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productAction from "../../redux/action/product";
import cartAction from "../../redux/action/cart";

import Header from "../../components/header/Header";
import Footer from "../../components/footer2/Footer2";
import icon from "../../assets/img/icon-food.png";
import dayjs from "dayjs";
import { toast, ToastContainer } from "react-toastify";
import IsLoading from "../../components/isLoading/IsLoading";

function ProductDetail({ navigate }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const login = JSON.parse(localStorage.getItem("login"));
  const role = login.role;
  const product = useSelector((state) => state.getDetailProduct.detailProduct);
  const isPending = useSelector((state) => state.getDetailProduct.isLoading);
  const sizeProduct = useSelector((state) => state.getSizeProduct.sizeProduct);
  const deliveryMethod = useSelector(
    (state) => state.getDeliveryMethod.deliveryMethod
  );
  const [idDelete, setIdDelete] = useState([]);

  const [counter, setCounter] = useState(1);
  const [body, setBody] = useState({
    product_item: [],
    product_item_view: [],
    delivery_methods_id: null,
    delivery_methods_name: "",
    set_time: null,
  });

  const rupiah = (number) => {
    if (number) {
      return `IDR ${number
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
    }
  };

  const getDetail = async () => {
    try {
      await dispatch(productAction.getDetailProductAction(id));
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };
  const getSize = async () => {
    try {
      await dispatch(productAction.getSizeProductAction(id));
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };
  const getDelivery = async () => {
    try {
      await dispatch(productAction.getDeliveryMethodAction(id));
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };

  const handleSize = (item) => {
    const discount =
      (product.price + item.upsize_cost) *
      counter *
      ((product.discount ?? 0) / 100);
    const sub_total = (product.price + item.upsize_cost) * counter - discount;
    console.log(sub_total);
    const product_item = {
      products_id: product.id,
      size_products_id: item.id,
      quantity: counter,
      price: sub_total,
    };
    const product_item_view = {
      image: product.image,
      product_name: product.product_name,
      quantity: counter,
      size_product_name: item.size_product,
      price: sub_total,
    };
    console.log(product_item);
    setBody({
      ...body,
      product_item: [product_item],
      product_item_view: [product_item_view],
    });
  };

  const handleDeliveryMethod = (item) => {
    setBody({
      ...body,
      delivery_methods_id: item.id,
      delivery_methods_name: item.method_delivery,
    });
  };

  const handleSetTime = (e) => {
    const time = e.target.value + ":00";
    console.log(time);

    setBody({ ...body, set_time: time });
  };

  const onClickHandler = (to) => {
    navigate(to);
  };
  const onHandlePlus = () => {
    if (counter < product.stock_product) {
      setCounter(counter + 1);
    }
  };
  const onHandleMinus = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  const handleCheckout = async () => {
    try {
      await dispatch(cartAction(body));
      onClickHandler("/detail-transaction");
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === 403) {
        onClickHandler("/login");
      }
    }
  };
  const handleEditProduct = async () => {
    onClickHandler("/edit-product");
  };
  const handleDeleteProduct = async () => {
    await dispatch(productAction.deleteProductAction(id));
    toast.success("Add new product success", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/product");
    }, 2000);
  };

  useEffect(() => {
    getDetail();
    getSize();
    getDelivery();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Header />
        {isPending?<div className={`${styles.loading}`}><IsLoading/></div>:
        <main className={styles["detail-product"]}>
          <div className={styles.text}>
            <span className={styles.text1}>Favorite &#38; Promo </span>
            <span className={styles.text2}>&#62; {product.product_name}</span>
          </div>
          <secttion className={styles["product-desc"]}>
            <div className={styles.img}>
              <img
                className={styles["img-prod"]}
                src={product.image !== "" ? product.image : icon}
                alt=""
              />
            </div>
            <div className={styles["prod-detail"]}>
              <p className={styles.text3}>{product.product_name}</p>
              <p className={styles.text4}>{product.product_description}</p>
            </div>
          </secttion>
          <section className={styles.order}>
            <div className={styles["detail-order"]}>
              <section className={styles["delivery-time"]}>
                <p className={styles.text5}>Delivery and Time</p>
                <div className={styles.delivery}>
                  {deliveryMethod.map((item, index) => {
                    return (
                      <button
                        className={`${styles.box1} ${styles.cursor}`}
                        key={index}
                        onClick={() => handleDeliveryMethod(item)}
                      >
                        {item.method_delivery}
                      </button>
                    );
                  })}
                </div>
                <div className={styles.now}>
                  <span className={styles.text6}>Now</span>
                  <span className={styles["text-now"]}>
                    <button className={`${styles.box2} ${styles.cursor}`}>
                      Yes
                    </button>
                    <button className={`${styles.box2} ${styles.cursor}`}>
                      No
                    </button>
                  </span>
                </div>
                <div className={styles.setTime}>
                  <span className={styles.text7}>Set Time</span>
                  <span className={styles.box3}>
                    <input
                      className={styles.input}
                      type="time"
                      name="timestamp"
                      placeholder="Enter time for reservation"
                      onChange={handleSetTime}
                    ></input>
                  </span>
                </div>
              </section>
              <div className={styles.buttonHidden}>
                <button className={styles["btn-2"]}>Ask a Staff</button>
              </div>
            </div>
            <section className={styles.aside}>
              <p className={styles.text8}>
                Delivery only on{" "}
                <span className={styles.text9}>Monday to friday</span> at{" "}
                <span className={styles.text9}>1 - 7 pm</span>
              </p>
              <div className={styles.qtyOrder}>
                <div className={styles.qty}>
                  <button
                    className={`${styles.count1} ${styles.text10}`}
                    onClick={onHandleMinus}
                  >
                    &#45;
                  </button>
                  <div className={`${styles.counting} ${styles.text10}`}>
                    {counter}
                  </div>
                  <button
                    className={`${styles.count2} ${styles.text10}`}
                    onClick={onHandlePlus}
                  >
                    &#43;
                  </button>
                </div>
                <div>
                  <div className={styles.price}>{rupiah(product.price)}</div>
                </div>
              </div>
              <div className={styles.sizesHidden}>
                <div className={styles.detailSize}>
                  <p className={styles.choose}>Choose a size</p>
                  {product.category === "Foods" ? (
                    <div className={styles.button2}>
                      {sizeProduct
                        .filter((item, index) => index >= 3)
                        .map((item, index) => {
                          return (
                            <div key={index}>
                              <button
                                className={styles.sizeFood}
                                onClick={() => handleSize(item)}
                              >
                                {item.size_product}
                              </button>
                            </div>
                          );
                        })}
                    </div>
                  ) : (
                    <div className={styles.button2}>
                      {sizeProduct
                        .filter((item, index) => index <= 2)
                        .map((item, index) => {
                          return (
                            <div key={index}>
                              <button
                                className={styles.sizeFood}
                                onClick={() => handleSize(item)}
                              >
                                {item.size_product}
                              </button>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>
              {role === "admin" ? (
                <div className={styles.button}>
                  <button className={styles.btn1} onClick={handleEditProduct}>
                    Edit product
                  </button>
                  <button className={styles.btn2} onClick={handleDeleteProduct}>
                    Delete menu
                  </button>
                  <ToastContainer />
                </div>
              ) : (
                <div className={styles.button}>
                  <button className={styles.btn1}>Add to Cart</button>
                  <button className={styles.btn2}>Ask a Staff</button>
                </div>
              )}
            </section>
          </section>
          <section className={styles.checkout}>
            <div className={styles.sizes}>
              <div className={styles.detailSize}>
                <p className={styles.choose}>Choose a size</p>
                {product.category === "Foods" ? (
                  <div className={styles.button2}>
                    {sizeProduct
                      .filter((item, index) => index >= 3)
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <button
                              className={styles.sizeFood}
                              onClick={() => handleSize(item)}
                            >
                              {item.size_product}
                            </button>
                          </div>
                        );
                      })}
                    {/* {size.splice(0,3).map((item,idx)=>{
                      console.log(item);
                      return(
                        <div key={idx}>
                    <button className={styles.sizeFood}  >
                      asdsad
                    </button>
                        </div>
                      )
                    })} */}
                  </div>
                ) : (
                  <div className={styles.button2}>
                    {sizeProduct
                      .filter((item, index) => index <= 2)
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <button
                              className={styles.sizeFood}
                              onClick={() => handleSize(item)}
                            >
                              {item.size_product}
                            </button>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
            <div className={styles["detail-checkout"]}>
              <div className={styles.product}>
                {body.product_item_view.map((item, idx) => {
                  return (
                    <div className={styles.product} key={idx}>
                      <div>
                        <img
                          className={styles["img-prod2"]}
                          src={product.image !== "" ? item.image : icon}
                          alt=""
                        />
                      </div>
                      <div className={styles.item}>
                        <span className={styles.text11}>
                          {product.product_name}
                        </span>
                        <p
                          className={styles.text12}
                        >{`${item.quantity} x ${item.size_product_name}`}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.toCheckout} onClick={handleCheckout}>
                <p className={styles.text13}>Checkout</p>
                <button
                  className={`${styles["checkout-button"]} ${styles.cursor}`}
                >
                  &#8594;
                </button>
              </div>
            </div>
          </section>
        </main>
        }
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default withNavigate(ProductDetail);
