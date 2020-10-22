import React from "react";

import { Card, Grid } from "../components";
import { useJobs } from "../hooks";

export default function JobsContainer() {
  const jobsQuery = useJobs();

  return (
    <Grid>
      {jobsQuery.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        jobsQuery.data.map((job) => <Card key={job.id} cardInfo={job} />)
      )}
    </Grid>
  );
}
