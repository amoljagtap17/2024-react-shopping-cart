// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lazy, Suspense } from "react";
import { theme } from "./app/mui";
import { CartProvider, FavoritesProvider } from "./app/store";
import { Navbar } from "./components/sections";

const App = lazy(() =>
  import("./App.tsx").then((module) => ({ default: module.App }))
);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <CartProvider>
      <FavoritesProvider>
        <Navbar />

        <Container maxWidth="lg">
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </Container>
      </FavoritesProvider>
    </CartProvider>
  </ThemeProvider>
  // </StrictMode>
);
