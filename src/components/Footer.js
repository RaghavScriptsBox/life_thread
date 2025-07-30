import React from 'react';
import {
  Box,
  Typography,
  Link,
} from '@mui/material';
import FooterLogo from "../Assets/FooterLogo.png"; // Assuming you have a logo component or image

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#00778B',
        color: '#fff',
        py: 6,
        px: 4,
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        width:"100vw"
      }}
    >
      {/* Logo & Tagline */}
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, width: "400px",  mx: "auto", alignItems: 'center', justifyContent: 'flex-start',mt:"30px" }}>
        <Box
          sx={{
            width: 80,
            height: 80,
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
          textAlign: "left",
          ml:"20px"
        }}>
          <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: '30px', color: '#fff', fontFamily: "Inter" }}>
            LifeThread
          </Typography>
          <Typography  sx={{ mb: 2,
            fontWeight: 'bold',
            fontSize: '14px',
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
          justifyContent: 'space-between',
          gap: 4,
          my: 3,
          flexWrap: 'wrap',
          maxWidth:"400px",
          mx:"auto",
          mb:"70px"
        }}
      >
        {['Products', 'About Us', 'Contact'].map((item) => (
          <Link
            key={item}
            href="#"
            underline="none"
            sx={{ color: '#fff', fontWeight: 'bold', fontSize: 16, fontFamily: "Inter" }}
          >
            {item}
          </Link>
        ))}
      </Box>

      <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.5)', my: 4 }} />

      {/* Bottom Legal */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="body2">&copy; 2025 LifeThread. All rights reserved.</Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((item) => (
            <Link key={item} href="#" underline="hover" sx={{ color: '#fff', fontSize: 14 }}>
              {item}
            </Link>
          ))}
        </Box>
      </Box>
    </Box >
  );
};

export default Footer;
