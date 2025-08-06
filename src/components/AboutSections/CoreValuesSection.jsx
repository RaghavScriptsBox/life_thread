import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import IdeaImage from "../../Assets/Icons/idea_4519702 1.png";
import TeamWorkImage from "../../Assets/Icons/teamwork_10951439 1.png";
import QualityImage from "../../Assets/Icons/quality_1212158 1.png"

const CoreValuesSection = () => {
  const values = [
    {
      icon: <img src={QualityImage} style={{width:"48px", height:"auto"}} alt="Quality" />,
      title: 'Commitment to Safety and Quality',
      description: 'We prioritize safety by ensuring our garments protect lives and environments in every thread we stitch.',
    },
    {
      icon: <img src={TeamWorkImage} style={{width:"48px", height:"auto"}} alt="Diversity" />,
      title: 'Integrity in Our Processes',
      description: 'Integrity guides our actions, ensuring trust in every partnership Transparent Communication and Honest Work',
    },
    {
      icon: <img src={IdeaImage} style={{width:"48px", height:"auto"}} alt="Design" />,
      title: 'Innovation for Your Needs',
      description: 'Our commitment to innovation leads to superior products for critical environments.',
    },
  ];

  return (
    <Box py={8} sx={{ backgroundColor: '#f5f9fa' }}>
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
          alignItems="baseline"
          gap={4}
          mt={4}
        >
          {values.map((item, index) => (
            <Box
              key={index}
              flex={1}
              px={{ xs: 2, md: 4 }}
              sx={{ textAlign: { xs: 'left', md: 'center' },mt: { xs: 2, md: 0 } ,bgcolor:"#fff", padding: "20px", borderRadius: "8px", minHeight: "300px" }}
            >
              <Box
                sx={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: { xs: '48px', md: '64px' },
                  color: "#005A69",
                }}
              >
                {item.icon}
              </Box>
              <Typography sx={{
                fontFamily: "Figtree, sans-serif",
                fontSize: { xs: '22px', md: '24px', fontWeight: 600 },
                color: "#005A69",
              }} gutterBottom>
                {item.title}
              </Typography>
              <Typography sx={{
                fontWeight: "400",
                fontSize: { xs: '16px', md: '16px' },
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
