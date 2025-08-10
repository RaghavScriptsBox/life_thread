import React from "react";
import { Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

// Example image: Replace with your own asset or correct path
import AboutUsImage from '../../Assets/AboutUsImage.png'; // Adjust path as needed

export default function OurCommitment() {
  return (
    <Box sx={{
      backgroundColor: "#f8fafa",
      px: { xs: 2, md: 6 },
      py: { xs: 4, md: 8 },
      height: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative"
    }}>
      <Box alignItems="center" sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        alignItems:"center"

      }}>
        {/* LEFT: Text content */}
        <Box sx={{
          textAlign: { xs: "left", md: "left" },
          width: {
            xs: "100%",
            md: "50%"
          },
          maxWidth:"800px"
        }}>
          <Typography
            sx={{
              fontWeight: 700,
              color: "#000000",
              mb: 2,
              fontFamily: "Lato, sans-serif",
              fontSize: {
                xs: "27px",
                md: "56px"
              },
              lineHeight: 1.2,
              color: "#005A69"
            }}
          >
            Our Commitment to Safety and Innovation
          </Typography>

          <Typography
            
            sx={{ color: "#121212B2",opacity: 0.8, fontSize: 18, mb: 3, maxWidth: 540, fontFamily: "Figtree", color: "#121212B2" }}
          >
            At LifeThread, we are dedicated to creating high-performance ESD and cleanroom garments. Our mission is to ensure the safety of people and products in critical environments.
          </Typography>

          <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 2 },
            width: "80%",
            mb: { xs: "80px", md: "0px" },
            textAlign: "left"
          }}>
            <Box>
              <Typography sx={{
                fontFamily: "Figtree, sans-serif",
                fontSize: { xs: '25px', md: '25px', lg: "30px" },
                color: "#005A69",
                fontWeight: "bold"
              }}>Our Mission</Typography>
              <Typography sx={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: { xs: '16px', md: '16px', lg: "16px" },
                color: "#121212B2",
                opacity: 0.8
              }}>Designing innovative garments that meet stringent regulatory standards for critical environments.</Typography>
            </Box>
            <Box>
              <Typography sx={{
                fontFamily: "Figtree, sans-serif",
                fontSize: { xs: '25px', md: '25px', lg: "30px" },
                color: "#005A69",
                fontWeight: "bold"
              }}>Our Vision</Typography>
              <Typography sx={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: { xs: '16px', md: '16px', lg: "16px" },
                color: "#121212B2",
                opacity: 0.8
              }}>To be the most trusted provider of protective apparel in India and beyond.</Typography>
            </Box>
          </Box>
        </Box>

        {/* RIGHT: Image */}
        <Box sx={{
          textAlign: { xs: "center", md: "right" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: {
            xs: '100%',
            md: "50%"
          }
        }}>
          <Box
            component="img"
            src={AboutUsImage}
            alt="Cleanroom professionals"
            sx={{
              width: { xs: "100%", md: "100%" },
              maxWidth: {
                xs: "400px",
                md: "550px"
              },
              maxHeight: "600px",
              borderRadius: 2,
              boxShadow: 3,
              objectFit: "cover",
              mx: "auto"
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
