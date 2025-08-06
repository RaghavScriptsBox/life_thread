import React, { useState, useRef } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid, ToggleButton, ToggleButtonGroup, useMediaQuery, useTheme, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ProductImages, ESDArray, UniformsArray, SingleUseArray, AccessoriesArray } from "../Assets/index.js";
import  Suit from '../Assets/SingleUseImages/Frame 427321813.png'
import RequestQuoteModal from './RequestQuoteModal';
import DownloadCatalogueModal from './DownloadCatalogueModal';
import CapImage from '../Assets/Accessories/Cap.png';
import MaskImage from "../Assets/Accessories/Mask.png"


// Dynamic product data based on category
const productData = {
    'ESD & Lint Free': [
        {
            title: 'ESD Coverall Suits',
            desc: 'Built for cleanroom environments with ESD-safe design and breathable fabric.',
            image: ESDArray[4]
        },
        {
            title: 'ESD Apron',
            desc: 'Waist-length apron providing localized electro static protection.',
            image: ESDArray[0]
        },
        {
            title: 'ESD Top & Bottom',
            desc: 'Two-piece set with built-in electro static discharge properties.',
            image: ESDArray[1]
        },
        {
            title: 'Lint-Free Polyester Apron',
            desc: 'Apron designed to eliminate fibre shedding in controlled environments.',
            image: ESDArray[2]
        },
        {
            title: 'Lint-Free Wipes for Cleaning',
            desc: 'High-absorbency, low-particle wipes for precision cleaning.',
            image: ESDArray[3]
        },
    ],
    'Uniforms': [
        {
            title: 'Scrub Suit (Cotton)',
            desc: 'Breathable two-piece medical scrub set for daily clinical use.',
            image: UniformsArray[2]
        },
        {
            title: 'Scrub Suit (Polyester)',
            desc: 'Durable and lightweight scrub suit for medical professionals.',
            image: UniformsArray[4]
        },
        {
            title: 'Boiler Suit (Cotton)',
            desc: 'A robust, one-piece protective suit tailored for industrial, laboratory, and maintenance work.',
            image: UniformsArray[1]
        },
        {
            title: 'Boiler Suit (Polyester)',
            desc: 'Durable, easy-care one-piece suit, ideal for demanding workplaces where strong fabric and ease of cleaning are priorities.',
            image: UniformsArray[0]
        },
    ],
    'Single Use': [
        {
            title: 'Disposable Scrub Suit',
            desc: 'Single-use scrub top and pant set for contamination control.',
            image: Suit
        },
        {
            title: 'Surgical Gown',
            desc: 'Sterile or non-sterile surgical gown meeting fluid-resistance standards.',
            image: SingleUseArray[0]
        },
        {
            title: 'Isolation Gown',
            desc: 'Light-weight gown for general isolation procedures.',
            image: SingleUseArray[1]
        },
        {
            title: 'Wrap-Around Gown',
            desc: 'Gown providing enhanced side and back protection.',
            image: SingleUseArray[2]
        },
        {
            title: 'Disposable Apron',
            desc: 'Single-use apron for fluid protection in hygiene-sensitive tasks.',
            image: SingleUseArray[3]
        },
        {
            title: 'Visitor Gown',
            desc: 'Visitor Gown',
            desc: 'Single-use gown for visitor protection in clean, medical, and food-safe areas.',
            image: SingleUseArray[4]
        },
        {
            title: 'Disposable Antistatic Garment',
            desc: 'Single-use protective wear designed to prevent static risks in cleanrooms, labs, and electronics manufacturing.',
            image: SingleUseArray[5]
        },
    ],
    'Accessories': [
        {
            title: 'Disposable Shoe Cover',
            desc: 'Slip-on cover to protect floors, footwear, and maintain hygiene.',
            image: AccessoriesArray[0]
        },
        {
            title: 'Disposable Hand Sleeve',
            desc: 'Arm protection sleeve for low-risk tasks.',
            image: AccessoriesArray[1]
        },
        {
            title: '3-Layer Surgical Mask',
            desc: 'Disposable mask with three-layer filtration.',
            image: MaskImage
        },
        {
            title: 'Disposable Bouffant Cap',
            desc: 'Covers hair to prevent contamination.',
            image: CapImage
        },
        {
            title: 'Clean Room Clogs',
            desc: 'Designed to meet the demanding standards of controlled environments.',
            image: AccessoriesArray[3]
        },
        {
            title: 'Clean Room Mops',
            desc: 'Designed for high hygiene and efficiency in labs, pharma, and cleanroom environments.',
            image: AccessoriesArray[4]
        },
        {
            title: 'Disposable Hand Gloves',
            desc: 'Nitrile, latex, or vinyl gloves for hygiene and protection across tasks',
            image: AccessoriesArray[5]
        },
        {
            title: 'Disposable Beard Cover',
            desc: 'Nonwoven cover for hygiene and hair control in food, healthcare, and clean settings.',
            image: AccessoriesArray[6]
        },
    ]
};

