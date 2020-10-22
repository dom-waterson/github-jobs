import React from "react";
import moment from "moment";

import { Content } from "../layout";
import { JobInfo, JobTitle, CompanyName, Location } from "./styles";

export default function CardComponent({ cardInfo }) {
  //TODO this needs moving out
  const { type, created_at, company, location, title } = cardInfo;
  return (
    <Content>
      <JobInfo>
        {moment(Date.parse(created_at)).fromNow()} &bull; {type}
      </JobInfo>
      <JobTitle>{title}</JobTitle>
      <CompanyName>{company}</CompanyName>
      <Location>{location}</Location>
    </Content>
  );
}
