import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const CoreValuesSection = () => {
  const values = [
    {
      icon: <HighQualityIcon fontSize="large" />,
      title: 'Commitment to Safety and Quality in Every Thread We Stitch',
      description: 'We prioritize safety by ensuring our garments protect lives and environments.',
    },
    {
      icon: <Diversity3Icon fontSize="large" />,
      title: 'Integrity in Our Processes: Transparent Communication and Honest Work',
      description: 'Integrity guides our actions, ensuring trust in every partnership.',
    },
    {
      icon: <DesignServicesIcon fontSize="large" />,
      title: 'Innovation Drives Us: Smarter Designs and Better Materials for Your Needs',
      description: 'Our commitment to innovation leads to superior products for critical environments.',
    },
  ];

  return (
    <Box py={8} sx={{ backgroundColor: '#f5f9f9' }}>
      <Container maxWidth="lg">
        <Typography

          fontWeight="500"
          gutterBottom
          sx={{ textAlign: 'center', mb: 4, fontSize: { xs: '24px', md: '56px' }, fontFamily: 'Figtree, sans-serif', color: "#005A69" }}
        >
          Our Core Values
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          mt={4}
        >
          {values.map((item, index) => (
            <Box
              key={index}
              textAlign="center"
              flex={1}
              px={{ xs: 2, md: 4 }}
            >
              <Box color="text.primary" mb={2}>
                {item.icon}
              </Box>
              <Typography sx={{
                fontWeight: "500",
                fontSize: { xs: '18px', md: '22px' },
                color: "#000000",
                fontFamily: "Figtree, sans-serif"
              }} gutterBottom>
                {item.title}
              </Typography>
              <Typography sx={{
                fontWeight: "400",
                fontSize: { xs: '18px', md: '16px' },
                color: "#000000",
                fontFamily: "Figtree, sans-serif"
              }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoreValuesSection;
