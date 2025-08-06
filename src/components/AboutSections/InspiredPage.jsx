import React from "react";
import { Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

// Example image: Replace with your own asset or correct path
import InspiredBy from '../../Assets/InspiredBy.png'; // Adjust path as needed
import ApprealImage from "../../Assets/Icons/About/apparel.png";
import PartnerExchange from "../../Assets/Icons/About/partner_exchange.png";
import SendTimeImage from "../../Assets/Icons/About/send_time_extension.png"

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
          textAlign: { xs: "left", md: "left" },
          width: {
            xs: "100%",
            md: "50%"
          }
        }}>
          <Typography
            sx={{
              fontWeight: 700,
              color: "#005A69",
              mb: 2,
              fontFamily: "Lato, sans-serif",
              fontSize: {
                xs: "30px",
                md: "56px"
              }
            }}
          >
            Inspired by Pioneers,<br />Driven by Innovation
          </Typography>

          <Typography
            sx={{ color: "#333", fontSize: 18, mb: 3, maxWidth: 540 }}
          >
            We draw inspiration from industry leaders combining their legacy with our unique Indian agility. This fusion allows us to adapt and respond effectively to our partners' needs.
          </Typography>

          <List>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 40, color: "#16887a" }}>
                <img src={PartnerExchange} alt="Apparel" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#121212B2"
                }}
                primary="Agility and adaptability define our collaborative partnerships."
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 40, color: "#16887a" }}>
                <img src={SendTimeImage} alt="Partner Exchange" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#121212B2"
                }}
                primary="We deliver on time, every time, with confidence."
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 40, color: "#16887a" }}>
                <img src={ApprealImage} alt="Send Time Extension" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#121212B2"
                }}
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
          },
        }}>
          <Box
            component="img"
            src={InspiredBy}
            alt="Cleanroom professionals"
            sx={{
              width: { xs: "100%", md: "100%" },
              maxWidth: {
                xs: "400px",
                md: "500px"
              },
              maxHeight: {
                xs: "400px",
                md: "600px"
              },
              borderRadius: 2,
              boxShadow: 3,
              objectFit: "cover",
              mx: "auto",
              height: "auto"
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
