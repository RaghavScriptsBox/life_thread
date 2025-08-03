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
  );
};

export default Footer;
