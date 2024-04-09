import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getFromStorage,
  saveToStorage,
} from "@utils/storage";

type Theme = "light" | "dark";

interface IThemeContextData {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps extends React.PropsWithChildren { }

const ThemeContextData: IThemeContextData = {
  theme: "light",
  toggleTheme: () => null,
};

const ThemeContext = createContext(ThemeContextData);

const STORAGE_THEME_KEY = "@theme-storage";

function ThemeProvider({
  children,
}: ThemeProviderProps) {

  const [theme, setTheme] = useState<Theme>(() => {
    const themeFromStorage = getFromStorage(STORAGE_THEME_KEY) as Theme;

    if (themeFromStorage) {
      if (themeFromStorage === "dark") return "dark";
      return "light";
    }

    const preferredTheme = window?.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    return preferredTheme;
  });

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => {
      if (currentTheme === "light") return "dark";
      return "light";
    });
  }, []);

  useEffect(() => {
    saveToStorage(STORAGE_THEME_KEY, theme);
    document?.documentElement?.setAttribute("data-theme", theme);
  }, [theme]);

  const providerValue = useMemo<IThemeContextData>(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must' +
      ' be used within a ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
