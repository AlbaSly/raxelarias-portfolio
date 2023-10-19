import Link from "next/link";

import styles from './header.module.scss';

const RaxHeaderLogo = () => {
  return (
    <Link href={'/'} style={{textDecoration: 'none'}}>
        <h1 className={styles.headerLogo}>Raxel <span>Arias</span></h1>
    </Link>
  )
}

export default RaxHeaderLogo