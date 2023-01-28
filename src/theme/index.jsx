import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import GlobalStyles from "./globalStyles";

export default function ThemeConfig({ children }) {
  const themeOptions = {
    palette: {
      type: "dark",
      primary: {
        main: "#EC6126",
      },
      background: {
        default: "#0E0E0E",
        paper: "#0E0E0E",
      },
      text: {
        primary: "#fff",
      },
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
