import React, { useEffect, useState } from "react";
import CardHistory from "../../components/cardHistory/CardHistory";
import { getHistory } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import transactionAction from "../../redux/action/transaction";

import styles from "./History.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer2/Footer2";
import productAction from "../../redux/action/product";
import { toast, ToastContainer } from "react-toastify";
import IsLoading from "../../components/isLoading/IsLoading";

// import bgHistory from "../../assets/img/bg-history.png"

function History({ navigate }) {
  const history = useSelector((state) => state.getHistory.history);
  const totalPage = useSelector((state) => state.getHistory.meta.totalPage);
  const isPending = useSelector((state) => state.getHistory.isLoading);
  const [idDelete, setIdDelete] = useState([]);
  const dispatch = useDispatch();
  const [allHistory, setAllHistory] = useState([]);
  const [dataCeklist, setDataCeklist] = useState([]);
  const [thisPage, setThisPage] = useState(1);
  const [param, setParam] = useState({
    page: "1",
    limit: "15",
  });

  const getAllaHistory = async () => {
    await dispatch(transactionAction.getHistoryAction(param));
    try {
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };

  const handleNext = async () => {
    // console.log("sasa");
    try {
      if (thisPage < totalPage) {
        const page = thisPage + 1;
        setThisPage(page);
        setParam({ ...param, page });
        const body = { ...param, page };
        // props.setSearchParams(body);
        console.log(param);
        await dispatch(transactionAction.getHistoryAction(body));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    if (idDelete.length > 0) {
      await Promise.all(
        idDelete.map(async (id) => {
          await dispatch(transactionAction.deleteHistoryAction(id));
        })
      );
      toast.success("Create transaction successed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    toast.warn("Not Selected", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const handlePrev = async () => {
    // console.log("sasa");
    try {
      if (thisPage > 1) {
        const page = thisPage - 1;
        setThisPage(page);
        const body = { ...param, page };

        await dispatch(transactionAction.getHistoryAction(body));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const

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
            <button className={styles.select} onClick={handleDelete}>
              Delete
            </button>
            <ToastContainer />
          </section>
          {isPending ? (
            <div className={`${styles.loading}`}>
              <IsLoading />
            </div>
          ) : (
            <section className={styles.history}>
              {history.map((item, index) => {
                // const data = {...item,ceklistItem:dataCeklist, setCeklist:setDataCeklist()}
                return (
                  <CardHistory
                    key={index}
                    data={item}
                    idDelete={idDelete}
                    setIdDelete={setIdDelete}
                  />
                );
              })}
            </section>
          )}
          <div className={styles.paginasi}>
            <button className={styles["btn-paginasi"]} onClick={handlePrev}>
              Prev
            </button>
            <button className={styles["btn-paginasi"]} onClick={handleNext}>
              Next
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default History;
