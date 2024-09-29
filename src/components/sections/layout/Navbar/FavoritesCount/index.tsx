import { Avatar } from "@mui/material";
import { useFavoritesItems } from "../../../../../app/store";
import { RenderCount } from "../../../../lib";

export function FavoritesCount() {
  const favoritesItems = useFavoritesItems();

  return (
    <RenderCount bgcolor="success">
      <Avatar
        variant="rounded"
        sx={{
          bgcolor: "inherit",
          border: "2px solid green",
        }}
      >
        {favoritesItems.length}
      </Avatar>
    </RenderCount>
  );
}
