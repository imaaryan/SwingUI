import React, { useState } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import BottomFooter from '../../../components/BottomFooter.jsx';
import './style.css';

import logo from '../../../assets/UI.webp';

import card1 from '../../../assets/images-for-Showcase/Gradinent_Light.webp'
import card2 from '../../../assets/images-for-Showcase/Buttons_Light.webp'
import card3 from '../../../assets/images-for-Showcase/Animated_Gradinent_Light.webp'
import card4 from '../../../assets/images-for-Showcase/Gradinent_Text_Light.webp'

const BentoGrid = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  const htmlCssCode = `
<div class="max-w-6xl mx-auto p-2 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] border border-zinc-700">

  <div class="swing-ocean-gradient border border-zinc-700 p-4 sm:p-6 rounded-xl col-span-1 sm:col-span-2 row-span-2 flex flex-col justify-between">
    <img src="${logo}" class="w-10 sm:w-12 h-10 sm:h-12 rounded-full" alt="SwingUI Logo" />
    <div class="mt-3 sm:mt-4">
      <h1 class="text-xl sm:text-2xl text-white font-bold">About SwingUi</h1>
      <p class="text-white text-base sm:text-lg mt-1">SwingUi is a modern component library designed to build fast, beautiful UIs.</p>
    </div>
    <a href="#!" class="text-white font-medium mt-3 sm:mt-4 hover:underline ">Explore Components →</a>
  </div>

  <div class="rounded-xl tilt-zoom border border-zinc-700">
    <img
      src="${card1}"
      alt="Image 1"
      class="w-full h-full object-cover rounded-sm"
    />
  </div>
  <div class="rounded-xl tilt-zoom border border-zinc-700">
    <img
      src="${card2}"
      alt="Image 1"
      class="w-full h-full object-cover rounded-sm"
    />
  </div>
  <div class="rounded-xl tilt-zoom border border-zinc-700">
    <img
      src="${card3}"
      alt="Image 1"
      class="w-full h-full object-cover rounded-sm"
    />
  </div>
  <div class="rounded-xl tilt-zoom border border-zinc-700">
    <img
      src="${card4}"
      alt="Image 1"
      class="w-full h-full object-contain rounded-sm"
    />
  </div>

  <div class="bg-zinc-800 border border-zinc-700 p-3 sm:p-6 rounded-xl col-span-1 sm:col-span-2 lg:col-span-4 flex items-center justify-center">
    <p class="text-zinc-300 text-sm sm:text-base lg:text-lg text-center">
      <span class="font-bold text-white">Meet SwingUI—the UI library that ditches the bloat and complexity, delivering buttery-smooth, pure-native components that feel like cheating.
    </p>
  </div>

  <div class="bg-zinc-800 border border-zinc-700 rounded-xl flex flex-col items-center justify-center">
    <i class="fas fa-map-marker-alt text-lg sm:text-xl text-rose-300 mb-1"></i>
    <p class="text-xs mb-3 sm:text-sm text-zinc-300">Follow us</p>
              <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
             
          </div>

    
  </div>

  <div class="bg-zinc-800 border border-zinc-700 rounded-xl p-3 sm:p-6 col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col justify-center items-center text-center">
    <h2 class="text-base sm:text-lg font-semibold mb-2 text-white">Join the SwingUi Mailing List</h2>
    <form class="w-full max-w-xl flex flex-col sm:flex-row gap-2 sm:gap-3">
      <input type="email" placeholder="Email" class="flex-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-zinc-700 text-white text-sm focus:outline-none focus:ring-2 focus:swing-ocean-gradient" />
      <button type="submit" class="swing-ocean-gradient text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-md hover:swing-ocean-gradient transition text-sm ">
      Join
      </button>
    </form>
  </div>
</div>
`;

  return (
    <div>
    <div
      className={`w-full min-h-[100dvh] sm:px-2 transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className='text-3xl mb-3 sm:mb-8 sm:text-4xl font-bold pb-4'>
          Bento Grid
        </h2>
        <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Swing Grid Portal</h3>
        <p className='mb-6 sm:mb-10 lg:mb-16'>
        SwingUI's responsive component showcase presents your library's capabilities through an interactive grid layout with visual examples and key information sections.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div className='flex justify-center items-center min-h-[36rem] bg-zinc-900 rounded-lg shadow-md overflow-hidden'>
            <div
              className='w-full'
              dangerouslySetInnerHTML={{ __html: htmlCssCode }}
            />
          </div>
        )}

        {showCode && (
          <div className='w-full overflow-x-auto my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}
      </div>
    </div>
    <BottomFooter/>
    </div>
  );
};

export default BentoGrid;
