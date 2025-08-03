import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid, ToggleButton, ToggleButtonGroup, useMediaQuery, useTheme } from '@mui/material';
import { ProductImages, ESDArray, UniformsArray, SingleUseArray, AccessoriesArray } from "../Assets/index.js";
import  Suit from '../Assets/SingleUseImages/Frame 427321813.png'

// Dynamic product data based on category
const productData = {
    'ESD & Lint Free': [
        {
            title: 'ESD Coverall Suits',
            desc: 'Built for cleanroom environments with ESD-safe design and breathable fabric.',
            image: ESDArray[4]
        },
        {
            title: 'ESD Apron',
            desc: 'Waist-length apron providing localized electro static protection.',
            image: ESDArray[0]
        },
        {
            title: 'ESD Top & Bottom',
            desc: 'Two-piece set with built-in electro static discharge properties.',
            image: ESDArray[1]
        },
        {
            title: 'Lint-Free Polyester Apron',
            desc: 'Apron designed to eliminate fibre shedding in controlled environments.',
            image: ESDArray[2]
        },
        {
            title: 'Lint-Free Wipes for Cleaning',
            desc: 'High-absorbency, low-particle wipes for precision cleaning.',
            image: ESDArray[3]
        },
    ],
    'Uniforms': [
        {
            title: 'Scrub Suit (Cotton)',
            desc: 'Breathable two-piece medical scrub set for daily clinical use.',
            image: UniformsArray[0]
        },
        {
            title: 'Scrub Suit (Polyester)',
            desc: 'Durable and lightweight scrub suit for medical professionals.',
            image: UniformsArray[1]
        },
        {
            title: 'Boiler Suit (Cotton)',
            desc: 'A robust, one-piece protective suit tailored for industrial, laboratory, and maintenance work.',
            image: UniformsArray[2]
        },
        {
            title: 'Boiler Suit (Polyester)',
            desc: 'Durable, easy-care one-piece suit, ideal for demanding workplaces where strong fabric and ease of cleaning are priorities.',
            image: UniformsArray[3]
        },
    ],
    'Single Use': [
        {
            title: 'Disposable Scrub Suit',
            desc: 'Single-use scrub top and pant set for contamination control.',
            image: Suit
        },
        {
            title: 'Surgical Gown',
            desc: 'Sterile or non-sterile surgical gown meeting fluid-resistance standards.',
            image: SingleUseArray[0]
        },
        {
            title: 'Isolation Gown',
            desc: 'Light-weight gown for general isolation procedures.',
            image: SingleUseArray[1]
        },
        {
            title: 'Wrap-Around Gown',
            desc: 'Gown providing enhanced side and back protection.',
            image: SingleUseArray[2]
        },
        {
            title: 'Disposable Apron',
            desc: 'Single-use apron for fluid protection in hygiene-sensitive tasks.',
            image: SingleUseArray[3]
        },
        {
            title: 'Visitor Gown',
            desc: 'Visitor Gown',
            desc: 'Single-use gown for visitor protection in clean, medical, and food-safe areas.',
            image: SingleUseArray[4]
        },
        {
            title: 'Disposable Antistatic Garment',
            desc: 'Single-use protective wear designed to prevent static risks in cleanrooms, labs, and electronics manufacturing.',
            image: SingleUseArray[5]
        },
    ],
    'Accessories': [
        {
            title: 'Safety Goggles',
            desc: 'Impact-resistant goggles for eye protection in hazardous environments.',
            image: AccessoriesArray[0]
        },
        {
            title: 'ESD Wrist Straps',
            desc: 'Adjustable wrist straps for personal grounding in ESD environments.',
            image: AccessoriesArray[1]
        },
        {
            title: 'Cleanroom Caps',
            desc: 'Lint-free caps designed for sterile and cleanroom environments.',
            image: AccessoriesArray[2]
        },
        {
            title: 'Anti-Static Mats',
            desc: 'Professional anti-static mats for workstation protection.',
            image: AccessoriesArray[3]
        },
        {
            title: 'Safety Helmets',
            desc: 'Durable helmets meeting international safety standards.',
            image: AccessoriesArray[4]
        },
        {
            title: 'Protective Boots',
            desc: 'Steel-toe boots with slip-resistant soles for industrial safety.',
            image: AccessoriesArray[5]
        },
        {
            title: 'ESD Tool Kit',
            desc: 'Complete kit of ESD-safe tools for electronics manufacturing.',
            image: AccessoriesArray[6]
        },
    ]
};

