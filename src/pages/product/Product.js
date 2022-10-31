import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardProduct from "../../components/cardProduct/CardProduct";
import CardCoupon from "../../components/cardCoupon/CardCoupon";
import { getProduct } from "../../utils/api";
// import withSearchParams from "../helpers/withSearchParams";

function Product() {
  // const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const coupon = [0, 1, 2, 3];
  const [allProduct, setAllProduct] = useState([]);
  const [param, setParam] = useState({
    category: "",
    sort: "",
    order: "asc",
  });

  const getAllProduct = async () => {
    try {
      const result = await getProduct(param);
      setAllProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNonCofee = async () => {
    console.log("sasa");
    //   setParam({...param,category:'Non Coffe'})
    // getProduct()
    try {
      const body = { ...param, category: "Non Coffe", sort: "", order: "asc" };
      setParam(body);
      const result = await getProduct(body);
      setAllProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFavorite = async () => {
    console.log("abc");
    try {
      const body = {
        ...param,
        sort: "total_selling",
        order: "desc",
        category: "",
      };
      setParam(body);
      const result = await getProduct(body);
      setAllProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFood = async () => {
    console.log("sasa");
    //   setParam({...param,category:'Non Coffe'})
    // getProduct()
    try {
      const body = { ...param, category: "Food", sort: "", order: "asc" };
      setParam(body);
      const result = await getProduct(body);
      setAllProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCoffee = async () => {
    console.log("sasa");
    //   setParam({...param,category:'Non Coffe'})
    // getProduct()
    try {
      const body = { ...param, category: "Coffee", sort: "", order: "asc" };
      setParam(body);
      const result = await getProduct(body);
      setAllProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <div className={styles["body-container"]}>
        <Header />
        <main className={styles.main}>
          <aside
            className={`${styles.promo} ${styles.flex} ${styles["align-items"]}`}
          >
            <p className={styles["promo-today"]}>Promo Today</p>
            <div className={styles["info-coupon"]}>
              <p className={styles["coupon"]}>
                Coupons will be updated every weeks. Check them out&#33;
              </p>
            </div>
            <div className={styles["coupon-item"]}>
              {coupon.map((item, index) => {
                return <CardCoupon key={index} />;
              })}
            </div>
            <button className={`${styles["apply-coupon"]} ${styles.cursor}`}>
              <p className={styles["text-apply"]}>Apply Coupon</p>
            </button>
            <div className={styles["text-term"]}>
              <p>Terms and Condition</p>
            </div>
            <div className={styles.term}>
              <ol className={styles["wrapper-ol"]}>
                <li>You can only apply 1 coupon per day</li>
                <li>It only for dine in</li>
                <li>Buy 1 get 1 only for new user</li>
                <li>Should make member card to apply coupon</li>
              </ol>
            </div>
          </aside>
          <section className={styles["products-lists"]}>
            <section className={`${styles["nav-product"]} ${styles.flex}`}>
              <div
                className={`${styles.category} ${styles.cursor}`}
                onClick={handleFavorite}
              >
                Favorite &#38; Promo
              </div>
              <div
                className={`${styles.category} ${styles.cursor}`}
                onClick={handleCoffee}
              >
                Coffee
              </div>
              <div
                className={`${styles.category} ${styles.cursor}`}
                onClick={handleNonCofee}
              >
                Non Coffee
              </div>
              <div
                className={`${styles.category} ${styles.cursor}`}
                onClick={handleFood}
              >
                Foods
              </div>
              <div className={`${styles.category} ${styles.cursor}`}>
                Add-on
              </div>
            </section>
            <div className={styles["product-lists"]}>
              {allProduct.map((item, index) => {
                return <CardProduct key={index} data={item} />;
              })}
            </div>
            <p className={styles["info-price-cutted"]}>
              &#42;the price has been cutted by discount appears
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Product;
