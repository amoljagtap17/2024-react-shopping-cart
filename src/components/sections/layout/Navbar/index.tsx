import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
// import { CountDownTimer } from "./CountDownTimer";
import { FavoritesCount } from "./FavoritesCount";
import { ShoppingCartButton } from "./ShoppingCartButton";

function Menu() {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
  );
}

export function Navbar() {
  return (
    <Box>
      <AppBar position="static" square elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Menu />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexGrow={1}
            >
              <Typography variant="h6" component="div">
                Shopping App
              </Typography>
              {/* <CountDownTimer /> */}
              <Box
                width={100}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <FavoritesCount />
                <ShoppingCartButton />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
