import Project from "./Project/Project";
import QuickAccess from "./QuickAccess/QuickAccess";
import styles from "./styles.module.scss";
import WorkSpace from "./WorkSpace/WorkSpace";

function SideNav() {
  return (
    <div className={styles.SideNav}>
      <div className={styles.Container}>
        <WorkSpace />
        <QuickAccess />
        <Project />
        <div className={styles.Label}></div>
        <div className={styles.Action}></div>
      </div>
    </div>
  );
}

export default SideNav;
