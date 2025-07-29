import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import BlogSection from "./components/BlogSection";
import CatalogueBanner from "./components/CatalogueBanner";
import CatelogueSection from "./components/CatelogueSection";
import ProductCategories from "./Sections/ProductCategories";
import WorkwearHero from "./components/WorkwearHeroSection";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <WorkwearHero />
      <Hero />
      <CatelogueSection />
      <ProductCategories />

      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Team /> */}
      {/* <BlogSection /> */}
      <CatalogueBanner />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
