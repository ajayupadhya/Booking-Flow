import React from "react";
import Logo from "../../../images/logo.png";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import DownArrow from "../../../images/svg/downArrow.svg";
import Share from "../../../images/svg/shareLink.svg";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Image src={Logo} layout="fixed" width={228} height={61} />
        <div className={styles.headerContent}>
          <ul>
            <li>
              Menu
              <Image src={DownArrow} layout="fixed" width={20} height={20} />
            </li>
            <li>
              <Link href={"/"}>Contact us</Link>
            </li>
            <li>
              Share Link
              <Image src={Share} layout="fixed" width={20} height={20} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
