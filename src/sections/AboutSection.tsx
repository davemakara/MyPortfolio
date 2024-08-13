import MySkills from "../components/about/MySkills";
import WorkCards from "../components/about/WorkCards";

const AboutSection = () => {
  return (
    <section className="w-full px-5 md:pb-5 mb-10">
      <MySkills />
      <WorkCards />
    </section>
  );
};

export default AboutSection;
