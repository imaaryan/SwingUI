import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router';
import '../docs/SwingKit/Gradients/style.css';
import logo from '../../public/logo.webp';
import { useLocation } from 'react-router-dom';
import About from '../docs/About/About';
import PreBuiltTemplate from '../docs/PrelBuiltTemplate/PreBuiltTemplate';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSwingKitOpen, setmobileSwingKitOpen] = useState(false);
  const [mobileComponentsOpen, setmobileComponentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isSwingKitOpen, setIsSwingKitOpen] = useState(false);
  const [isComponentmenuOpen, setIsComponentmenuOpen] = useState(false);

  const toggleSwingKit = () => setIsSwingKitOpen((prev) => !prev);
  const toggleDropDown = () => setIsComponentmenuOpen((prev) => !prev);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMobileSwingKit = () => setmobileSwingKitOpen(!mobileSwingKitOpen);
  const toggleMobileComponents = () =>
    setmobileComponentsOpen(!mobileComponentsOpen);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setmobileSwingKitOpen(false);
  };

  const swingKitRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const isTemplartePage = location.pathname === '/prebuilt-template';

  // All components in alphabetical order
  const allComponents = [
    { name: 'Accordions', path: '/components/accordion' },
    { name: 'Bento Grid', path: '/components/bento-grid' },
    { name: 'Buttons', path: '/components/button' },
    { name: 'Cards', path: '/components/card' },
    { name: 'Feature', path: '/components/feature' },
    { name: 'Image Accordion', path: '/components/image-accordion' },
    { name: 'Image Gallery', path: '/components/image-gallery' },
    { name: 'Levitating Avatars', path: '/components/LevitatingAvatars' },
    { name: 'Navbar', path: '/components/navbar' },
    { name: 'Preloader', path: '/components/preloader' },
    { name: 'Pricing', path: '/components/pricing' },
    { name: 'Rating', path: '/components/rating' },
    { name: 'Scratch Card', path: '/components/ScratchCard' },
    { name: 'Slider', path: '/components/slider' },
    { name: 'Social Share', path: '/components/social-share' },
    { name: 'Spotlight Text', path: '/components/spotlight-text' },
    { name: 'Tabs', path: '/components/tabs' },
    { name: 'Testimonials', path: '/components/testimonials' },
    { name: 'Word Rotating', path: '/components/word-rotating' },
  ];

  // Distribution for 3 columns (adjusted for alphabetical sorting)
  const column1 = allComponents.slice(0, 7);
  const column2 = allComponents.slice(7, 14);
  const column3 = allComponents.slice(14);

  // Components grouped by category for mobile view
  const mobileComponents = [...allComponents].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (swingKitRef.current && !swingKitRef.current.contains(event.target)) {
        setIsSwingKitOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsComponentmenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`navbar fixed z-50 mb-34 w-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled || !isLandingPage
          ? darkMode
            ? 'bg-[var(--dark-navbar-bg)] shadow-[var(--shadow-default)]'
            : 'bg-[var(--light-navbar-bg)] shadow-[var(--shadow-default)]'
          : 'bg-transparent backdrop-filter-none'
      }  ${
        darkMode ? 'text-[var(--color-text-dark)]' : 'text-[var(--color-text)]'
      } `}
    >
      <Link to='/'>
        <img src={logo} alt='Logo' className='w-[125px] h-auto' />
      </Link>

      <div className='hidden lg:flex custom-desktop items-center'>
        <div className='flex space-x-8'>
          {isLandingPage || isAboutPage ? (
            <Link to='/docs' className='hover:text-[var(--dark-nav-hover)]'>
              Docs
            </Link>
          ) : (
            <Link to='/' className='hover:text-[var(--dark-nav-hover)]'>
              Home
            </Link>
          )}

          {(isLandingPage || isAboutPage || isTemplartePage) && (
            <div className='group relative'>
              <button
                className='flex items-center cursor-pointer hover:text-[var(--dark-nav-hover)]'
                onClick={toggleSwingKit}
              >
                SwingKit
                <i
                  className={`ri-arrow-down-s-line ml-1 text-xs ${
                    isSwingKitOpen ? 'rotate-180' : ''
                  } transition-transform duration-300`}
                ></i>
              </button>

              <div ref={swingKitRef} className='relative group'>
                <div
                  className={`absolute left-0 py-1 w-40 rounded-md z-50 shadow-md 
                ${darkMode ? 'bg-[var(--dark-bg)]' : 'bg-white'} 
                ${isSwingKitOpen ? 'block' : 'hidden'} group-hover:block`}
                >
                  {/* Arrow at the top of SwingKit dropdown */}
                  <div className='dropdown-arrow absolute -top-[7px] left-5 w-4 h-4'>
                    <div
                      className={`arrow-up ${
                        darkMode
                          ? 'border-t-[var(--dark-border)] '
                          : 'border-t-gray-200 '
                      }`}
                    ></div>
                  </div>

                  <Link
                    to='/swingkit/gradients'
                    onClick={() => setIsSwingKitOpen(false)}
                    className={`block px-4 py-2 text-xs hover:text-[var(--dark-nav-hover)] transition ${
                      darkMode
                        ? 'hover:bg-[var(--dark-hover-bg)]'
                        : 'hover:bg-[var(--light-hover-bg)]'
                    }`}
                  >
                    Gradients
                  </Link>
                  <Link
                    to='/swingkit/animated-gradients'
                    onClick={() => setIsSwingKitOpen(false)}
                    className={`block px-4 py-2 text-xs hover:text-[var(--dark-nav-hover)] transition ${
                      darkMode
                        ? 'hover:bg-[var(--dark-hover-bg)]'
                        : 'hover:bg-[var(--light-hover-bg)]'
                    }`}
                  >
                    Animated Gradients
                  </Link>
                  <Link
                    to='/swingkit/text-gradients'
                    onClick={() => setIsSwingKitOpen(false)}
                    className={`block px-4 py-2 text-xs hover:text-[var(--dark-nav-hover)] transition ${
                      darkMode
                        ? 'hover:bg-[var(--dark-hover-bg)]'
                        : 'hover:bg-[var(--light-hover-bg)]'
                    }`}
                  >
                    Text Gradient
                  </Link>
                </div>
              </div>
            </div>
          )}

          {(isLandingPage || isAboutPage || isTemplartePage) && (
            <div className='group relative'>
              <button
                className='flex items-center cursor-pointer hover:text-[var(--dark-nav-hover)]'
                onClick={toggleDropDown}
              >
                Components
                <i
                  className={`ri-arrow-down-s-line ml-1 text-xs ${
                    isComponentmenuOpen ? 'rotate-180' : ''
                  } transition-transform duration-300`}
                ></i>
              </button>

              <div ref={dropdownRef} className='relative group'>
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 py-4 px-4 w-[500px] rounded-md z-50 shadow-md 
                  ${darkMode ? 'bg-[var(--dark-bg)]' : 'bg-white'} 
                  ${
                    isComponentmenuOpen ? 'block' : 'hidden'
                  } group-hover:block`}
                >
                  {/* Arrow at the top of Components dropdown */}
                  <div className='dropdown-arrow absolute -top-[7px] left-1/2 transform -translate-x-1/2 w-4 h-4'>
                    <div
                      className={`arrow-up ${
                        darkMode
                          ? 'border-t-[var(--dark-border)] '
                          : 'border-t-gray-200 '
                      }`}
                    ></div>
                  </div>

                  <div className='grid grid-cols-3 gap-4'>
                    {/* Column 1 */}
                    <div className='flex flex-col space-y-2'>
                      {column1.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsComponentmenuOpen(false)}
                          className={`text-xs hover:text-[var(--dark-nav-hover)] transition ${
                            darkMode
                              ? 'hover:bg-[var(--dark-hover-bg)]'
                              : 'hover:bg-[var(--light-hover-bg)]'
                          } py-1 px-2 rounded`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* Column 2 */}
                    <div className='flex flex-col space-y-2'>
                      {column2.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsComponentmenuOpen(false)}
                          className={`text-xs hover:text-[var(--dark-nav-hover)] transition ${
                            darkMode
                              ? 'hover:bg-[var(--dark-hover-bg)]'
                              : 'hover:bg-[var(--light-hover-bg)]'
                          } py-1 px-2 rounded`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* Column 3 */}
                    <div className='flex flex-col space-y-2'>
                      {column3.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsComponentmenuOpen(false)}
                          className={`text-xs hover:text-[var(--dark-nav-hover)] transition ${
                            darkMode
                              ? 'hover:bg-[var(--dark-hover-bg)]'
                              : 'hover:bg-[var(--light-hover-bg)]'
                          } py-1 px-2 rounded`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <Link
            to='/prebuilt-template'
            className='hover:text-[var(--dark-nav-hover)]'
          >
            Pre-built Template
          </Link>
          <Link to='/about' className='hover:text-[var(--dark-nav-hover)]'>
            About
          </Link>

          {/* {!isLandingPage && (
            <Link to='/about' className='hover:text-[var(--dark-nav-hover)]'>
              About
            </Link>
          )}

          {!isLandingPage && (
            <Link
              to='/prebuilt-template'
              className='hover:text-[var(--dark-nav-hover)]'
            >
              Pre-built Templates
            </Link>
          )} */}
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
          {isLandingPage ? (
            <Link
              to='/docs'
              className='swing-ocean-gradient hover:swing-ocean-gradient text-white px-6 py-2 rounded-4xl'
            >
              Get Started <i className='ri-arrow-right-s-line'></i>
            </Link>
          ) : (
            <Link
              to='https://github.com/imaaryan/SwingUI'
              target='_blank'
              className='swing-ocean-gradient hover:swing-ocean-gradient flex w-31 gap-x-2 items-center text-white px-6 py-2 rounded-4xl'
            >
              <i className='ri-star-fill'></i>
              Github
            </Link>
          )}
        </div>
      </div>

      {/* Mobile NavBar */}
      <div className='flex custom-mobile items-center space-x-4 lg:hidden'>
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
        className={`fixed top-0 right-0 h-screen bottom-0 w-64 z-50 px-2 py-4 pr-4 transform transition-all duration-300 ${
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
              to='/docs/quick-start'
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
                  to='/swingkit/text-gradients'
                  onClick={handleMobileLinkClick}
                  className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
                >
                  Text Gradient
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
                {mobileComponents.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleMobileLinkClick}
                    className='block px-2 py-2 hover:text-[var(--dark-nav-hover)] transition text-sm'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to='/about'
              onClick={handleMobileLinkClick}
              className='block px-6 py-3 hover:text-[var(--dark-nav-hover)] transition'
            >
              About
            </Link>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className='fixed inset-0 bg-black/100 backdrop-overlay z-40 md:hidden transition-all duration-300 opacity-70'
          onClick={toggleMobileMenu}
        />
      )}

      <style jsx='true'>{`
        .dropdown-arrow {
          position: absolute;
          display: inline-block;
          z-index: 60;
        }

        .arrow-up {
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid ${darkMode ? 'var(--dark-bg)' : 'white'};
          border-top: 1px solid transparent;
          position: relative;
          top: -1px;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
