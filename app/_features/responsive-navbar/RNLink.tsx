import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IRaxRoute } from "@/app/_data";

import styles from "./responsive-navbar.module.scss";

type Props = {
  route: IRaxRoute;
  onClick: () => void;
};

const RaxRNLink = (props: Props) => {
  const { 
    route,
    onClick,
  } = props;

  const currentRoute = usePathname();
  const [isActiveLink, setIsActiveLink] = useState(false);

  useEffect(() => {
    const checkCurrentRoute = () => {
        setIsActiveLink(currentRoute === route.path);
    };

    checkCurrentRoute();
  }, [currentRoute]);

  return (
    <Link
      onClick={onClick}
      className={`${styles.navbarLink} ${
        isActiveLink ? styles.activeNavbarLink : ""
      }`}
      href={route.path}
    >
      {route.label}
    </Link>
  );
};

export default RaxRNLink;
