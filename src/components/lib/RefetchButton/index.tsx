import CachedIcon from "@mui/icons-material/Cached";
import { IconButton } from "@mui/material";

interface IRefetchButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export function RefetchButton({ onClick, disabled }: IRefetchButtonProps) {
  return (
    <IconButton
      aria-label="refetch query"
      onClick={onClick}
      disabled={disabled}
    >
      <CachedIcon />
    </IconButton>
  );
}
