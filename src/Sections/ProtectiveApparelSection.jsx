import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom'; // Shirt icon
import PlaceholderImage from '../Assets/PlaceholderImage.png'; // Replace with your image path

const ProtectiveApparelSection = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#fff', py: { xs: 4, md: 8 }, px: { xs: 2, md: 6 }, height: "90vh" }}>
      <Box spacing={4} alignItems="center" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Left Content */}
        <Box sx={{ width: { xs: '100%', md: '52%' }, ml: "100px", display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <CheckroomIcon sx={{ fontSize: 40, color: '#000' }} />

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '42px', md: '45px' },
                color: '#000',
                fontFamily: 'Lato',
                lineHeight: 1.5,
                color: '#005A69',
                width: { xs: '100%', md: '80%' },
              }}
            >
              Innovative protective apparel for <br />
              cleanroom and ESD environments.
            </Typography>

            <Typography sx={{ fontSize: '16px', color: '#333', maxWidth: 500, fontFamily: 'Inter' }}>
              LifeThread is focused on building protective solutions for precision-driven, compliance-led industries.
            </Typography>
            <Typography sx={{ fontSize: '16px', color: '#333', maxWidth: 500, fontFamily: 'Inter' }}>
              We manufacture a full range of high-quality ESD-safe cleanroom garments, coveralls, lab coats, and accessories — all tailored to meet international certifications and engineered for all-day comfort.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Box
                sx={{
                  bgcolor: '#00778B',
                  color: '#fff',
                  px: 4,
                  py: 2,
                  borderRadius: 1,
                  cursor: 'pointer',
                  '&:hover': { bgcolor: '#005A69' },
                }}
              >
                Request a Quote
              </Box>
              <Box
                sx={{
                  bgcolor: '#fff',
                  color: '#00778B',
                  px: 4,
                  py: 2,
                  borderRadius: 1,
                  border: '1px solid #00778B',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: '#f0f0f0' },
                }}
              >
                Download Catalogue
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Right Image */}
        <Box sx={{ width: { xs: '100%', md: '48%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
          <Box
            sx={{
              width: '100%',
              height: { xs: 250, md: 400, lg: 500, xl: 600 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box component="img" src={PlaceholderImage} alt="Apparel" sx={{
              height: "640px",
              width: "600px",
              objectFit: 'cover',
            }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProtectiveApparelSection;
