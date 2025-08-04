import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Box,
    Typography,
    Button,
    TextField,
    MenuItem,
    IconButton,
    Stepper,
    Step,
    StepLabel,
    Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

const RequestQuoteModal = ({ open, onClose, selectedProduct = null }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        products: [{ product: '', quantity: '' }],
        additionalNotes: '',
        fullName: '',
        email: '',
        contactNumber: '',
        businessName: ''
    });

    const steps = ['Product Details', 'Personal Details'];

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    const handleProductChange = (index, field, value) => {
        const updatedProducts = [...formData.products];
        updatedProducts[index][field] = value;
        setFormData({ ...formData, products: updatedProducts });
    };

    const addMoreProduct = () => {
        setFormData({
            ...formData,
            products: [...formData.products, { product: '', quantity: '' }]
        });
    };

    const removeProduct = (index) => {
        const updatedProducts = formData.products.filter((_, i) => i !== index);
        setFormData({ ...formData, products: updatedProducts });
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://formbold.com/s/3n5n1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'quote_request',
                    products: formData.products,
                    additional_notes: formData.additionalNotes,
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.contactNumber,
                    business_name: formData.businessName
                })
            });

            if (response.ok) {
                alert('Quote request submitted successfully!');
                onClose();
                // Reset form
                setFormData({
                    products: [{ product: '', quantity: '' }],
                    additionalNotes: '',
                    fullName: '',
                    email: '',
                    contactNumber: '',
                    businessName: ''
                });
                setActiveStep(0);
            }
        } catch (error) {
            console.error('Error submitting quote request:', error);
            alert('Error submitting request. Please try again.');
        }
    };

    // Product options based on categories
    const productOptions = [
        'ESD Coverall Suits',
        'ESD Apron',
        'ESD Top & Bottom',
        'Lint-Free Polyester Apron',
        'Lint-Free Wipes for Cleaning',
        'Scrub Suit (Cotton)',
        'Scrub Suit (Polyester)',
        'Boiler Suit (Cotton)',
        'Boiler Suit (Polyester)',
        'Disposable Scrub Suit',
        'Surgical Gown',
        'Isolation Gown',
        'Wrap-Around Gown',
        'Disposable Apron',
        'Visitor Gown',
        'Disposable Antistatic Garment',
        'Safety Goggles',
        'ESD Wrist Straps',
        'Cleanroom Caps',
        'Anti-Static Mats',
        'Safety Helmets',
        'Protective Boots',
        'ESD Tool Kit'
    ];

    React.useEffect(() => {
        if (selectedProduct && open) {
            setFormData(prev => ({
                ...prev,
                products: [{ product: selectedProduct, quantity: '' }]
            }));
        }
    }, [selectedProduct, open]);

    // Label style to match ContactUs
    const LabelStyle = {
        fontFamily: 'Figtree',
        fontWeight: '500',
        fontSize: '16px',
        color: '#121212',
        lineHeight: '24px'
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 2,
                    maxHeight: '90vh'
                }
            }}
        >
            <DialogTitle sx={{ 
                p: 0, 
                position: 'relative',
                backgroundColor: '#005A69'
            }}>
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    p: 2
                }}>
                    <Typography sx={{ 
                        fontSize: '12px', 
                        color: '#fff',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontFamily: 'Figtree'
                    }}>
                        REQUEST QUOTE
                    </Typography>
                    <IconButton onClick={onClose} size="small" sx={{ color: '#fff' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                
                {/* Step Header */}
                <Box sx={{ 
                    px: 2, 
                    pb: 2, 
                    backgroundColor: '#005A69'
                }}>
                    <Typography sx={{ 
                        fontSize: { xs: "24px", md: "28px" }, 
                        fontWeight: 600,
                        color: '#fff',
                        mb: 2,
                        fontFamily: 'Figtree',
                        lineHeight: 1.2
                    }}>
                        Step {activeStep + 1}: {steps[activeStep]}
                    </Typography>
                    
                    {/* Custom Step Indicator */}
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {steps.map((_, index) => (
                            <Box
                                key={index}
                                sx={{
                                    height: 4,
                                    flex: 1,
                                    backgroundColor: index <= activeStep ? '#fff' : 'rgba(255,255,255,0.3)',
                                    borderRadius: 2,
                                    transition: 'background-color 0.3s ease'
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </DialogTitle>

            <DialogContent sx={{ p: 3 }}>
                {activeStep === 0 ? (
                    // Step 1: Product Details
                    <Box>
                        {formData.products.map((product, index) => (
                            <Box key={index} sx={{ mb: 3 }}>
                                <Box sx={{ 
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "row" },
                                    gap: { xs: "15px", md: "15px" },
                                    mt: "20px"
                                }}>
                                    <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                                        <label style={LabelStyle}>Select the product</label>
                                        <select
                                            value={product.product}
                                            onChange={(e) => handleProductChange(index, 'product', e.target.value)}
                                            style={{
                                                borderRadius: "12px",
                                                height: "40px",
                                                width: "100%",
                                                border: '1px solid #D9D9D9',
                                                marginTop: "12px",
                                                padding: "0 12px",
                                                fontFamily: 'Figtree',
                                                fontSize: '14px',
                                                backgroundColor: '#fff'
                                            }}
                                        >
                                            <option value="">Select the product</option>
                                            {productOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </Box>
                                    
                                    <Box sx={{ width: { xs: "100%", md: "25%" } }}>
                                        <label style={LabelStyle}>Quantity</label>
                                        <input
                                            type="number"
                                            value={product.quantity}
                                            onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                                            placeholder="0"
                                            style={{
                                                borderRadius: "12px",
                                                height: "40px",
                                                width: "100%",
                                                border: '1px solid #D9D9D9',
                                                marginTop: "12px",
                                                padding: "0 12px",
                                                fontFamily: 'Figtree',
                                                fontSize: '14px'
                                            }}
                                        />
                                    </Box>
                                    
                                    {formData.products.length > 1 && (
                                        <Box sx={{ 
                                            display: 'flex', 
                                            alignItems: 'end',
                                            width: { xs: "100%", md: "5%" }
                                        }}>
                                            <IconButton 
                                                onClick={() => removeProduct(index)}
                                                sx={{ 
                                                    color: '#f44336',
                                                    mt: { xs: 0, md: 1 }
                                                }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        ))}

                        <Button
                            onClick={addMoreProduct}
                            sx={{
                                color: '#005A69',
                                fontSize: '14px',
                                textTransform: 'none',
                                fontWeight: 500,
                                mb: 3,
                                p: 0,
                                fontFamily: 'Figtree'
                            }}
                        >
                            + Add more
                        </Button>

                        <Box sx={{ mt: '25px' }}>
                            <label style={LabelStyle}>Additional notes</label>
                            <textarea
                                placeholder="Enter your message"
                                value={formData.additionalNotes}
                                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                                rows={4}
                                style={{
                                    borderRadius: "12px",
                                    width: "100%",
                                    border: '1px solid #D9D9D9',
                                    marginTop: "12px",
                                    padding: "12px",
                                    fontFamily: 'Figtree',
                                    fontSize: '14px',
                                    resize: "vertical",
                                    minHeight: "100px"
                                }}
                            />
                        </Box>
                    </Box>
                ) : (
                    // Step 2: Personal Details
                    <Box sx={{ mt: "20px" }}>
                        <Box>
                            <label style={LabelStyle}>Full Name*</label>
                            <input
                                required
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                style={{
                                    borderRadius: "12px",
                                    height: "40px",
                                    width: "100%",
                                    border: '1px solid #D9D9D9',
                                    marginTop: "12px",
                                    padding: "0 12px",
                                    fontFamily: 'Figtree',
                                    fontSize: '14px'
                                }}
                            />
                        </Box>
                        
                        <Box sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: { xs: "15px", md: "15px" },
                            mt: "20px"
                        }}>
                            <Box sx={{ width: { xs: "100%", md: "48%" } }}>
                                <label style={LabelStyle}>Email Id*</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    style={{
                                        borderRadius: "12px",
                                        height: "40px",
                                        width: "100%",
                                        border: '1px solid #D9D9D9',
                                        marginTop: "12px",
                                        padding: "0 12px",
                                        fontFamily: 'Figtree',
                                        fontSize: '14px'
                                    }}
                                />
                            </Box>
                            
                            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                                <label style={LabelStyle}>Contact Number*</label>
                                <input
                                    required
                                    type="tel"
                                    value={formData.contactNumber}
                                    onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                                    style={{
                                        borderRadius: "12px",
                                        height: "40px",
                                        width: "100%",
                                        border: '1px solid #D9D9D9',
                                        marginTop: "12px",
                                        padding: "0 12px",
                                        fontFamily: 'Figtree',
                                        fontSize: '14px'
                                    }}
                                />
                            </Box>
                        </Box>
                        
                        <Box sx={{ mt: "20px" }}>
                            <label style={LabelStyle}>Business Name</label>
                            <input
                                type="text"
                                value={formData.businessName}
                                onChange={(e) => handleInputChange('businessName', e.target.value)}
                                style={{
                                    borderRadius: "12px",
                                    height: "40px",
                                    width: "100%",
                                    border: '1px solid #D9D9D9',
                                    marginTop: "12px",
                                    padding: "0 12px",
                                    fontFamily: 'Figtree',
                                    fontSize: '14px'
                                }}
                            />
                        </Box>
                    </Box>
                )}

                {/* Navigation Buttons */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    mt: 4,
                    gap: 2
                }}>
                    {activeStep === 0 ? (
                        <>
                            <Button
                                variant="outlined"
                                onClick={onClose}
                                sx={{
                                    borderColor: '#D9D9D9',
                                    color: '#666',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    flex: 1,
                                    borderRadius: "10px",
                                    fontFamily: "Figtree",
                                    height: { xs: "45px", md: "50px" },
                                    fontSize: { xs: "14px", md: "16px" }
                                }}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{
                                    backgroundColor: '#007b89',
                                    color: '#fff',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    flex: 1,
                                    borderRadius: "10px",
                                    fontFamily: "Figtree",
                                    height: { xs: "45px", md: "50px" },
                                    fontSize: { xs: "14px", md: "16px" },
                                    '&:hover': {
                                        backgroundColor: '#006570'
                                    }
                                }}
                            >
                                Next
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                variant="outlined"
                                onClick={handleBack}
                                sx={{
                                    borderColor: '#D9D9D9',
                                    color: '#666',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    flex: 1,
                                    borderRadius: "10px",
                                    fontFamily: "Figtree",
                                    height: { xs: "45px", md: "50px" },
                                    fontSize: { xs: "14px", md: "16px" }
                                }}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                sx={{
                                    backgroundColor: '#007b89',
                                    color: '#fff',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    flex: 1,
                                    borderRadius: "10px",
                                    fontFamily: "Figtree",
                                    height: { xs: "45px", md: "50px" },
                                    fontSize: { xs: "14px", md: "16px" },
                                    '&:hover': {
                                        backgroundColor: '#006570'
                                    }
                                }}
                            >
                                Request Quote
                            </Button>
                        </>
                    )}
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default RequestQuoteModal;
