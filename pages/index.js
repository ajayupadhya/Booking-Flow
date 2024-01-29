import React, { useState } from "react";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/src/components/Header";
import LeftSide from "@/src/components/LeftSide";
import RightSide from "@/src/components/RightSide";
import BottomPanel from "@/src/components/BottomPanel";
const poppins = Poppins({
  weight: ['400','500', '600'],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {

  return (
    <div className={`${styles.container} ${poppins.className}`}>
      <Header />
      <div className={styles.mainContainer}>
        <LeftSide/>
        <RightSide/>
        <BottomPanel/>
      </div>
    </div>
  );
}
