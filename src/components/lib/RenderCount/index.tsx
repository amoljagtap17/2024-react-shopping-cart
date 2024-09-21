import { Avatar, Box } from "@mui/material";
import { useRef } from "react";

export function RenderCount() {
  const renderCount = useRef(0);

  renderCount.current += 1;

  console.log("count::", renderCount.current);

  return (
    <Box position="absolute" right={-8} top={-8}>
      <Avatar sx={{ width: 24, height: 24, fontSize: 14 }}>
        {renderCount.current}
      </Avatar>
    </Box>
  );
}
