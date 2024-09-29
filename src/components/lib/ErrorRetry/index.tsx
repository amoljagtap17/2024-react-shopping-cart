import { Box, Button, Stack, Typography } from "@mui/material";
import { AxiosError } from "axios";

interface IErrorRetryProps {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  error: AxiosError;
}

export function ErrorRetry({ onClickHandler, error }: IErrorRetryProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
      minWidth="100%"
    >
      <Stack spacing={1}>
        <Typography variant="body1">
          {error.message ?? "Oops.. Something went wrong!"}
        </Typography>
        <Button variant="text" onClick={onClickHandler}>
          Retry
        </Button>
      </Stack>
    </Box>
  );
}
