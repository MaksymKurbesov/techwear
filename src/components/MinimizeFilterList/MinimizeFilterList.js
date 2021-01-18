import React from "react";
import styles from "./MinimizeFilterList.module.css";

const MinimizeFilterList = ({ setIsVisibleFilter }) => {
  return (
    <div
      onClick={() => setIsVisibleFilter((previousValue) => !previousValue)}
      className={styles.minimizeFilterList}
    ></div>
  );
};

export default MinimizeFilterList;
