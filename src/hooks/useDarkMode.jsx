import { useEffect, useState } from "react";

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.theme === "dark"
  );
  console.log(
    "🚀 ~ file: useDarkMode.jsx:7 ~ useDarkMode ~ isDarkMode:",
    isDarkMode
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Get all element in document
    const html = window.document.documentElement;
    const prev = isDarkMode ? "light" : "dark";
    html.classList.remove(prev);
    const next = isDarkMode ? "dark" : "light";
    html.classList.add(next);
    localStorage.setItem("theme", next);
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
