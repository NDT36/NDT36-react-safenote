import { FC } from "react";
import styles from "./styles.module.scss";

interface IProps {
  icon: FC | JSX.Element;
}
const IConContainer: FC<IProps> = function (props) {
  return <div className={styles.IConContainer}>{props.icon}</div>;
};

export default IConContainer;
