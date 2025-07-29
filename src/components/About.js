import { Box, Typography, Grid } from "@mui/material";
function About() {
  return (
    <Box className="main-section" id="about">
      <Typography className="section-title">About Us</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography>
            CompanyName is a leader in delivering scalable digital products. With a focus on design and technology, we empower our partners to achieve their business goals efficiently.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            Our team blends creativity, strategy, and engineering to realize visionary projects, from web platforms to mobile apps.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default About;
