import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";



import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import compas from "../assets/compas.jpg";
import profilnew from "../assets/profilnew.png";

const pages = [
  { name: 'About', path: '/About' },
  { name: 'Contact', path: '/Contact' },
  { name: 'Track', path: '/Track' },
  { name: 'Our Services', path: '/OurServices' }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  // CART CONTEXT
  const { cart = [] } = useCart();
  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <AppBar
      position="static"
      sx={{
        marginTop:0,
        height:60,
        backgroundColor: "#2f4f4f",  paddingTop: 0,
        boxShadow: "2px 3px 1px rgba(30, 30, 31), inset 0 0 5px rgba(25, 25, 26, 0.22)",
      }}
    >
      <Container maxWidth="x100">
        <Toolbar disableGutters>

        {/* Desktop Logo */}
        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr:0}} /> */}
        <Box
        component="img" src={profilnew}
        alt="User Icon"
        sx={{
        display: { xs: "none", md: "flex" },
        width: 19,
        borderRadius: "50%",
        mr: 1,
         }}/>

        <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              paddingLeft:0,
              marginTop:0,
              paddingTop:0,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SHIPRLIFT
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',}}}>
            <IconButton
              size="large"
              aria-label="open navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
             {pages.map((page) => (
        <MenuItem
        key={page.name}
         component={Link}
        to={page.path}
        onClick={handleCloseNavMenu}
        >
       <Typography textAlign="center">
        {page.name}
        </Typography>
        </MenuItem>
        ))}
          </Menu>
          </Box>

          {/* Mobile Logo */}
<Box
  component={Link}
  to="/"
  sx={{
    display: { xs: "flex", md: "none" },
    alignItems: "center",
    gap: 0,
    height: 20,
    marginTop:0,
    textDecoration: "none",
    color: "inherit",
    flexGrow: 1
  }}
>
  <img
    src={profilnew}
    alt="User Icon"
    style={{ width: 16, borderRadius: "50%" }}
  />

  <Typography
    variant="h6"
    sx={{
      fontFamily: "monospace",
      fontSize: 23,
      fontWeight: 700,
      letterSpacing: ".0rem",
      paddingLeft:"2px",
    }}
  >
    SHIPRLIFT
  </Typography>
</Box>

          {/* Desktop Pages */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
              
            ))}
          </Box>

          {/* Cart + User */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton component={Link} to="/Cart" sx={{ color: "white" }}>
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon sx={{ fontSize: 28 }} />
              </Badge>
            </IconButton>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img src={compas} alt="User Icon" style={{ width: 30, borderRadius: '50%' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
