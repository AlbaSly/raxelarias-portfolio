export const CONTACT_LINKS: Array<IRaxContactLink> = [
  {
    label: "Facebook",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    url: "",
  },
  {
    label: "Twitter",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
    url: "",
  },
  {
    label: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    url: "https://github.com/AlbaSly",
  },
  {
    label: "LinkedIn",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    url: "https://www.linkedin.com/in/brando-arias/",
  },
];

interface IRaxContactLink {
  label: string;
  src: string;
  url: string;
}
