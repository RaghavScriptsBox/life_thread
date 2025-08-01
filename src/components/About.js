import { Box, Typography, Grid, Stack } from "@mui/material";
import JoinUsSection from "./AboutSections/JoinUsSection";
import CatalogoueAbout from "./AboutSections/CatalogoueAbout";
import InspiredPage from "./AboutSections/InspiredPage";
import AboutHeroSection from "./AboutSections/AboutHeroSection";
import OurCommitment from "./AboutSections/OurCommitment";
import Empowering from "./AboutSections/Empowering";
import CoreValuesSection from "./AboutSections/CoreValuesSection";
import WhyChosseUs from "./AboutSections/WhyChosseUs";
function About() {
  return (
    <Box>
      <Stack spacing={0}>
        <AboutHeroSection />
        <OurCommitment />
        <Empowering />
        <CoreValuesSection />
        <WhyChosseUs />
        <InspiredPage />
        <CatalogoueAbout />
        <JoinUsSection />
      </Stack>
    </Box>
  );
}
export default About;
