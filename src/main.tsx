// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Box, Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lazy, Suspense } from "react";
import { theme } from "./app/mui";
import { CartProvider, FavoritesProvider } from "./app/store";
import { Spinner } from "./components/lib";
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
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />

          <Container
            maxWidth="lg"
            sx={{ flexGrow: 1, position: "relative", height: "100%" }}
          >
            <Suspense fallback={<Spinner />}>
              <App />
            </Suspense>
          </Container>
        </Box>
      </FavoritesProvider>
    </CartProvider>
  </ThemeProvider>
  // </StrictMode>
);
