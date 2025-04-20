import React, { useState, useEffect, useRef } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';

import Table from '../../components/TableComponent/Table.jsx';

import BottomFooter from '../../../components/BottomFooter.jsx';


import './Feature.css';
import img1 from '../../../assets/Images-For-Gallery/img1.webp';
import img2 from '../../../assets/Images-For-Gallery/img2.webp';
import img3 from '../../../assets/Images-For-Gallery/img3.webp';
import img4 from '../../../assets/Images-For-Gallery/img4.webp';

function Feature() {
  const [showCode, setShowCode] = useState(false);
  const previewRef = useRef(null);
  const { darkMode } = useTheme();

  // Set up the scroll synchronization with more robust event handling
  useEffect(() => {
    function initScrollSync() {
      if (!showCode && previewRef.current) {
        // Small delay to ensure DOM is fully rendered
        setTimeout(() => {
          const textArea = previewRef.current.querySelector('#textArea');
          const scrollContainer =
            previewRef.current.querySelector('#scrollContainer');

          if (textArea && scrollContainer) {
            // Remove any existing event listeners first to avoid duplicates
            textArea.removeEventListener('wheel', handleWheel);

            // Add fresh event listener
            textArea.addEventListener('wheel', handleWheel, { passive: false });

            // Function to handle wheel events
            function handleWheel(e) {
              scrollContainer.scrollTop += e.deltaY;
              e.preventDefault();
            }
          }
        }, 100);
      }
    }

    // Initialize on mount and reinitialize on any relevant changes
    initScrollSync();

    // Setup event listeners for potential DOM changes
    const observer = new MutationObserver(initScrollSync);

    // Start observing if we have the preview ref
    if (previewRef.current) {
      observer.observe(previewRef.current, {
        childList: true,
        subtree: true,
      });
    }

    // Setup interval to periodically check and reinitialize (backup approach)
    const intervalId = setInterval(initScrollSync, 2000);

    // Clean up function
    return () => {
      observer.disconnect();
      clearInterval(intervalId);

      // Clean up event listeners if component unmounts
      if (previewRef.current) {
        const textArea = previewRef.current.querySelector('#textArea');
        if (textArea) {
          textArea.removeEventListener('wheel', handleWheel);
        }
      }

      function handleWheel() {} // Empty placeholder to avoid reference errors
    };
  }, [showCode, darkMode]); // Re-run when showCode or darkMode changes

  const htmlCssCode = `
  <div class="flex items-center justify-center p-2 sm:p-4">
    <div id="mainContainer" class="relative flex flex-col w-full max-w-7xl mx-auto border border-gray-300 rounded-lg overflow-hidden bg-white">

      <div class="fade-top absolute top-0 left-0 right-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 z-10 pointer-events-none 
        bg-gradient-to-b from-white/90 to-transparent"></div>
      <div class="fade-bottom absolute bottom-0 left-0 right-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 z-10 pointer-events-none 
        bg-gradient-to-t from-white/90 to-transparent"></div>

      <div class="flex flex-col md:flex-row w-full p-3 sm:p-4 md:p-6 lg:p-8">

        <div id="textArea" class="flex flex-col justify-center p-3 sm:p-4 md:p-6 lg:p-8 w-full md:w-1/2 order-2 md:order-1">
          <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">Random Heading</h1>
          <p class="text-sm sm:text-base md:text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, consectetur dolores fugiat magnam voluptates qui debitis saepe quas exercitationem dicta! Nihil, commodi culpa temporibus quibusdam vitae tenetur quae reprehenderit ducimus!
          </p>
        </div>
        <div class="w-full md:w-1/2 order-1 md:order-2 p-2 sm:p-3 md:p-4">
          <div id="scrollContainer" class="relative w-full h-60 sm:h-72 md:h-96 lg:h-96 overflow-y-auto overscroll-contain scrollbar-hide rounded-lg">
            <div id="sliderContainer" class="w-full transition-transform duration-300 ease-out space-y-4 sm:space-y-5 md:space-y-6">
              <div class="slider-item w-full h-auto">
                <div class="rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <img 
                    src="${img1}"
                    alt="Image 1" 
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div class="slider-item w-full h-auto mt-4 sm:mt-5 md:mt-6">
                <div class="rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <img 
                    src="${img2}"
                    alt="Image 2" 
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div class="slider-item w-full h-auto mt-4 sm:mt-5 md:mt-6">
                <div class="rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <img 
                    src="${img3}"
                    alt="Image 3" 
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div class="slider-item w-full h-auto mt-4 sm:mt-5 md:mt-6">
                <div class="rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <img 
                    src="${img4}"
                    alt="Image 4" 
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

  const customCSS = `
    <style>
      /* Improved scrollbar handling for all devices */
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      /* Touch handling improvements */
      #scrollContainer {
        -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
      }
      
      /* Make text area scrollable with better touch indicators */
      #textArea {
        cursor: ns-resize; 
      }
      
      /* Ensure images render properly on all devices */
      .slider-item img {
        width: 100%;
        height: auto;
        display: block;
      }
      
      /* iPad-specific adjustments */
      @media (min-width: 768px) and (max-width: 1024px) {
        #mainContainer > div {
          flex-direction: row !important;
        }
        #textArea {
          width: 50% !important;
          order: 1 !important;
          padding: 1.5rem !important;
        }
        .lg\\:w-1\\/2 {
          width: 50% !important;
        }
        #scrollContainer {
          height: 400px !important;
        }
        .order-1, .order-2 {
          order: initial;
        }
        #mainContainer > div > div:first-child {
          order: 2 !important;
        }
      }
    </style>
  `;

  // const galleryPropertiesData = [
  //   {
  //     propertyName: 'gradient overlays',
  //     defaultValue:
  //       'fade-top fade-bottom + bg-gradient-to-b/t from-white/90 to-transparent',
  //     description:
  //       'Creates a fading white gradient at the top and bottom of the scrollable area.',
  //   },
  //   {
  //     propertyName: 'overlay positioning',
  //     defaultValue: 'absolute top-0/bottom-0 left-0 right-0',
  //     description: 'Positions the fade overlays at the top and bottom edges.',
  //   },
  //   {
  //     propertyName: 'scrollable container',
  //     defaultValue: 'overflow-y-auto overscroll-contain scrollbar-hide',
  //     description:
  //       'Enables vertical scrolling, prevents bounce effects, and hides the scrollbar.',
  //   },
  //   {
  //     propertyName: 'scroll container height',
  //     defaultValue: 'h-60 sm:h-72 md:h-96 lg:h-96',
  //     description: 'Makes the image area scrollable and responsive in height.',
  //   },
  //   {
  //     propertyName: 'image transition',
  //     defaultValue: 'transition-shadow duration-300',
  //     description: 'Smoothly transitions the shadow on hover over 300ms.',
  //   },
  // ];

  // const galleryPropertiesColumns = [
  //   {
  //     key: 'propertyName',
  //     title: 'Property Name',
  //     width: 'w-1/5',
  //   },
  //   {
  //     key: 'defaultValue',
  //     title: 'Default Value',
  //     width: 'w-1/3',
  //     render: (value) => (
  //       <code
  //         className={`px-2 py-1 rounded text-sm ${
  //           darkMode ? 'bg-gray-700' : 'bg-gray-200'
  //         } inline-block min-w-full break-words`}
  //       >
  //         {value}
  //       </code>
  //     ),
  //   },
  //   {
  //     key: 'description',
  //     title: 'Description',
  //     width: 'w-1/2',
  //   },
  // ];

  return (
    <div>
    <div
      className={`w-full min-h-[100dvh] transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } px-0 py-6`}
    >
      <div className='max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-8 sm:py-6'>
        <h2 className='text-3xl mb-3 sm:mb-8 sm:text-4xl font-bold pb-4'>
        Features
        </h2>
        <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
        Swing Glide Gallery
        </h2>
        <p className='mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
        SwingUI's dynamic duo panel blends immersive content with fluid image browsing, enhanced by signature gradient fades for effortless navigation.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div className='flex justify-center items-center min-h-[12rem] bg-gray-200 rounded-lg shadow-md'>
            <div
              ref={previewRef}
              className='w-full'
              dangerouslySetInnerHTML={{ __html: customCSS + htmlCssCode }}
            />
          </div>
        )}

        {showCode && (
          <div className='w-full overflow-x-auto my-4 rounded-lg sm:rounded-xl'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}

        {/* <hr
          className={`my-6 sm:my-8 md:my-10 lg:my-10 border-t ${
            darkMode
              ? 'border-gray-700 opacity-30'
              : 'border-gray-300 opacity-50'
          }`}
        /> */}

        {/* <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Properties</h2>
        <div className='mb-12'>
          <Table
            data={galleryPropertiesData}
            columns={galleryPropertiesColumns}
          />
        </div> */}
      </div>

    </div>
    <BottomFooter/>
    </div>
  );
}

export default Feature;
