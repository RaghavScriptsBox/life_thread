import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Link } from "react-router-dom"

const teal = "#007d8c";          // heading color to match screenshot
const bodyMuted = "#5b6b73";     // subtitle + address tone

export default function JoinUsSection() {
  return (
    <Box component="section" sx={{ bgcolor: "#fff" }}>
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Heading */}
        <Typography
          component="h2"
          align="center"
          sx={{
            color: teal,
            fontWeight: 600,
            fontSize: { xs: 28, sm: 34, md: 38 },
            lineHeight: 1.2,
            mb: 1.5,
            fontFamily: "Lato, Inter, system-ui, -apple-system, Segoe UI, Roboto",
            color: "#005A69",
          }}
        >
          Join Us in Shaping Safety
        </Typography>

        {/* Subtitle */}
        <Typography
          align="center"
          sx={{
            color: bodyMuted,
            fontSize: { xs: 14, sm: 16 },
            lineHeight: 1.6,
            maxWidth: 780,
            mx: "auto",
            mb: { xs: 5, md: 7 },
            fontFamily: "Figtree, sans-serif",
            color: "#000000"
          }}
        >
          Together, we tackle challenges with innovative solutions that prioritize
          safety and quality in every garment.
        </Typography>

        {/* Grid */}
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          {/* Email */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center", px: { xs: 1, md: 4 } }}>
              <EmailOutlinedIcon sx={{ fontSize: 26, mb: 1, color: "text.primary" }} />
              <Typography sx={{ fontWeight: 700, mb: 0.5, fontSize: 16 }}>
                Email
              </Typography>
              <Link
                href="mailto:contact@lifethread.co.in"
                underline="none"
                sx={{ color: "text.primary", fontSize: 15, cursor: "pointer" }}
              >
                contact@lifethread.co.in
              </Link>
            </Box>
          </Grid>

          {/* Phone */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center", px: { xs: 1, md: 4 } }}>
              <Link href="tel:+919909916599" underline="none" sx={{ color: "text.primary" }}>
                <LocalPhoneOutlinedIcon sx={{ fontSize: 26, mb: 1 }} />
              </Link>
              <Typography sx={{ fontWeight: 700, mb: 0.5, fontSize: 16 }}>
                Phone
              </Typography>
              <Link href="tel:+919909916599" underline="none" sx={{ color: "text.primary", fontSize: 15 }}>
                +91 99099 16599
              </Link>
            </Box>

          </Grid>

          {/* Reg. Office */}
          <Box sx={{
            display: { xs: "block", md: "flex" }
          }}>
            <Box>
              <Box sx={{ textAlign: "center", px: { xs: 1, md: 4 } }}>
                <PlaceOutlinedIcon sx={{ fontSize: 26, mb: 1, color: "text.primary" }} />
                <Typography sx={{ fontWeight: 700, mb: 0.5, fontSize: 16 }}>
                  Reg. Office
                </Typography>
                <Typography sx={{ color: bodyMuted, fontSize: 15, lineHeight: 1.6 }}>
                  214, Harmony Icon, Zydus Hospital Road, Nr. Bagbhan
                  Party Plot, Thaltej Ahmedabad, Gujarat 380059
                </Typography>
              </Box>
            </Box>

            {/* Manufacturing unit */}
            <Box>
              <Box sx={{ textAlign: "center", px: { xs: 1, md: 4 } }}>
                <PlaceOutlinedIcon sx={{ fontSize: 26, mb: 1, color: "text.primary" }} />
                <Typography sx={{ fontWeight: 700, mb: 0.5, fontSize: 16 }}>
                  Manufacturing unit
                </Typography>
                <Typography sx={{ color: bodyMuted, fontSize: 15, lineHeight: 1.6 }}>
                  Plot No C-18/6, Road no-14, Hojiwala Industrial Estate,
                  Sachin Palsana Road, Surat, Gujarat 394230
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
