import { Badge } from "@mui/material";
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

  renderCount.current += 1;

  return (
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
  );
}
