import SideNavItem from "../SideNavItem/SideNav";
import styles from "./styles.module.scss";
import defaultIcon from "assets/icons/default-icon.svg";
import moreAction from "assets/icons/more-action.svg";
import IConContainer from "components/IConContainer/IConContainer";

function WorkSpace() {
  const WorkSpaceItem = () => {
    return (
      <SideNavItem
        icon={<IConContainer icon={<img src={defaultIcon} alt="Icon" />} />}
        content={<div>Default Workspace</div>}
        tail={<IConContainer icon={<img src={moreAction} alt="Icon" />} />}
      />
    );
  };

  return (
    <div className={styles.WorkSpace}>
      <WorkSpaceItem />
    </div>
  );
}

export default WorkSpace;
