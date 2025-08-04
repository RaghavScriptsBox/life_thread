import React from 'react';
import {
  Box,
  Typography,
  Link,
  Container,
} from '@mui/material';
import FooterLogo from "../Assets/FooterLogo.png"; // Assuming you have a logo component or image
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const Footer = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: '#ffffffff', py: 15 }}>
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
            mt: "80px"
          }}>
            <Box sx={{
              width: {
                xs: "100%",
                md: "50%",
                xl: "50%"
              },
              minWidth: "400px"
            }}>
              <EmailOutlinedIcon sx={{ fontSize: 40, fill: "#005A69" }} />
              <Typography sx={{ fontFamily: "Figtree", fontSize: "24px", fontWeight: 600, color: "#005A69" }} fontWeight="bold">Email</Typography>
              <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#003B49' }}>contact@lifethread.in</Typography>
            </Box>
            <Box sx={{
              width: {
                xs: "100%",
                md: "50%",
                xl: "50%"
              },
              minWidth: "400px"
            }}>
              <PhoneOutlinedIcon sx={{ fontSize: 40, fill: "#005A69" }} />
              <Typography sx={{ fontFamily: "Figtree", fontSize: "24px", fontWeight: 600, color: "#005A69" }} fontWeight="bold">Phone</Typography>
              <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#003B49' }}>+91 99789 73055</Typography>
            </Box>
            <Box sx={{
              width: {
                xs: "100%",
                md: "50%",
                xl: "50%"
              },
              minWidth: "400px",
              mt: '50px'
            }}>
              <PlaceOutlinedIcon sx={{ fontSize: 40, fill: "#005A69" }} />
              <Typography sx={{ fontFamily: "Figtree", fontSize: "24px", fontWeight: 600, color: "#005A69" }} fontWeight="bold">Reg. Office</Typography>
              <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#003B49' }}>
                7/41, Harmony Tower, Bhakti Tower Rd, Satellite Park Rd, Thaltej, Ahmedabad, Gujarat 380059
              </Typography>
            </Box>
            <Box sx={{
              width: {
                xs: "100%",
                md: "50%",
                xl: "50%"
              },
              minWidth: "400px",
              mt: "50px"
            }}>
              <PlaceOutlinedIcon sx={{ fontSize: 40, fill: "#005A69" }} />
              <Typography sx={{ fontFamily: "Figtree", fontSize: "24px", fontWeight: 600, color: "#005A69" }} fontWeight="bold">Manufacturing Unit</Typography>
              <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#003B49' }}>
                Plot No. 142, Sector 6, Industrial Area, Bawal, Rewari, Haryana 123501
              </Typography>
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
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 1 },
          width: { xs: "100%", sm: "400px" },
          mx: "auto",
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-start' },
          mt: { xs: "20px", md: "30px" },
          textAlign: { xs: 'center', sm: 'left' }
        }}>
          <Box
            sx={{
              width: { xs: 60, sm: 80 },
              height: { xs: 60, sm: 80 },
              bgcolor: 'transparent',
              borderRadius: '50%',
              fontWeight: 'bold',
              fontSize: 24,
              color: '#00778B',
            }}
          >
            <img src={FooterLogo} alt="LifeThread Logo" style={{ width: '100%', height: '100%' }} />
          </Box>
          <Box sx={{
            textAlign: { xs: "center", sm: "left" },
            ml: { xs: 0, sm: "20px" }
          }}>
            <Typography sx={{
              mt: { xs: 1, sm: 2 },
              fontWeight: 'bold',
              fontSize: { xs: '24px', sm: '30px' },
              color: '#fff',
              fontFamily: "Inter"
            }}>
              LifeThread
            </Typography>
            <Typography sx={{
              mb: 2,
              fontWeight: 'bold',
              fontSize: { xs: '12px', sm: '14px' },
              color: '#fff',
              fontFamily: "Inter"
            }}>
              Clean, Compliant, Confident
            </Typography>
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
          {['Products', 'About Us', 'Contact'].map((item) => (
            <Link
              key={item}
              href="#"
              underline="none"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: { xs: 14, sm: 16 },
                fontFamily: "Inter"
              }}
            >
              {item}
            </Link>
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
          {/* <Box sx={{ display: 'flex', gap: 3 }}>
          {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((item) => (
            <Link key={item} href="#" underline="hover" sx={{ color: '#fff', fontSize: 14 }}>
              {item}
            </Link>
          ))}
        </Box> */}
        </Box>
      </Box >
    </Box>
  );
};

export default Footer;