const CatelogueSection = () => {
    const [category, setCategory] = useState('ESD & Lint Free');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    // Get current products based on selected category
    const currentProducts = productData[category] || [];

    return (
        <Box sx={{ backgroundColor: '#007d8c', py: { xs: 4, md: 8 }, px: { xs: 2, md: 4 } }}>
            <Typography
                sx={{
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                    fontWeight: 'bold',
                    color: '#fff',
                    textAlign: 'center',
                    mb: { xs: 3, md: 6 },
                    fontFamily: "Lato",
                    lineHeight: 1.2,
                    px: { xs: 1, md: 0 }
                }}
            >
                Our Protective Workwear Range
            </Typography>

            <Typography sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: '#e0f7fa',
                fontFamily: 'Roboto',
                fontWeight: '400',
                textAlign: 'center',
                px: { xs: 2, md: 0 },
                mb: { xs: 4, md: 6 }
            }}>
                Trusted by companies in critical sectors
            </Typography>

            {/* Category Buttons */}
            <Box display="flex" justifyContent="center" mb={{ xs: 3, md: 5 }} px={{ xs: 1, md: 0 }}>
                <ToggleButtonGroup
                    exclusive
                    value={category}
                    onChange={(e, val) => val && setCategory(val)}
                    orientation={isMobile ? 'vertical' : 'horizontal'}
                    sx={{
                        backgroundColor: 'transparent',
                        p: 0,
                        borderRadius: 0,
                        borderBottom: { xs: 'none', sm: "1px solid #fff" },
                        width: { xs: '100%', sm: 'auto' },
                        maxWidth: { xs: '300px', sm: 'none' },
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
                                px: { xs: 2, sm: 3 },
                                py: { xs: 1.5, sm: 1.25 },
                                fontWeight: 'bold',
                                border: 0,
                                borderRadius: { xs: '8px', sm: 0 },
                                fontFamily: 'Lato',
                                fontSize: { xs: "14px", sm: "16px" },
                                width: { xs: '100%', sm: 'auto' },
                                mb: { xs: 1, sm: 0 },
                                // Responsive bottom border
                                borderBottom: { xs: 'none', sm: '2px solid #fff' },

                                // Inactive look
                                color: '#fff',
                                backgroundColor: 'transparent',

                                // Active (selected) look
                                '&.Mui-selected': {
                                    backgroundColor: '#fff',
                                    color: '#007d8c',
                                    borderBottom: { xs: 'none', sm: '2px solid #fff' },
                                    borderRadius: { xs: '8px', sm: "10px 10px 0 0" },
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
                spacing={{ xs: 2, sm: 3, md: 4 }}
                justifyContent="center"
                sx={{ px: { xs: 1, md: 0 } }}
            >
                {currentProducts.map((item, i) => (
                    <Grid
                        key={i}
                        item
                        xs={12}   // 1 per row on mobile
                        sm={6}    // 2 per row on small screens
                        md={4}    // 3 per row on medium screens
                        lg={3}    // 4 per row on large screens (optional for better spacing)
                        xl={3}    // maintain 4 per row for extra wide screens
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Card sx={{
                            borderRadius: 2, 
                            boxShadow: 3, 
                            width: '100%',
                            maxWidth: { xs: "350px", sm: "320px", md: "280px", lg: "300px" },
                            height: { xs: "auto", sm: "500px", md: "520px", lg: "550px" },
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <CardMedia
                                component="div"
                                sx={{
                                    height: { xs: "200px", sm: "220px", md: "260px", lg: "300px" },
                                    width: "100%",
                                    backgroundColor: "#eee",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    overflow: 'hidden'
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        opacity: 1,
                                    }}
                                />
                            </CardMedia>
                            <CardContent sx={{ 
                                flexGrow: 1, 
                                display: 'flex', 
                                flexDirection: 'column',
                                p: { xs: 2, md: 3 }
                            }}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "18px", md: "18px" },
                                        fontWeight: 700,
                                        color: "#007d8c",
                                        fontFamily: "Lato",
                                        lineHeight: 1.3,
                                        mb: { xs: 1, md: 1.5 }
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "14px", md: "12px" },
                                        color: "#444",
                                        fontFamily: "Inter",
                                        lineHeight: 1.4,
                                        mb: { xs: 2, md: 3 },
                                        flexGrow: 1
                                    }}
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
                                        py: { xs: 1, md: 1.2 },
                                        fontSize: { xs: "14px", md: "16px" },
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


            {/* View All Button */}
            <Box textAlign="center" mt={{ xs: 4, md: 6 }}>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: { xs: 8, md: 20 },
                        px: { xs: 3, md: 4 },
                        py: { xs: 1, md: 1.2 },
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: { xs: '14px', md: '16px' },
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
