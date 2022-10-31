import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
// import { useNavigate } from "react-router-dom";
import withNavigate from "../../helpers/withNavigate";

import coffee from "../../assets/img/coffee-1.png";
import search from "../../assets/img/search.png";
import imgMsg from "../../assets/img/img-msg.png";
import burgerImg from "../../assets/img/burger.png";
import imgProfile from "../../assets/img/img-profile.png";

function Header({ navigate }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isBurger, setIsBurger] = useState(false);
  const [open, setOpen] = useState(false);
  // console.log(open);
  // const [searchParams, setSearchParams] = useState({
  //   product_name: "",
  //   page: 1,
  //   limit: 12,
  // });
  // const onSearchHandler = (search) => {

  // }
  // useEffect(() => {
  //   setSearchParams();
  // }, []);

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("login"));
    if (login) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  // navigate
  // const navigate = useNavigate();
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
                <img
                  className={`${styles.cursor} ${styles["icon-search"]}`}
                  src={search}
                  alt="search"
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Search"
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
                  src={imgProfile}
                  alt="profile"
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
                <img
                  className={`${styles.cursor} ${styles["icon-search"]}`}
                  src={search}
                  alt="search"
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Search"
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
                  src={imgProfile}
                  alt="profile"
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
