import React from "react";
import styles from "./CardProduct.module.css";

import icon from "../../assets/img/icon-food.png";
import { useNavigate } from "react-router-dom";

function CardProduct({ data }) {
  const navigate = useNavigate();
  const rupiah = (number) => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
  };
  return (
    <>
      <div
        className={styles.wrapper}
        onClick={() => navigate(`/detail-product/${data.id}`)}
      >
        <div
          className={`${styles.list} ${styles.flex} ${styles["align-items"]}`}
        >
          <div className={styles.img}>
            <img
              className={styles["img-prod"]}
              src={data.image !== "" ? data.image : icon}
              alt=""
            />
          </div>
          <div className={`${styles.textProd} ${styles.flex}`}>
            <div className={styles["text-name"]}>
              <p>{data.product_name}</p>
            </div>
            <p className={styles["text-price"]}>{rupiah(data.price)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
