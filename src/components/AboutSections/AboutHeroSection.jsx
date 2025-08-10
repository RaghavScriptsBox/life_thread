import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutHeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#08869d", // Matches the teal from your image
        minHeight: { xs: 250, sm: 300 },
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "#fff",
          mb: 3,
          fontFamily: "Lato, sans-serif",
          fontSize: { xs: 32, md: 48 }
        }}
      >
        About Us
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#fff",
          fontSize: { xs: 14, md: 20 },
          // maxWidth: 900,
          fontFamily: "Inter, sans-serif"
        }}
      >
        At LifeThread, we pride ourselves on our rapid turnaround times and robust quality control processes that ensure every garment meets the highest standards. Our in-house design and private label capabilities allow us to tailor solutions specifically for your needs. With ISO certifications and a commitment to transparency, we empower your operations with confidence.
      </Typography>
    </Box>
  );
}
