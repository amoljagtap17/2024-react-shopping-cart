import { Badge, Box } from "@mui/material";
import { ReactNode, useRef } from "react";

interface IRenderCountProp {
  bgcolor: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  children: ReactNode;
  component?: "span" | "div";
}

export function RenderCount({
  bgcolor,
  children,
  component = "div",
}: IRenderCountProp) {
  const renderCount = useRef(0);
  const showRenderCount: boolean =
    import.meta.env.VITE_SHOW_RENDER_COUNT === "true";

  renderCount.current += 1;

  return showRenderCount ? (
    <Badge
      color={bgcolor}
      badgeContent={renderCount.current}
      showZero
      max={5000}
      component={component}
      sx={{ display: "block" }}
    >
      {children}
    </Badge>
  ) : (
    <Box>{children}</Box>
  );
}
