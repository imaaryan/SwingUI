import React from 'react';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import BottomFooter from '../components/BottomFooter';

function NotFound() {
  const { darkMode } = useTheme();

  const bgClass = darkMode
    ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)]'
    : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)]';

  return (
    <div className={`flex flex-col min-h-screen w-full transition-colors duration-300 ${bgClass}`}>
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-8 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full swing-ocean-gradient text-white hover:opacity-90 transition"
        >
          Go Back Home
        </Link>
      </div>

      <BottomFooter />
    </div>
  );
}

export default NotFound;