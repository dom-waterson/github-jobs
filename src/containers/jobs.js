import React from "react";
import styled from "styled-components/macro";

import { Card } from "../components";
import { useJobs } from "../hooks";

const Container = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 50px auto;
  display: grid;
  grid-row-gap: 80px;
  grid-column-gap: 15px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
  }
`;

export default function JobsContainer() {
  const jobsQuery = useJobs();

  return (
    <Container>
      {jobsQuery.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        jobsQuery.data.map((job) => <Card key={job.id} cardInfo={job} />)
      )}
    </Container>
  );
}
