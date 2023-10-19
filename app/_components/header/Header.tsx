"use client";

import styles from './header.module.scss';

import RaxResponsiveNavbar from "@features/responsive-navbar/ResponsiveNavbar";
import RaxHeaderLogo from './HeaderLogo';
import RaxNavbar from '../navigation/Navbar';

const RaxHeader = () => {
  return (
    <div className={styles.headerContainer}>
        <header className={`${styles.header} container`}>
          <RaxHeaderLogo />
          <RaxResponsiveNavbar />
          <RaxNavbar />
        </header>
    </div>
  )
}

export default RaxHeader