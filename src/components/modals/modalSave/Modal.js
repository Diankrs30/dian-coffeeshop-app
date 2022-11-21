import React, { useState } from "react";
import { editProfile } from "../../../utils/api";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../../redux/action/user";

const Modal = (props) => {
  const dispatch = useDispatch();
  const [body, setBody] = useState({});

  const handleSave = async () => {
    const formData = new FormData();
    Object.keys(body).forEach((key, idx) => {
      formData.append(key, body[key]);
    });
    try {
      await editProfile(formData);
      await dispatch(userActions.getProfileAction());
    } catch (error) {
      console.log(error.response.data.error.message);
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
              <button
                className={styles.button}
                onClick={() => props.setOpen(!props)}
              >
                No
              </button>
              <button className={styles.button} onClick={handleSave}>
                Yes
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
