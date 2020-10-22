import styled from "styled-components/macro";

import { Container } from "./container";

export const Grid = styled(Container)`
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
