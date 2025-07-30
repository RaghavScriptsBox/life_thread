import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CatalogueImage from "../Assets/Catalogue.jpg"

const CatalogueBanner = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '500px', // adjust height as needed
                overflow: 'hidden',
            }}
        >
            {/* Background Image */}
            <Box
                component="img"
                src={CatalogueImage} // <-- Update this with your image path
                alt="Catalogue Background"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />

            {/* Gray Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.4)', // Gray overlay
                }}
            />

            {/* Centered Content */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff',
                    textAlign: 'center',
                    zIndex: 1,
                    px: 2,
                }}
            >
                <Typography sx={{
                    fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                        md: '2.5rem',
                        lg: '3rem',
                        xl: '3.2rem',
                    },
                    fontWeight: 'bold',
                    color: '#fff',
                    fontFamily: 'Roboto',
                }}>
                    Explore 40+ products with specifications, sizing & safety ratings.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Download our complete catalog to explore materials, certifications, and customization options across our workwear line.
                </Typography>
                <Button
                    variant="contained"
                    sx={{ mt: 3, bgcolor: '#fff', px: 4, py: 1.5, border: "1px solid #007C91", color: "#007C91", fontFamily: "Roboto", fontWeight: "bold" }}
                >
                    Download the Catalogue
                </Button>
            </Box>
        </Box>
    );
};

export default CatalogueBanner;
