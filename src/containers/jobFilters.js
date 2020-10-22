import React from "react";
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";
import { Location } from "@styled-icons/icomoon/Location";

import { Container, Content, Input, Button, Checkbox } from "../components";

export default function JobFilters() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
          <Input
            id="search-filter"
            placeholder="Filter by title, companies, expertise..."
            label={<SearchAlt2 width={20} />}
          />
          <Input
            id="location-filter"
            placeholder="Filter by location..."
            label={<Location width={20} />}
          />
          <Checkbox id="full-time-filter" label="Full Time only" />
          <Button>Search</Button>
        </form>
      </Content>
    </Container>
  );
}
