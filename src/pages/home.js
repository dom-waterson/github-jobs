import React from "react";
import { Jobs, JobFilters } from "../containers";

export default function Home() {
  return (
    <div style={{ position: "absolute", top: "100px", width: "100%" }}>
      <JobFilters />
      <Jobs />
    </div>
  );
}
