import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { IProduct } from "app/types";

export function ProductCard(props: IProduct) {
  return (
    <Card>
      <CardHeader title={props.name} subheader={props.price} />
      <CardMedia
        component="img"
        height={200}
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
