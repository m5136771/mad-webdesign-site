import React from "react";
import GlobalStyles from './styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';  

import BackToTopButton from "./components/misc/BackToTopButton";

import Hero from "./components/Hero";
import Process from "./components/Process.js";
import Pricing from "./components/Pricing.js";
import Portfolio from "./components/Portfolio.js";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ.js";
import ContactForm from "./components/ContactForm.js";
import Footer from "./components/constants/Footer";  
import ThankYouPage from "pages/ThankYouPage";

export default function App() {

  return (
    <>
      <GlobalStyles />
      <BackToTopButton />
      <Router>
        <Routes>
          <Route path="/" element={
            <AnimationRevealPage>
              <Hero />
              <Process />
              <Pricing />
              <Portfolio />
              <Testimonials />
              <FAQ />
              <ContactForm />
              <Footer />
            </AnimationRevealPage>
          } />
          <Route path="/pages/success" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </>
  );
}
