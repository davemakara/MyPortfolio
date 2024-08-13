import { MY_SKILLS } from "../../store/store";

const MySkills = () => {
  return (
    <div className="w-full py-10">
      <h1 className="text-white text-2xl lg:text-5xl text-center tracking-wider pb-12 lg:pb-16">
        My Skills
      </h1>
      <div className="w-full lg:w-4/5 mx-auto flex flex-wrap justify-center gap-9 lg:gap-11 xxl:gap-12">
        {MY_SKILLS.map((skill) => (
          <div
            key={skill.language}
            className="flex flex-col items-center gap-4"
          >
            <img
              src={skill.image}
              alt={skill.language}
              className="w-[50px] md:w-[70px] lg:w-[90px] h-[50px] md:h-[70px] lg:h-[90px] transition-all duration-300 ease-in-out hover:animate-spin hover:animate-once"
            />
            <p className="text-white text-xs lg:text-base">{skill.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
