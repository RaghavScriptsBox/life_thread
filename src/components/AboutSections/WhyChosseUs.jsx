import React from 'react';
import {
    Box,
    Typography,
    Container,
    Grid
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CheckroomIcon from '@mui/icons-material/Checkroom';
// import Certificate from "../../Assets/Icons/certificate_13065794 1.png";
import PeopeImage from "../../Assets/Icons/people_12746339 1.png";
import SizeImage from "../../Assets/Icons/size_13778096 1.png";
import WareHouse from "../../Assets/Icons/warehouse_6808833 1.png"
import Certificate from "../../Assets/Icons/About/certificate_13065794 1.png";
import EmergingImage from "../../Assets/Icons/About/emerging-industries_12303245 1.png";
import LaundryImage from "../../Assets/Icons/About/laundry.png"

const WhyChosseUs = () => {
    const highlights = [
        {
            icon: <img src={Certificate} alt="Certificate" style={{ width: '45px', height: '45px' }} />,
            title: 'Certified Excellence you can trust',
            description:
                'Our manufacturing processes are ISO 9001:2015, ISO 13485:2016, and GMP certified.',
        },
        {
            icon: <img src={EmergingImage} alt="Inventory" style={{ width: '45px', height: '45px' }} />,
            title: 'Tailored Solutions for Diverse Industries',
            description:
                'We offer custom solutions for Pharma, Biotech, Electronics, and Food industries.',
        },
        {
            icon: <img src={LaundryImage} alt="Durability" style={{ width: '45px', height: '45px' }} />,
            title: 'Durability you can rely on every single time',
            description:
                'Our garments are ATIRA-certified, ensuring durability up to 100 washes.',
        },
    ];

    return (
        <Box py={8} sx={{ backgroundColor: '#f5f9f9' }}>
            <Box sx={{ width: "100%", mx: 'auto', px: { xs: 2, md: 4 } }}>
                {/* Header Section */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    textAlign: 'center',
                    mb: { xs: 4, md: 6 },
                    width: '100%'
                }}>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '32px', md: '48px' },
                            fontFamily: 'Figtree, sans-serif',
                            color: '#005A69',
                            textAlign: 'center',
                            lineHeight: 1.2
                        }}
                    >
                        Why Choose LifeThread?
                    </Typography>
                </Box>

                {/* Icons + Info */}
                <Grid container spacing={3} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 4,
                    px: { xs: 2, md: 4 }
                }}>
                    {highlights.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                                width: '100%',
                                maxWidth: '350px',
                                bgcolor: '#fff',
                                padding: { xs: "24px", md: "28px" },
                                borderRadius: "12px",
                                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                                height: '100%',
                                minHeight: { xs: "280px", md: "320px" }
                            }}>
                                {/* Icon Section - Fixed Height */}
                                <Box sx={{
                                    mb: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '60px'
                                }}>
                                    {item.icon}
                                </Box>
                                
                                {/* Title Section - Fixed Height */}
                                <Box sx={{
                                    mb: 2,
                                    minHeight: { xs: "70px", md: "80px" },
                                    display: 'flex',
                                    alignItems: 'flex-start'
                                }}>
                                    <Typography sx={{
                                        fontWeight: 600,
                                        fontSize: { xs: '22px', md: '26px' },
                                        color: '#005A69',
                                        fontFamily: 'Figtree, sans-serif',
                                        lineHeight: 1.3
                                    }}>
                                        {item.title}
                                    </Typography>
                                </Box>
                                
                                {/* Description Section - Flexible Height */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: { xs: '15px', md: '16px' },
                                        color: '#666666',
                                        fontFamily: 'Figtree, sans-serif',
                                        lineHeight: 1.5
                                    }}>
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default WhyChosseUs;
