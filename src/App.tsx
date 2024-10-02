import { Stack } from "@mui/material";
import { RenderCount } from "./components/lib";
import { ProductList } from "./components/sections";
import { ActionButtons } from "./components/sections/products";

export function App() {
  return (
    <Stack spacing={2}>
      <ActionButtons />
      <RenderCount bgcolor="info">
        <ProductList />
      </RenderCount>
    </Stack>
  );
}
