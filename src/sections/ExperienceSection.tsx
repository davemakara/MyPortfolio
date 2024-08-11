import JobCard from "../components/JobCard";

import { WORK_EXPERIENCE } from "../store/store";

const ExperienceSection = () => {
  return (
    <section className="w-full p-10 flex justify-center">
      <div className="w-full xl:w-4/5 xxl:w-3/5">
        <p className="text-white text-2xl lg:text-5xl text-center pb-12 lg:pb-16">
          Work Experience
        </p>
        {WORK_EXPERIENCE.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        <div className="w-[6px] h-12 bg-white mx-auto rounded-sm"></div>
      </div>
    </section>
  );
};

export default ExperienceSection;
