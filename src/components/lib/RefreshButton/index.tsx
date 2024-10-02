import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";

interface IRefetchButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function RefreshButton({ onClick, disabled }: IRefetchButtonProps) {
  return (
    <IconButton
      aria-label="refresh component"
      onClick={onClick}
      disabled={disabled}
    >
      <RefreshIcon />
    </IconButton>
  );
}
