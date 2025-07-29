import { Box, Typography, Button, Container } from "@mui/material";
import ComplianceSection from "../Sections/ComplianceSection";
import ProtectiveApparelSection from "../Sections/ProtectiveApparelSection";
import ProductCategories from "../Sections/ProductCategories";
function Hero() {
  return (
    <Box sx={{
      bgcolor: 'background.paper',
    }}>
       <ComplianceSection />
       <ProtectiveApparelSection />
    </Box>
  );
}
export default Hero;
