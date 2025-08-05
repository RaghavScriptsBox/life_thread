import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ApparelImage from "../Assets/apparel.png";
import Certificate from "../Assets/Icons/certificate_13065794 1.png";
import PeopeImage from "../Assets/Icons/people_12746339 1.png";
import SizeImage from "../Assets/Icons/size_13778096 1.png";
import WareHouse from "../Assets/Icons/warehouse_6808833 1.png"


const ProductCategories = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 6, lg: 12 }, py: { xs: 6, md: 8, lg: 12 } }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: { xs: 4, md: 6 },
        alignItems: { xs: 'center', md: 'flex-start' }
      }}>
        {/* Left Section */}
        <Box sx={{
          width: { xs: "100%", md: "40%" },
          textAlign: { xs: 'center', md: 'left' },
          mb: { xs: 2, md: 0 }
        }}>
          <Typography
            sx={{
              fontSize: { xs: '28px', sm: '32px', md: '36px', lg: '40px' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: { xs: 2, md: 3 },
              fontFamily: "Lato",
              color: "#005A69",
              width: { xs: "100%", md: "80%" },
            }}
          >
            Why Choose LifeThread?
          </Typography>
          <Typography
            sx={{ 
              fontSize: { xs: '16px', md: '18px' }, 
              color: '#000', 
              mb: { xs: 3, md: 4 }, 
              fontFamily: "Inter",
              width: { xs: "100%", md: "80%" },
              lineHeight: 1.5
            }}
          >
            Our garments are engineered to meet the highest quality standards. Experience peace of mind with our reliable, certified solutions.
          </Typography>
        </Box>

        {/* Right Section */}
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: { xs: 3, sm: 3, md: 4 }, 
            justifyContent: { xs: 'center', md: 'space-between' }, 
            width: { xs: "100%", md: "60%" }
          }}>
            {[
              {
                icon: <img src={Certificate} alt="Apparel" style={{ height: "48px", width: "48px" }} />,
                title: 'Certified Safety (ISO, GMP)',
                desc: 'All products are ATIRA-tested for compliance.',
              },
              {
                icon: <img src={WareHouse} alt="Apparel" style={{ height: "48px", width: "48px" }} />,
                title: 'In-House Manufacturing',
                desc: 'In-house production for assured quality.',
              },
              {
                icon: <img src={SizeImage} alt="Apparel" style={{ height: "48px", width: "48px" }} />,
                title: 'Custom Sizing & Branding',
                desc: 'Custom branding solutions to enhance your identity.',
              },
              {
                icon: <img src={PeopeImage} alt="Apparel" style={{ height: "48px", width: "48px" }} />,
                title: 'Trusted by industrial leaders',
                desc: 'We conduct thorough in-house quality control.',
              },
            ].map((item, index) => (
              <Box sx={{ 
                width: { xs: "100%", sm: "48%", md: "48%", lg: "45%" }, 
                minHeight: { xs: "auto", md: "180px" }, 
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 2, md: 0 },
                p: { xs: 2, md: 0 }
              }} key={index}>
                <Box>
                  <Box sx={{ mb: { xs: 1.5, md: 1 }, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    {item.icon}
                  </Box>
                  <Typography sx={{ 
                    fontSize: { xs: '20px', md: '22px', lg: '24px' }, 
                    fontWeight: 700, 
                    mb: { xs: 1, md: 0.5 }, 
                    color: "#005A69", 
                    fontFamily: "Lato",
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ 
                    fontSize: { xs: '14px', md: '16px' }, 
                    color: "#585858", 
                    fontFamily: "Inter",
                    lineHeight: 1.5
                  }}>
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