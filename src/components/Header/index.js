import React, { useState } from "react";
import Logo from "../../../images/logo.png";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import DownArrow from "../../../images/svg/downArrow.svg";
import Share from "../../../images/svg/shareLink.svg";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
      <Image src={Logo}  width={128} height={31} />
        <div className={styles.headerContent}>
          <ul>
            <li>
              Menu
              <Image src={DownArrow}  width={20} height={20} />
            </li>
            <li>
              <Link href={"/"}>Contact us</Link>
            </li>
            <li>
              Share Link
              <Image src={Share}  width={20} height={20} />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.headerContainerMobile}>
        <Image src={Logo}  width={128} height={31} />

        <div
          className={`${styles.headerHam} ${open && styles.open}`}
          id="nav-icon3"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {open && (
          <div className={`${styles.slideDrawer} ${open && styles.translateDrawer}`}>
            <ul>
              <li>Menu</li>
              <li>Contact Us</li>
              <li>Share Link <Image src={Share}  width={20} height={20} /></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
