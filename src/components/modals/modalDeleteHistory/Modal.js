import React from "react";
import styles from "./Modal.module.css"

const Modal = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles["modal-content"]}>
                <div className={styles["modal-body"]}>Are you sure want to delete this product?</div>
                <div className={styles["modal-footer"]}>
                    <button className={styles.button}>Cancel</button>
                    <button className={styles.button}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;