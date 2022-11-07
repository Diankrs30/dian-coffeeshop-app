import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import withNavigate from "../../helpers/withNavigate";

import coffee from "../../assets/img/coffee-1.png";
import imgSearch from "../../assets/img/search.png";
import imgMsg from "../../assets/img/img-msg.png";
import burgerImg from "../../assets/img/burger.png";
// import imgProfile from "../../assets/img/img-profile.png";

function Header({ navigate }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isBurger, setIsBurger] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const profile = useSelector((state) => state.getProfile.profile);
  const [imgPrev, setImgPrev] = useState(null);
  const setValue = (event) => {
    setSearch(event.target.value);
  };
  const getSearch = () => {
    return navigate(
      `/product?search=${search}&category=&sort=&order=asc&page=1&limit=12`
    );
  };

  // const login = JSON.parse(localStorage.getItem("login"));

  // console.log(open);
  // const [searchParams, setSearchParams] = useState({
  //   product_name: "",
  //   page: 1,
  //   limit: 12,
  // });

  // useEffect(() => {
  //   setSearchParams();
  // }, []);
  console.log(search);
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("login"));
    if (login) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  
  const onClickHandler = (to) => {
    navigate(to);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.container}>
          <aside className={styles["logo-coffeeshop"]}>
            <img className={styles.logo} src={coffee} alt="dian-coffeeshop" />
            <p className={styles["text-logo"]}>Coffee Shop</p>
          </aside>
          <nav className={`${styles["nav-bar"]} ${styles.cursor}`}>
            <div onClick={() => onClickHandler("/")}>
              <p className={`${styles["text-nav"]} ${styles.cursor}`}>Home</p>
            </div>
            <div onClick={() => onClickHandler("/product")}>
              <p className={`${styles["text-nav"]} ${styles.cursor}`}>
                Product
              </p>
            </div>
            <div>
              <p className={`${styles["text-nav"]} ${styles.cursor}`}>
                Your Cart
              </p>
            </div>
            <div onClick={() => onClickHandler("/history")}>
              <p className={`${styles["text-nav"]} ${styles.cursor}`}>
                History
              </p>
            </div>
          </nav>
          {isLogin ? (
            <aside className={styles["other-content"]}>
              <div className={styles.search}>
                <div onClick={getSearch}>
                  <img
                    className={`${styles.cursor} ${styles["icon-search"]}`}
                    src={imgSearch}
                    alt="search"
                  />
                </div>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setValue(e)}
                ></input>
              </div>
              <div className={styles.cursor}>
                <div className={styles.msg}>
                  <p className={styles["text-msg"]}>1</p>
                </div>
                <img src={imgMsg} alt="chat" />
              </div>
              <div onClick={() => onClickHandler("/profile")}>
                <img
                  className={`${styles["img-profile"]} ${styles.cursor}`}
                  src={imgPrev !== null ? imgPrev : profile.image}
                  alt=""
                />
              </div>
            </aside>
          ) : (
            <section
              className={`${styles["other-content"]} ${styles["d-flex"]} ${styles["col-4"]} ${styles["align-items-center"]}`}
            >
              <button
                onClick={() => onClickHandler("/login")}
                className={`${styles.login} ${styles.cursor}`}
              >
                Login
              </button>
              <button
                onClick={() => onClickHandler("/register")}
                className={`${styles.signup} ${styles.cursor}`}
              >
                Sign Up
              </button>
            </section>
          )}
          <div className={`${styles.wrapperImgBurger}`} onClick={handleOpen}>
            <img className={`${styles.imgBurger}`} src={burgerImg} alt="" />
          </div>
        </header>
      </div>
      {open ? (
        <div className={`${styles["wrapper-burger"]}`}>
          <div className={`${styles.wrapperSide}`}>
            <div
              onClick={() => onClickHandler("/")}
              className={styles.fullwidth}
            >
              <p className={`${styles["text-nav"]} ${styles.cursor}`}>Home</p>
            </div>
            <div
              onClick={() => onClickHandler("/product")}
              className={styles.fullwidth}
            >
              <p className={`${styles["text-nav"]} ${styles.cursor}`}>
                Product
              </p>
            </div>
            <div className={styles.fullwidth}>
              <p className={`${styles["text-nav"]} ${styles.cursor}`}>
                Your Cart
              </p>
            </div>
            <div
              onClick={() => onClickHandler("/history")}
              className={styles.fullwidth}
            >
              <p className={`${styles["text-nav"]} ${styles.cursor}`}>
                History
              </p>
            </div>
          </div>
          {isLogin ? (
            <div className={styles.contentBurger}>
              <div className={styles.search}>
                <div onClick={getSearch}>
                  <img
                    className={`${styles.cursor} ${styles["icon-search"]}`}
                    src={imgSearch}
                    alt="search"
                  />
                </div>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setValue(e)}
                ></input>
              </div>
              <div className={styles.cursor}>
                <div className={styles.msg}>
                  <p className={styles["text-msg"]}>1</p>
                </div>
                <img src={imgMsg} alt="chat" />
              </div>
              <div onClick={() => onClickHandler("/profile")}>
                <img
                  className={`${styles["img-profile"]} ${styles.cursor}`}
                  src={imgPrev !== null ? imgPrev : profile.image}
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div className={`${styles.wrapperSideLogin}`}>
              <button
                onClick={() => onClickHandler("/login")}
                className={`${styles.login} ${styles.cursor}`}
              >
                Login
              </button>
              <button
                onClick={() => onClickHandler("/register")}
                className={`${styles.signup} ${styles.cursor}`}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}

export default withNavigate(Header);
