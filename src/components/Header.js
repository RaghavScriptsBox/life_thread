import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../Styles/Header.css"; // import the CSS below!
import BrandLogo from "../Assets/Logo.jpg"; // Example logo path, update as needed
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Products", href: "product" },
  { label: "About Us", href: "aboutUs" },
  { label: "Contact", href: "contact" },
];

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownMobileOpen, setDropdownMobileOpen] = useState(false);

  const navigate = useNavigate()

  // Responsive: only show on mobile
  const isMobile = () =>
    window.matchMedia("(max-width:900px)").matches;

  const NavigateUser = (url) => {
    console.log("urlzhdsgyuad", url)
    navigate(url)
  }

  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        background:
          "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 24px 0 rgba(40,44,63,0.05)",
        transition: "all 0.2s",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: '100vw',
          margin: "0 auto",
          width: "100%",
          px: { xs: 2, md: 8 },
          height: { xs: 64, md: 72 },
          minHeight: { xs: 56, md: 72 },
          display: "flex",
          justifyContent: "space-between",
        }}
        disableGutters
      >
        {/* Logo Area */}
        <Box
          className="header-logo"
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            fontWeight: 700,
            letterSpacing: 1,
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          {/* Example logo: */}
          <img
            src={BrandLogo}
            alt="Logo"
            style={{ height: 38, marginRight: 10 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              fontSize: 20,
              color: "#16191A",
              fontFamily: "Inter, sans-serif",
              color: "#007C91"
            }}
          >
            Life Thread
          </Typography>
        </Box>
        {/* Desktop Nav Links */}
        <Box
          className="nav-links-container"
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {/* Navigation */}
          {navLinks.map((link, idx) =>
            <Button
              key={link.label}
              color="inherit"
              className="nav-link"
              sx={{
                fontFamily: "Roboto, sans-serif",
                color: "#16191A",
                fontWeight: 500,
                px: 2,
                fontSize: 16,
                letterSpacing: 0.1,
                textTransform: "none",
                "&:hover": {
                  color: "#1976d2",
                  bgcolor: "transparent",
                },
              }}
              onClick={() => { NavigateUser(link.href) }}
            >
              {link.label}
            </Button>
          )}
        </Box>
        {/* Login Button (Desktop) */}
        <Button
          variant="outlined"
          color="primary"
          sx={{
            height: 40,
            fontSize: 16,
            fontWeight: 600,
            borderRadius: 2,
            ml: { xs: 0, md: 2 },
            px: 2.5,
            borderColor: "#007C91",
            color: "#fff",
            background: "#007C91",
            boxShadow: "none",
            textTransform: "none",
            display: { xs: "none", md: "inline-flex" },
            "&:hover": {
              borderColor: "#1565c0",
              background: "rgba(25,118,210,0.12)",
            },
          }}
        >
          Request a Quote
        </Button>
        {/* Hamburger Icon (Mobile) */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { md: "none" } }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon sx={{ fontSize: 30, color: "#16191A" }} />
        </IconButton>
        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: 270,
              bgcolor: "rgba(255,255,255,0.97)",
              pt: 2,
            },
          }}
        >
          {/* Logo and Close */}
          <Box sx={{ px: 2, mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <img src="/logo192.png" alt="Logo" style={{ height: 34 }} />
            <Typography variant="subtitle1" fontWeight={800}>BrandName</Typography>
          </Box>
          <List>
            {navLinks.map((link, idx) =>
              !link.dropdown ? (
                <ListItem key={link.label} disablePadding>
                  <ListItemButton
                    component="a"
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      borderRadius: 1,
                      px: 2.5,
                      py: 1,
                      fontWeight: 500,
                      color: "#16191A",
                    }}
                  >
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ) : (
                <React.Fragment key={link.label}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => setDropdownMobileOpen((v) => !v)}
                      sx={{
                        borderRadius: 1,
                        px: 2.5,
                        py: 1,
                        fontWeight: 500,
                        color: "#16191A",
                        justifyContent: "space-between",
                      }}
                    >
                      <ListItemText primary={link.label} />
                      <ExpandMoreIcon
                        sx={{
                          transition: "0.2s",
                          transform: dropdownMobileOpen
                            ? "rotate(-180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  {/* Dropdown in mobile */}
                  {dropdownMobileOpen &&
                    link.dropdown.map((item) => (
                      <ListItem key={item.label} sx={{ pl: 3 }} disablePadding>
                        <ListItemButton
                          component="a"
                          href={item.href}
                          onClick={() => setDrawerOpen(false)}
                          sx={{ borderRadius: 1, px: 2, color: "#16191A" }}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                </React.Fragment>
              )
            )}

          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
