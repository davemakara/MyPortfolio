import styles from "./Footer.module.css";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={styles["footer-section"]}>
      <div className={styles["footer-wrapper"]}>
        <div className={styles["footer-info"]}>
          <h4>DAVID MAKAROV</h4>
          <p>
            A Frontend focused Web Developer - building Websites and Web
            Applications that leads to the success of the overall product
          </p>
        </div>
        <div className={styles["footer-social"]}>
          <h4>SOCIAL</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/davidmakarov"
                target="_blank"
              >
                <FaLinkedin className={styles["social-img"]} />
              </a>
            </li>
            <li>
              <a href="https://github.com/davemakara" target="_blank">
                <FaGithub className={styles["social-img"]} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/davemakaraa/" target="_blank">
                <FaInstagramSquare className={styles["social-img"]} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/DavidMakarovv" target="_blank">
                <FaFacebookSquare
                  className={`${styles["social-img"]} ${styles["social-img-fb"]}`}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>
        © Copyright 2023. Made by David Makarov
      </p>
    </section>
  );
};

export default Footer;
