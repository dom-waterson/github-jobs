import React from "react";
import styled from "styled-components/macro";
import moment from "moment";

const Container = styled.div`
  border-radius: 5px;
  padding: 20px 50px;
  background-color: ${({ theme }) => theme.containerBackground};
`;

const JobInfo = styled.p`
  color: grey;
`;

const JobTitle = styled.h1`
  color: ${({ theme }) => theme.textColour};
`;

const Location = styled.p`
  color: #2044e4;
`;

const CompanyName = styled.p`
  color: grey;
`;

export default function CardComponent({ cardInfo }) {
  const { type, created_at, company, location, title } = cardInfo;
  return (
    <Container>
      <JobInfo>
        {moment(Date.parse(created_at)).fromNow()} &bull; {type}
      </JobInfo>
      <JobTitle>{title}</JobTitle>
      <CompanyName>{company}</CompanyName>
      <Location>{location}</Location>
    </Container>
  );
}
