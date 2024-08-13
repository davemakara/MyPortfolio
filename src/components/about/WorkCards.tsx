import JobCard from "../JobCard";

import { WORK_EXPERIENCE } from "../../store/store";
import SectionHeading from "../UI/SectionHeading";

const WorkCards = () => {
  return (
    <div className="w-full px-2 sm:px-14 pt-16 lg:pt-24 flex justify-center">
      <div className="w-full xl:w-4/5 xxl:w-3/5">
        <SectionHeading>Work Experience</SectionHeading>
        {WORK_EXPERIENCE.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default WorkCards;
