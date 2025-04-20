import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../../src/index.css';
import '../docs/SwingKit/Gradients/style.css';
import { Link } from 'react-router-dom';

const items = [
  {
    icon: <i className='ri-radio-button-line'></i>,
    title: 'Button',
    desc: 'Customizable button styles',
    to: '/components/button',
  },
  {
    icon: <i className='ri-palette-fill'></i>,
    title: 'Gradients',
    desc: 'Rich color system',
    to: '/swingkit/gradients',
  },
  {
    icon: <i className='ri-color-filter-fill'></i>,
    title: 'Animated Gradients',
    desc: 'Animated Rich color system',
    to: '/swingkit/animated-gradients',
  },
  {
    icon: <i className='ri-loop-right-line'></i>,
    title: 'Pre Loader',
    desc: 'Loading indicators',
    to: '/components/preloader',
  },
  {
    icon: <i className='ri-text-snippet'></i>,
    title: 'Text Gradients',
    desc: 'Text color gradients',
    to: '/swingkit/text-gradients',
  },
  {
    icon: <i className='ri-layout-grid-2-fill'></i>,
    title: 'Bento Grid',
    desc: 'Responsive grid system',
    to: '/components/bento-grid',
  },
  {
    icon: <i className='ri-info-card-line'></i>,
    title: 'Card',
    desc: 'Customizable card styles',
    to: '/components/card',
  },
  {
    icon: <i className='ri-gemini-fill'></i>,
    title: 'Feature',
    desc: 'Feature section',
    to: '/components/feature',
  },
  {
    icon: <i className='ri-landscape-line'></i>,
    title: 'Image Accordion',
    desc: 'Accordion with images',
    to: '/components/image-accordion',
  },
  {
    icon: <i className='ri-gallery-fill'></i>,
    title: 'Image Gallery',
    desc: 'Moving Image Gallery',
    to: '/components/image-gallery',
  },

  {
    icon: <i className='ri-account-pin-circle-fill'></i>,
    title: 'Levitating Avatars',
    desc: 'Floating avatars',
    to: '/components/LevitatingAvatars',
  },

  {
    icon: <i className='ri-navigation-fill'></i>,
    title: 'Navbar',
    desc: 'Responsive navigation bar',
    to: '/components/navbar',
  },
];

// Gallery card displays icon, title and description; applies conditional border color based on theme
const GalleryCard = ({ icon, title, desc, to }) => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`group w-full sm:w-60 h-60 bg-[#1c1c1c] border ${
        darkMode ? 'border-gray-700' : 'border-gray-300'
      } rounded-3xl flex-shrink-0 flex flex-col items-center justify-center text-center p-4 shadow-lg transition-all duration-300 hover:shadow-3xl swing-ocean-gradient-text hover:text-white mx-2 sm:mx-0`}
    >
      <div className=' text-5xl mb-4 swing-ocean-gradient-text bg-[#1c1c1c] p-4 rounded-full border border-[#2ca7cf] transform transition-transform duration-300 group-hover:scale-125'>
        {icon}
      </div>
      <h3 className='text-lg font-bold underline'>{title}</h3>
      <p className={`text-sm mt-2 ${darkMode ? 'text-white' : 'text-black'}`}>
        {desc}
      </p>
    </div>
  );
};

// Row that scrolls items infinitely
const InfiniteRow = ({ direction = 'left', duration = 10 }) => {
  const { darkMode } = useTheme();
  const animationClass =
    direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  const duplicatedItems = [...items, ...items]; // visual loop

  return (
    <div className='w-full overflow-hidden py-3'>
      <div
        className={`flex gap-2  sm:gap-6 w-max ${animationClass}`}
        style={{
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = 'paused')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = 'running')
        }
      >
        {duplicatedItems.map((item, i) => (
          <div
            key={`${direction}-${i}`}
            className={`w-[calc(50%-0.5rem)] sm:w-auto rounded-3xl ${
              darkMode
                ? 'bg-[#03111a] text-[var(--color-text-dark)] opacity-90'
                : 'bg-[#f4faff] text-[var(--color-text)] opacity-90'
            }`}
          >
            <Link to={item.to} target='_blank' rel='noopener noreferrer'>
              <GalleryCard
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                to={item.to}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const ComponentsFeaturesGallery = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`w-screen ml-[-15px] pt-15 overflow-x-hidden mx-auto  ${
        darkMode ? 'text-[var(--color-text-dark)]' : 'text-[var(--color-text)]'
      }`}
    >
      <div className='max-w-screen'>
        <div className='max-w-full '>
          <InfiniteRow direction='left' duration={40} />
          <InfiniteRow direction='right' duration={50} />
        </div>
      </div>
    </div>
  );
};

export default ComponentsFeaturesGallery;
