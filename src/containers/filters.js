import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1000px;

  background-color: ${({ theme }) => theme.containerBackground};
  border-radius: 5px;
  padding: 5px 20px;
`;

export default function FiltersContainer() {
  return (
    <Container>
      <h1>Filters go here</h1>
    </Container>
  );
}
