import { WorkExp } from "../store/store";

interface JobProps {
  job: WorkExp;
}

const JobCard = ({ job }: JobProps) => {
  return (
    <div className="w-full md:h-[280px] p-5 md:pl-0 flex flex-col md:flex-row border-l-4 md:border-l-8 border-l-yellow shadow-lg shadow-black bg-black rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out font-sans mb-10">
      <div className="mb-8 md:mb-0 md:h-full md:flex md:items-center">
        <img
          src={job.image}
          alt={job.companyName}
          className="w-24 xxl:w-32 h-24 xxl:h-32 rounded-full mx-auto bg-center md:mx-12 xxl:mx-24"
        />
      </div>
      <div className="text-white flex flex-col text-center md:text-left md:justify-center gap-4 md:gap-5 w-full md:w-2/5 mb-8 md:mb-0">
        <p className="font-bold text-2xl">{job.jobTitle}</p>
        <p className="text-xl font-semibold">
          {job.companyName} | {job.employmentType}
        </p>
        <p className="text-xl font-semibold">
          {job.startDate} - {job.endDate}
        </p>
      </div>
      <div className="flex flex-col justify-between md:justify-around items-center md:items-start py-2 w-full md:w-2/5">
        <p className="font-semibold text-white text-center text-sm xl:text-base md:text-left mb-5 md:mb-0">
          {job.description}
        </p>

        <ul className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 text-white">
          {job.skills.map((skill) => (
            <li
              className="p-1 xl:px-2 bg-gray-dark rounded-md text-sm md:text-base"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobCard;
