import Label from "../Label/Label";
import styles from "./styles.module.scss";

const FOLDER = "FOLDER";
const NOTE = "NOTE";

const PROJECT_ICONS = {
  [`${FOLDER}`]: "source folder icon",
  [`${NOTE}`]: "source note icon",
};

const projects = [
  {
    id: "1",
    name: "Getting started",
    path: "/",
    parentId: null,
    type: NOTE,
    priority: 0,
    childrens: [],
  },
  {
    id: "2",
    name: "Amela",
    path: "/",
    parentId: null,
    type: FOLDER,
    priority: 0,
    childrens: [
      {
        id: "5",
        name: "Getting started",
        path: "/",
        parentId: 2,
        type: NOTE,
        priority: 0,
        childrens: [],
      },
      {
        id: "6",
        name: "Getting started",
        path: "/",
        parentId: 2,
        type: NOTE,
        priority: 0,
        childrens: [],
      },
      {
        id: "7",
        name: "Shokunin",
        path: "/Amela",
        parentId: null,
        type: FOLDER,
        priority: 0,
        childrens: [],
      },
      {
        id: "8",
        name: "Padelia",
        path: "/Amela",
        parentId: null,
        type: FOLDER,
        priority: 0,
        childrens: [],
      },
    ],
  },
  {
    id: "3",
    name: "Bash csripts",
    path: "/",
    parentId: null,
    type: FOLDER,
    priority: 0,
    childrens: [],
  },
  {
    id: "4",
    name: "Crypto wallets",
    path: "/",
    parentId: null,
    type: FOLDER,
    priority: 0,
    childrens: [],
  },
];

function Project() {
  return (
    <div className={styles.Project}>
      <Label>Projects</Label>
      <div className={styles.Item}></div>
    </div>
  );
}

export default Project;
