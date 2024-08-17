type SkillProps = {
  image: string;
  language: string;
};

const Skill = ({ image, language }: SkillProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        src={image}
        alt={language}
        className="w-[50px] md:w-[70px] lg:w-[90px] h-[50px] md:h-[70px] lg:h-[90px] transition-all duration-300 ease-in-out hover:animate-spin hover:animate-once"
      />
      <p className="text-white text-xs lg:text-base tracking-wide">
        {language}
      </p>
    </div>
  );
};

export default Skill;
