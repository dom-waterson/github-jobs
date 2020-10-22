import styled from "styled-components/macro";

import { Container } from "./container";
import { devices } from "../../media-breakpoints";

export const Grid = styled(Container)`
  margin: 50px auto;
  display: grid;
  grid-row-gap: 80px;
  grid-column-gap: 15px;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
  }
`;
