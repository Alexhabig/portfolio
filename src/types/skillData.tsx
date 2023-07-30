import * as fa from "react-icons/fa";
import * as si from "react-icons/si";
import * as bi from "react-icons/bi";
import * as di from "react-icons/di";

export interface Skills {
  id: number;
  category: string;
  icon: any;
  iconColor: string;
  lang: string;
  percentage: string;
  barpercentage: string;
}

export const skills: Skills[] = [
  {
    id: 1,
    category: "FE",
    icon: fa.FaReact,
    iconColor: "text-blue-400",
    lang: "React",
    percentage: "70%",
    barpercentage: "70%",
  },
  {
    id: 2,
    category: "FE",
    icon: si.SiTypescript,
    iconColor: "text-blue-600",
    lang: "Typescript",
    percentage: "60%",
    barpercentage: "60%",
  },
  {
    id: 3,
    category: "FE",
    icon: bi.BiLogoTailwindCss,
    iconColor: "text-blue-400",
    lang: "Tailwind",
    percentage: "70%",
    barpercentage: "70%",
  },
  {
    id: 4,
    category: "FE",
    icon: fa.FaBootstrap,
    iconColor: "text-violet-700",
    lang: "Bootstrap",
    percentage: "70%",
    barpercentage: "70%",
  },
  {
    id: 5,
    category: "FE",
    icon: si.SiVuetify,
    iconColor: "text-blue-400",
    lang: "Vuetify",
    percentage: "50%",
    barpercentage: "50%",
  },
  {
    id: 6,
    category: "FE",
    icon: fa.FaCss3Alt,
    iconColor: "text-blue-600",
    lang: "CSS",
    percentage: "70%",
    barpercentage: "70%",
  },
  {
    id: 7,
    category: "FE",
    icon: fa.FaHtml5,
    iconColor: "text-orange-500",
    lang: "HTML",
    percentage: "80%",
    barpercentage: "80%",
  },
  {
    id: 8,
    category: "BE",
    icon: bi.BiLogoMongodb,
    iconColor: "text-green-400",
    lang: "Mongdb",
    percentage: "65%",
    barpercentage: "65%",
  },
  {
    id: 9,
    category: "BE",
    icon: fa.FaNode,
    iconColor: "text-green-500",
    lang: "NodeJS",
    percentage: "%65",
    barpercentage: "65%",
  },
  {
    id: 10,
    category: "BE",
    icon: si.SiExpress,
    iconColor: "text-black",
    lang: "Express",
    percentage: "60%",
    barpercentage: "60%",
  },
  {
    id: 11,
    category: "WebDesign",
    icon: fa.FaFigma,
    iconColor: "text-blue-400",
    lang: "Figma",
    percentage: "80%",
    barpercentage: "80%",
  },
  {
    id: 12,
    category: "WebDesign",
    icon: si.SiAdobephotoshop,
    iconColor: "text-blue-800",
    lang: "Photoshop",
    percentage: "70%",
    barpercentage: "70%",
  },
  {
    id: 13,
    category: "WebDesign",
    icon: si.SiAdobeillustrator,
    iconColor: "text-orange-800",
    lang: "Illustrator",
    percentage: "65%",
    barpercentage: "65%",
  },
  {
    id: 14,
    category: "FE",
    icon: di.DiJavascript1,
    iconColor: "text-yellow-600",
    lang: "JavaScript",
    percentage: "65%",
    barpercentage: "65%",
  },
  {
    id: 15,
    category: "Version",
    icon: fa.FaGithub,
    iconColor: "text-black",
    lang: "GiHub",
    percentage: "65%",
    barpercentage: "65%",
  },
];
