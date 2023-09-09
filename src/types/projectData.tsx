import Images from "../assets/index";

export interface IProject {
  id: number;
  link: string;
  img: any;
  title: string;
  desc: string;
}

export const project: IProject[] = [
  {
    id: 1,
    link: "https://github.com/markaeroltomarse/onems",
    img: Images.capstone,
    title: "Capstone Project",
    desc: "onems",
  },
  {
    id: 2,
    link: "https://bill-tracker-livid.vercel.app/",
    img: Images.billTracker,
    title: "Bill Tracker",
    desc: "-------",
  },
  {
    id: 3,
    link: "https://todo-list-beta-ten.vercel.app/",
    img: Images.todo,
    title: "Todo List",
    desc: "Tech: React, Typescript, MongoDB, Node Express",
  },
];
