import MySkills from "../components/MySkills";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen px-5 md:pb-5">
      <MySkills />
      <div className={styles["below-wrapper"]}>
        <div className={styles["bio-info"]}>
          <h4>Get to know me!</h4>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <p>
            As a React enthusiast, I specialize in crafting modern, responsive,
            and user-friendly applications. I thrive on turning complex problems
            into elegant solutions through the power of clean and efficient
            code. Whether it's building interactive components, optimizing
            performance, or ensuring a seamless user experience, I'm dedicated
            to delivering high-quality results.
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
