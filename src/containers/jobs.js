import React from "react";

import { Card, Grid } from "../components";

export default function JobsContainer({ jobsQuery }) {
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
