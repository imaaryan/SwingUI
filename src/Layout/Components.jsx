import React from 'react';
import { Routes, Route } from 'react-router';
import { useTheme } from '../context/ThemeContext';

import Accordion from '../docs/internal-components/Accordions/Accordions';
import Button from '../docs/internal-components/Button/Button';
import CallToAction from '../docs/internal-components/CallToAction/CallToAction';
import Card from '../docs/internal-components/Cards/Cards';
import Carousel from '../docs/internal-components/Carousel/Carousel';
import Footer from '../docs/internal-components/Footer/Footer';
import Header from '../docs/internal-components/Header/Header';
import Hero from '../docs/internal-components/Hero/Hero';
import ImageGallery from '../docs/internal-components/ImageGallery/ImageGallery';
import Navbar from '../docs/internal-components/Navbar/Navbar';
import PantoGrid from '../docs/internal-components/PantoGrid/PantoGrid';
import PopUps from '../docs/internal-components/PopUps/PopUps';
import Tabs from '../docs/internal-components/Tabs/Tabs';
import Testimonials from '../docs/internal-components/Testimonials/Testimonials';
import Pricing from '../docs/internal-components/Prcing/Pricing.jsx';

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
          className={`flex-1 p-4 overflow-auto shadow-md rounded-lg transition-colors duration-300${
            darkMode ? 'bg-[var(--dark-bg)]' : 'bg-[var(--light-bg)]'
          }`}
        >
          <Routes>
            <Route path='accordion' element={<Accordion />} />
            <Route path='button' element={<Button />} />
            <Route path='call-to-action' element={<CallToAction />} />
            <Route path='card' element={<Card />} />
            <Route path='carousel' element={<Carousel />} />
            <Route path='footer' element={<Footer />} />
            <Route path='header' element={<Header />} />
            <Route path='hero' element={<Hero />} />
            <Route path='image-gallery' element={<ImageGallery />} />
            <Route path='navbar' element={<Navbar />} />
            <Route path='panto-grid' element={<PantoGrid />} />
            <Route path='popups' element={<PopUps />} />
            <Route path='tabs' element={<Tabs />} />
            <Route path='testimonials' element={<Testimonials />} />
            <Route path='pricing' element={<Pricing />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Components;
