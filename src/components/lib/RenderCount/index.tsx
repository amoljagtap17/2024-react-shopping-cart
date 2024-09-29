import { Badge } from "@mui/material";
import { ReactNode, useRef } from "react";

interface IRenderCountProp {
  bgcolor: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  children: ReactNode;
}

export function RenderCount({ bgcolor, children }: IRenderCountProp) {
  const renderCount = useRef(0);

  renderCount.current += 1;

  /* return (
    <Box position="absolute" right={-8} top={-8}>
      <Avatar
        sx={{
          width: 24,
          height: 24,
          fontSize: 14,
          bgcolor: bgcolorArray[bgcolor],
        }}
      >
        {renderCount.current}
      </Avatar>
    </Box>
  ); */

  return (
    <Badge
      color={bgcolor}
      badgeContent={renderCount.current}
      showZero
      max={5000}
    >
      {children}
    </Badge>
  );
}
