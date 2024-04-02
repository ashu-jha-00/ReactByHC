import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "",
  lightMode: () => {},
  darkMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
  return useContext(ThemeContext);
};
