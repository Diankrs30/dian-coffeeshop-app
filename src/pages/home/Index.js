import React, { useEffect, useState } from "react";
import styles from "./Index.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer2/Footer2";
// import { useNavigate } from "react-router-dom";
import withNavigate from "../../helpers/withNavigate";
import { getFavorite } from "../../utils/api";
// import { useDispatch } from "react-redux";
// import userActions from "../../redux/action/user";

import poeple from "../../assets/img/people.png";
import loc from "../../assets/img/loc.png";
import cust from "../../assets/img/cust.png";
import teamwork from "../../assets/img/teamwork.png";
import ceklist from "../../assets/img/ceklis.png";
import map from "../..//assets/img/maps.png";
import maskGroup from "../../assets/img/MaskGroup.png";
import maskGroup1 from "../../assets/img/MaskGroup1.png";
import maskGroup2 from "../../assets/img/MaskGroup2.png";
import maskGroup3 from "../../assets/img/MaskGroup3.png";
import maskGroup4 from "../../assets/img/MaskGroup4.png";
import ellipse175 from "../../assets/img/Ellipse-175.png";
import ellipse1751 from "../../assets/img/Ellipse-1751.png";
import ellipse1752 from "../../assets/img/Ellipse-1752.png";
import star from "../../assets/img/star.png";
import icon from "../../assets/img/icon-food.png";
import hazelnutLatte from "../../assets/img/hazelnut.png";
import pinkyPromise from "../../assets/img/pinky-promise.png";
import chickenWings from "../../assets/img/chicken-wings.png";

