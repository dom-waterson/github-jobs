import React from "react";
import { Jobs, Filters } from "../containers";

export default function Home() {
  return (
    <div style={{ position: "absolute", top: "100px", width: "100%" }}>
      <Filters />
      <Jobs />
    </div>
  );
}
