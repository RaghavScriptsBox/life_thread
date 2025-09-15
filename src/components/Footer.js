import React from 'react';
import {
  Box,
  Typography,
  Link,
  Container,
  Button,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import WhiteLogo from "../Assets/Horizontal wordmark.svg"; // Assuming you have a logo component or image
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { label: 'Products', href: '/product' },
    { label: 'About Us', href: '/aboutUs' },
    { label: 'Contact', href: '/contact' },
  ];

  const navigate = useNavigate()

  const NavigateUser = (url) => {
    console.log("urlzhdsgyuad", url)
    if (url === "/product") {
      // Navigate to home page with state to scroll to catalogue
      navigate("/", { state: { scrollToCatalogue: true } });
    } else {
      navigate(url);
    }
  }

  return (
    <Box sx={{ width: "100%", overflowX: 'hidden', backgroundColor: '#f5f9fa' }}>
      <Box sx={{ backgroundColor: 'transparent', py: 15 }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Box sx={{ maxWidth: "700px", margin: "0 auto" }}>
            <Typography sx={{
              fontFamily: 'Figtree',
              fontWeight: 600,
              fontSize: {
                xs: '30px',
                md: '50px',
                color: "#005A69"
              }
            }} mb={2}>Join Us in Shaping Safety</Typography>
            <Typography sx={{
              fontFamily: 'Figtree',
              fontWeight: 400,
              fontSize: {
                xs: '16px',
                md: '20px',
                lg: '20px'
              }
            }} mb={4}>
              Together, we foster strategies and solutions to safeguard the public via world-class safety garment innovations.
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: "row",
            flexWrap: "wrap",
            mt: "80px",
            gap: { xs: 5, sm: 4, md: 0 },
          }}>
            <Box sx={{
              width: {
                xs: "100%",
                md: "50%",
                xl: "50%"
              },
              minWidth: "300px",
              maxWidth: { xs: "300px", md: "500px" },
              mx: "auto",
            }}>
              <EmailOutlinedIcon sx={{ fontSize: 40, fill: "#005A69" }} />
              <Typography sx={{ fontFamily: "Figtree", fontSize: "24px", fontWeight: 600, color: "#005A69" }} fontWeight="bold">Email</Typography>
              <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#003B49' }}>
                <Link
                  href="mailto:contact@lifethread.co.in"
                  underline="none"
                  component="a"
                  sx={{ color: "#003B49", fontSize: "18px", cursor: "pointer", fontWeight: "500" }}
                >
                  contact@lifethread.co.in
                </Link>
              </Typography>
            </Box>
            <Box sx={{
              width: {
                xs: "100%",
                md: "50%",
                xl: "50%"
              },
              minWidth: "300px",
              maxWidth: { xs: "300px", md: "500px" },
              mx: "auto",
            }}>
              <Link
                href="tel:+919909916599"
                underline="none"
                sx={{ display: "block", mt: 1, fontFamily: "Figtree", fontSize: "14px", color: "#003B49" }}
              >
                <PhoneOutlinedIcon sx={{ fontSize: 40, fill: "#005A69" }} />
                <Typography sx={{ fontFamily: "Figtree", fontSize: "18px", fontWeight: 600, color: "#005A69" }} fontWeight="bold">
                  <Typography sx={{ fontFamily: "Figtree", fontSize: "18px", fontWeight: 600, color: "#005A69" }} fontWeight="bold">Phone</Typography>

                  +91 9909916599
                </Typography>
              </Link>
            </Box>
            <Box sx={{
              width: {
                xs: "100%",
                md: "50%",
                xl: "50%"
              },
              minWidth: "300px",
              maxWidth: { xs: "300px", md: "500px" },
              mt: { xs: "10px", md: "50px" },
              mx: "auto"
            }}>
              <Link
                href="https://maps.app.goo.gl/h3xrnjRhV9mz6WcP9?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{ 
                  display: "block",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "16px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  '&:hover': {
                    backgroundColor: "rgba(0, 90, 105, 0.05)",
                    transform: "translateY(-2px)"
                  }
                }}
              >
                <PlaceOutlinedIcon sx={{ fontSize: 40, fill: "#005A69" }} />
                <Typography sx={{ fontFamily: "Figtree", fontSize: "24px", fontWeight: 600, color: "#005A69" }} fontWeight="bold">Reg. Office</Typography>
                <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#003B49' }}>
                  214, Harmony Icon, Zydus Hospital Road, Nr. Baghban Party Plot, Thaltej Ahmedabad, Gujarat 380059
                </Typography>
              </Link>
            </Box>
            <Box sx={{
              width: {
                xs: "100%",
                md: "50%",
                xl: "50%"
              },
              minWidth: "300px",
              maxWidth: { xs: "300px", md: "500px" },
              mt: { xs: "10px", md: "50px" },
              mx: "auto"
            }}>
              <Link
                href="https://maps.app.goo.gl/MZdKWtwyCawhp2ce8"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{ 
                  display: "block",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "16px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  '&:hover': {
                    backgroundColor: "rgba(0, 90, 105, 0.05)",
                    transform: "translateY(-2px)"
                  }
                }}
              >
                <PlaceOutlinedIcon sx={{ fontSize: 40, fill: "#005A69" }} />
                <Typography sx={{ fontFamily: "Figtree", fontSize: "24px", fontWeight: 600, color: "#005A69" }} fontWeight="bold">Manufacturing Unit</Typography>
                <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#003B49' }}>
                  Plot No C-18/6, Road no-14, Hojiwala Industrial Estate, Sachin Palsana Road, Surat, Gujarat 394230
                </Typography>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box >
      <Box
        sx={{
          bgcolor: '#00778B',
          color: '#fff',
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
          textAlign: 'center',
          position: 'relative',
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%"
        }}
      >
        {/* Logo & Tagline */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 1, md: 2 },
            width: { xs: '100%', md: '400px' },
            mx: 'auto',
            mt: { xs: '20px', md: '30px' },
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: '180px', md: '200px' },
              height: { xs: 'auto', md: 'auto' },
              bgcolor: 'transparent',
              borderRadius: '50%',
              fontWeight: 'bold',
              fontSize: 24,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={WhiteLogo} alt="LifeThread Logo" style={{ width: '100%', height: '100%' }} />
          </Box>
        </Box>

        {/* Nav Links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'space-between' },
            gap: { xs: 2, sm: 4 },
            my: { xs: 2, md: 3 },
            flexWrap: 'wrap',
            maxWidth: { xs: "300px", sm: "400px" },
            mx: "auto",
            mb: { xs: "40px", md: "70px" }
          }}
        >
          {navItems.map(({ label, href }) => (
            <Button
              key={label}
              color="inherit"
              className="nav-link"
              sx={{
                fontFamily: "Roboto, sans-serif",
                color: "#fff",
                fontWeight: 500,
                px: 2,
                fontSize: 16,
                letterSpacing: 0.1,
                textTransform: "none",
                "&:hover": {
                  color: "#fff",
                  bgcolor: "transparent",
                },
              }}
              onClick={() => { NavigateUser(href) }}
            >
              {label}
            </Button>
          ))}
        </Box>

        <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.5)', my: { xs: 2, md: 4 } }} />

        {/* Bottom Legal */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Typography sx={{
            fontSize: { xs: 12, sm: 14 },
            color: '#fff',
            fontFamily: "Inter"
          }}>&copy; {new Date().getFullYear()} LifeThread. All rights reserved.</Typography>
        </Box>
      </Box >
    </Box>
  );
};

export default Footer;
