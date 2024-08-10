import RandomImg from "../assets/projects/joblisting.png";

const ExperienceSection = () => {
  return (
    <section className="w-full p-5 md:p-10 flex justify-center">
      <div className="w-full xl:w-4/5 xxl:w-3/5">
        <p className="text-white text-2xl lg:text-5xl text-center pb-12 lg:pb-16">
          Work Experience
        </p>
        <div className="w-full md:h-[240px] p-5 md:pl-0 flex flex-col md:flex-row border-4 border-white shadow-lg shadow-black bg-black rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out font-serif">
          <div className="mb-8 md:mb-0 md:h-full md:flex md:items-center px-12 xxl:px-20">
            <img
              src={RandomImg}
              alt="pic"
              className="w-24 xxl:w-32 h-24 xxl:h-32 rounded-full mx-auto"
            />
          </div>
          <div className="text-white text-xl flex flex-col text-center md:text-left md:justify-center gap-4 w-full md:w-2/5 mb-8 md:mb-0">
            <p>React.js Developer</p>
            <p>Enagram.ai</p>
            <p>Jun 2023 - Present</p>
          </div>
          <div className="flex flex-col justify-between md:justify-around items-center md:items-start py-2 w-full md:w-2/5">
            <p className="text-white text-center md:text-left">
              dssd sd sdsdsd sdsdsdsdsdsds sd sddsdsdsd sdsdsdsdsd sdsdsdsdsd
              sdsdsdsdsdsd sdsdsdsdsdsd
            </p>

            <ul className="flex gap-4 text-white">
              <li className="p-1 bg-green rounded-md">React.js</li>
              <li className="p-1 bg-green rounded-md">Typescript</li>
              <li className="p-1 bg-green rounded-md">Tailwind</li>
              <li className="p-1 bg-green rounded-md">Github</li>
            </ul>
          </div>
        </div>
        <div className="w-2 h-10 bg-white mx-auto rounded-sm"></div>
        <div className="w-full md:h-[240px] p-5 md:pl-0 flex flex-col md:flex-row border-4 border-white shadow-lg shadow-black bg-black rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out font-serif">
          <div className="mb-8 md:mb-0 md:h-full md:flex md:items-center px-12 xxl:px-20">
            <img
              src={RandomImg}
              alt="pic"
              className="w-24 xxl:w-32 h-24 xxl:h-32 rounded-full mx-auto"
            />
          </div>
          <div className="text-white text-xl flex flex-col text-center md:text-left md:justify-center gap-4 w-full md:w-2/5 mb-8 md:mb-0">
            <p>React.js Developer</p>
            <p>Enagram.ai</p>
            <p>Jun 2023 - Present</p>
          </div>
          <div className="flex flex-col justify-between md:justify-around items-center md:items-start py-2 w-full md:w-2/5">
            <p className="text-white text-center md:text-left">
              dssd sd sdsdsd sdsdsdsdsdsds sd sddsdsdsd sdsdsdsdsd sdsdsdsdsd
              sdsdsdsdsdsd sdsdsdsdsdsd
            </p>

            <ul className="flex gap-4 text-white">
              <li className="p-1 bg-green rounded-md">React.js</li>
              <li className="p-1 bg-green rounded-md">Typescript</li>
              <li className="p-1 bg-green rounded-md">Tailwind</li>
              <li className="p-1 bg-green rounded-md">Github</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
