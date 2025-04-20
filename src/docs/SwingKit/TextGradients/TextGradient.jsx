import React, { useState } from 'react';
import CopyButton from '../../components/copyButton/copyButton.jsx';
import transitions from './TextGradientData.js';
import { useTheme } from '../../../context/ThemeContext.jsx';
import './style.css';
import BottomFooter from '../../../components/BottomFooter.jsx';

const TransitionItem = ({ transition }) => {
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <div
      key={transition.id}
      className='flex justify-center items-center relative rounded-md overflow-hidden border border-gray-700 w-full h-48 sm:h-40 md:h-48 lg:h-56 bg-gray-200'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='w-full h-full flex items-center justify-center'>
        <span
          className={`${transition.class} text-sm sm:text-base md:text-lg font-semibold inline-block text-center`}
        >
          {transition.name}
        </span>
      </div>
      {isHovered && (
        <div className='absolute top-2 right-2 z-20 transition-opacity duration-200'>
          <CopyButton textToCopy={transition.name} />
        </div>
      )}
    </div>
  );
};

const TextGradient = () => {
  const { darkMode } = useTheme();

  // const propertiesData = [
  //   {
  //     className: 'swing-ocean-gradient',
  //     section: 'Swing Text',
  //     description: 'A swing button with a vibrant gradient background.',
  //   },
  //   {
  //     className: 'swing-ocean-gradient hover:swing-ocean-gradient',
  //     section: 'Swing Button',
  //     description: 'A swing button that shows an alternate gradient on hover.',
  //   },
  //   {
  //     className: 'swing-ocean-gradient-animate',
  //     section: 'Animated Swing Button',
  //     description: 'An animated swing button with continuous gradient motion.',
  //   },
  //   {
  //     className: 'swing-ocean-gradient-animate hover:swing-ocean-gradient',
  //     section: 'Animated Swing Button',
  //     description: 'An animated button that changes its gradient on hover.',
  //   },
  // ];

  const propertiesData = [
    {
      className: '.swing-ocean-gradient-text',
      description: 'Ocean-inspired animated gradient applied to text',
    },
    {
      className: '.swing-fire-gradient-text',
      description: 'Fiery animated gradient style for bold, energetic text',
    },
    {
      className: '.swing-love-gradient-text',
      description: 'Soft, romantic gradient animation for expressive content',
    },
    {
      className: '.swing-deepsea-gradient-text',
      description: 'Deep blue animated tones resembling underwater vibes',
    },
    {
      className: '.swing-royal-gradient-text',
      description: 'Elegant gradient animation for premium or regal sections',
    },
    {
      className: '.swing-peach-gradient-text',
      description: 'Warm, cheerful gradient for friendly and lively designs',
    },
  ];

  const implementationData = [
    {
      className: '.swing-ocean-gradient-text',
      example: '<h1 class="swing-ocean-gradient-text">Hello World</h1>',
    },
    {
      className: '.swing-fire-gradient-text',
      example: '<p class="swing-fire-gradient-text">Blazing Fast</p>',
    },
    {
      className: '.swing-love-gradient-text',
      example: '<span class="swing-love-gradient-text">Made with Love</span>',
    },
  ];

  return (
    <div>
    <main
      className={`w-full min-h-[100dvh] transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
      style={{
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
      }}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <div className='flex flex-col items-start'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
            Text Gradients
          </h1>

          <div className='w-full'>
            <p>
              These animated gradients offer dynamic, moving color transitions,
              adding an interactive and visually engaging effect to your design.
            </p>
            <br />
            <p className='mb-10 sm:mb-16'>
              If you want to explore more{' '}
              <strong>Swing Animated Gradients</strong>, check out the{' '}
              <span className='font-bold'>Animated Gradient Collection</span>.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16'>
              {transitions.map((transition) => (
                <TransitionItem key={transition.id} transition={transition} />
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

export default TextGradient;
