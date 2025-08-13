import React, { useState, useRef } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid, ToggleButton, ToggleButtonGroup, useMediaQuery, useTheme, IconButton, Dialog, DialogContent, Fade, Backdrop } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { ProductImages, ESDArray, UniformsArray, SingleUseArray, AccessoriesArray } from "../Assets/index.js";
import Suit from '../Assets/SingleUseImages/Frame 427321813.png'
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
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState({ src: '', title: '' });
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

    // Handle image click for modal
    const handleImageClick = (imageSrc, imageTitle) => {
        setSelectedImage({ src: imageSrc, title: imageTitle });
        setImageModalOpen(true);
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

    // Update currentSlide based on scroll position
    React.useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current) {
                const scrollLeft = carouselRef.current.scrollLeft;
                const slideWidth = carouselRef.current.children[0]?.offsetWidth || 0;
                if (slideWidth > 0) {
                    const newSlideIndex = Math.round(scrollLeft / slideWidth);
                    if (newSlideIndex !== currentSlide && newSlideIndex >= 0 && newSlideIndex < currentProducts.length) {
                        setCurrentSlide(newSlideIndex);
                    }
                }
            }
        };

        const carouselElement = carouselRef.current;
        if (carouselElement) {
            carouselElement.addEventListener('scroll', handleScroll);
            return () => {
                carouselElement.removeEventListener('scroll', handleScroll);
            };
        }
    }, [currentSlide, currentProducts.length]);

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
                justifyContent={{ xs: 'flex-start', sm: 'center' }}
                mb={{ xs: 3, md: 5 }}
                px={{ xs: 1, md: 0 }}
                sx={{
                    overflowX: { xs: 'auto', sm: 'visible' },
                    '&::-webkit-scrollbar': { display: 'none' },
                    scrollbarWidth: 'none',
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
                        marginLeft: 0, // ✅ Removed the 55% shift
                        borderBottom: '1px solid #fff',
                        width: 'auto',
                        minWidth: { xs: '100%', sm: 'auto' },
                        flexShrink: 0,
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
                                fontWeight: 'bold',
                                border: 0,
                                borderRadius: "10px 10px 0 0",
                                fontFamily: 'Lato',
                                fontSize: { xs: "14px", sm: "16px" },
                                width: { xs: 'auto', sm: 'auto' },
                                minWidth: { xs: '150px', sm: '120px', md: '150px' },
                                mb: 0,
                                whiteSpace: 'nowrap',
                                borderBottom: '2px solid #fff',
                                color: '#fff',
                                backgroundColor: 'transparent',
                                '&.Mui-selected': {
                                    backgroundColor: '#fff',
                                    color: '#007d8c',
                                    borderBottom: '2px solid #fff',
                                    borderRadius: "10px 10px 0 0",
                                },
                                '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
                                '&.Mui-selected:hover': { backgroundColor: '#fff' },
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
                                        onClick={() => handleImageClick(item.image, item.title)}
                                        sx={{
                                            height: 300,
                                            width: "100%",
                                            backgroundColor: "#eee",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.02)'
                                            }
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
                                                color: "#007b89",
                                                borderColor: "#007b89",
                                                borderWidth: "2px",
                                                fontWeight: 600,
                                                textTransform: "none",
                                                height: "50px",
                                                fontSize: "16px",
                                                borderRadius: "10px",
                                                fontFamily: "Figtree",
                                                boxShadow: "none",
                                                "&:hover": {
                                                    backgroundColor: "#007b89",
                                                    color: "#fff",
                                                    borderColor: "#007b89",
                                                    boxShadow: "none",
                                                },
                                            }}
                                        >
                                            Request Quote
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
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 40,
                                height: 40,
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.3)',
                                },
                                '&.Mui-disabled': {
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: 'rgba(255,255,255,0.3)',
                                },
                                '& .MuiSvgIcon-root': {
                                    transform: 'translateX(4px)'
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
                                height: { xs: "auto", sm: "500px", md: "500px", lg: "500px" },
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <CardMedia
                                    component="div"
                                    onClick={() => handleImageClick(item.image, item.title)}
                                    sx={{
                                        height: { xs: "200px", sm: "220px", md: "260px", lg: "300px" },
                                        width: "100%",
                                        backgroundColor: "#eee",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.02)'
                                        }
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
                                            mb: { xs: 1, md: 1 },
                                            flexGrow: 1,
                                            // bgcolor:"red",
                                            height: "auto"
                                        }}
                                    >
                                        {item.desc}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        onClick={() => handleRequestQuote(item.title)}
                                        sx={{
                                            color: "#007b89",
                                            borderColor: "#007b89",
                                            borderWidth: "2px",
                                            fontWeight: 600,
                                            textTransform: "none",
                                            height: "50px",
                                            fontSize: "16px",
                                            borderRadius: "10px",
                                            fontFamily: "Figtree",
                                            boxShadow: "none",
                                            "&:hover": {
                                                backgroundColor: "#007b89",
                                                color: "#fff",
                                                borderColor: "#007b89",
                                                boxShadow: "none",
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
                        borderRadius: "10px",
                        px: 4,
                        height: "50px",
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: "16px",
                        fontFamily: "Figtree",
                        backgroundColor: '#fff',
                        color: '#007b89',
                        boxShadow: "none",
                        '&:hover': {
                            backgroundColor: '#e0f7fa',
                            boxShadow: "none",
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

            {/* Image Preview Modal */}
            <Dialog
                open={imageModalOpen}
                onClose={() => setImageModalOpen(false)}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    sx: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        borderRadius: 0,
                        overflow: 'hidden'
                    }
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        backdropFilter: 'blur(5px)'
                    },
                    timeout: 500
                }}
                TransitionComponent={Fade}
                transitionDuration={500}
            >
                <DialogContent
                    sx={{
                        p: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        minHeight: '80vh',
                        backgroundColor: 'transparent'
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={() => setImageModalOpen(false)}
                        sx={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: '#fff',
                            zIndex: 1000,
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                transform: 'scale(1.1)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Image Container */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxWidth: '90%',
                            maxHeight: '90%',
                            animation: 'zoomIn 0.5s ease-out',
                            '@keyframes zoomIn': {
                                '0%': {
                                    opacity: 0,
                                    transform: 'scale(0.8)'
                                },
                                '100%': {
                                    opacity: 1,
                                    transform: 'scale(1)'
                                }
                            }
                        }}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '80vh',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                            }}
                        />

                        {/* Image Title */}
                        <Typography
                            sx={{
                                color: '#fff',
                                fontSize: { xs: '18px', md: '24px' },
                                fontWeight: 600,
                                fontFamily: 'Lato',
                                mt: 2,
                                textAlign: 'center',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                            }}
                        >
                            {selectedImage.title}
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default CatelogueSection;
