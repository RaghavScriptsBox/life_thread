// components/WorkwearHeroSection.jsx
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import DocImage from '../Assets/DocImage.png'; // Replace with actual image path
import DocTwoImage from '../Assets/DocTwoImage.png'; // Replace with actual image path

const WorkwearHeroSection = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, py: { xs: 4, sm: 6 }, minHeight: "100vh", backgroundColor: '#fff' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
        maxWidth: '95%',
        margin: '0 auto',
        marginTop: "80px"
      }}>
        {/* Left Text Section */}
        <Box>
          <Typography sx={{
            fontSize: { xs: '32px', md: '48px' },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 3,
            fontFamily: "Lato",
            color: "#005A69",
          }} gutterBottom>
            Clean, Compliant, and <br />
            Confident Workwear <br />
            Starts Here
          </Typography>
          <Typography sx={{
            fontSize: '18px',
            color: '#000',
            mb: 4,
            fontFamily: "Inter",
            width: { xs: '100%', md: '80%' },
          }} >
            Discover our range of safe, comfortable, and regulation-compliant garments for cleanrooms,
            ESD zones, and industrial environments.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button sx={{
              bgcolor: '#00778B',
              color: '#fff',
              px: 4,
              py: 2,
              borderRadius: 1,
              '&:hover': { bgcolor: '#005A69' },
            }}>
              Our products
            </Button>
            <Button sx={{
              bgcolor: '#fff',
              color: '#00778B',
              px: 4,
              py: 2,
              borderRadius: 1,
              border: '1px solid #00778B',
              '&:hover': { bgcolor: '#f0f0f0' },
            }}>
              Request quote
            </Button>
          </Box>
        </Box>

        {/* Right Image Section */}
        <Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Box
              component="img"
              src={DocImage} // Replace with actual image
              alt="Workwear 1"
              sx={{
                width: { xs: '100%', sm: '50%', md: "438px" },
                height: { xs: 'auto', sm: '300px', md: "600px" },
                borderRadius: 2,
                objectFit: 'cover',
              }}
            />
            <Box
              component="img"
              src={DocTwoImage} // Replace with actual image
              alt="Workwear 2"
              sx={{
                width: { xs: '100%', sm: '40%', md: "280px" },
                height: "auto",
                borderRadius: 2,
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkwearHeroSection;
