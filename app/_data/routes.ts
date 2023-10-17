export const ROUTES: Array<IRaxRoute> = [
  {
    label: "Home",
    path: "/home",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

interface IRaxRoute {
  label: string;
  path: string;
}
