import React from "react";
import Footer from "../../components/Footer";
import JobCard from "../../components/JobCard";
import { Navbar } from "../../components/Navbar";
import Toolbar from "../../components/Toolbar";
import { JobResult } from "../../types/Job";

interface Props {
  jobResult: JobResult;
}

const Jobs: React.FC<Props> = ({ jobResult }) => {
  // Extract The jobs
  const { jobs } = jobResult;
  return (
    <div>
      <Navbar />
      <div className="flex justify-center border-b-2">
        <div className="flex justify-start w-1/2 lg:text-3xl text-xl py-4">
          {jobResult.totalJobs} Jobs Near Me
        </div>
      </div>
      <br />
      <Toolbar />
      {/* Loop through the jobs and render the Job Card */}
      {jobs?.map((job: any) => (
        <div
          className="flex flex-col justify-center items-center"
          key={job.jobId}
        >
          <JobCard job={job} />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Jobs;

// Server side rendering for fetching the jobs data
export const getServerSideProps = async () => {
  // Fetching the data and converting it to json
  const request = await fetch("https://www.zippia.com/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: "Data Analyst",
      locations: ["NY"],
      numJobs: 20,
      previousListingHashes: [],
    }),
  });

  //   Convert the data to json
  const jobResult: JobResult = await request.json();

  return {
    props: {
      jobResult,
    },
  };
};
