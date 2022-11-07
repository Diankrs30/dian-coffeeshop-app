import React, { useState } from "react";
import styles from "./CardHistory.module.css";

import icon from "../../assets/img/icon-food.png";

function CardHistory( item ) {
  const data = item.data
  const rupiah = (number) => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
  };
  const handleDelete=(e)=>{
    const id= data.id
    let temp = item.idDelete
    const filter = temp.filter((item)=>item===id)
    let idx =null
    for (let index = 0; index < temp.length; index++) {
      const val = temp[index]
      console.log('masukk',val);
      if(val===id){
        idx=index
      }
    }
    if (filter.length === 0){
      temp.push(id)
      return item.setIdDelete(temp)
    }else{
      console.log('jalan',idx);
      temp.splice(idx,1)
      return item.setIdDelete(temp)
    }
  }
  return (
    <>
      <section className={styles.cardHistory}>
        <div className={styles["img-prod"]}>
          <img
            className={styles.img}
            src={data.image !== "" ? data.image : icon}
            alt=""
          />
        </div>
        <div className={styles.product}>
          <p className={styles["title-prod"]}>{data.product_name}</p>
          <p className={styles.price}>{rupiah(data.total_price)}</p>
          <div className={styles.status}>
            <p className={styles.textdeliv}>{data.status_order}</p>
            <div className={styles.checkbox}>
              <input type="checkbox" value={data.id}  onChange={(e)=>handleDelete(e)}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardHistory;
