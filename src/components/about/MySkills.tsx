import { MY_SKILLS } from "../../store/store";
import SectionHeading from "../UI/SectionHeading";
import Skill from "../UI/Skill";

const MySkills = () => {
  return (
    <div className="w-full py-10">
      <SectionHeading>My Skills</SectionHeading>
      <div className="w-full lg:w-4/5 mx-auto flex flex-wrap justify-center gap-9 lg:gap-11 xxl:gap-12 xxxl:gap-16">
        {MY_SKILLS.map((skill) => (
          <Skill
            key={skill.language}
            image={skill.image}
            language={skill.language}
          />
        ))}
      </div>
    </div>
  );
};

export default MySkills;
