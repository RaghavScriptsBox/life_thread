import React from "react";
import { Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

// Example image: Replace with your own asset or correct path
import SectionImage from '../../Assets/DocImage.png'; // Adjust path as needed

export default function InspiredPage() {
  return (
    <Box sx={{
      backgroundColor: "#f8fafa",
      px: { xs: 2, md: 6 },
      py: { xs: 4, md: 8 },
      minHeight: "60vh",
      display: "flex",
      alignItems: "center"
    }}>
      <Box alignItems="center" sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%"

      }}>
        {/* LEFT: Text content */}
        <Box sx={{
          textAlign: { xs: "center", md: "left" },
          width: {
            xs: "100%",
            md: "50%"
          }
        }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#16887a",
              mb: 2,
              fontFamily: "Lato, sans-serif"
            }}
          >
            Inspired by Pioneers,<br />Driven by Innovation
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#333", fontSize: 18, mb: 3, maxWidth: 540 }}
          >
            We draw inspiration from industry leaders combining their legacy with our unique Indian agility. This fusion allows us to adapt and respond effectively to our partners' needs.
          </Typography>

          <List>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 40, color: "#16887a" }}>
                <CheckCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Agility and adaptability define our collaborative partnerships."
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 40, color: "#16887a" }}>
                <CheckCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="We deliver on time, every time, with confidence."
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 40, color: "#16887a" }}>
                <CheckCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Your needs shape our innovative garment solutions."
              />
            </ListItem>
          </List>
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
            src={SectionImage}
            alt="Cleanroom professionals"
            sx={{
              width: { xs: "100%", md: "100%" },
              maxWidth: {
                xs: "400px",
                md: "500px"
              },
              maxHeight:"400px",
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
