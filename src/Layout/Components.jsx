import React from 'react';
import { Routes, Route } from 'react-router';
import { useTheme } from '../context/ThemeContext.jsx';

import Accordion from '../docs/internal-components/Accordions/Accordions.jsx';
import Button from '../docs/internal-components/Button/Button.jsx';
import CallToAction from '../docs/internal-components/CallToAction/CallToAction.jsx';
import Card from '../docs/internal-components/Cards/Cards.jsx';
import Carousel from '../docs/internal-components/Carousel/Carousel.jsx';
import Feature from '../docs/internal-components/Feature/Feature.jsx';
import Footer from '../docs/internal-components/Footer/Footer.jsx';
import Header from '../docs/internal-components/Header/Header.jsx';
import Hero from '../docs/internal-components/Hero/Hero.jsx';
import ImageGallery from '../docs/internal-components/ImageGallery/ImageGallery.jsx';
import LevitatingAvatars from '../docs/internal-components/LevitatingAvatars/LevitatingAvatars.jsx';
import Navbar from '../docs/internal-components/Navbar/Navbar.jsx';
import BentoGrid from '../docs/internal-components/BentoGrid/BentoGrid.jsx';
import PopUps from '../docs/internal-components/PopUps/PopUps.jsx';
import Tabs from '../docs/internal-components/Tabs/Tabs.jsx';
import Testimonials from '../docs/internal-components/Testimonials/Testimonials.jsx';
import Pricing from '../docs/internal-components/Prcing/Pricing.jsx';
import VerticalSlider from '../docs/internal-components/slider/slider.jsx';
import SocialShare from '../docs/internal-components/Socialshare/SocialShare.jsx';
import Preloader from '../docs/internal-components/Preloader/Preloader.jsx';
import SpotLightText from '../docs/internal-components/SpotLightText/SpotLightText.jsx';
import Ratings from '../docs/internal-components/Ratings/Ratings.jsx';
import Scaratchcard from '../docs/internal-components/Scratch Card/Scratchcard.jsx';
import ImageAccordions from '../docs/internal-components/ImageAccordions/ImageAccordions.jsx';
import WordRotating from '../docs/internal-components/WordRotating/WordRotating.jsx';
import Scratchcard from '../docs/internal-components/Scratch Card/Scratchcard.jsx';

const Components = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex min-h-screen w-full  transition-colors duration-300${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className='flex-1 flex flex-col'>
        <div
          className={`overflow-auto rounded-lg transition-colors duration-300${
            darkMode ? 'bg-[var(--dark-bg)]' : 'bg-[var(--light-bg)]'
          }`}
        >
          <Routes>
            <Route path='accordion' element={<Accordion />} />
            <Route path='bento-grid' element={<BentoGrid />} />
            <Route path='button' element={<Button />} />
            {/* <Route path='call-to-action' element={<CallToAction />} /> */}
            <Route path='card' element={<Card />} />
            {/* <Route path='carousel' element={<Carousel />} /> */}
            <Route path='feature' element={<Feature />} />
            {/* <Route path='footer' element={<Footer />} /> */}
            <Route path='header' element={<Header />} />
            {/* <Route path='hero' element={<Hero />} /> */}
            <Route path='image-gallery' element={<ImageGallery />} />
            <Route path='LevitatingAvatars ' element={<LevitatingAvatars />} />
            <Route path='LevitatingAvatars' element={<LevitatingAvatars />} />
            <Route path='image-accordion' element={<ImageAccordions />} />
            <Route path='word-rotating' element={<WordRotating />} />
            <Route path='navbar' element={<Navbar />} />
            {/* <Route path='popups' element={<PopUps />} /> */}
            <Route path='tabs' element={<Tabs />} />
            <Route path='ScratchCard' element={<Scratchcard />} />
            <Route path='testimonials' element={<Testimonials />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='slider' element={<VerticalSlider />} />
            <Route path='social-share' element={<SocialShare />} />
            <Route path='preloader' element={<Preloader />} />
            <Route path='spotlight-text' element={<SpotLightText />} />
            <Route path='rating' element={<Ratings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Components;
