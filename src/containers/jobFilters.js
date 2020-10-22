import React from "react";
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";
import { Location } from "@styled-icons/icomoon/Location";

import { Container, Content, Input, Button, Checkbox } from "../components";

export default function JobFilters({ jobsQuery }) {
  const [state, setState] = React.useState({
    full_time: false,
    description: "",
    location: "",
  });

  function handleChange(e) {
    setState({ ...state, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    jobsQuery.fetch(state);
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
          <Input
            id="description"
            placeholder="Filter by title, companies, expertise..."
            label={<SearchAlt2 width={20} />}
            onChange={handleChange}
            value={state.description}
          />
          <Input
            id="location"
            placeholder="Filter by location..."
            label={<Location width={20} />}
            onChange={handleChange}
            value={state.location}
          />
          <Checkbox
            id="full_time"
            label="Full Time only"
            checked={state.full_time}
            onChange={handleChange}
          />
          <Button>Search</Button>
        </form>
      </Content>
    </Container>
  );
}
