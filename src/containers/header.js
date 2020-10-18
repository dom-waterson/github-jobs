import React, { useContext } from "react";
import Toggle from "react-styled-toggle";
import { Sun, Moon } from "styled-icons/feather";

import { Header } from "../components";
import { ThemeContext } from "../context";

export default function HeaderContainer() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Header>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Sun size={28} />
        <Toggle checked={theme === "dark"} onChange={toggleTheme} />
        <Moon size={28} />
      </div>
    </Header>
  );
}
