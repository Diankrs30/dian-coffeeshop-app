import React, { useEffect, useMemo, useState } from "react";
import styles from "./Product.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardProduct from "../../components/cardProduct/CardProduct";
import CardCoupon from "../../components/cardCoupon/CardCoupon";
// import { getProduct } from "../../utils/api";
import withSearchParams from "../../helpers/withSearchParams";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productAction from "../../redux/action/product";
import IsLoading from "../../components/isLoading/IsLoading";
const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

function Product(props) {
  const dispatch = useDispatch();
  const coupon = [0, 1, 2, 3];
  const navigate = useNavigate();
  const getQuery = useQuery();
  const allProduct = useSelector((state) => state.getAllProduct.allProduct);
  const totalPage = useSelector((state) => state.getAllProduct.meta.totalPage);
  const isPending = useSelector((state) => state.getAllProduct.isLoading);
  const [thisPage, setThisPage] = useState(1);
  const login = JSON.parse(localStorage.getItem("login"));
  const role = login.role;
  // console.log(totalPage);
  const [param, setParam] = useState({
    search: getQuery.get("search") ?? "",
    category: getQuery.get("category") ?? "",
    sort: getQuery.get("sort") ?? "",
    order: getQuery.get("order") ?? "asc",
    page: getQuery.get("page") ?? "1",
    limit: getQuery.get("limit") ?? "12",
  });
  // console.log("jalan useEffect",param);
  const getAllProduct = async () => {
    try {
      // console.log('test',getQuery.get("search"));
      if (getQuery.get("search")) {
        const body = {
          search: getQuery.get("search") ?? "",
          category: "",
          sort: "",
          order: "asc",
        };
        // setParam(body);
        await dispatch(productAction.getAllProductAction(body));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSort = async (e) => {
    try {
      console.log(e.target.value);
      let body = {};
      if (e.target.value === "minprice") {
        body = {
          ...param,
          sort: "price",
          order: "asc",
        };
      } else if (e.target.value === "maxprice") {
        body = {
          ...param,
          sort: "price",
          order: "desc",
        };
      } else {
        body = {
          ...param,
          sort: "created_at",
          order: e.target.value,
        };
      }

      setParam(body);
      props.setSearchParams(body);
      await dispatch(productAction.getAllProductAction(body));
    } catch (error) {
      console.log(error);
    }
  };
  const handleNonCofee = async () => {
    try {
      const body = {
        ...param,
        search: "",
        category: "Non Coffe",
        sort: "",
        order: "asc",
      };
      setParam(body);
      props.setSearchParams(body);
      await dispatch(productAction.getAllProductAction(body));
    } catch (error) {
      console.log(error);
    }
  };
  const handleFavorite = async () => {
    try {
      const body = {
        ...param,
        search: "",
        sort: "total_selling",
        order: "desc",
        category: "",
      };
      setParam(body);
      props.setSearchParams(body);

      await dispatch(productAction.getAllProductAction(body));
    } catch (error) {
      console.log(error);
    }
  };
  const handleFood = async () => {
    try {
      const body = {
        ...param,
        search: "",
        category: "Food",
        sort: "",
        order: "asc",
      };
      setParam(body);
      props.setSearchParams(body);

      await dispatch(productAction.getAllProductAction(body));
    } catch (error) {
      console.log(error);
    }
  };
  const handleCoffee = async () => {
    try {
      const body = {
        ...param,
        search: "",
        category: "Coffee",
        sort: "",
        order: "asc",
      };
      setParam(body);
      props.setSearchParams(body);

      await dispatch(productAction.getAllProductAction(body));
    } catch (error) {
      console.log(error);
    }
  };
  const handleNext = async () => {
    try {
      if (thisPage < totalPage) {
        const page = thisPage + 1;
        setThisPage(page);
        const body = { ...param, page };
        props.setSearchParams(body);

        await dispatch(productAction.getAllProductAction(body));
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(body.meta);
  const handlePrev = async () => {
    try {
      if (thisPage > 1) {
        const page = thisPage - 1;
        setThisPage(page);
        const body = { ...param, page };
        props.setSearchParams(body);

        await dispatch(productAction.getAllProductAction(body));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddProduct = () => {
    navigate("/add-product");
  };
  const handleAddPromo = () => {
    navigate("/add-promo");
  };
  const handleEditPromo = () => {
    navigate("/edit-promo");
  };

  useEffect(() => {
    dispatch(productAction.getAllProductAction(param));
  }, []);
  useEffect(() => {
    getAllProduct();
  }, [getQuery]);

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
            {role === "admin" ? (
              <div>
                <div>
                  <button
                    className={styles["add-promo"]}
                    onClick={handleAddPromo}
                  >
                    Add new promo
                  </button>
                </div>
                <div>
                  <button
                    className={styles["add-promo"]}
                    onClick={handleEditPromo}
                  >
                    Edit promo
                  </button>
                </div>
              </div>
            ) : null}
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
            <select className={styles.dropdown} onChange={handleSort}>
              <option value="">Filter</option>
              <option value="asc">Oldest</option>
              <option value="desc">Latest</option>
              <option value="minprice">Cheapest</option>
              <option value="maxprice">Priciest</option>
            </select>
            <div className={styles.card}>
              {isPending ? (
                <div className={`${styles.loading}`}>
                  <IsLoading />
                </div>
              ) : (
                <div className={styles["product-lists"]}>
                  {allProduct.map((item, index) => {
                    return <CardProduct key={index} data={item} />;
                  })}
                </div>
              )}
            </div>
            <div className={styles.paginasi}>
              <button className={styles["btn-paginasi"]} onClick={handlePrev}>
                Prev
              </button>
              <button className={styles["btn-paginasi"]} onClick={handleNext}>
                Next
              </button>
            </div>
            <p className={styles["info-price-cutted"]}>
              &#42;the price has been cutted by discount appears
            </p>
            {role === "admin" ? (
              <button
                className={styles["add-product"]}
                onClick={handleAddProduct}
              >
                Add new product
              </button>
            ) : null}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default withSearchParams(Product);
