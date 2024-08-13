import JobCard from "../JobCard";

import { WORK_EXPERIENCE } from "../../store/store";

const WorkCards = () => {
  return (
    <div className="w-full px-10 pt-16 lg:pt-24 flex justify-center">
      <div className="w-full xl:w-4/5 xxl:w-3/5">
        <p className="text-white text-2xl lg:text-5xl text-center tracking-wider pb-12 lg:pb-16">
          Work Experience
        </p>
        {WORK_EXPERIENCE.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default WorkCards;
