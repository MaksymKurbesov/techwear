import React from "react";
import styles from "./Description.module.css";

const Description = ({ description }) => {
  return (
    <div className={styles.description}>
      <span>Описание</span>
      <p>{description}</p>
    </div>
  );
};

export default Description;
