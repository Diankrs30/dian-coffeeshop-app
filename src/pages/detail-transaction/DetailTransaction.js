import React from "react";
import styles from "./DetailTransaction.module.css";
import Footer from "../../components/footer2/Footer2";
import Header from "../../components/header/Header";

import Hazelnut from "../../assets/img/hazelnut-late.png";
import Card from "../../assets/img/card.png";
import Bank from "../../assets/img/bank.png";
import cod from "../../assets/img/cod.png";

function DetailTransaction() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={`${styles["container-main"]} ${styles.flex}`}>
          <section>
            <p className={styles.text1}>Checkout your item now&#33;</p>
          </section>
          <section className={`${styles.detailTransaction} ${styles.flex}`}>
            <div className={`${styles.product} ${styles.flex}`}>
              <div className={styles.detail}>
                <p className={styles.text2}>Order Summary</p>
              </div>
              <div className={styles["prod-order"]}>
                <div className={`${styles.detailProd} ${styles.flex}`}>
                  <div className={`${styles.prod} ${styles.flex}`}>
                    <img
                      className={styles["img-prod"]}
                      src={Hazelnut}
                      alt="product"
                    ></img>
                    <div>
                      <p className={styles.text3}>Hazelnut Latte</p>
                      <p className={styles.text3}>X 1</p>
                      <p className={styles.text3}>Reguler</p>
                    </div>
                  </div>
                  <div className={styles.text4}>IDR 24.0</div>
                </div>
                <div className={`${styles.detailProd} ${styles.flex}`}>
                  <div className={`${styles.prod} ${styles.flex}`}>
                    <img
                      className={styles["img-prod"]}
                      src={Hazelnut}
                      alt="product"
                    ></img>
                    <div>
                      <p className={styles.text3}>Hazelnut Latte</p>
                      <p className={styles.text3}>X 1</p>
                      <p className={styles.text3}>Reguler</p>
                    </div>
                  </div>
                  <div className={styles.text4}>IDR 24.0</div>
                </div>
              </div>
              <div className={`${styles.subtotal} ${styles.flex}`}>
                <div className={styles.text5}>
                  <div>SUBTOTAL</div>
                  <div>TAX AND FEES</div>
                  <div>SHIPPING</div>
                </div>
                <div className={styles.text5}>
                  <div>IDR 120.000</div>
                  <div>IDR 20.000</div>
                  <div>IDR 10.000</div>
                </div>
              </div>
              <div className={`${styles.total} ${styles.flex}`}>
                <span>TOTAL</span>
                <span>IDR 150.000</span>
              </div>
            </div>
            <section className={styles["address-payment"]}>
              <section className={styles.address}>
                <div className={`${styles.textAddress} ${styles.flex}`}>
                  <span className={styles.text6}>Address details</span>
                  <button className={styles["btn-edit"]}>edit</button>
                </div>
                <div className={styles.cardAddress}>
                  <div className={styles["cust-address"]}>
                    <span className={styles.textDeliv}>Delivery </span>
                    <span className={styles.textDetailDeliv}>
                      to Iskandar Street
                    </span>
                  </div>
                  <div className={styles.addressCust}>
                    <p className={styles.textDetailDeliv2}>
                      Km 5 refinery road oppsite republic road, effurun, Jakarta
                    </p>
                  </div>
                  <div className={styles.phoneNumber}>&#43;62 81348287878</div>
                </div>
              </section>
              <section className={styles.payment}>
                <div className={styles.textAddress}>
                  <span className={styles.text6}>Payment Method</span>
                </div>
                <div className={styles.cardPayment}>
                  <div className={`${styles.card} ${styles.flex}`}>
                    <input
                      className={styles.radioBtn}
                      type="radio"
                      value="card"
                      name="payment-method"
                    />
                    <div className={`${styles.bgcard} ${styles.flex}`}>
                      <img src={Card} alt=""></img>
                    </div>
                    <span className={styles.textPayMeth}>Card</span>
                  </div>
                  <div className={`${styles.bankAccount} ${styles.flex}`}>
                    <input
                      className={styles.radioBtn}
                      type="radio"
                      value="bankAccount"
                      name="payment-method"
                    />
                    <div className={`${styles.bgbank} ${styles.flex}`}>
                      <img src={Bank} alt=""></img>
                    </div>
                    <span className={styles.textPayMeth}>Bank account</span>
                  </div>
                  <div className={`${styles.cod} ${styles.flex}`}>
                    <input
                      className={styles.radioBtn}
                      type="radio"
                      value="cod"
                      name="payment-method"
                    />
                    <div className={`${styles.bgcod} ${styles.flex}`}>
                      <img src={cod} alt=""></img>
                    </div>
                    <span className={styles.textPayMeth}>Cash on delivery</span>
                  </div>
                </div>
              </section>
              <section className={`${styles.confirm} ${styles.flex} ${styles.cursor}`}>
                <button className={`${styles["btn-confirm"]} ${styles.cursor}`}>
                  Confirm and Pay
                </button>
              </section>
            </section>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default DetailTransaction;
