import { MY_SKILLS } from "../store/store";

const MySkills = () => {
  return (
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
              className="w-[90px] h-[90px] transition-all duration-300 ease-in-out hover:animate-spin hover:animate-once"
            />
            <p className="text-white">{skill.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
