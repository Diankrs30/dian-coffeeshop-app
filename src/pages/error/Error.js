import React from "react";
import styles from "./Error.module.css";

function Error() {
  return (
    <div id={styles["error-page"]}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}

export default Error;
