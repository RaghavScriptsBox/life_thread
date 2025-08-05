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
import Certificate from "../../Assets/Icons/certificate_13065794 1.png";
import PeopeImage from "../../Assets/Icons/people_12746339 1.png";
import SizeImage from "../../Assets/Icons/size_13778096 1.png";
import WareHouse from "../../Assets/Icons/warehouse_6808833 1.png"

const WhyChosseUs = () => {
    const highlights = [
        {
            icon: <SettingsIcon fontSize="large" />,
            title: 'Certified Manufacturing Excellence You Can Trust',
            description:
                'Our manufacturing processes are ISO 9001:2015, ISO 13485:2016, and GMP certified.',
        },
        {
            icon: <Inventory2Icon fontSize="large" />,
            title: 'Tailored Solutions for Diverse Industries',
            description:
                'We offer custom solutions for Pharma, Biotech, Electronics, and Food industries.',
        },
        {
            icon: <CheckroomIcon fontSize="large" />,
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
                                minHeight: "400px"
                            }}>
                                <Box sx={{
                                    color: "Figtree, sans-serif",
                                    mb: 2,
                                    fontSize: '24px',
                                }}>
                                    {item.icon}
                                </Box>
                                <Typography sx={{
                                    fontWeight: 600,
                                    mb: 1,
                                    fontSize: { xs: '18px', md: '30px' },
                                    color: '#005A69',
                                    fontFamily: 'Figtree, sans-serif',
                                }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{
                                    fontWeight: 500,
                                    mb: 1,
                                    fontSize: { xs: '14px', md: '16px' },
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
