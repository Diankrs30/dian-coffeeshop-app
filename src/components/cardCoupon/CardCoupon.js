import React from "react";
import styles from "./CardCoupon.module.css"

import mother from "../../assets/img/mother.png"

function CardCoupon() {
  return (
    <>
      <div
        className={`${styles["wrapper-coupon"]} ${styles.flex} ${styles["bg-green"]} ${styles.cursor}`}
      >
        <img className={styles["img-coupon"]} src={mother} alt="coupon" />
        <div>
          <p className={styles["text-title-promo"]}>HAPPY MOTHER&#39;S DAY!</p>
          <p className={styles["text-desc-promo1"]}>
            Get one of our favorite menu for free&#33;
          </p>
        </div>
      </div>
    </>
  );
}

export default CardCoupon;
