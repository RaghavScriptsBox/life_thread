import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CatalogueImage from "../../Assets/Catalogue.jpg"

const CatalogoueAbout = () => {
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
                    // bgcolor: 'rgba(0, 0, 0, 0.4)', // Gray overlay
                }}
            />

          
        </Box>
    );
};

export default CatalogoueAbout;
