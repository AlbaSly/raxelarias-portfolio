import { ROUTES } from "@data/index";

import styles from "./navigation.module.scss";
import RaxNavbarLink from "./NavbarLink";

const RaxNavbar = () => {

  const navLinks = [...ROUTES];

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        {navLinks.map((link, index) => <RaxNavbarLink key={index} route={link}/>)}
      </nav>
    </div>
  )
}

export default RaxNavbar