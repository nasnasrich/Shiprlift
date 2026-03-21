import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

import compas from "../assets/compas.jpg";
import profilnew from "../assets/profilnew.png";

const pages = [
  { name: "About", path: "/About" },
  { name: "Contact", path: "/Contact" },
  { name: "Track", path: "/Track" },
  { name: "Our Services", path: "/OurServices" },
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar
      position="static"
      sx={{
        marginTop: 0,
        backgroundColor: "#2f4f4f",
        paddingTop: 0,
        boxShadow:
          "2px 3px 1px rgba(30,30,31), inset 0 0 5px rgba(25,25,26,0.22)",
        height: { xs: 50, md: 60 },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 50, md: 60 } }}>
          {/* Desktop Logo */}
          <Box
            component="img"
            src={profilnew}
            alt="Logo"
            sx={{
              display: { xs: "none", md: "flex" },
              width: 19,
              borderRadius: "50%",
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "-moz-initial",
              fontWeight: 700,
              letterSpacing: ".0rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SHIPRLIFT
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.name}</Typography>
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
              textDecoration: "none",
              color: "inherit",
              flexGrow: 1,
            }}
          >
            <img
              src={profilnew}
              alt="Logo"
              style={{ width: 16, borderRadius: "50%" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "-moz-initial",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: ".0rem",
                paddingLeft: "1px",
              }}
            >
              SHIPRLIFT
            </Typography>
          </Box>

          {/* Desktop Pages */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center", marginRight: 100 },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  fontSize: 20,
                  color: "white",
                  textTransform: "none",
                  fontFamily: "emoji",
                  backgroundColor: "transparent",
                  "&:hover": {
                    textDecoration: "underline",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* User Icon */}
          <IconButton  onClick={handleOpenUserMenu}>
            <Link to="/Track" style={{ textDecoration: "none", color: "inherit" }}>
              <img src={compas} alt="User Menu" style={{ width: 30, borderRadius: "50%" }} />
            </Link>
          </IconButton>

          {/* <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem component={Link} to="/Track" onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Track</Typography>
            </MenuItem>
          </Menu> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}