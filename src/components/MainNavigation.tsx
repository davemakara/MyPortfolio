import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={styles["main-navigation"]}>
      <ul>
        <li className={styles.navLink}>HOME</li>
        <li className={styles.navLink}>ABOUT</li>
        <li className={styles.navLink}>PROJECTS</li>
        <li className={styles.navLink}>CONTACT</li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
