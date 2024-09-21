import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#003049",
    },
    secondary: {
      main: "#669bbc",
    },
    error: {
      main: "#c1121f",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
