import { FC } from "react";
import styles from "./styles.module.scss";

const Label: FC = function (props) {
  return <div className={styles.Label}>{props.children}</div>;
};

export default Label;
