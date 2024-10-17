import React from "react";
import { Oval } from "react-loader-spinner";
import styles from "./Loading.module.css";

const Loading: React.FC = () => {
  return (
    <>
    <div className="spinner">
      <div className={styles.loading}>
        <Oval/>
      </div>
      </div>
      {/* 
      <div className="loader">
          Loading...
      </div>
      */}
    </>
  );
};

export default Loading;
