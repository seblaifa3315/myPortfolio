import { createContext, useContext } from "react";
import useDarkMode from "../hooks/usedarkMode";
import useAccent from "../hooks/useAccent";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useDarkMode();
  const [colorTheme, setColorTheme] = useAccent();

  return (
    <ThemeContext.Provider value={{ dark, setDark, colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