function Home({ navigate }) {
  // const dispatch = useDispatch();
  const [favorite, setFavorite] = useState({});
  const [favorite1, setFavorite1] = useState({});
  const [favorite2, setFavorite2] = useState({});
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const handleFavorite = async () => {
    try {
      const result = await getFavorite();
      console.log(result.data.data);
      const menuFav = result.data.data;
      menuFav.map((item, idx) => {
        console.log(item);
        if (idx === 0) {
          setFavorite(item);
        } else if (idx === 1) {
          setFavorite1(item);
        } else {
          setFavorite2(item);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onClickHandler = (to) => {
    navigate(to);
  };


  useEffect(() => {
    handleFavorite();
  }, []);

  return (
    <>
      <div
        className={`${styles["main-container"]} ${styles["container-fluid"]} ${styles["p-0"]}`}
      >
        <Header />
        <section className={styles.banner}>
          <p className={styles["text-banner"]}>
            Start Your Day with Coffee and Good Meals
          </p>
          <p className={styles["text-desc-banner"]}>
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </p>
          <button
            onClick={() => onClickHandler("/register")}
            className={`${styles.button} ${styles["btn-banner"]}`}
          >
            Get Started
          </button>
        </section>
        <section className={styles.introduce}>
          <section
            className={`${styles.coffeeshop} ${styles["full-width"]} d-flex row `}
          >
            <div
              className={`${styles.staff} d-flex justify-content-center align-items-center`}
            >
              <div className={styles.img}>
                <img className={styles["img-circle"]} src={poeple} alt="" />
                <div className={styles.circle}></div>
              </div>
              <div className={styles["text-icon"]}>
                <p className={`${styles["text-1"]} ${styles["m-0"]}`}>90+</p>
                <p className={`${styles["text-2"]} ${styles["m-0"]}`}>Staff</p>
              </div>
            </div>
            <div
              className={`${styles.store} d-flex justify-content-center align-items-center`}
            >
              <div className={styles.img}>
                <img className={styles["img-circle"]} src={loc} alt="" />
                <div className={styles.circle}></div>
              </div>
              <div className={styles["text-icon"]}>
                <p className={`${styles["text-1"]} ${styles["m-0"]}`}>30+</p>
                <p className={`${styles["text-2"]} ${styles["m-0"]}`}>Stores</p>
              </div>
            </div>
            <div
              className={`${styles.cust} d-flex justify-content-center align-items-center`}
            >
              <div className={styles.img}>
                <img className={styles["img-circle"]} src={cust} alt="" />
                <div className={styles.circle}></div>
              </div>
              <div className={styles["text-icon"]}>
                <p className={`${styles["text-1"]} ${styles["m-0"]}`}>800+</p>
                <p className={`${styles["text-2"]} ${styles["m-0"]}`}>
                  customers
                </p>
              </div>
            </div>
          </section>
          <section
            className={`${styles.introduce2} d-flex justify-content-center`}
          >
            <div className={styles["img-team"]}>
              <img src={teamwork} alt="team-work" />
            </div>
            <div className={styles.informations}>
              <p className={styles["text-info-1"]}>
                We Provide Good Coffee and Healthy Meals
              </p>
              <p className={styles["text-info-2"]}>
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <div className={`${styles.ceklist} d-flex align-items-center`}>
                <img
                  className={`${styles["icon-ceklists"]} pr-3`}
                  src={ceklist}
                  alt="ceklist"
                />
                <p className={`${styles["text-ceklist"]} mb-0`}>
                  High quality beans
                </p>
              </div>
              <div className={`${styles.ceklist} d-flex align-items-center`}>
                <img
                  className={`${styles["icon-ceklists"]} pr-3`}
                  src={ceklist}
                  alt="ceklist"
                />
                <p className={`${styles["text-ceklist"]} mb-0`}>
                  Healthy meals, you can request the ingredients
                </p>
              </div>
              <div className={`${styles.ceklist} d-flex align-items-center`}>
                <img
                  className={`${styles["icon-ceklists"]} pr-3`}
                  src={ceklist}
                  alt="ceklist"
                />
                <p className={`${styles["text-ceklist"]} mb-0`}>
                  Chat with our staff to get better experience for ordering
                </p>
              </div>
              <div className={`${styles.ceklist} d-flex align-items-center`}>
                <img
                  className={`${styles["icon-ceklists"]} pr-3`}
                  src={ceklist}
                  alt="ceklist"
                />
                <p className={`${styles["text-ceklist"]} mb-0`}>
                  Free member card with a minimum purchase of IDR 200.000.
                </p>
              </div>
            </div>
          </section>
          <section className={styles.favorite}>
            <p className={styles["text-fav"]}>Here is People’s Favorite</p>
            <p className={styles["text-choose"]}>
              Let’s choose and have a bit taste of poeple’s favorite. It might
              be yours too!
            </p>
            <div
              className={`${styles.cardProd} overflow-auto w-100 d-flex mb-5`}
            >
              <section
                className={`${styles["menu-fav"]} col-8 col-md-6 col-lg-3 d-flex flex-column align-items-center pb-5`}
              >
                <img
                  className={styles.menu}
                  // src={favorite2.image !== "" ? favorite2.image : icon}
                  src={hazelnutLatte}
                  alt="menu"
                />
                <div className={styles.product}>
                  <p className={styles["prod-name"]}>
                  {/* {favorite1.product_name} */}
                    Hazelnut Latte
                  </p>
                  <ul className={styles["list-desc"]}>
                    <li className="p-2">Hazelnut Syrup</li>
                    <li className="p-2">Wanilla Whipped Cream</li>
                    <li className="p-2">Ice / Hot</li>
                    <li className="p-2">Sliced Banana on Top</li>
                  </ul>
                </div>
                <div
                  className={`${styles.price} d-flex flex-column align-items-center`}
                >
                  <p className={styles["price-text"]}>
                    {/* {rupiah(favorite2.price)} */}
                    IDR 25.000
                  </p>
                  <button
                    // onClick={() =>
                    //   onClickHandler(`/detail-product/${favorite2.id}`)
                    // }
                    className={styles["button-order"]}
                  >
                    Order Now
                  </button>
                </div>
              </section>
              <section
                className={`${styles["menu-fav"]} col-8 col-md-6 col-lg-3 d-flex flex-column align-items-center pb-5`}
              >
                <img
                  className={styles.menu}
                  // src={favorite.image !== "" ? favorite.image : icon}
                  src={pinkyPromise}
                  alt="menu"
                />
                <div className={styles.product}>
                  <p className={styles["prod-name"]}>
                    {/* {favorite.product_name} */}
                    Pinky Promise                    
                    </p>
                  <ul className={styles["list-desc"]}>
                    <li className="p-2">1 Shot of Coffee</li>
                    <li className="p-2">Vanilla Whipped Cream</li>
                    <li className="p-2">Chocolate Biscuits</li>
                    <li className="p-2">Strawberry Syrup</li>
                    <li className="p-2">Sliced strawberry on Top</li>
                  </ul>
                </div>
                <div
                  className={`${styles.price} d-flex flex-column align-items-center`}
                >
                  <p className={styles["price-text"]}>
                    {/* {rupiah(favorite.price)} */}
                    IDR 30.000
                  </p>
                  <button
                    // onClick={() =>
                    //   onClickHandler(`/detail-product/${favorite.id}`)
                    // }
                    className={styles["button-order"]}
                  >
                    Order Now
                  </button>
                </div>
              </section>
              <section
                className={`${styles["menu-fav"]} col-8 col-md-6 col-lg-3 d-flex flex-column align-items-center pb-5`}
              >
                <img
                  className={styles.menu}
                  // src={favorite1.image !== "" ? favorite1.image : icon}
                  src={chickenWings}
                  alt="menu"
                />
                <div className={styles.product}>
                  <p className={styles["prod-name"]}>
                    {/* {favorite1.product_name} */}
                    Chicken Wings
                  </p>
                  <ul className={styles["list-desc"]}>
                    <li className="p-2">Wings</li>
                    <li className="p-2">Drum Sticks</li>
                    <li className="p-2">Mayonaise and Lemon</li>
                    <li className="p-2">Hot Fried</li>
                    <li className="p-2">Secret Recipe</li>
                    <li className="p-2">Buy 1 Get 1 only for Dine in</li>
                  </ul>
                </div>
                <div
                  className={`${styles.price} d-flex flex-column align-items-center`}
                >
                  <p className={styles["price-text"]}>
                    {/* {rupiah(favorite1.price)} */}
                    IDR 40.000
                  </p>
                  <button
                    // onClick={() =>
                    //   onClickHandler(`/detail-product/${favorite1.id}`)
                    // }
                    className={styles["button-order"]}
                  >
                    Order Now
                  </button>
                </div>
              </section>
            </div>
          </section>
          <section
            className={`${styles.maps} d-flex flex-column align-items-center`}
          >
            <p
              className={`${styles["text-title-map"]} ${styles["width-title"]}`}
            >
              Visit Our Store in the Spot on the Map Below
            </p>
            <p className={`${styles["text-desc-map"]} ${styles["width-desc"]}`}>
              See our store in every city on the spot and spen your good day
              there. See you soon!
            </p>
            <img className={styles["img-maps"]} src={map} alt="maps" />
          </section>
          <section className={styles.partner}>
            <p className={`${styles["text-fav"]} m-0`}>Our Partner</p>
            <div className="w-100 d-flex justify-content-between align-items-center">
              <img className={styles["img-partner"]} src={maskGroup} alt="" />
              <img className={styles["img-partner2"]} src={maskGroup1} alt="" />
              <img className={styles["img-partner3"]} src={maskGroup2} alt="" />
              <img className={styles["img-partner"]} src={maskGroup3} alt="" />
              <img className={styles["img-partner"]} src={maskGroup4} alt="" />
            </div>
          </section>
          <section
            className={`${styles.favorite} d-flex flex-column align-items-center`}
          >
            <p className={`${styles["text-fav"]} ${styles["width-title"]}`}>
              Loved by Thousands of Happy Customer
            </p>
            <p className={`${styles["width-desc"]} ${styles["text-choose"]}`}>
              These are the stories of our customers who have visited us with
              great pleasure.
            </p>
            <div className={styles.scroll}>
              <div className={styles["wraper-testimony"]}>
                <div className="w-100 d-flex mt-3 mr-2">
                  <img
                    className={styles["img-testimony"]}
                    src={ellipse175}
                    alt=""
                  />
                  <div className="w-100 d-flex justify-content-between pl-3">
                    <div>
                      <p className={`${styles["text-name"]} my-0`}>
                        Viezh Robert
                      </p>
                      <p className={`${styles["text-location"]} my-0`}>
                        Warsaw, Poland
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className={`${styles["text-rating"]} mb-0`}>4.5</p>
                      <img className={styles["img-star"]} src={star} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-100 mt-5">
                  <p className={styles["text-testimony"]}>
                    “Wow... I am very happy to spend my whole day here. the
                    Wi-fi is good, and the coffee and meals tho. I like it
                    here!! Very recommended!
                  </p>
                </div>
              </div>
              <div className={styles["wraper-testimony"]}>
                <div className="w-100 d-flexmt-3mr-2">
                  <img
                    className={styles["img-testimony"]}
                    src={ellipse1751}
                    alt=""
                  />
                  <div className="w-100 d-flex justify-content-between pl-3">
                    <div>
                      <p className={`${styles["text-name"]} my-0`}>
                        Yessica Christy
                      </p>
                      <p className={`${styles["text-location"]} my-0`}>
                        Shanxi, China
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className={`${styles["text-rating"]} mb-0`}>4.5</p>
                      <img className={styles["img-star"]} src={star} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-100 mt-5">
                  <p className={styles["text-testimony"]}>
                    “I like it because I like to travel far and still can make
                    my day better just by drinking their Hazelnut Latte
                  </p>
                </div>
              </div>
              <div className={styles["wraper-testimony"]}>
                <div className="w-100 d-flex mt-3 mr-2">
                  <img
                    className={styles["img-testimony"]}
                    src={ellipse1752}
                    alt=""
                  />
                  <div className="w-100 d-flex justify-content-between pl-3">
                    <div>
                      <p className={`${styles["text-name"]} my-0`}>
                        Kim Young Jou
                      </p>
                      <p className={`${styles["text-location"]} my-0`}>
                        Seoul, South Korea
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className={`${styles["text-rating"]} mb-0`}>4.5</p>
                      <img className={styles["img-star"]} src={star} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-100 mt-5">
                  <p className={styles["text-testimony"]}>
                    “This is very unusual for my taste, I haven’t liked coffee
                    before but their coffee is the best! and yup, you have to
                    order the chicken wings, the best in town!
                  </p>
                </div>
              </div>
              <div className={styles["wraper-testimony"]}>
                <div className="w-100 d-flex mt-3 mr-2">
                  <img
                    className={styles["img-testimony"]}
                    src={ellipse175}
                    alt=""
                  />
                  <div className="w-100 d-flex justify-content-between pl-3">
                    <div>
                      <p className={`${styles["text-name"]} my-0`}>
                        Viezh Robert
                      </p>
                      <p className={`${styles["text-location"]} my-0`}>
                        Warsaw, Poland
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className={`${styles["text-rating"]}  mb-0`}>4.5</p>
                      <img className={styles["img-star"]} src={star} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-100 mt-5">
                  <p className={styles["text-testimony"]}>
                    “Wow... I am very happy to spend my whole day here. the
                    Wi-fi is good, and the coffee and meals tho. I like it
                    here!! Very recommended!
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.slider} ${styles["full-width"]} d-flex justify-content-between align-items-center`}
            >
              <div
                className={`${styles.slide} d-flex flex-row justify-content-between w-10`}
              >
                <div className={`${styles.dot} ${styles.cursor}`}></div>
                <div className={`${styles.dot} ${styles.cursor}`}></div>
                <div className={`${styles.dot} ${styles.cursor}`}></div>
                <div className={`${styles.dot} ${styles.cursor}`}></div>
              </div>
              <div
                className={`${styles.arrow} d-flex flex-row justify-content-between`}
              >
                <button
                  className={`${styles.cursor} ${styles["bg-arrow"]} d-flex justify-content-center align-items-center`}
                >
                  <div>&#8592;</div>
                </button>
                <button
                  className={`${styles.cursor} ${styles["bg-arrow"]} d-flex justify-content-center align-items-center`}
                >
                  <div>&#8594;</div>
                </button>
              </div>
            </div>
          </section>
          <section
            className={`${styles["check-promo"]} ${styles["full-width"]} d-flex justify-content-between align-items-center`}
          >
            <div className={`${styles.promo} d-flex flex-column`}>
              <p
                className={`${styles["text-check1"]} d-flex align-items-center`}
              >
                Check our promo today!
              </p>
              <p
                className={`${styles["text-check2"]} d-flex align-items-center`}
              >
                Let's see the deals and pick yours!
              </p>
            </div>
            <button
              onClick={() => onClickHandler("/product")}
              className={styles["button-promo"]}
            >
              See Promo
            </button>
          </section>
        </section>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default withNavigate(Home);
