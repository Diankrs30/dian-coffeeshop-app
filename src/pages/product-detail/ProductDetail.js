import React, { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer2/Footer2";

import icon from "../../assets/img/icon-food.png";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/api";

function ProductDetail() {
  const {id} = useParams()
  const [product,setProduct] = useState({})
  // console.log(product);
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const getDetail = async () => {
    try {
      const result = await getProductById(id)
      console.log(result);
      setProduct(result.data.data[0])
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDetail()
  }, [])
  
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles["detail-product"]}>
          <div className={styles.text}>
            <span className={styles.text1}>Favorite &#38; Promo </span>
            <span className={styles.text2}>&#62; {product.product_name}</span>
          </div>
          <secttion className={styles["product-desc"]}>
            <div className={styles.img}>
              <img
                className={styles["img-prod"]}
                src={product.image!==''?"http://localhost:8070" +product.image:icon} alt="" />
            </div>
            <div className={styles["prod-detail"]}>
              <p className={styles.text3}>{product.product_name}</p>
              <p className={styles.text4}>
                {product.product_description}
              </p>
            </div>
          </secttion>
          <section className={styles.order}>
            <div className={styles["detail-order"]}>
              <section className={styles["delivery-time"]}>
                <p className={styles.text5}>Delivery and Time</p>
                <div className={styles.delivery}>
                  <button className={`${styles.box1} ${styles.cursor}`}>
                    Dine in
                  </button>
                  <button className={`${styles.box1} ${styles.cursor}`}>
                    Door delivery
                  </button>
                  <button className={`${styles.box1} ${styles.cursor}`}>
                    Pick up
                  </button>
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
                      type="text"
                      placeholder="Enter time for reservation"
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
                  <button className={`${styles.count1} ${styles.text10}`}>
                    &#45;
                  </button>
                  <div className={`${styles.counting} ${styles.text10}`}>2</div>
                  <button className={`${styles.count2} ${styles.text10}`}>
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
                  <div className={styles.button2}>
                    <button className={styles.size}>R</button>
                    <button className={styles.size}>L</button>
                    <button className={styles.size}>XL</button>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <button className={styles.btn1}>Add to Cart</button>
                <button className={styles.btn2}>Ask a Staff</button>
              </div>
            </section>
          </section>
          <section className={styles.checkout}>
            <div className={styles.sizes}>
              <div className={styles.detailSize}>
                <p className={styles.choose}>Choose a size</p>
                <div className={styles.button2}>
                  <button className={styles.size}>R</button>
                  <button className={styles.size}>L</button>
                  <button className={styles.size}>XL</button>
                </div>
              </div>
            </div>
            <div className={styles["detail-checkout"]}>
              <div className={styles.product}>
                <div>
                  <img
                    className={styles["img-prod2"]}
                    src={product.image!==''?"http://localhost:8070" +product.image:icon}
                    alt=""
                  />
                </div>
                <div className={styles.item}>
                  <p className={styles.text11}>{product.product_name}</p>
                  <p className={styles.text12}>l &#40;Large&#41;</p>
                  <p className={styles.text12}>r &#40;Reguler&#41;</p>
                </div>
              </div>
              <div className={styles.toCheckout}>
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
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
