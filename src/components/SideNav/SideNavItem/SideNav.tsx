import { FC } from "react";
import styles from "./styles.module.scss";

interface IProps {
  icon: FC | JSX.Element | null;
  content: FC | JSX.Element | null;
  tail: FC | JSX.Element | null;
}
const SideNavItem: FC<IProps> = function (props) {
  return (
    <div className={styles.SideNavItem}>
      <div className={styles.Container}>
        <div className={styles.Icon}>{props.icon}</div>
        <div className={styles.Content}>{props.content}</div>
        <div className={styles.Tail}>{props.tail}</div>
      </div>
    </div>
  );
};

export default SideNavItem;
