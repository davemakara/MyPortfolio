import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles["contactPage-wrapper"]}>
      <div className={styles["contact-upper"]}>
        <h1>CONTACT ME</h1>
        <p>
          In case of any interest or job offers feel free to contact me on my
          contact details below and I will get back to you as soon as possible.
        </p>
      </div>
      <div className={styles["contact-below"]}>
        <ul>
          <li>Email: davidmakarr@gmail.com</li>
          <li>
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/davidmakarov/" target="_blank">
              David Makarov
            </a>
          </li>
          <li>
            Github:{" "}
            <a href="https://github.com/davemakara" target="_blank">
              davemakara
            </a>
          </li>
          <li>Location: Tbilisi, Georgia</li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
