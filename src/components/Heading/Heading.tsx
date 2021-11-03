import { FC } from "react";
import styles from "./styles.module.scss";

const Heading: FC = function (props) {
  return <h3 className={styles.Heading}>{props.children}</h3>;
};

export default Heading;
