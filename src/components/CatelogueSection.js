import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import DocImage from "../Assets/DocImage.png"

const products = [
    {
        title: 'ESD Coverall with Antistatic Fabric',
        desc: 'Built for cleanroom environments with ESD-safe design and breathable fabric.',
    },
    {
        title: 'Cleanroom Lab Coat with Knit Cuffs',
        desc: 'Built for cleanroom environments with ESD-safe design and breathable fabric.',
    },
    {
        title: 'Polyester Antistatic Apron',
        desc: 'Built for cleanroom environments with ESD-safe design and breathable fabric.',
    },
    {
        title: 'FR Treated Cotton Coverall',
        desc: 'Built for cleanroom environments with ESD-safe design and breathable fabric.',
    },
    {
        title: 'Reusable Hood and Boot Covers',
        desc: 'Built for cleanroom environments with ESD-safe design and breathable fabric.',
    },
];

const CatelogueSection = () => {
    const [category, setCategory] = useState('Category 1');

    return (
        <Box sx={{ backgroundColor: '#007d8c', py: 8, px: 2 }}>
            <Typography
                variant="h4"
                align="center"
                color="#fff"
                fontWeight="bold"
                mb={1}
            >
                Our Protective Workwear Range
            </Typography>

            <Typography variant="subtitle1" align="center" color="#e0f7fa" mb={4}>
                Trusted by companies in critical sectors
            </Typography>

            {/* Category Buttons */}
            <Box display="flex" justifyContent="center" mb={5}>
                <ToggleButtonGroup
                    exclusive
                    value={category}
                    onChange={(e, val) => val && setCategory(val)}
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        p: 1,
                    }}
                >
                    {['Category 1', 'Category 2', 'Category 3'].map((cat) => (
                        <ToggleButton
                            key={cat}
                            value={cat}
                            sx={{
                                px: 3,
                                fontWeight: 'bold',
                                color: category === cat ? '#007d8c' : '#555',
                                backgroundColor: category === cat ? '#e0f7fa' : 'transparent',
                                border: 0,
                                '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                },
                            }}
                        >
                            {cat}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Box>

            {/* Product Cards */}
            <Grid container spacing={4} justifyContent="center">
                {products.map((item, i) => (
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ borderRadius: 2, boxShadow: 3, width:"500px" }}>
                            <CardMedia
                                component="div"
                                sx={{
                                    height: "400px",
                                    backgroundColor: '#eee',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <img
                                    src={DocImage}
                                    alt="placeholder"
                                    style={{ width: "100%", height: "400px", opacity: 1 }}
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    color: '#007d8c',
                                    fontFamily: 'Lato',
                                }} mb={1}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{
                                    fontSize: '16px',
                                    color: '#444',
                                    fontFamily: 'Inter',
                                }} mb={2}>
                                    {item.desc}
                                </Typography>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        color: '#007d8c',
                                        borderColor: '#007d8c',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#007d8c',
                                            color: '#fff',
                                            borderColor: '#007d8c',
                                        },
                                    }}
                                >
                                    Request quote
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* View All Button */}
            <Box textAlign="center" mt={6}>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: 20,
                        px: 4,
                        py: 1.2,
                        textTransform: 'none',
                        fontWeight: 'bold',
                        backgroundColor: '#fff',
                        color: '#007d8c',
                        '&:hover': {
                            backgroundColor: '#e0f7fa',
                        },
                    }}
                >
                    View all
                </Button>
            </Box>
        </Box>
    );
};

export default CatelogueSection;
