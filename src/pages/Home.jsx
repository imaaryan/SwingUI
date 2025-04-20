import React from 'react';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import StickyMessageBox from '../components/message';
import FeaturesSection from '../components/feature';
import Showcase from '../components/Showcase';
import ComponentsFeaturesGallery from '../components/ComponentsFeaturesGallery';
import HomeTestimonials from '../components/HomeTestimonials';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text)]'
          : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)]'
      }`}
    >
      <Hero />
      {/* <StickyMessageBox /> */}
      {/* <ComponentsFeaturesGallery /> */}
      <FeaturesSection />
      {/* <HomeTestimonials /> */}
      <Footer />
    </div>
  );
};

export default Home;
