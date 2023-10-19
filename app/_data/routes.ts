export const ROUTES: Array<IRaxRoute> = [
  {
    label: "Home",
    path: "/",
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

export interface IRaxRoute {
  label: string;
  path: string;
}
