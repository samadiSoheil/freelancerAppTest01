import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isOpenSidebar, setISopenSidebar] = useState(false);
  const [isDark, setIsDark] = useState(
    JSON.parse(
      localStorage.getItem("isDark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
    )
  );
  const changeThemeFun = () => {
    setIsDark((prevIs) => !prevIs);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("isDark", JSON.stringify(isDark));
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("isDark", JSON.stringify(isDark));
    }
  }, [isDark]);

  console.log(JSON.parse(localStorage.getItem("isDark")));
  return (
    <ThemeContext.Provider
      value={{ isDark, changeThemeFun, isOpenSidebar, setISopenSidebar }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;
