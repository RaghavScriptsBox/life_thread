import React, { useState } from 'react';
import { Box, Typography, Button, TextField, MenuItem, Grid, Container, Paper, FormControl, RadioGroup, FormControlLabel, Radio, Link } from '@mui/material';
import ContactUsImage from "../Assets/ContactUs.png"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DocTwoImage from "../Assets/DocTwoImage.png"
import RequestQuoteModal from './RequestQuoteModal';
// import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        inquiryType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [quoteModalOpen, setQuoteModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleRequestQuote = (productTitle) => {
        setSelectedProduct(productTitle);
        setQuoteModalOpen(true);
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const response = await fetch('https://formspree.io/f/xqaljzpg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.contact,
                    inquiry_type: formData.inquiryType,
                    message: formData.message
                })
            });
            console.log("Response:", response);

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    contact: '',
                    inquiryType: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box sx={{background:"#f5f9fa"}}>
            {/* Hero Section with Background */}
            <Box
                sx={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: { xs: "60vh", md: "50vh" },
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "#007C91",
                        zIndex: 1,
                        opacity: 0.9, // optional: softens overlay
                    },
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        width: "100%",
                        px: { xs: 2, sm: 3, md: 5 },
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 4, md: 0 },
                    }}
                >
                    {/* Left Side */}
                    <Box
                        sx={{
                            color: "white",
                            width: { xs: "100%", md: "50%" },
                            textAlign: { xs: "left", md: "left" },
                            display: "flex",
                            alignItems: {
                                xs: "flex-start",
                                md: "center"
                            },
                            justifyContent: { xs: "flex-start", md: "flex-start" },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Figtree",
                                fontWeight: 600,
                                fontSize: {
                                    xs: "40px",
                                    sm: "40px",
                                    md: "48px",
                                    lg: "55px",
                                },
                                lineHeight: 1.5,
                            }}
                        >
                            Get in Touch with LifeThread
                        </Typography>
                    </Box>

                    {/* Right Side */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "50%" },
                            textAlign: { xs: "left", md: "left" },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Figtree",
                                fontWeight: 400,
                                fontSize: {
                                    xs: "20px",
                                    sm: "20px",
                                    md: "20px",
                                    lg: "20px",
                                },
                                lineHeight: 1.5,
                                color: "#fff",
                                px: { xs: 1, sm: 2, md: 0 },
                            }}
                        >
                            Have a question about our garments, certifications, or custom solutions?
                            Reach out for samples or meetings today.
                        </Typography>

                        <Box
                            sx={{
                                mt: { xs: 3, md: 4 },
                                display: "flex",
                                flexDirection: { xs: "row", sm: "row" },
                                gap: 2,
                                justifyContent: { xs: "flex-start", md: "flex-start" },
                                alignItems: "center",
                            }}
                        >
                            <Button
                                onClick={() => {
                                    const catalogueElement = document.getElementById("send-message");
                                    if (catalogueElement) {
                                        catalogueElement.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                variant="contained"
                                sx={{
                                    backgroundColor: "#fff",
                                    color: "#006778",
                                    borderRadius: "8px",
                                    fontWeight: "600",
                                    px: { xs: 3, md: 4 },
                                    py: { xs: 1.5, md: 1.5 },
                                    fontSize: { xs: "16px", md: "16px" },
                                    minWidth: { xs: "160px", sm: "auto" },
                                    textTransform: "none",
                                }}
                            >
                                Send Message
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    color: "#fff",
                                    borderColor: "#fff",
                                    borderRadius: "8px",
                                    px: { xs: 3, md: 4 },
                                    py: { xs: 1.5, md: 1.5 },
                                    fontSize: { xs: "16px", md: "16px" },
                                    minWidth: { xs: "160px", sm: "auto" },
                                    textTransform: "none",
                                }}
                                onClick={handleRequestQuote}
                            >
                                Request Quote
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Image Section */}
            <Box

                component="img"
                src={ContactUsImage}
                alt="Lab"
                sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: { xs: "250px", md: "600px" },
                    objectFit: "cover"
                }}
            />
            <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
                {/* Contact Us Form */}
                <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2,background:"transparent" }}>
                    <Box id='send-message' sx={{
                        textAlign: "center",
                        mb: { xs: 3, md: 4 }
                    }}>
                        <Typography sx={{
                            fontFamily: "Figtree",
                            fontWeight: 600,
                            fontSize: { xs: "32px", sm: "40px", md: "50px" },
                            color: "#005A69",
                            lineHeight: 1.2
                        }} gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography sx={{
                            fontFamily: "Figtree",
                            fontWeight: 400,
                            fontSize: { xs: "16px", md: "20px" },
                            color: "#121212B2",
                            px: { xs: 2, md: 0 }
                        }}>
                            We're here to assist you with your inquiries.
                        </Typography>
                    </Box>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Box>
                            <label style={LableStyle}>Full Name*</label>
                            <input
                                required
                                fullWidth
                                label="Full Name*"
                                variant="outlined"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    borderRadius: "12px",
                                    height: "40px",
                                    width: "100%",
                                    border: '1px solid #D9D9D9',
                                    marginTop: "12px",
                                    padding: "0 12px"
                                }}
                            />
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: {
                                xs: "column",
                                md: "row"
                            },
                            gap: { xs: "15px", md: "15px" },
                            mt: "20px"
                        }}>
                            <Box sx={{ width: { xs: "100%", md: "48%" } }}>
                                <label style={LableStyle}>Email Id*</label>
                                <input
                                    required
                                    type="email"
                                    fullWidth
                                    label="Email Id*"
                                    variant="outlined"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        borderRadius: "12px",
                                        height: "40px",
                                        width: "100%",
                                        border: '1px solid #D9D9D9',
                                        marginTop: "12px",
                                        padding: "0 12px"
                                    }}
                                />
                            </Box>
                            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                                <label style={LableStyle}>Contact Number*</label>
                                <input
                                    required
                                    type="tel"
                                    fullWidth
                                    label="Contact Number*"
                                    variant="outlined"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    style={{
                                        borderRadius: "12px",
                                        height: "40px",
                                        width: "100%",
                                        border: '1px solid #D9D9D9',
                                        marginTop: "12px",
                                        padding: "0 12px"
                                    }}
                                />
                            </Box>

                        </Box>
                        <Box item xs={12} sx={{ mt: '25px' }}>
                            <Typography style={LableStyle} gutterBottom>
                                Select type
                            </Typography>
                            <Box sx={{
                                display: "flex",
                                flexDirection: { xs: "row", md: "row" },
                                gap: { xs: "20px", md: "0" }
                            }}>
                                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                                    <FormControl component="fieldset">
                                        <RadioGroup
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel value="general" control={<Radio />}
                                                label={
                                                    <Typography sx={{ fontFamily: 'Figtree', color: "#1e1e1e" }}>
                                                        General Inquiry
                                                    </Typography>
                                                } />
                                            <FormControlLabel value="custom" control={<Radio />}
                                                label={
                                                    <Typography sx={{ fontFamily: 'Figtree', color: "#1e1e1e" }}>
                                                        Custom Order
                                                    </Typography>
                                                } />
                                            <FormControlLabel value="otherInquiry" control={<Radio />}
                                                label={
                                                    <Typography sx={{ fontFamily: 'Figtree', color: "#1e1e1e" }}>
                                                        Other Inquiry
                                                    </Typography>
                                                } />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                                    <FormControl component="fieldset">
                                        <RadioGroup
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel value="quote" control={<Radio />} label={
                                                <Typography sx={{ fontFamily: 'Figtree', color: "#1e1e1e" }}>
                                                    Request Quote
                                                </Typography>
                                            } />
                                            <FormControlLabel value="support" control={<Radio />} label={
                                                <Typography sx={{ fontFamily: 'Figtree', color: "#1e1e1e" }}>
                                                    Technical Support
                                                </Typography>
                                            } />
                                            <FormControlLabel value="other" control={<Radio />} label={
                                                <Typography sx={{ fontFamily: 'Figtree', color: "#1e1e1e" }}>
                                                    Other
                                                </Typography>
                                            } />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>
                        <Box item xs={12} sx={{ mt: '25px' }}>
                            <label style={LableStyle}>Your message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                rows={4}
                                style={{
                                    borderRadius: "12px",
                                    width: "100%",
                                    marginTop: "12px",
                                    border: '1px solid #D9D9D9',
                                    padding: "12px",
                                    fontFamily: "Figtree",
                                    fontSize: "14px",
                                    resize: "vertical",
                                    minHeight: "100px"
                                }}
                            />
                        </Box>
                        <Box sx={{ mt: { xs: "16px", md: "20px" } }}>
                            {submitStatus === 'success' && (
                                <Typography sx={{
                                    color: 'green',
                                    textAlign: 'center',
                                    mb: 2,
                                    fontFamily: "Figtree",
                                    fontSize: "14px"
                                }}>
                                    Thank you! Your message has been sent successfully.
                                </Typography>
                            )}
                            {submitStatus === 'error' && (
                                <Typography sx={{
                                    color: 'red',
                                    textAlign: 'center',
                                    mb: 2,
                                    fontFamily: "Figtree",
                                    fontSize: "14px"
                                }}>
                                    Sorry, there was an error sending your message. Please try again.
                                </Typography>
                            )}
                            <Button
                                type="submit"
                                fullWidth
                                disabled={isSubmitting}
                                variant="contained"
                                sx={{
                                    backgroundColor: isSubmitting ? '#ccc' : '#007b89',
                                    color: '#fff',
                                    borderRadius: "10px",
                                    fontFamily: "Figtree",
                                    textTransform: "none",
                                    height: "50px",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    boxShadow: "none",
                                    '&:hover': {
                                        backgroundColor: isSubmitting ? '#ccc' : '#006570',
                                        boxShadow: "none",
                                    }
                                }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
            {/* Garment Selection Help Section */}
            <Box sx={{ backgroundColor: '#f9f9f9', py: { xs: 4, md: 6 } }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "center" },
                        gap: { xs: 3, md: 0 }
                    }}>
                        <Box sx={{ width: { xs: '100%', md: '50%' }, textAlign: { xs: 'center', md: 'left' }, mb: { xs: 2, md: 4 } }}>
                            <Typography sx={{
                                fontFamily: 'Figtree',
                                fontWeight: 600,
                                fontSize: {
                                    xs: '24px',
                                    sm: '32px',
                                    md: '40px',
                                    lg: '50px',
                                },
                                color: '#005A69',
                                mb: 2,
                                lineHeight: 1.2
                            }}>
                                Need Assistance with Garment Selection?
                            </Typography>

                        </Box>
                        <Box sx={{ width: { xs: '100%', md: '50%' }, textAlign: { xs: 'center', md: 'left' }, mb: { xs: 2, md: 4 } }}>
                            <Typography sx={{
                                fontFamily: 'Figtree',
                                fontWeight: 400,
                                fontSize: {
                                    xs: '16px',
                                    sm: '18px',
                                    md: '20px',
                                    lg: '24px'
                                },
                                mb: { xs: 2, md: 1 }
                            }}>
                                Our experts are here to guide you in selecting the perfect garment for your needs. Don't hesitate to reach out for personalized advice.
                            </Typography>
                            <Button variant="contained" sx={{
                                backgroundColor: '#007C91',
                                borderRadius: "10px",
                                fontFamily: "Figtree",
                                textTransform: "none",
                                height: "50px",
                                width: { xs: "180px", md: "200px" },
                                mt: { xs: "8px", md: "10px" },
                                fontSize: "16px",
                                fontWeight: 600,
                                boxShadow: "none",
                                '&:hover': {
                                    backgroundColor: '#006570',
                                    boxShadow: "none",
                                }
                            }}>
                                <Link
                                    href="tel:+9825109703"
                                    underline="none"
                                    sx={{ display: "block", fontFamily: "Figtree", fontSize: "16px", color: "#003B49" }}
                                >
                                    <Typography sx={{
                                        fontFamily: "Figtree",
                                        fontSize: "16px",
                                        color: "#fff",
                                        textDecoration: "none"
                                    }}>
                                        Talk to the Expert
                                    </Typography>
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box >
            {/* Request Quote Modal */}
            < RequestQuoteModal
                open={quoteModalOpen}
                onClose={() => setQuoteModalOpen(false)}
                selectedProduct={null}
            />
        </Box >
    );
};

export default ContactUs;

const LableStyle = {
    fontFamily: 'Figtree',
    fontWeight: '500',
    fontSize: '16px',
    color: '#121212',
    lineHeight: '24px'
};