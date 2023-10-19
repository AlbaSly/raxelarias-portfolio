import { useEffect, useLayoutEffect, useRef, useState } from "react";

import useScreenSize from "@hooks/useScreenSize";
import { ROUTES } from "@data/index";

import RaxRNButton from "./RNButton";
import RaxRNLink from "./RNLink";

import styles from "./responsive-navbar.module.scss";

const RaxResponsiveNavbar = () => {

  const screenSize = useScreenSize();

  const [ DOMLoaded, setDOMLoaded ] = useState(false);
  const [ showMenu, setShowMenu ] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const navLinks = [...ROUTES];

  useLayoutEffect(() => {
    setDOMLoaded(true);
  });
   
  /**
   * First DOM Load (when is set to true)
   */
  useEffect(() => {
    if (DOMLoaded) 
    (() => {
      if (!showMenu) navRef.current!.style.display = 'none';
    })();
  }, [DOMLoaded]);

  /**
   * Detect screen resize
   */
  useEffect(() => {
    const handleNavbarOnScreenResizing = () => {
      if (screenSize.width >= 768) {
        checkboxRef.current!.checked = false;
        closeMenu();
      }
    }

    if (DOMLoaded) handleNavbarOnScreenResizing();
  }, [screenSize]);

  /**
   * showMenu state changes
   */
  useEffect(() => {
    const handleNavbarVisibility = () => {
      // navRef.current!.style.display = !showMenu ? 'none' : 'block';
      navRef.current!.style.display = 'block';

      navRef.current!.classList.remove(!showMenu ? 'animate__flipInY' : 'animate__flipOutY');
      navRef.current!.classList.add(showMenu ? 'animate__flipInY' : 'animate__flipOutY');
    }

    if (DOMLoaded) handleNavbarVisibility();
  }, [showMenu]);

  function updateNavbarVisibility(): void {
    setShowMenu(!showMenu);
  }

  function closeMenu(): void {
    setShowMenu(false);
  }

  return (
    <div className={styles.navbarWrapper}>
        {/* Button */}
        <RaxRNButton checkboxRef={checkboxRef} onChecked={updateNavbarVisibility}/>

        {/* Navbar */}
        <nav ref={navRef} className={`animate__animated animate__faster ${styles.navbar}`}>
          <div className={styles.itemsContainer}>
            {navLinks.map((link, index) => <RaxRNLink key={index} route={link} onClick={closeMenu}/>)}
          </div>
        </nav>
    </div>
  )
}

export default RaxResponsiveNavbar