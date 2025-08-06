import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CatalogueImage from "../Assets/Catalogue.jpg"

const ComplianceSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '400px', // adjust height as needed
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
                        xs: '2rem',
                        sm: '2rem',
                        md: '2.5rem',
                        lg: '3rem',
                        xl: '3.5rem',
                    },
                    fontWeight: '500',
                }}>
                    Purpose-built safety wear for controlled environments.
                </Typography>
                
            </Box>
        </Box>
    );
};

export default ComplianceSection;
