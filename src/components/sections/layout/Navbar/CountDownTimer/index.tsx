import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { RenderCount } from "../../../../lib";

export function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <RenderCount bgcolor="success">
      <Typography variant="h5" component="div" paddingX={2}>
        {minutes}:{seconds}
      </Typography>
    </RenderCount>
  );
}
