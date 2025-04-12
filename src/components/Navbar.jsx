import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router';
import '../docs/SwingKit/Gradients/style.css';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSwingKitOpen, setmobileSwingKitOpen] = useState(false);
  const [mobileComponentsOpen, setmobileComponentsOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMobileSwingKit = () => setmobileSwingKitOpen(!mobileSwingKitOpen);
  const toggleMobileComponents = () =>
    setmobileComponentsOpen(!mobileComponentsOpen);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setmobileSwingKitOpen(false);
  };

  return (
    <nav
      className={`navbar fixed z-50 mb-34 w-full px-6 py-4 flex items-center justify-between shadow-[var(--shadow-default)] transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)] '
          : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)] '
      }`}
    >
      <Link to='/'>
        <img
          src='../src/assets/gradient-logo.png'
          alt='Logo'
          className='w-[125px] h-auto'
        />
      </Link>

      <div className='hidden md:flex custom-desktop items-center'>
        <div className='flex space-x-8'>
          <Link to='/docs' className='hover:text-[var(--dark-nav-hover)]'>
            Docs
          </Link>
          <div className='group relative'>
            <span className='flex items-center cursor-pointer hover:text-[var(--dark-nav-hover)]'>
              SwingKit
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 ml-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </span>
            <div
              className={`absolute left-0 py-2 w-50 rounded-md hidden group-hover:!block z-50 shadow-md ${
                darkMode ? 'bg-[var(--dark-bg)]' : 'bg-white'
              }`}
            >
              <Link
                to='/swingkit/gradients'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Gradients
              </Link>
              <Link
                to='/swingkit/animated-gradients'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Animated Gradients
              </Link>
              <Link
                to='/swingkit/transitions'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Transitions
              </Link>
            </div>
          </div>
          <div className='group relative'>
            <span className='flex items-center cursor-pointer hover:text-[var(--dark-nav-hover)]'>
              Components
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 ml-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </span>
            <div
              className={`absolute left-0 py-2 w-56 rounded-md hidden group-hover:!block z-50 shadow-md ${
                darkMode ? 'bg-[var(--dark-bg)]' : 'bg-white'
              }`}
            >
              <Link
                to='/components/accordion'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Accordions
              </Link>
              <Link
                to='/components/button'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Buttons
              </Link>
              <Link
                to='/components/card'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Cards
              </Link>
              <Link
                to='/components/carousel'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Carousel
              </Link>
              <Link
                to='/components/call-to-action'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                CTA (Call to Action)
              </Link>
              <Link
                to='/components/footer'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Footer
              </Link>
              <Link
                to='/components/hero'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Hero section
              </Link>
              <Link
                to='/components/image-gallery'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Image Gallery
              </Link>
              <Link
                to='/components/navbar'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Navbar
              </Link>
              <Link
                to='/components/panto-grid'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Panto-grid
              </Link>
              <Link
                to='/components/popups'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Pop Ups
              </Link>
              <Link
                to='/components/pricing'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Pricing
              </Link>
              
              <Link
                to='/components/tabs'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Tabs
              </Link>
              <Link
                to='/components/testimonials'
                className={`block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition ${
                  darkMode
                    ? 'hover:bg-[var(--dark-hover-bg)]'
                    : 'hover:bg-[var(--light-hover-bg)]'
                }`}
              >
                Testimonials
              </Link>
            </div>
          </div>
        </div>

        <div className='px-4 h-[20px] border-e-[1px] border-[var(--light-bg)] content-[""] opacity-10'></div>

        <div className='flex items-center space-x-4 pl-4'>
          <button
            onClick={toggleTheme}
            className={`px-3 py-2 rounded-md transition duration-300 ${
              darkMode
                ? 'text-[var(--dark-nav-default)] hover:text-[var(--dark-toggle-hover)] hover:bg-[var(--dark-bg)]'
                : 'text-[var(--light-nav-default)] hover:text-[var(--dark-bg)] hover:bg-[var(--light-bg)]'
            }`}
          >
            <i className={`ri-${darkMode ? 'sun' : 'moon'}-fill`}></i>
          </button>
          <Link
            to='/docs'
            className='swing-ocean-gradient hover:swing-ocean-gradient text-white px-6 py-2 rounded-md'
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile NavBar */}

      <div className='flex custom-mobile items-center space-x-4 md:hidden'>
        <button
          onClick={toggleTheme}
          className='theme-toggle px-3 py-2 rounded-md'
        >
          <i className={`ri-${darkMode ? 'sun' : 'moon'}-fill`}></i>
        </button>
        <button
          onClick={toggleMobileMenu}
          className='swing-ocean-gradient hover:swing-ocean-gradient rounded-md px-2 py-2'
        >
          <i className='ri-menu-line px-2 py-2 text-xl text-white'></i>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-svh w-64 z-50 px-2 py-4 pr-4 transform transition-all duration-300 ${
          darkMode
            ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
            : 'bg-[var(--light-bg)] text-[var(--color-text)]'
        } ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex flex-col w-full h-svh relative'>
          <div className='flex justify-end mb-4'>
            <button className='focus:outline-none' onClick={toggleMobileMenu}>
              <i className='ri-close-line text-2xl'></i>
            </button>
          </div>

          <div className='overflow-y-auto scrollbar-hidden pb-24'>
            <Link
              to='/'
              onClick={handleMobileLinkClick}
              className='block px-6 py-3 hover:text-[var(--dark-nav-hover)] transition'
            >
              Docs
            </Link>
            <div className='relative'>
              <span
                className='flex items-center justify-between px-6 py-3 hover:text-[var(--dark-nav-hover)] transition cursor-pointer'
                onClick={toggleMobileSwingKit}
              >
                SwingKit
                <i
                  className={`transition-transform duration-300 ${
                    mobileSwingKitOpen
                      ? 'ri-arrow-up-s-line transform rotate-180'
                      : 'ri-arrow-down-s-line'
                  }`}
                ></i>
              </span>
              <div
                className={`pl-8 overflow-hidden transition-all duration-300 ${
                  mobileSwingKitOpen ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <Link
                  to='/swingkit/gradients'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Gradients
                </Link>
                <Link
                  to='/swingkit/animated-gradients'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Animated Gradients
                </Link>
                <Link
                  to='/swingkit/transitions'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Transitions
                </Link>
              </div>
            </div>

            <div className='relative'>
              <span
                className='flex items-center justify-between px-6 py-3 hover:text-[var(--dark-nav-hover)] transition cursor-pointer'
                onClick={toggleMobileComponents}
              >
                Components
                <i
                  className={`transition-transform duration-300 ${
                    mobileComponentsOpen
                      ? 'ri-arrow-up-s-line transform rotate-180'
                      : 'ri-arrow-down-s-line'
                  }`}
                ></i>
              </span>
              <div
                className={`pl-8 overflow-hidden transition-all duration-300 ${
                  mobileComponentsOpen ? 'max-h-full' : 'max-h-0'
                }`}
              >
                <Link
                  to='/components/accordion'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Accordians
                </Link>
                <Link
                  to='/components/button'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Buttons
                </Link>
                <Link
                  to='/components/carousel'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  carousel
                </Link>
                <Link
                  to='/components/call-to-action'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  CTA (call to Action)
                </Link>
                <Link
                  to='/components/footer'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Footer
                </Link>
                <Link
                  to='/components/hero'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Hero Section
                </Link>
                <Link
                  to='/components/image-gallery'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Image Gallery
                </Link>
                <Link
                  to='/components/navbar'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Navbar
                </Link>
                <Link
                  to='/components/panto-grid'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Panto-grid
                </Link>
                <Link
                  to='/components/popups'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Pop ups
                </Link>
                <Link
                  to='/components/pricing'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Pricing
                </Link>

                <Link
                  to='/components/tabs'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Tabs
                </Link>
                <Link
                  to='/components/testimonials'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Testimonials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
           className="fixed inset-0 bg-black/100 backdrop-overlay z-40 md:hidden transition-all duration-300 opacity-70"
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
}

export default Navbar;
