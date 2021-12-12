import React from "react";
import { Job } from "../types/Job";

// Take the Job as a prop
interface Props {
  job: Job;
}

const JobCard: React.FC<Props> = ({ job }) => {
  // Randomly select the color for company initial
  let colors = ["bg-blue-700", "bg-pink-800", "bg-purple-600"];
  let selectedColor = colors[Math.floor(Math.random() * colors.length)];

  //   Render varius Job properties on the card
  return (
    <div className="w-96 border shadow-sm p-3 cursor-pointer m-3">
      <div className="flex">
        <div className="px-2">
          <p className={`${selectedColor} px-4 py-2 rounded-sm text-white`}>
            {job.companyInitial}
          </p>
        </div>
        <div>
          <h1 className="font-semibold items-center text-lg flex justify-between">
            {job.jobTitle}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </span>
          </h1>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-sm text-gray-700 font-semibold">
                {job.companyName}
              </h4>
              <h5 className="text-sm text-gray-700 font-normal">
                {job.location}
              </h5>
            </div>
            <div className="text-xs font-normal text-gray-600 bg-gray-100 text-center flex items-center h-6 p-2 rounded-sm">
              Opens New Tab
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-btn-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
          <p className="mt-3 text-para text-gray-600">{job.shortDesc}...</p>
          <div className="mt-3 flex justify-between items-center text-gray-500 text-xs">
            <span>{job.estimatedSalary}</span>
            <span>{job.postedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
