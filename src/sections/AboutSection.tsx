import styles from "./AboutSection.module.css";

import { MY_SKILLS } from "../store/store";

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen px-5 md:pb-5">
      <div className="w-full py-16">
        <h1 className="text-white text-5xl text-center pb-16">My Skills</h1>
        <div className="w-4/5 mx-auto flex flex-wrap justify-center gap-10">
          {MY_SKILLS.map((skill) => (
            <div
              key={skill.language}
              className="flex flex-col items-center gap-4"
            >
              <img
                src={skill.image}
                alt={skill.language}
                className="w-[92px] h-[82px] transition-all duration-300 ease-in-out hover:animate-spin hover:animate-once"
              />
              <p className="text-white">{skill.language}</p>
            </div>
          ))}
        </div>
      </div>
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

        {/* <div className={styles["my-skills"]}>
          <h4>My Skills</h4>
          <div className={styles["skills-wrapper"]}>
            {MY_SKILLS.map((skill) => (
              <span key={skill} className={styles["skill-item"]}>
                {skill}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
