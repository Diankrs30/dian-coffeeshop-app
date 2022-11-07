import React, { useState } from "react";
import styles from "./DetailTransaction.module.css";
import Footer from "../../components/footer2/Footer2";
import Header from "../../components/header/Header";
import { useSelector } from "react-redux";
import transactionAction from "../../redux/action/transaction";
import { useDispatch } from "react-redux";

import Card from "../../assets/img/card.png";
import Bank from "../../assets/img/bank.png";
import cod from "../../assets/img/cod.png";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function DetailTransaction() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transaction = useSelector((state) => state.cart);
  const profile = useSelector((state) => state.getProfile.profile);
  const [body, setBody] = useState({
    address_detail: profile.delivery_address,
    phone_number: profile.phone_number,
    payment_method: "",
    status_order: "paid",
  });
  const [Edit, setEdit] = useState({
    address: profile.address,
    phone_number: profile.phone_number,
  });
  const [isEdit, setIsEdit] = useState(false);
  console.log(body);

  const rupiah = (number) => {
    if (number) {
      return `IDR ${number
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
    }
  };

  const payment = () => {
    let temp = 0;
    transaction.product_item_view.map((item, idx) => {
      temp += item.price;
    });
    const value = rupiah(temp);
    return value;
  };

  const tax = () => {
    let temp = 0;
    transaction.product_item_view.map((item, idx) => {
      temp += item.price;
    });
    const taxValue = temp * 0.1;
    const value = rupiah(taxValue);
    return value;
  };

  const totalPayment = () => {
    let temp = 0;
    transaction.product_item_view.map((item, idx) => {
      temp += item.price;
    });
    const taxValue = temp * 0.1;
    const total = temp + taxValue + 10000;
    const value = rupiah(total);
    return value;
  };

  const handlePaymentMethod = (e) => {
    let temp = 0;
    console.log(e.target.value);
    if (e.target.value === "card") {
      temp = 1;
    } else if (e.target.value === "cod") {
      temp = 2;
    } else {
      temp = 3;
    }
    setBody({ ...body, payment_method: temp });
  };

  const editAddress = (e) => {
    console.log(e.target.value);
    setBody({
      ...body,
      address_detail: e.target.value,
    });
  };

  const editPhone = (e) => {
    setBody({
      ...body,
      phone_number: e.target.value,
    });
  };

  const handleConfirmPayment = async () => {
    let temp = 0;
    transaction.product_item_view.map((item, idx) => {
      temp += item.price;
    });
    const taxValue = temp * 0.1;
    const total = temp + taxValue + 10000;
    const value = rupiah(total);

    const payload = {
      ...body,
      product_item: transaction.product_item,
      delivery_methods_id: transaction.delivery_methods_id,
      set_time: transaction.set_time,
      subtotal: temp,
      tax_and_fee: taxValue,
      shipping_cost: 10000,
    };
    console.log(payload);
    try {
      await dispatch(transactionAction.createTransactionAction(payload));
      toast.success("Create transaction successed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      navigate("/history");
    } catch (error) {
      console.log(error);
      toast.error("Create transaction failed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

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
                {transaction.product_item_view.map((item, idx) => {
                  return (
                    <div
                      className={`${styles.detailProd} ${styles.flex}`}
                      key={idx}
                    >
                      <div className={`${styles.prod} ${styles.flex}`}>
                        <img
                          className={styles["img-prod"]}
                          src={item.image}
                          alt="product"
                        ></img>
                        <div>
                          <p className={styles.text3}>{item.product_name}</p>
                          <p className={styles.text3}>x {item.quantity}</p>
                          <p className={styles.text3}>
                            {item.size_product_name}
                          </p>
                        </div>
                      </div>
                      <div className={styles.text4}>{rupiah(item.price)}</div>
                    </div>
                  );
                })}
              </div>
              <div className={`${styles.subtotal} ${styles.flex}`}>
                <div className={styles.text5}>
                  <div>SUBTOTAL</div>
                  <div>TAX AND FEES</div>
                  <div>SHIPPING</div>
                </div>
                <div className={styles.text5}>
                  <div>{payment()}</div>
                  <div>{tax()}</div>
                  <div>IDR 10.000</div>
                </div>
              </div>
              <div className={`${styles.total} ${styles.flex}`}>
                <span>TOTAL</span>
                <span>{totalPayment()}</span>
              </div>
            </div>
            <section className={styles["address-payment"]}>
              <section className={styles.address}>
                <div className={`${styles.textAddress} ${styles.flex}`}>
                  <span className={styles.text6}>Address details</span>
                  <button
                    className={styles["btn-edit"]}
                    onClick={() => setIsEdit(!isEdit)}
                  >
                    edit
                  </button>
                </div>
                <div className={styles.cardAddress}>
                  <div className={styles["cust-address"]}>
                    <span className={styles.textDeliv}>Delivery to</span>
                  </div>
                  <div className={styles.addressCust}>
                    {!isEdit ? (
                      <input
                        className={styles.textDetailDeliv2}
                        type="text"
                        placeholder={profile.delivery_address}
                        disabled={!isEdit}
                        />
                        ) : (
                          <input
                          className={styles.textDetailDeliv2}
                          type="text"
                          placeholder="address"
                          onChange={(e)=>editAddress(e)}
                      />
                    )}
                  </div>
                  {!isEdit ? (
                    <input
                      className={styles.textDetailDeliv2}
                      type="text"
                      placeholder={profile.phone_number}
                      disabled={!isEdit}
                      />
                      ) : (
                        <input
                        className={styles.textDetailDeliv2}
                        type="text"
                        placeholder="phone number"
                        onChange={(e)=>editPhone(e)}
                    />
                  )}
                </div>
              </section>
              <section className={styles.payment}>
                <div className={styles.textAddress}>
                  <span className={styles.text6}>Payment Method</span>
                </div>
                <div className={styles.cardPayment}>
                  <div className={`${styles.card} ${styles.flex}`}>
                    <input
                      onChange={handlePaymentMethod}
                      className={styles.radioBtn}
                      type="radio"
                      value="cash"
                      name="payment-method"
                    />
                    <div className={`${styles.bgcard} ${styles.flex}`}>
                      <img src={Card} alt=""></img>
                    </div>
                    <span className={styles.textPayMeth}>Cash</span>
                  </div>
                  <div className={`${styles.bankAccount} ${styles.flex}`}>
                    <input
                      onChange={handlePaymentMethod}
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
                      onChange={handlePaymentMethod}
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
              <section
                className={`${styles.confirm} ${styles.flex} ${styles.cursor}`}
              >
                <button
                  className={`${styles["btn-confirm"]} ${styles.cursor}`}
                  onClick={handleConfirmPayment}
                >
                  Confirm and Pay
                </button>
                <ToastContainer />
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
