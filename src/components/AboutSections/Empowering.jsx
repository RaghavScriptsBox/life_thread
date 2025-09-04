import React from "react";
import { Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

// Example image: Replace with your own asset or correct path
import AboutUsTwoImage from '../../Assets/AboutUsTwoImage.png'; // Adjust path as needed
import SafetyImage from '../../Assets/Icons/safety_divider.png'; // Adjust path as needed
import VectorImage from "../../Assets/Icons/Vector.png"
import Appreal2 from "../../Assets/Icons/apparel2.png"

export default function Empowering() {
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
                justifyContent: 'space-between',
                gap:"50px"

            }}>
                {/* RIGHT: Image */}
                <Box sx={{
                    textAlign: { xs: "center", md: "left" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: {
                        xs: '100%',
                        md: "50%"
                    },
                    mt:{ xs: "30px", md: "0px" },
                    order: { xs: 2, md: 1 },
                }}>
                    <Box
                        component="img"
                        src={AboutUsTwoImage}
                        alt="Cleanroom professionals"
                        sx={{
                            width: { xs: "100%", md: "100%" },
                            maxWidth: {
                                xs: "400px",
                                md: "550px"
                            },
                            maxHeight: "600px",
                            borderRadius: 0,
                            boxShadow: 3,
                            objectFit: "cover",
                            mx: "auto"
                        }}
                    />
                </Box>
                {/* LEFT: Text content */}
                <Box sx={{
                    textAlign: { xs: "left", md: "left" },
                    width: {
                        xs: "100%",
                        md: "50%"
                    },
                    order: { xs: 1, md: 2 },
                }}>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            color: "#005A69",
                            mb: 2,
                            fontFamily: "Figtree, sans-serif",
                            fontSize: {
                                xs: "30px",
                                md: "56px"
                            }
                            , mt: { xs: "30px", md: "0px" }
                        }}
                    >
                        Empowering Safer Workplaces with Innovative Apparel
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ color: "#121212B2", fontSize: 18, mb: 3, maxWidth: 540, opacity: 0.8 }}
                    >
                        Our vision is to be the leading provider of ESD and medical protective apparel in India. We strive to create environments that are safer, cleaner, and more productive for everyone.
                    </Typography>

                    <List>
                        <ListItem sx={{ pl: 0 }}>
                            <ListItemIcon sx={{ maxWidth: 40, color: "#16887a" }}>
                                <img src={VectorImage} alt="Check" style={{ width: "30px" }} />
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    color: "#121212cb",
                                    fontFamily: "Figtree, sans-serif",
                                    fontSize: "18px"
                                }}
                                primary="Trusted provider of protective apparel for critical industries."
                            />
                        </ListItem>
                        <ListItem sx={{ pl: 0 }}>
                            <ListItemIcon sx={{ maxWidth: 40, color: "#16887a" }}>
                                <img src={SafetyImage} alt="Check" style={{ width: "30px" }} />
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    color: "#121212cb",
                                    fontFamily: "Figtree, sans-serif",
                                    fontSize: "18px"
                                }}
                                primary="Innovative solutions for a safer work environment."
                            />
                        </ListItem>
                        <ListItem sx={{ pl: 0 }}>
                            <ListItemIcon sx={{ maxWidth: 40, color: "#16887a" }}>
                                <img src={Appreal2} alt="Check" style={{ width: "30px" }} />
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    color: "#121212cb",
                                    fontFamily: "Figtree, sans-serif",
                                    fontSize: "18px"
                                }}
                                primary="Commitment to quality and safety in every garment."
                            />
                        </ListItem>
                    </List>
                </Box>


            </Box>
        </Box>
    );
}
