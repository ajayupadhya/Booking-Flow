import React from "react";
import styles from "./bottomPanel.module.css"
import Image from "next/image";
import ArrowRight from "../../../images/svg/arrowRight.svg"
const BottomPanel = () => {
  return (
    <div className={styles.bottomPanel}>
      <button>Next <Image src={ArrowRight} width={20} height={20} /></button>
    </div>
  );
};

export default BottomPanel;
