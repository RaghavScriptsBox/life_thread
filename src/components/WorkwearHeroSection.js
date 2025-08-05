// components/WorkwearHeroSection.jsx
import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DocImage from '../Assets/DocImage.png'; // Replace with actual image path
import DocTwoImage from '../Assets/DocTwoImage.png'; // Replace with actual image path
import RequestQuoteModal from './RequestQuoteModal';

const WorkwearHeroSection = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  
  const handleRequestQuote = (productTitle) => {
    setSelectedProduct(productTitle);
    setQuoteModalOpen(true);
  };
  return (
    <Box sx={{
      px: { xs: 2, sm: 3, md: 6, lg: 8 },
      py: { xs: 4, sm: 6 },
      minHeight: { xs: "auto", md: "100vh" },
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: 4, md: 6, lg: 8 },
        maxWidth: '95%',
        margin: '0 auto',
        marginTop: { xs: "40px", md: "80px" },
        width: '100%'
      }}>
        {/* Left Text Section */}
        <Box sx={{
          width: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
          order: { xs: 1, md: 1 }
        }}>
          <Typography sx={{
            fontSize: { xs: '28px', sm: '36px', md: '42px', lg: '48px' },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: { xs: 2, md: 3 },
            fontFamily: "Lato",
            color: "#005A69",
          }} gutterBottom>
            Clean, Compliant, and{' '}
            <Box component="span" sx={{ display: { xs: 'block', sm: 'inline' } }}>
              Confident Workwear
            </Box>{' '}
            <Box component="span" sx={{ display: { xs: 'block', sm: 'inline' } }}>
              Starts Here
            </Box>
          </Typography>
          <Typography sx={{
            fontSize: { xs: '16px', md: '18px' },
            color: '#000',
            mb: { xs: 3, md: 4 },
            fontFamily: "Inter",
            width: { xs: '100%', md: '80%' },
            lineHeight: 1.5,
          }}>
            Discover our range of safe, comfortable, and regulation-compliant garments for cleanrooms,
            ESD zones, and industrial environments.
          </Typography>

          <Box sx={{
            display: 'flex',
            gap: { xs: 2, md: 2 },
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' },
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center'
          }}>
            <Button 
              onClick={() => {
                const catalogueElement = document.getElementById('catalogue-section');
                if (catalogueElement) {
                  catalogueElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              sx={{
              bgcolor: '#00778B',
              color: '#fff',
              px: { xs: 3, md: 4 },
              py: { xs: 1.5, md: 2 },
              borderRadius: 1,
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: 500,
              minWidth: { xs: 140, md: 'auto' },
              '&:hover': { bgcolor: '#005A69' },
            }}>
              Our products
            </Button>
            <Button sx={{
              bgcolor: '#fff',
              color: '#00778B',
              px: { xs: 3, md: 4 },
              py: { xs: 1.5, md: 2 },
              borderRadius: 1,
              border: '1px solid #00778B',
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: 500,
              minWidth: { xs: 140, md: 'auto' },
              '&:hover': { bgcolor: '#f0f0f0' },
            }}
              onClick={() => handleRequestQuote()}
            >
              Request quote
            </Button>
          </Box>
        </Box>

        {/* Right Image Section */}
        <Box sx={{
          width: { xs: '100%', md: '50%' },
          order: { xs: 2, md: 2 },
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1.5, sm: 2 },
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'flex-start',
              maxWidth: { xs: '100%', md: '100%' }
            }}
          >
            <Box
              component="img"
              src={DocImage}
              alt="Workwear 1"
              sx={{
                width: { xs: '100%', sm: '60%', md: "50%" },
                maxWidth: { xs: '350px', sm: '300px', md: "400px" },
                height: { xs: 'auto', sm: '300px', md: "500px" },
                borderRadius: 2,
                objectFit: 'cover',
              }}
            />
            <Box
              component="img"
              src={DocTwoImage}
              alt="Workwear 2"
              sx={{
                width: { xs: '100%', sm: '35%', md: "35%" },
                maxWidth: { xs: '250px', sm: '200px', md: "250px" },
                height: "auto",
                borderRadius: 2,
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Box>
       {/* Request Quote Modal */}
      <RequestQuoteModal
        open={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedProduct={null}
      />
    </Box>
  );
};

export default WorkwearHeroSection;
