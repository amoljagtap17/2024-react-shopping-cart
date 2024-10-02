import { Box, Stack } from "@mui/material";
import { ReactNode, useReducer } from "react";
import { RefetchButton, RefreshButton, RenderCount } from "../../../lib";
import { useProducts } from "../ProductList/useProducts";

interface IActionButtonsProps {
  children: ReactNode;
}

export function ActionButtons({ children }: IActionButtonsProps) {
  const { refetch, status } = useProducts();
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <RenderCount bgcolor="error">
      <Stack spacing={2} direction="column">
        <Stack direction="row-reverse" spacing={2}>
          <RefetchButton onClick={refetch} disabled={status === "loading"} />
          <RefreshButton onClick={forceUpdate} />
        </Stack>
        <Box key={ignored}>{children}</Box>
      </Stack>
    </RenderCount>
  );
}
