import React, { useEffect, useState } from "react";
import styles from "./History.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer2/Footer2";
import CardHistory from "../../components/cardHistory/CardHistory";
import { getHistory } from "../../utils/api";

// import bgHistory from "../../assets/img/bg-history.png"

function History() {
  const [allHistory, setAllHistory] = useState([]);
  const [dataCeklist, setDataCeklist] = useState([{}])



  const getAllaHistory = async () => {
    const result = await getHistory();
    setAllHistory(result.data.data);
    try {
    } catch (error) {
      console.log(error);
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
            <p className={styles.text1}>
              Let&#39;s see what you have bought&#33;
            </p>
            <p className={styles.text2}>Select item to delete</p>
          </section>
          <section className={styles.selectdelete}>
            <button className={styles.select}>Select All</button>
          </section>
          <section className={styles.history}>
            {allHistory.map((item, index) => {
              const data = {...item,ceklistItem:dataCeklist, setCeklist:setDataCeklist()}
              return <CardHistory key={index} data={data} />
            })}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default History;
