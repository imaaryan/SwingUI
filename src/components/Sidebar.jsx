import React from 'react';
import { Link, useLocation } from 'react-router';
import { useTheme } from '../context/ThemeContext';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { to: '/docs/quick-start', label: 'Quick Start' },
      { to: '/docs/cdn', label: 'CDN' },
    ],
  },
  {
    title: 'SwingKit',
    items: [
      { to: '/swingkit/gradients', label: 'Gradients' },
      { to: '/swingkit/animated-gradients', label: 'Animated Gradients' },
      { to: '/swingkit/transitions', label: 'Transitions' },
    ],
  },
  {
    title: 'Components',
    items: [
      { to: '/components/accordion', label: 'Accordions' },
      { to: '/components/button', label: 'Buttons' },
      { to: '/components/card', label: 'Cards' },
      { to: '/components/carousel', label: 'Carousel' },
      { to: '/components/call-to-action', label: 'CTA (Call to Action)' },
      { to: '/components/footer', label: 'Footer' },
      { to: '/components/hero', label: 'Hero section' },
      { to: '/components/image-gallery', label: 'Image Gallery' },
      { to: '/components/navbar', label: 'Navbar' },
      { to: '/components/panto-grid', label: 'Panto-grid' },
      { to: '/components/popups', label: 'Pop Ups' },
      { to: '/components/pricing', label: 'Pricing' },
      { to: '/components/tabs', label: 'Tabs' },
      { to: '/components/testimonials', label: 'Testimonials' },
     
    ],
  },
  {
    title: 'Forms',
    items: [
      { to: '/forms/login', label: 'Login' },
      { to: '/forms/register', label: 'Register' },
      { to: '/forms/newsletter', label: 'Newsletter' },
      { to: '/forms/contact', label: 'Contact Us' },
    ],
  },
];

const Sidebar = () => {
  const { darkMode } = useTheme();

  return (
    <aside
      className={`fixed top-[74px] left-0 h-[calc(100dvh_-_74px)] w-[280px]  transition-colors duration-300 overflow-y-auto px-4 border-r shadow-md
        ${darkMode
          ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text)] transition-colors duration-300'
          : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)] transition-colors duration-300'
        }`}
    >


      <nav className='py-6'>
        {sections.map((section, index) => (
          <div key={index}>
            <div
              className={`text-sm font-semibold px-2 py-4 tracking-wide opacity-70
                ${darkMode
                  ? 'text-[var(--dark-nav-default)]'
                  : 'text-[var(--light-nav-default)]'
                }`}
            >
              {section.title}
            </div>
            <div className="flex flex-col gap-1">
              {section.items.map((item, id) => (
                <NavItem key={id} to={item.to} label={item.label} darkMode={darkMode} />
              ))}
            </div>
          </div>
        ))}
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
        ${isActive
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
