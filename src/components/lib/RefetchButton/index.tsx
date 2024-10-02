import CachedIcon from "@mui/icons-material/Cached";
import { IconButton } from "@mui/material";

interface IRefetchButtonProps {
  onClick: () => void;
}

export function RefetchButton({ onClick }: IRefetchButtonProps) {
  return (
    <IconButton aria-label="refetch query" onClick={onClick}>
      <CachedIcon />
    </IconButton>
  );
}
