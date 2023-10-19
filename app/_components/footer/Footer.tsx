"use client";

import { useState } from 'react';
import styles from './footer.module.scss';

const RaxFooter = () => {

  const [ date, setDate ] = useState(new Date());

  return (
    <div className={styles.footerContainer}>
        <footer className={styles.footer}>
          <p className={styles.footerContent}>
            ©<span>{date.getFullYear()}</span>{' '}
            Brando <span className={styles.colorPrimary}>Raxel</span> <span className={styles.colorSecondary}>Arias</span> Moreno. All Rights Reserved.
          </p>
        </footer>
    </div>
  )
}

export default RaxFooter