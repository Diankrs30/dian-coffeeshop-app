import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../utils/api"
import styles from "./Modal.module.css";

const Modal = (props) => {
  const navigate = useNavigate();

  const handleOk = async () => {
    try {
      // console.log("test");
      await logout();
      localStorage.removeItem("login");
      navigate("/");
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {props.open ? (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <div className={styles["modal-header"]}>
              <p className={styles["modal-title"]}>{props.title}</p>
            </div>
            <div className={styles["modal-body"]}>{props.body}</div>
            <div className={styles["modal-footer"]}>
              <button className={styles.button} onClick={handleOk}>
                yes
              </button>
              <button
                className={styles.button}
                onClick={() => props.setOpen(!props)}
              >
                no
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
