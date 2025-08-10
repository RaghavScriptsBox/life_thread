import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CatalogueImage from "../Assets/Catalogue.jpg"
import RequestQuoteModal from './RequestQuoteModal';
import DownloadCatalogueModal from './DownloadCatalogueModal';
import { useNavigate } from 'react-router-dom';

const CatalogueBanner = () => {
    const [quoteModalOpen, setQuoteModalOpen] = useState(false);
    const [downloadModalOpen, setDownloadModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const handleRequestQuote = (productTitle) => {
        setSelectedProduct(productTitle);
        setQuoteModalOpen(true);
    };
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
                    width: {xs:"90%",md:"70%"}
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
                    fontFamily: 'Figtree, sans-serif',
                }}>
                    Explore 40+ products with specifications, sizing & safety ratings.
                </Typography>
                <Typography sx={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: "18px"
                }} >
                    Download our complete catalog to explore materials, certifications, and customization options across our workwear line.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mt: 3,
                        borderRadius: "10px",
                        height: "50px",
                        px: { xs: 3, md: 4 },
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: "16px",
                        fontFamily: 'Figtree',
                        backgroundColor: '#fff',
                        color: '#007d8c',
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: '#e0f7fa',
                            boxShadow: 'none',
                        },
                    }}
                    onClick={() => setDownloadModalOpen(true)}
                >
                    Download the Catalogue
                </Button>
            </Box>
            <RequestQuoteModal
                open={quoteModalOpen}
                onClose={() => setQuoteModalOpen(false)}
                selectedProduct={null}
            />
            <DownloadCatalogueModal
                open={downloadModalOpen}
                onClose={() => setDownloadModalOpen(false)}
            />
        </Box>
    );
};

export default CatalogueBanner;
