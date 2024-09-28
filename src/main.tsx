// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { App } from "./App.tsx";
import { theme } from "./app/mui";
import { CartProvider } from "./app/store";
import { Navbar } from "./components/sections";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <CartProvider>
      <Navbar />

      <Container maxWidth="lg">
        <App />
      </Container>
    </CartProvider>
  </ThemeProvider>
  // </StrictMode>
);
