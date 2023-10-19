import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IRaxRoute } from "@data/index";

import styles from "./navigation.module.scss";

type Props = {
  route: IRaxRoute;
};

const RaxNavbarLink = (props: Props) => {
  const { route } = props;

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
      className={`${styles.navbarLink} ${
        isActiveLink ? styles.activeNavbarLink : ""
      }`}
      href={route.path}
    >
      {route.label}
    </Link>
  );
};

export default RaxNavbarLink;
