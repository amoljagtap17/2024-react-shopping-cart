import { Stack } from "@mui/material";
import { RefetchButton } from "../../../lib";
import { useProducts } from "../ProductList/useProducts";

export function ActionButtons() {
  const { refetch } = useProducts();

  return (
    <Stack direction="row-reverse">
      <RefetchButton onClick={refetch} />
    </Stack>
  );
}
