import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ApparelImage from "../Assets/apparel.png"

const ProductCategories = () => {
  return (
    <Box sx={{ px: { xs: 3, md: 12 }, py: { xs: 8, md: 12 } }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
        {/* Left Section */}
        <Box sx={{
          width: "40%",
        }}>
          <Typography
            sx={{
              fontSize: { xs: '32px', md: '40px' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3,
              fontFamily: "Lato",
              color: "#005A69",
              width: "80%",
            }}
          >
            Why Choose LifeThread?
          </Typography>
          <Typography
            sx={{ fontSize: '18px', color: '#000', mb: 4, fontFamily: "Inter",width: "80%" }}
          >
            Our garments are engineered to meet the highest quality standards. Experience peace of mind with our reliable, certified solutions.
          </Typography>
        </Box>

        {/* Right Section */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'space-between', flexDirection: "row", flexWrap:"wrap", width:"60%" }}>
            {[
              {
                icon: <img src={ApparelImage} alt="Apparel" style={{ height: "48px", width: "48px" }} />,
                title: 'Certified Safety (ISO, EN, NFPA)',
                desc: 'All products are ATIRA-tested for compliance.',
              },
              {
                icon: <img src={ApparelImage} alt="Apparel" style={{ height: "48px", width: "48px" }} />,
                title: 'In-House Manufacturing',
                desc: 'Custom branding solutions to enhance your identity.',
              },
              {
                icon: <img src={ApparelImage} alt="Apparel" style={{ height: "48px", width: "48px" }} />,
                title: 'Custom Sizing & Branding',
                desc: 'Custom branding solutions to enhance your identity.',
              },
              {
                icon: <img src={ApparelImage} alt="Apparel" style={{ height: "48px", width: "48px" }} />,
                title: 'Trusted by industrial leaders',
                desc: 'We conduct thorough in-house quality control.',
              },
            ].map((item, index) => (
              <Box sx={{ width: { xs: "100%", sm: "48%", md: "48%", lg: "40%" }, height: "200px", textAlign: 'left' }} key={index}>
                <Box>
                  <Box sx={{ mb: 1 }}>{item.icon}</Box>
                  <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: 0.5, color: "#005A69", fontFamily: "Lato" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#444', color: "#585858", fontFamily: "Inter" }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
      </Box>
    </Box>
  );
};

export default ProductCategories;