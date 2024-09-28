import { RenderCount } from "./components/lib";
import { ProductList } from "./components/sections";

export function App() {
  return (
    <RenderCount bgcolor="info">
      <ProductList />
    </RenderCount>
  );
}
