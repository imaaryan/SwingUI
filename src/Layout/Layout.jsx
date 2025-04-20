import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Docs from './Docs';
import SwingKit from './SwingKit';
import Components from './Components';
import Form from './Form';
import Sidebar from '../components/Sidebar';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AboutUs from '../pages/AboutUs';
import PreBuiltTemplate from '../docs/PrelBuiltTemplate/PreBuiltTemplate';
import NotFound from '../pages/NotFound';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { darkMode } = useTheme();

  const sidebarRoutes = ['/docs', '/components', '/swingkit', '/forms'];
  const showSidebar = sidebarRoutes.some(
    (prefix) =>
      location.pathname === prefix ||
      location.pathname.startsWith(prefix + '/')
  );
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  return (
    <div
      className={`w-full pt-16 overflow-x-hidden transition-colors duration-300 ease-in-out ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className='flex w-full relative'>
        {showSidebar && (
          <>
            {/* Desktop Sidebar */}
            <div className='hidden md:block w-[280px] py-3 transition-all duration-300 flex-shrink-0'>
              <Sidebar />
            </div>

            <div
              className={`md:hidden fixed top-16 left-0 w-[280px] h-[calc(100vh-64px)] z-50 transition-transform duration-300 transform  shadow-md overflow-y-auto
                ${
                  darkMode
                    ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)]'
                    : 'bg-white text-black'
                } ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
              <div className='flex justify-end items-center p-4'>
                <button
                  onClick={toggleSidebar}
                  className='p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors'
                  aria-label='Close sidebar'
                >
                  <X size={24} />
                </button>
              </div>
              <Sidebar />
            </div>

            <div
              className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
                sidebarOpen
                  ? 'opacity-70 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
              }`}
              onClick={toggleSidebar}
              aria-hidden='true'
            />
          </>
        )}

        <div className='flex-1 min-h-screen'>
          <div className='w-full'>
            <div
              className={`${
                showSidebar ? 'max-w-screen-xl mx-auto w-full' : ''
              }`}
            >
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route
                  path='/prebuilt-template'
                  element={<PreBuiltTemplate />}
                />
                <Route path='/docs/*' element={<Docs />} />
                <Route path='/components/*' element={<Components />} />
                <Route path='/swingkit/*' element={<SwingKit />} />
                <Route path='/forms/*' element={<Form />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
