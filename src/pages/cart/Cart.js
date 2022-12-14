import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer2/Footer2";
import CardHistory from "../../components/cardHistory/CardHistory";
import { getHistory } from "../../utils/api";

// import bgHistory from "../../assets/img/bg-history.png"

function History({ navigate }) {
  const [allHistory, setAllHistory] = useState([]);
  const [dataCeklist, setDataCeklist] = useState([{}]);

  const getAllaHistory = async () => {
    const result = await getHistory();
    setAllHistory(result.data.data);
    try {
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    getAllaHistory();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles["container-main"]}>
          <section className={styles.title}>
            {/* <img src={bgHistory} alt=""></img> */}
            <p className={styles.text1}>Cart</p>
            <p className={styles.text2}>Select item to delete</p>
          </section>
          <section className={styles.selectdelete}>
            <button className={styles.select}>Select All</button>
          </section>
          <section className={styles.history}>
            {allHistory.map((item, index) => {
              // const data = {...item,ceklistItem:dataCeklist, setCeklist:setDataCeklist()}
              return <CardHistory key={index} data={item} />;
            })}
          </section>
          <div className={`${styles["wrapper-btn-checkout"]}`}>
            <button className={styles['btn-checkout']}>Confirm and checkout</button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default History;
