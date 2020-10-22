import React, { useContext } from "react";
import { Sun, Moon } from "styled-icons/feather";

import { Header } from "../components";
import { ThemeContext } from "../context";

export default function HeaderContainer() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Header>
      <div>
        {theme === "dark" ? (
          <Moon size={28} onClick={toggleTheme} title="Dark mode theme" />
        ) : (
          <Sun size={28} onClick={toggleTheme} title="Light mode theme" />
        )}
      </div>
    </Header>
  );
}
