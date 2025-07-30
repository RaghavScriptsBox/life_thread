import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import DocImage from "../Assets/DocImage.png";
import PlaceholderImage from "../Assets/PlaceholderImage.png"

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
    const [category, setCategory] = useState('ESD & Lint Free');

    return (
        <Box sx={{ backgroundColor: '#007d8c', py: 8, px: 2 }}>
            <Typography
                sx={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    textAlign: 'center',
                    mb: 6,
                    fontFamily: "Lato"
                }}
            >
                Our Protective Workwear Range
            </Typography>

            <Typography sx={{
                fontSize: '1.25rem',
                color: '#e0f7fa',
                fontFamily: 'Roboto',
                fontWeight: '400',
                textAlign: 'center',
            }} mb={6}>
                Trusted by companies in critical sectors
            </Typography>

            {/* Category Buttons */}
            <Box display="flex" justifyContent="center" mb={5}>
                <ToggleButtonGroup
                    exclusive
                    value={category}
                    onChange={(e, val) => val && setCategory(val)}
                    sx={{
                        backgroundColor: 'transparent',
                        p: 0,
                        borderRadius: 0,
                        borderBottom: "1px solid #fff",
                        // Remove default group borders/radii so only our underline shows
                        '& .MuiToggleButtonGroup-grouped': {
                            border: 0,
                            borderRadius: 0,
                        },
                    }}
                >
                    {['ESD & Lint Free', 'Uniforms', 'Single Use', 'Accessories'].map((cat) => (
                        <ToggleButton
                            key={cat}
                            value={cat}
                            disableRipple
                            sx={{
                                px: 3,
                                py: 1.25,
                                fontWeight: 'bold',
                                border: 0,
                                borderRadius: 0,
                                fontFamily: 'Lato',
                                fontSize: "16px",
                                // 2px white underline for ALL states
                                borderBottom: '2px solid #fff',

                                // Inactive look
                                color: '#fff',
                                backgroundColor: 'transparent',

                                // Active (selected) look
                                '&.Mui-selected': {
                                    backgroundColor: '#fff',
                                    color: '#007d8c',
                                    borderBottom: '2px solid #fff', // keep underline on active too
                                    borderRadius: "10px 10px 0 0",
                                },

                                // Hover states (don’t change the underline)
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.08)',
                                },
                                '&.Mui-selected:hover': {
                                    backgroundColor: '#fff',
                                },
                            }}
                        >
                            {cat}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Box>



            {/* Product Cards */}
            <Grid
                container
                spacing={{ xs: 2, md: 4 }}
                justifyContent="center"
            >
                <Grid container spacing={4} justifyContent="center">
                    {products.map((item, i) => (
                        <Grid
                            key={i}
                            item
                            xs={12}   // 1 per row on extra small devices
                            sm={4}    // 2 per row on small screens
                            md={4}    // 3 per row at >=900px (MacBook Air range)
                            lg={3}    // maintain 3 per row for larger screens
                            xl={3}    // 4 per row for extra wide screens (optional)
                            sx={{
                                maxWidth: "400px"
                            }}
                        >
                            <Card sx={{
                                borderRadius: 2, boxShadow: 3, maxWidth: {
                                    xs: "400px",
                                    sm: "400px",
                                    md: "400px",
                                    lg: "400px",
                                    xl: "400px",
                                }, height: "550px", margin: "auto"
                            }}>
                                <CardMedia
                                    component="div"
                                    sx={{
                                        height: { xs: "220px", sm: "260px", md: "300px", lg: "340px", xl: "340px" },
                                        width:"405px",
                                        backgroundColor: "#eee",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img
                                        src={PlaceholderImage}
                                        alt={item.title}
                                        style={{
                                            width: "360px",
                                            height: "340px",
                                            objectFit: "cover",
                                            opacity: 1,
                                        }}
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 700,
                                            color: "#007d8c",
                                            fontFamily: "Lato",
                                        }}
                                        mb={1}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            color: "#444",
                                            fontFamily: "Inter",
                                        }}
                                        mb={2}
                                    >
                                        {item.desc}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            color: "#007d8c",
                                            borderColor: "#007d8c",
                                            fontWeight: "bold",
                                            textTransform: "none",
                                            "&:hover": {
                                                backgroundColor: "#007d8c",
                                                color: "#fff",
                                                borderColor: "#007d8c",
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
