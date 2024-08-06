import profilePic from "../assets/profile2.jpg";
import styles from "./Header.module.css";
import MainNavigation from "./MainNavigation";

const Header = () => {
  return (
    <header>
      <span className={styles.profileInfo}>
        <div className={styles.imgWrapper}>
          <img src={profilePic} alt="profile picture" />
        </div>
        <p>DAVID MAKAROV</p>
      </span>

      <MainNavigation />
    </header>
  );
};

export default Header;
