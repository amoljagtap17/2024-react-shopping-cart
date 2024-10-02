import { Badge } from "@mui/material";
import { ReactNode, useRef } from "react";

interface IRenderCountProp {
  bgcolor: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  children: ReactNode;
}

export function RenderCount({ bgcolor, children }: IRenderCountProp) {
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <Badge
      color={bgcolor}
      badgeContent={renderCount.current}
      showZero
      max={5000}
      component="div"
      sx={{ display: "block" }}
    >
      {children}
    </Badge>
  );
}
