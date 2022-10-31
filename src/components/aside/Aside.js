import React from "react";
import styles from "./Aside.module.css"

import asideImg from "../../assets/img/aside-img.png";

function Aside() {
  return (
    <>
      <aside className={styles["aside-content"]}>
        <img
          className={styles["aside-image"]}
          src={asideImg}
          alt="dian-coffeeshop"
        />
      </aside>
    </>
  );
}

export default Aside;
