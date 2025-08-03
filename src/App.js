import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CatalogueBanner from "./components/CatalogueBanner";
import CatelogueSection from "./components/CatelogueSection";
import ProductCategories from "./Sections/ProductCategories";
import WorkwearHero from "./components/WorkwearHeroSection";
import "./App.css";

const Landing = () => (
  <>
    <WorkwearHero />
    <Hero />
    <CatelogueSection />
    <ProductCategories />
    <CatalogueBanner />
    <Contact />
  </>
);

const App = () => {
  const headerHeight = 72; // adjust to your Header height if it's fixed
  const isHeaderFixed = false; // set true if your Header is position: 'fixed'

  return (
    <Router>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // If Header is fixed, add top padding so content isn't hidden behind it
            pt: isHeaderFixed ? `${headerHeight}px` : 0,
          }}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/product" element={<Landing />} />
            <Route path="/aboutUs" element={<About />} />
            <Route path="/contact" element={<Landing />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Box>

        <Footer /> {/* render the footer (don’t comment it out) */}
      </Box>
    </Router>
  );
};

export default App;
