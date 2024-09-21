import { Box } from "@mui/material";
import { RenderCount } from "./components/lib";
import { ProductList } from "./components/sections";

export function App() {
  return (
    <Box position="relative">
      <RenderCount />
      <ProductList />
    </Box>
  );
}
