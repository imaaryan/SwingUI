import React from 'react';
import HoverAndCopyBlock from '../../components/HoverAndCopyBlock/hoverAndCopyBlock.jsx';
import Animatedgradients from './AnimatedgradientData.js';
import { useTheme } from '../../../context/ThemeContext.jsx';
import './style.css';
import '../TextGradients/style.css';
import BottomFooter from '../../../components/BottomFooter.jsx';

const AnimatedGradientGrid = () => {
  const { darkMode } = useTheme();

  const propertiesData = [
    {
      className: 'swing-ocean-gradient-animate',
      description: 'A smooth ocean-inspired animated gradient',
    },
    {
      className: 'swing-fire-gradient-animate',
      description: 'A blazing animation with warm fiery tones',
    },
    {
      className: 'swing-love-gradient-animate',
      description: 'Romantic and soft gradient transitions',
    },
    {
      className: 'swing-deepsea-gradient-animate',
      description: 'Deep blue hues flowing in a dark sea motion',
    },
    {
      className: 'swing-royal-gradient-animate',
      description: 'Luxurious color flow with elegant animation',
    },
    {
      className: 'swing-peach-gradient-animate',
      description: 'Light and playful gradient with warm tones',
    },
  ];

  const implementationData = [
    {
      className: 'swing-ocean-gradient-animate',
      example: '<div class="swing-ocean-gradient-animate"></div>',
    },
    {
      className: 'swing-fire-gradient-animate',
      example: '<button class="swing-fire-gradient-animate">Click</button>',
    },
    {
      className: 'swing-love-gradient-animate',
      example: '<section class="swing-love-gradient-animate">Content</section>',
    },
  ];

  return (
    <div>
    <main
      className={`w-full  min-h-[100dvh] transition-colors duration-300 ${
        darkMode
        ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
        : 'bg-[var(--light-bg)] text-[var(--color-text)]'
        }`}
        >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <div className='flex flex-col items-start'>
         
          <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
            Animated Gradients
          </h1>
       
          <p className='mb-10 sm:mb-16'>
            Elevate your user interfaces with our exclusive collection of{' '}
            <span className='font-bold'>
              swing-style animated CSS gradients
            </span>
            . These dynamic backgrounds bring life to your components, perfect
            for modern, engaging web designs.
          </p>

          <div className='w-full'>
  
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10'>
              {Animatedgradients.map((gradient) => (
                <HoverAndCopyBlock key={gradient.id} gradient={gradient} />
              ))}
            </div>

      
            
            <hr
              className={`my-10 border-t ${
                darkMode
                  ? 'border-gray-700 opacity-30'
                  : 'border-gray-300 opacity-50'
                  }`}
            />
            
            <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
              Properties
            </h2>
            <div className='w-full mb-10 overflow-x-auto'>
              <table
                className={`w-full border-collapse rounded-lg overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                  }`}
              >
                <thead>
                  <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <th className='py-3 px-4 text-left font-semibold'>
                      Class Name
                    </th>
                    <th className='py-3 px-4 text-left font-semibold'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {propertiesData.map((item, index) => (
                    <tr
                    key={index}
                      className={`border-t ${
                        darkMode ? 'border-gray-700' : 'border-gray-200'
                      }`}
                      >
                      <td className='py-3 px-4'>
                        <code
                          className={`px-2 py-1 rounded text-sm ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-200'
                          }`}
                        >
                          .{item.className}
                        </code>
                      </td>
                      <td className='py-3 px-4'>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr
              className={`my-10 border-t ${
                darkMode
                  ? 'border-gray-700 opacity-30'
                  : 'border-gray-300 opacity-50'
                  }`}
            />

       
            <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
              Implementation Examples
            </h2>
            <div className='w-full mb-10 overflow-x-auto'>
              <table
                className={`w-full border-collapse rounded-lg overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <thead>
                  <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <th className='py-3 px-4 text-left font-semibold'>
                      Class Name
                    </th>
                    <th className='py-3 px-4 text-left font-semibold'>
                      Usage Snippet
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {implementationData.map((item, index) => (
                    <tr
                    key={index}
                    className={`border-t ${
                        darkMode ? 'border-gray-700' : 'border-gray-200'
                        }`}
                        >
                      <td className='py-3 px-4'>
                        <code
                          className={`px-2 py-1 rounded text-sm ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-200'
                          }`}
                        >
                          .{item.className}
                        </code>
                      </td>
                      <td className='py-3 px-4'>
                        <code
                          className={`px-2 py-1 rounded text-sm ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-200'
                          }`}
                        >
                          {item.example}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

           
          </div>
        </div>
      </div>
      
    </main>
    <BottomFooter/>
                </div>
  );
};

export default AnimatedGradientGrid;
