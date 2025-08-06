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
            title: 'Durability You Can Rely On',
            description:
                'Our garments are ATIRA-certified, ensuring durability up to 100 washes.',
        },
    ];

    return (
        <Box py={8} sx={{ backgroundColor: '#f5f9f9' }}>
            <Box sx={{ width: "100%", mx: 'auto' }}>
                <Grid container spacing={4} alignItems="center">
                    {/* Left Column */}
                    <Grid item xs={12} md={12} sx={{ display: { xs: 'none', md: 'block' }, mx: 'auto' }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            mx: 'auto',

                        }}>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    mb: 2,
                                    fontSize: { xs: '24px', md: '50px' },
                                    fontFamily: 'Figtree, sans-serif',
                                    color: '#005A69',
                                    mx: 'auto',
                                }}
                            >
                                Why Choose LifeThread?
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Icons + Info */}
                <Grid container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: "50px",
                }}>
                    {highlights.map((item, index) => (
                        <Grid item xs={12} md={3} key={index}>
                            <Box textAlign="center" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: "space-between",
                                alignItems: 'flex-start',
                                textAlign: 'flex-start',
                                maxWidth: '350px',
                                mt: "40px",
                                bgcolor: '#fff',
                                padding: "20px",
                                minHeight: {xs: "300px", md: "350px"},
                            }}>
                                <Box sx={{
                                    color: "Figtree, sans-serif",
                                    mb: 2,
                                    fontSize: { xs: '50px', md: '64px' },
                                }}>
                                    {item.icon}
                                </Box>
                                <Typography sx={{
                                    fontWeight: 600,
                                    mb: 1,
                                    fontSize: { xs: '26px', md: '30px' },
                                    color: '#005A69',
                                    fontFamily: 'Figtree, sans-serif',
                                }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{
                                    fontWeight: 500,
                                    mb: 1,
                                    fontSize: { xs: '15px', md: '16px' },
                                    color: '#1212129f',
                                    fontFamily: 'Figtree, sans-serif',
                                    mt: "10px"
                                }}>
                                    {item.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default WhyChosseUs;
