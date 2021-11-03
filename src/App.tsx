import Main from "components/Main/Main";
import SideNav from "components/SideNav/SideNav";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Wrapper}>
        <SideNav />
        <Main />
      </div>
    </div>
  );
}

export default App;