const CatelogueSection = () => {
    const [category, setCategory] = useState('ESD & Lint Free');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [quoteModalOpen, setQuoteModalOpen] = useState(false);
    const [downloadModalOpen, setDownloadModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const carouselRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    // Get current products based on selected category
    const currentProducts = productData[category] || [];

    // Handle quote request
    const handleRequestQuote = (productTitle) => {
        setSelectedProduct(productTitle);
        setQuoteModalOpen(true);
    };

    // Carousel navigation functions
    const nextSlide = () => {
        if (currentSlide < currentProducts.length - 1) {
            setCurrentSlide(currentSlide + 1);
            scrollToSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
            scrollToSlide(currentSlide - 1);
        }
    };

    const scrollToSlide = (slideIndex) => {
        if (carouselRef.current) {
            const slideWidth = carouselRef.current.children[0].offsetWidth;
            carouselRef.current.scrollTo({
                left: slideIndex * slideWidth,
                behavior: 'smooth'
            });
        }
    };

    // Reset carousel when category changes
    React.useEffect(() => {
        setCurrentSlide(0);
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [category]);

    return (
        <Box id="catalogue-section" sx={{ backgroundColor: '#007d8c', py: { xs: 4, md: 8 }, px: { xs: 2, md: 4 } }}>
            <Typography
                sx={{
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                    fontWeight: 'bold',
                    color: '#fff',
                    textAlign: 'center',
                    mb: { xs: 3, md: 6 },
                    fontFamily: "Lato",
                    lineHeight: 1.2,
                    px: { xs: 1, md: 0 }
                }}
            >
                Our Protective Workwear Range
            </Typography>

            <Typography sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: '#e0f7fa',
                fontFamily: 'Roboto',
                fontWeight: '400',
                textAlign: 'center',
                px: { xs: 2, md: 0 },
                mb: { xs: 4, md: 6 }
            }}>
                Trusted by companies in critical sectors
            </Typography>

            {/* Category Buttons */}
            <Box 
                display="flex" 
                justifyContent="center" 
                mb={{ xs: 3, md: 5 }} 
                px={{ xs: 1, md: 0 }}
                sx={{
                    overflowX: { xs: 'auto', sm: 'visible' },
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                    scrollbarWidth: 'none'
                }}
            >
                <ToggleButtonGroup
                    exclusive
                    value={category}
                    onChange={(e, val) => val && setCategory(val)}
                    orientation="horizontal"
                    sx={{
                        backgroundColor: 'transparent',
                        p: 0,
                        borderRadius: "10px 10px 0 0",
                        borderBottom: { xs: '1px solid #fff', sm: "1px solid #fff" },
                        width: { xs: '100%', sm: 'auto', md: 'auto' },
                        minWidth: { xs: 'max-content', sm: 'auto' },
                        flexShrink: 0,
                        // Remove default group borders/radii so only our underline shows
                        '& .MuiToggleButtonGroup-grouped': {
                            border: 0,
                            borderRadius: 0,
                        },
                    }}
                >
                    {['ESD & Lint Free', 'Uniforms', 'Single Use', 'Accessories'].map((cat) => (
                        <ToggleButton
                            key={cat}
                            value={cat}
                            disableRipple
                            sx={{
                                px: { xs: 2, sm: 3 },
                                py: { xs: 1.5, sm: 1.25 },
                                marginLeft:{
                                    xs:"450px",
                                    sm:"400px",
                                    md:"0px",
                                    lg:"0px",
                                    xl:"0px"

                                },
                                fontWeight: 'bold',
                                border: 0,
                                borderRadius: { xs: '10px', sm: "10px" },
                                fontFamily: 'Lato',
                                fontSize: { xs: "14px", sm: "16px" },
                                width: { xs: '200px', sm: '300px',md:"300px" },
                                mb: { xs: 0, sm: 0 },
                                // Responsive bottom border
                                borderBottom: { xs: 'none', sm: '2px solid #fff' },

                                // Inactive look
                                color: '#fff',
                                backgroundColor: 'transparent',

                                // Active (selected) look
                                '&.Mui-selected': {
                                    backgroundColor: '#fff',
                                    color: '#007d8c',
                                    borderBottom: { xs: 'none', sm: '2px solid #fff' },
                                    borderRadius: { xs: '8px', sm: "10px 10px 0 0" },
                                },

                                // Hover states (don’t change the underline)
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.08)',
                                },
                                '&.Mui-selected:hover': {
                                    backgroundColor: '#fff',
                                },
                            }}
                        >
                            {cat}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Box>



            {/* Product Cards */}
            {isMobile ? (
                // Mobile Carousel
                <Box sx={{ position: 'relative', px: 2 }}>
                    {/* Carousel Container */}
                    <Box
                        ref={carouselRef}
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            scrollSnapType: 'x mandatory',
                            gap: 2,
                            pb: 2,
                            '&::-webkit-scrollbar': {
                                display: 'none'
                            },
                            scrollbarWidth: 'none'
                        }}
                    >
                        {currentProducts.map((item, i) => (
                            <Box
                                key={i}
                                sx={{
                                    minWidth: '280px',
                                    maxWidth: '280px',
                                    scrollSnapAlign: 'start'
                                }}
                            >
                                <Card sx={{
                                    borderRadius: 2, 
                                    boxShadow: 3, 
                                    width: '100%',
                                    height: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            height: 300,
                                            width: "100%",
                                            backgroundColor: "#eee",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                opacity: 1,
                                            }}
                                        />
                                    </CardMedia>
                                    <CardContent sx={{ 
                                        flexGrow: 1, 
                                        display: 'flex', 
                                        flexDirection: 'column',
                                        p: 2
                                    }}>
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: 700,
                                                color: "#007d8c",
                                                fontFamily: "Lato",
                                                lineHeight: 1.3,
                                                mb: 1
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "12px",
                                                color: "#444",
                                                fontFamily: "Inter",
                                                lineHeight: 1.4,
                                                mb: 2,
                                                flexGrow: 1
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            onClick={() => handleRequestQuote(item.title)}
                                            sx={{
                                                color: "#007d8c",
                                                borderColor: "#007d8c",
                                                fontWeight: "bold",
                                                textTransform: "none",
                                                py: 1,
                                                fontSize: "12px",
                                                "&:hover": {
                                                    backgroundColor: "#007d8c",
                                                    color: "#fff",
                                                    borderColor: "#007d8c",
                                                },
                                            }}
                                        >
                                            Request quote
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>

                    {/* Navigation Arrows for Mobile */}
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        gap: 2, 
                        mt: 2 
                    }}>
                        <IconButton
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.3)',
                                },
                                '&.Mui-disabled': {
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: 'rgba(255,255,255,0.3)',
                                }
                            }}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                        
                        {/* Slide indicators */}
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {currentProducts.map((_, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        backgroundColor: currentSlide === index ? '#fff' : 'rgba(255,255,255,0.3)',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                    onClick={() => {
                                        setCurrentSlide(index);
                                        scrollToSlide(index);
                                    }}
                                />
                            ))}
                        </Box>

                        <IconButton
                            onClick={nextSlide}
                            disabled={currentSlide === currentProducts.length - 1}
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.3)',
                                },
                                '&.Mui-disabled': {
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: 'rgba(255,255,255,0.3)',
                                }
                            }}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>
                </Box>
            ) : (
                // Desktop Grid
                <Grid
                    container
                    spacing={{ xs: 2, sm: 3, md: 4 }}
                    justifyContent="center"
                    sx={{ px: { xs: 1, md: 0 } }}
                >
                    {currentProducts.map((item, i) => (
                        <Grid
                            key={i}
                            item
                            xs={12}   // 1 per row on mobile
                            sm={6}    // 2 per row on small screens
                            md={4}    // 3 per row on medium screens
                            lg={3}    // 4 per row on large screens (optional for better spacing)
                            xl={3}    // maintain 4 per row for extra wide screens
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Card sx={{
                                borderRadius: 2, 
                                boxShadow: 3, 
                                width: '100%',
                                maxWidth: { xs: "350px", sm: "320px", md: "280px", lg: "300px" },
                                height: { xs: "auto", sm: "500px", md: "520px", lg: "550px" },
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <CardMedia
                                    component="div"
                                    sx={{
                                        height: { xs: "200px", sm: "220px", md: "260px", lg: "300px" },
                                        width: "100%",
                                        backgroundColor: "#eee",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: 'hidden'
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            opacity: 1,
                                        }}
                                    />
                                </CardMedia>
                                <CardContent sx={{ 
                                    flexGrow: 1, 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    p: { xs: 2, md: 3 }
                                }}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "18px", md: "18px" },
                                            fontWeight: 700,
                                            color: "#007d8c",
                                            fontFamily: "Lato",
                                            lineHeight: 1.3,
                                            mb: { xs: 1, md: 1.5 }
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "14px", md: "12px" },
                                            color: "#444",
                                            fontFamily: "Inter",
                                            lineHeight: 1.4,
                                            mb: { xs: 2, md: 3 },
                                            flexGrow: 1
                                        }}
                                    >
                                        {item.desc}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        onClick={() => handleRequestQuote(item.title)}
                                        sx={{
                                            color: "#007d8c",
                                            borderColor: "#007d8c",
                                            fontWeight: "bold",
                                            textTransform: "none",
                                            py: { xs: 1, md: 1.2 },
                                            fontSize: { xs: "14px", md: "16px" },
                                            "&:hover": {
                                                backgroundColor: "#007d8c",
                                                color: "#fff",
                                                borderColor: "#007d8c",
                                            },
                                        }}
                                    >
                                        Request Quote
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}


            {/* View All Button */}
            <Box textAlign="center" mt={{ xs: 4, md: 6 }}>
                <Button
                    variant="contained"
                    onClick={() => setDownloadModalOpen(true)}
                    sx={{
                        borderRadius: { xs: 8, md: "10px" },
                        px: { xs: 3, md: 4 },
                        py: { xs: 1, md: 1.2 },
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: { xs: '14px', md: '16px' },
                        backgroundColor: '#fff',
                        color: '#007d8c',
                        '&:hover': {
                            backgroundColor: '#e0f7fa',
                        },
                    }}
                >
                    Download Catalogue
                </Button>
            </Box>

            {/* Request Quote Modal */}
            <RequestQuoteModal
                open={quoteModalOpen}
                onClose={() => setQuoteModalOpen(false)}
                selectedProduct={selectedProduct}
            />

            {/* Download Catalogue Modal */}
            <DownloadCatalogueModal
                open={downloadModalOpen}
                onClose={() => setDownloadModalOpen(false)}
            />
        </Box>
    );
};

export default CatelogueSection;
