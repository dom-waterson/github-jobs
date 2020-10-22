import React from "react";

import { useJobs } from "../hooks";
import { Jobs, JobFilters } from "../containers";

export default function Home() {
  const jobsQuery = useJobs();

  return (
    <div style={{ position: "absolute", top: "100px", width: "100%" }}>
      <JobFilters jobsQuery={jobsQuery} />
      <Jobs jobsQuery={jobsQuery} />
    </div>
  );
}
