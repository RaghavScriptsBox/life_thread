import React from 'react';
import {
  Box,
  Typography,
  Link,
} from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#00778B',
        color: '#fff',
        py: 6,
        px: 4,
        textAlign: 'center',
      }}
    >
      {/* Logo & Tagline */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            width: 50,
            height: 50,
            bgcolor: '#fff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 24,
            color: '#00778B',
          }}
        >
          {/* Replace this with actual image/logo */}
          ↻
        </Box>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
          LifeThread
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Clean, Compliant, Confident
        </Typography>
      </Box>

      {/* Nav Links */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          my: 3,
          flexWrap: 'wrap',
        }}
      >
        {['Products', 'About Us', 'Contact'].map((item) => (
          <Link
            key={item}
            href="#"
            underline="none"
            sx={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}
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
    </Box>
  );
};

export default Footer;
