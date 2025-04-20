import React from 'react';
import { useTheme } from '../context/ThemeContext';
import logo from '../../public/logo.webp';

function Footer() {
  const { darkMode } = useTheme();

  const bgClass = darkMode
    ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)]'
    : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)]';

  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-300';

  return (
    <footer
      className={`w-full  flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center ${bgClass}`}
    >
      <div className='w-full px-4 md:px-10'>
        <div className='flex flex-col items-center justify-center text-center mt-6'>
          <div className='mb-4 mt-14'>
            <img src={logo} alt='SwingUI Logo' className='h-18' />
          </div>

          <div className='mb-4'>
            <p className='font-bold'>
              Built with <span className='text-red-500'>❤</span> by Backbenchers
            </p>
          </div>

          <div
            className={`max-w-6xl mx-auto mb-14 ${
              darkMode ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            <p>
              SwingUI is a hackathon project born during the{' '}
              <span className='font-semibold'>
                ChaiCode Web Dev First Cohort
              </span>{' '}
              — crafted by a passionate team of backbenchers who poured their
              hearts into every line of code. Guided by the incredible mentors{' '}
              <span className='font-semibold'>
                Hitesh Sir, Piyush Sir, Anirudh Sir, Mukul Sir
              </span>
              , and <span className='font-semibold'>Akash Sir</span>, we built
              SwingUI not just to ship components, but to learn, grow, and
              create something we're truly proud of.
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row md:justify-between md:items-center border-t ${borderClass} pt-10 pb-8 gap-y-4 text-sm mt-4 mb-4`}
        >
          <div className='text-center md:text-left w-full md:w-auto font-normal '>
            <span>© 2025 SwingUI. All Rights Reserved.</span>
          </div>

          <div className='w-full md:w-auto flex justify-center md:justify-end'>
            <div className='flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 font-normal'>
              <a
                href='https://github.com/imaaryan/SwingUI'
                className='hover:text-[var(--dark-nav-hover)] transition-colors'
                rel='noopener noreferrer'
                target='_blank'
              >
                Github
              </a>
              <a
                href='https://discord.com/invite/gd9Vjb6VCm'
                rel='noopener noreferrer'
                className='hover:text-[var(--dark-nav-hover)] transition-colors'
                target='_blank'
              >
                Discord
              </a>
              <a
                href='https://x.com/swing_ui'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-[var(--dark-nav-hover)] transition-colors'
              >
                X (formerly Twitter)
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
