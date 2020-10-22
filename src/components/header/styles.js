import styled from "styled-components/macro";

import { Container } from "../layout";

export const Header = styled.header`
  background-color: #22277a;
  padding: 30px 0 80px 0;

  svg {
    color: white;
  }

  svg:hover {
    cursor: pointer;
  }
`;

export const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 200px;
`;
