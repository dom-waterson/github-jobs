import styled from "styled-components/macro";

export const Content = styled.div`
  border-radius: 5px;
  padding: 20px 50px;
  background-color: ${({ theme }) => theme.containerBackground};
  border: 1px solid ${({ theme }) => theme.containerBorder};
`;
