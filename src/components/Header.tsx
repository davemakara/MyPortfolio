import profilePic from "../assets/pic.jpg";
import styles from "./Header.module.css";
import MainNavigation from "./MainNavigation";

const Header = () => {
  return (
    <header className="shadow-lg shadow-white">
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
