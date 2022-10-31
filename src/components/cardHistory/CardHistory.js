import React, { useState } from "react";
import styles from "./CardHistory.module.css";

import icon from "../../assets/img/icon-food.png";

function CardHistory({data}) {
  
  const [checked, setChecked] = useState(false); 
  const handleCeklist = (e) =>{
    const tempCeklist = data.ceklistItem
    setChecked(!checked)
    if(checked===true){
      console.log('mana',data);
      const ceklist = tempCeklist.push({id:data.id})
      data.setCeklist(ceklist)
    }
  }
  return (
    <>
      <section className={styles.cardHistory}>
        <div className={styles["img-prod"]}>
          <img className={styles.img} src={data.image!==''?"http://localhost:8070" +data.image:icon} alt="" />
        </div>
        <div className={styles.product}>
          <p className={styles["title-prod"]}>{data.product_name}</p>
          <p className={styles.price}>{data.price}</p>
          <div className={styles.status}>
            <p className={styles.textdeliv}>{data.status_order}</p>
            <div className={styles.checkbox}>
              <input type="checkbox" onChange={(e)=>handleCeklist(e)}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardHistory;
