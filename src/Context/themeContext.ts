import { createContext, useContext } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => {
  if (!ThemeContext) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return useContext(ThemeContext);
};
