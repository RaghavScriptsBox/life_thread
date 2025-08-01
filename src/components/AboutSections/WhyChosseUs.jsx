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
            <Box sx={{ width: "90%", mx: 'auto' }}>
                <Grid container spacing={4} alignItems="center">
                    {/* Left Column */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",

                        }}>
                            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        mb: 2,
                                        fontSize: { xs: '24px', md: '56px' },
                                        fontFamily: 'Figtree, sans-serif',
                                        color: '#005A69',
                                    }}
                                >
                                    Why Choose LifeThread for Your Garment Needs
                                </Typography>
                            </Box>
                            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                                <Typography variant="body1" color="text.secondary">
                                    At LifeThread, we pride ourselves on our rapid turnaround times
                                    and robust quality control processes that ensure every garment
                                    meets the highest standards. Our in-house design and private
                                    label capabilities allow us to tailor solutions specifically for
                                    your needs. With ISO certifications and a commitment to
                                    transparency, we empower your operations with confidence.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Icons + Info */}
                <Grid container spacing={4} mt={4}>
                    {highlights.map((item, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Box textAlign="center" px={2}>
                                <Box color="text.primary" mb={2}>
                                    {item.icon}
                                </Box>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
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
