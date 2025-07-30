import { Box, Typography, Grid, Stack } from "@mui/material";
import JoinUsSection from "./AboutSections/JoinUsSection";
import CatalogoueAbout from "./AboutSections/CatalogoueAbout";
import InspiredPage from "./AboutSections/InspiredPage";
import AboutHeroSection from "./AboutSections/AboutHeroSection";
import OurCommitment from "./AboutSections/OurCommitment";
import Empowering from "./AboutSections/Empowering";
function About() {
  return (
    <Box>
      <Stack spacing={0}>
        <AboutHeroSection />
        <OurCommitment />
        <Empowering />
        <InspiredPage />
        <CatalogoueAbout />
        <JoinUsSection />
      </Stack>
    </Box>
  );
}
export default About;
