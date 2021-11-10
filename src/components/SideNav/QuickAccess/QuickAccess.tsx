import IConContainer from "components/IConContainer/IConContainer";
import SideNavItem from "../SideNavItem/SideNav";
import styles from "./styles.module.scss";
import search from "assets/icons/search.svg";
import notifications from "assets/icons/notifications.svg";
import star from "assets/icons/star.svg";
import schedule from "assets/icons/schedule.svg";
import Label from "../Label/Label";

function QuickAccess() {
  const QuickFind = () => {
    return (
      <SideNavItem
        icon={<IConContainer icon={<img src={search} alt="search" />} />}
        content={<div>Quick find</div>}
        tail={null}
      />
    );
  };

  const Notification = () => {
    return (
      <SideNavItem
        icon={
          <IConContainer
            icon={<img src={notifications} alt="notifications" />}
          />
        }
        content={<div>Notifications</div>}
        tail={null}
      />
    );
  };

  const ToDay = () => {
    return (
      <SideNavItem
        icon={<IConContainer icon={<img src={star} alt="Icon" />} />}
        content={<div>To day</div>}
        tail={null}
      />
    );
  };

  const Upcomming = () => {
    return (
      <SideNavItem
        icon={<IConContainer icon={<img src={schedule} alt="Icon" />} />}
        content={<div>Upcomming</div>}
        tail={null}
      />
    );
  };

  return (
    <div className={styles.QuickAccess}>
      <Label>Quick access</Label>
      <QuickFind />
      <Notification />
      <ToDay />
      <Upcomming />
    </div>
  );
}

export default QuickAccess;
