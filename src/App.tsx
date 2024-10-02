import { RenderCount } from "./components/lib";
import { ActionButtons, ProductList } from "./components/sections";

export function App() {
  return (
    <ActionButtons>
      <RenderCount bgcolor="info">
        <ProductList />
      </RenderCount>
    </ActionButtons>
  );
}
