import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";

export const ThemeContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export default function ThemeProvider({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
