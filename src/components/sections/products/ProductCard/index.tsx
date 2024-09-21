import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { IProduct } from "../../../../app/types";

export function ProductCard(props: IProduct) {
  return (
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
