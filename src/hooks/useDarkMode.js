import { useState } from "react";

const localStorageKey = "github-jobs-theme";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const localTheme = window.localStorage.getItem(localStorageKey);
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !localTheme
      ? "dark"
      : localTheme
      ? localTheme
      : "light";
  });

  const setMode = (mode) => {
    window.localStorage.setItem(localStorageKey, mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return [theme, toggleTheme];
};
