import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    Alert
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DownloadCatalogueModal = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        contactNumber: '',
        businessName: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.email || !formData.contactNumber) {
            setShowError(true);
            setTimeout(() => setShowError(false), 5000);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xanbpogz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    contactNumber: formData.contactNumber,
                    businessName: formData.businessName,
                    formType: 'Download Catalogue'
                }),
            });

            if (response.ok) {
                setShowSuccess(true);
                // Reset form
                setFormData({
                    email: '',
                    contactNumber: '',
                    businessName: ''
                });

                // Close modal after short delay and redirect to catalogue
                setTimeout(() => {
                    setShowSuccess(false);
                    onClose();
                    // Redirect to Google Drive catalogue
                    window.open('https://drive.google.com/drive/folders/10uwcdxaetJPEDQDpQIXZQOf0RZnNgcSV', '_blank');
                }, 2000);
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setShowError(true);
            setTimeout(() => setShowError(false), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        if (!isSubmitting) {
            setFormData({
                email: '',
                contactNumber: '',
                businessName: ''
            });
            setShowSuccess(false);
            setShowError(false);
            onClose();
        }
    };

    // Custom input field styling to match the design
    const inputFieldSx = {
        width: '100%',
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            fontFamily: 'Inter',
            fontSize: '14px',
            '& fieldset': {
                borderColor: '#e9ecef',
                borderWidth: '1px',
            },
            '&:hover fieldset': {
                borderColor: '#007b89',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#007b89',
                borderWidth: '2px',
            }
        },
        '& .MuiInputLabel-root': {
            fontFamily: 'Inter',
            fontSize: '14px',
            color: '#6c757d',
            '&.Mui-focused': {
                color: '#007b89',
            }
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px',
        }
    };

    const labelStyle = {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: 500,
        color: '#333',
        mb: 1,
        display: 'block'
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    maxWidth: '480px',
                    width: '90%'
                }
            }}
        >
            <DialogContent sx={{ p: 0 }}>
                {/* Header */}
                <Box sx={{
                    backgroundColor: '#007b89',
                    color: 'white',
                    p: 3,
                    position: 'relative',
                    borderRadius: '12px 12px 0 0'
                }}>
                    <IconButton
                        onClick={handleClose}
                        disabled={isSubmitting}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.1)'
                            }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        fontSize: '18px',
                        mb: 1
                    }}>
                        Download Catalogue
                    </Typography>

                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        opacity: 0.9,
                        borderTop: '1px dotted rgba(255,255,255,0.3)',
                        pt: 1
                    }}>
                        Fields marked with * are mandatory.
                    </Typography>
                </Box>

                {/* Form Content */}
                <Box sx={{ p: 3 }}>
                    {showSuccess && (
                        <Alert severity="success" sx={{ mb: 2 }}>
                            Form submitted successfully! Redirecting to catalogue...
                        </Alert>
                    )}

                    {showError && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            Please fill in all required fields and try again.
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <Box sx={{ mb: 3 }}>
                            <Typography sx={labelStyle}>
                                Email Id*
                            </Typography>
                            <TextField
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email address"
                                required
                                disabled={isSubmitting}
                                sx={inputFieldSx}
                            />
                        </Box>

                        {/* Contact Number Field */}
                        <Box sx={{ mb: 3 }}>
                            <Typography sx={labelStyle}>
                                Contact Number*
                            </Typography>
                            <TextField
                                name="contactNumber"
                                type="tel"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                placeholder="Enter your mobile number"
                                required
                                disabled={isSubmitting}
                                sx={inputFieldSx}
                            />
                        </Box>

                        {/* Business Name Field */}
                        <Box sx={{ mb: 4 }}>
                            <Typography sx={labelStyle}>
                                Business Name*
                            </Typography>
                            <TextField
                                required
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleInputChange}
                                placeholder="Enter your company name"
                                disabled={isSubmitting}
                                sx={inputFieldSx}
                            />
                        </Box>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={isSubmitting}
                            sx={{
                                backgroundColor: '#007b89',
                                color: '#fff',
                                height: '50px',
                                borderRadius: '10px',
                                fontFamily: 'Figtree',
                                fontWeight: 600,
                                fontSize: '16px',
                                textTransform: 'none',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#006570',
                                    boxShadow: 'none',
                                },
                                '&:disabled': {
                                    backgroundColor: '#ccc',
                                    boxShadow: 'none',
                                }
                            }}
                        >
                            {isSubmitting ? 'Submitting...' : 'Download Catalogue'}
                        </Button>
                    </form>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default DownloadCatalogueModal;
