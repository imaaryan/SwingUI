import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { to: '/docs/quick-start', label: 'Quick Start' },
      // { to: '/docs/cdn', label: 'CDN' },
    ],
  },
  {
    title: 'SwingKit',
    items: [
      { to: '/swingkit/gradients', label: 'Gradients' },
      { to: '/swingkit/animated-gradients', label: 'Animated Gradients' },
      { to: '/swingkit/text-gradients', label: 'Text Gradients' },
    ],
  },
  {
    title: 'Components',
    items: [
      { to: '/components/accordion', label: 'Accordions' },
      { to: '/components/bento-grid', label: 'Bento Grid' },
      { to: '/components/button', label: 'Buttons' },
      { to: '/components/card', label: 'Cards' },
      { to: '/components/feature', label: 'Feature' },
      { to: '/components/image-accordion', label: 'Image Accordion' },
      { to: '/components/image-gallery', label: 'Image Gallery' },

      { to: '/components/LevitatingAvatars', label: 'Levitating Avatars' },

      { to: '/components/navbar', label: 'Navbar' },
      { to: '/components/preloader', label: 'Preloader' },
      { to: '/components/pricing', label: 'Pricing' },
      { to: '/components/rating', label: 'Rating' },
      { to: '/components/ScratchCard', label: 'Scratch Card' },
      { to: '/components/slider', label: 'Slider' },
      { to: '/components/social-share', label: 'Social Share' },
      // { to: '/components/carousel', label: 'Carousel' },
      // { to: '/components/call-to-action', label: 'CTA (Call to Action)' },
      // { to: '/components/footer', label: 'Footer' },
      // { to: '/components/hero', label: 'Hero section' },
      // { to: '/components/popups', label: 'Pop Ups' },
      { to: '/components/spotlight-text', label: 'Spotlight Text' },
      { to: '/components/tabs', label: 'Tabs' },
      { to: '/components/testimonials', label: 'Testimonials' },

      { to: '/components/word-rotating', label: 'Word Rotating' },
    ],
  },
  // {
  //   title: 'Forms',
  //   items: [
  //     { to: '/forms/login', label: 'Login' },
  //     { to: '/forms/register', label: 'Register' },
  //     { to: '/forms/newsletter', label: 'Newsletter' },
  //     { to: '/forms/contact', label: 'Contact Us' },
  //   ],
  // },
];

const Sidebar = () => {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSections, setFilteredSections] = useState(sections);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredSections(sections);
      return;
    }

    const lowerCaseSearch = searchTerm.toLowerCase();
    const newFilteredSections = sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.label.toLowerCase().includes(lowerCaseSearch),
        ),
      }))
      .filter((section) => section.items.length > 0);

    setFilteredSections(newFilteredSections);
  }, [searchTerm]);

  return (
    <aside
      className={`fixed top-[74px] left-0 h-[calc(100dvh_-_74px)] w-[280px] transition-colors duration-300 overflow-y-auto px-4 border-r shadow-md scrollbar-custom ${
        darkMode
          ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)] border-gray-800'
          : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)] border-gray-100'
      }`}
    >
      <div className='sticky top-0 pt-4 bg-inherit z-10'>
        <div className='relative mb-4 group'>
          <svg
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
              darkMode
                ? 'text-gray-400 group-focus-within:text-[var(--color-primary)]'
                : 'text-gray-500 group-focus-within:text-[var(--color-primary)]'
            }`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>

          <input
            ref={searchInputRef}
            type='text'
            placeholder='Search components'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-8 py-2.5 rounded-lg text-sm border transition-all duration-300 ${
              darkMode
                ? 'bg-gray-900/30 border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent'
                : 'bg-white border-gray-200 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent shadow-sm'
            }`}
          />

          <div className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5'>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className={`p-1 rounded-md hover:bg-opacity-10 transition-colors ${
                  darkMode
                    ? 'text-gray-400 hover:text-white hover:bg-white/10'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
                aria-label='Clear search'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <nav className='py-2'>
        {filteredSections.map((section, index) => (
          <div key={index}>
            <div
              className={`text-sm font-semibold px-2 py-4 tracking-wide ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              {section.title}
            </div>
            <div className='flex flex-col gap-1'>
              {section.items.map((item, id) => (
                <NavItem
                  key={id}
                  to={item.to}
                  label={item.label}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        ))}
        {filteredSections.length === 0 && (
          <div
            className={`px-4 py-2 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            No results found for "{searchTerm}"
          </div>
        )}
      </nav>
    </aside>
  );
};

const NavItem = ({ to, label, darkMode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        block px-6 py-2 text-sm no-underline transition-colors duration-300
        ${
          isActive
            ? 'text-[var(--color-primary)] font-semibold'
            : darkMode
            ? 'text-[var(--dark-nav-default)] hover:text-[var(--dark-nav-hover)]'
            : 'text-[var(--color-text)] hover:text-[var(--light-nav-hover)]'
        }
      `}
    >
      {label}
    </Link>
  );
};

export default Sidebar;
