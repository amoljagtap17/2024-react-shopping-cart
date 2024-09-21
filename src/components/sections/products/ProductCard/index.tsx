import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { IProduct } from "../../../../app/types";
import { RenderCount } from "../../../lib";
import { FavoriteButton } from "./FavoriteButton";

export function ProductCard(props: IProduct) {
  return (
    <Box position="relative">
      <RenderCount />
      <Card variant="outlined" square>
        <CardHeader title={props.name} subheader={props.price} />
        {/* <CardMedia
        component="img"
        height={150}
        image={props.image}
        alt={props.name}
      /> */}
        <CardContent sx={{ minHeight: 100 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
          <FavoriteButton />
          <Button>Add to Cart</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
