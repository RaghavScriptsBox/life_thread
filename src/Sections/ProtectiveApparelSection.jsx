import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckroomIcon from '@mui/icons-material/Checkroom'; // Shirt icon
import HomeSecondImage from '../Assets/HomeSecondImage.png'; // Replace with your image path
import RequestQuoteModal from '../components/RequestQuoteModal';

const ProtectiveApparelSection = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const handleRequestQuote = (productTitle) => {
    setSelectedProduct(productTitle);
    setQuoteModalOpen(true);
  };

  return (
    <Box sx={{
      width: '100%',
      bgcolor: '#fff',
      py: { xs: 4, md: 8 },
      px: { xs: 2, md: 4, lg: 6 },
      minHeight: { xs: 'auto', md: '100vh' },
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 3, md: 4, lg: 6 },
        maxWidth: '1200px',
        width: '100%',
        alignItems: 'center'
      }}>
        {/* Left Content */}
        <Box sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
          order: { xs: 2, md: 1 }
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: '28px', sm: '36px', md: '40px', lg: '42px' },
                color: '#005A69',
                fontFamily: 'Lato',
                lineHeight: 1.3,
                width: '100%',
                textAlign: { xs: 'left', md: 'left' },
              }}
            >
              Innovative protective apparel for{' '}cleanroom and ESD environments.
            </Typography>

            <Typography sx={{
              fontSize: { xs: '14px', md: '16px' },
              color: '#585858',
              maxWidth: { xs: '100%', md: 500 },
              fontFamily: 'Inter',
              textAlign: { xs: 'left', md: 'left' },
              mb: 1
            }}>
              LifeThread is focused on building protective solutions for precision-driven, compliance-led industries.
            </Typography>
            <Typography sx={{
              fontSize: { xs: '14px', md: '16px' },
              color: '#585858',
              maxWidth: { xs: '100%', md: 500 },
              fontFamily: 'Inter',
              textAlign: { xs: 'left', md: 'left' }
            }}>
              We manufacture a full range of high-quality ESD-safe cleanroom garments, coveralls, lab coats, and accessories — all tailored to meet international certifications and engineered for all-day comfort.
            </Typography>
            <Box sx={{
              display: 'flex',
              gap: { xs: 2, md: 2 },
              mt: 3,
              flexDirection: { xs: 'row', sm: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'flex-start', md: 'flex-start' }
            }}>
              <Box
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
                  borderRadius: 2,
                  cursor: 'pointer',
                  fontSize: { xs: '14px', md: '16px' },
                  fontWeight: 500,
                  textAlign: 'center',
                  minWidth: { xs: 140, md: 'auto' },
                  '&:hover': { bgcolor: '#005A69' },
                }}
              >
                Our Products
              </Box>
              <Box
                sx={{
                  bgcolor: '#fff',
                  color: '#00778B',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.5, md: 2 },
                  borderRadius: 2,
                  border: '1px solid #00778B',
                  cursor: 'pointer',
                  fontSize: { xs: '14px', md: '16px' },
                  fontWeight: 500,
                  textAlign: 'center',
                  minWidth: { xs: 140, md: 'auto' },
                  '&:hover': { bgcolor: '#f0f0f0' },
                }}
                onClick={() => handleRequestQuote()}
              >
                Request a Quote
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Right Image */}
        <Box sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          order: { xs: 1, md: 2 }
        }}>
          <Box
            sx={{
              width: '100%',
              maxWidth: { xs: 300, sm: 400, md: 500, lg: 600 },
              height: { xs: 350, sm: 350, md: 400, lg: 600 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: { xs: 2, md: 3 }
            }}
          >
            <Box
              component="img"
              src={HomeSecondImage}
              alt="Protective Apparel"
              sx={{
                height: "100%",
                width: "100%",
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

export default ProtectiveApparelSection;
