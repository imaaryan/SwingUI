import React, { useState, useEffect } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import './Testimonial.css';
import pic1 from '../../../assets/Images-For-Testimonials/pic1.webp';
import pic2 from '../../../assets/Images-For-Testimonials/pic2.webp';
import pic3 from '../../../assets/Images-For-Testimonials/pic3.webp';
import pic4 from '../../../assets/Images-For-Testimonials/pic4.webp';
import pic5 from '../../../assets/Images-For-Testimonials/pic5.webp';
import pic6 from '../../../assets/Images-For-Testimonials/pic6.webp';
import pic7 from '../../../assets/Images-For-Testimonials/pic7.webp';
import pic8 from '../../../assets/Images-For-Testimonials/pic8.webp';
import pic9 from '../../../assets/Images-For-Testimonials/pic9.webp';
import pic10 from '../../../assets/Images-For-Testimonials/pic10.webp';
import pic11 from '../../../assets/Images-For-Testimonials/pic11.webp';
import pic12 from '../../../assets/Images-For-Testimonials/pic12.webp';
import BottomFooter from '../../../components/BottomFooter.jsx';

function Testimonial() {
  const [showCode, setShowCode] = useState(false);

  const { darkMode } = useTheme();

  const htmlCssCode = `<div class=" bg-black text-white p-1 flex flex-col items-center justify-center">
    <div class="space-y-8 w-full pt-8 pb-8">
      <!-- First Slider -->
      <div class="swing-slider-wrapper">
        <div class="swing-scrolling-image"
          style="--direction: 1; --speed: 10; --pause-on-hover: false;">
          <div class="slider-container">
            <!-- Testimonial Item 1 -->
            <div class="swing-slider-item">
              <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                <div class="w-1/2">
                  <img src= ${pic1}
                       class="h-full w-full object-cover"
                       alt="Testimonial author">
                </div>
                <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                  <div class="flex gap-1 star-rating">
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                  </div>
                  <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                  </p>
                  <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                  <p class="text-gray-400 text-xs">Founder of XYZ</p>
                </div>
              </div>
            </div>
            <div class="swing-slider-item">
              <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                <div class="w-1/2">
                  <img src=${pic2}
                       class="h-full w-full object-cover"
                       alt="Testimonial author">
                </div>
                <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                  <div class="flex gap-1 star-rating">
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                  </div>
                  <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                  </p>
                  <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                  <p class="text-gray-400 text-xs">Founder of XYZ</p>
                </div>
              </div>
            </div>
            <div class="swing-slider-item">
              <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                <div class="w-1/2">
                  <img src=${pic3}
                       class="h-full w-full object-cover"
                       alt="Testimonial author">
                </div>
                <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                  <div class="flex gap-1 star-rating">
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                  </div>
                  <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                  </p>
                  <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                  <p class="text-gray-400 text-xs">Founder of XYZ</p>
                </div>
              </div>
            </div>
            <div class="swing-slider-item">
              <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                <div class="w-1/2">
                  <img src=${pic4}
                       class="h-full w-full object-cover"
                       alt="Testimonial author">
                </div>
                <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                  <div class="flex gap-1 star-rating">
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                  </div>
                  <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                  </p>
                  <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                  <p class="text-gray-400 text-xs">Founder of XYZ</p>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>

      <!-- Second Slider -->
      <div class="swing-slider-wrapper">
        <div class="swing-scrolling-image"
          style="--direction: -1; --speed: 15; --pause-on-hover: true;">
          <div class="slider-container">
            <div class="swing-slider-item">
              <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                <div class="w-1/2">
                  <img src=${pic5}
                       class="h-full w-full object-cover"
                       alt="Testimonial author">
                </div>
                <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                  <div class="flex gap-1 star-rating">
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                  </div>
                  <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                  </p>
                  <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                  <p class="text-gray-400 text-xs">Founder of XYZ</p>
                </div>
              </div>
              </div>
              <div class="swing-slider-item">
                <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                  <div class="w-1/2">
                    <img src=${pic6}
                         class="h-full w-full object-cover"
                         alt="Testimonial author">
                  </div>
                  <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                    <div class="flex gap-1 star-rating">
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    </div>
                    <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                    </p>
                    <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                    <p class="text-gray-400 text-xs">Founder of XYZ</p>
                  </div>
                </div>
              </div>
              <div class="swing-slider-item">
                <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                  <div class="w-1/2">
                    <img src=${pic7} 
                         class="h-full w-full object-cover"
                         alt="Testimonial author">
                  </div>
                  <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                    <div class="flex gap-1 star-rating">
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    </div>
                    <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                    </p>
                    <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                    <p class="text-gray-400 text-xs">Founder of XYZ</p>
                  </div>
                </div>
              </div>
              <div class="swing-slider-item">
                <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                  <div class="w-1/2">
                    <img src=${pic8}
                         class="h-full w-full object-cover"
                         alt="Testimonial author">
                  </div>
                  <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                    <div class="flex gap-1 star-rating">
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    </div>
                    <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                    </p>
                    <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                    <p class="text-gray-400 text-xs">Founder of XYZ</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <!-- Third Slider -->
      <div class="swing-slider-wrapper">
        <div class="swing-scrolling-image"
          style="--direction: 1; --speed: 20;">
          <div class="slider-container">
            <div class="swing-slider-item">
              <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                <div class="w-1/2">
                  <img src=${pic9}
                       class="h-full w-full object-cover"
                       alt="Testimonial author">
                </div>
                <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                  <div class="flex gap-1 star-rating">
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                  </div>
                  <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                  </p>
                  <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                  <p class="text-gray-400 text-xs">Founder of XYZ</p>
                </div>
              </div>
              </div>
              <div class="swing-slider-item">
                <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                  <div class="w-1/2">
                    <img src=${pic10}
                         class="h-full w-full object-cover"
                         alt="Testimonial author">
                  </div>
                  <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                    <div class="flex gap-1 star-rating">
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    </div>
                    <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                    </p>
                    <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                    <p class="text-gray-400 text-xs">Founder of XYZ</p>
                  </div>
                </div>
              </div>
              <div class="swing-slider-item">
                <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                  <div class="w-1/2">
                    <img src=${pic11}
                         class="h-full w-full object-cover"
                         alt="Testimonial author">
                  </div>
                  <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                    <div class="flex gap-1 star-rating">
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    </div>
                    <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                    </p>
                    <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                    <p class="text-gray-400 text-xs">Founder of XYZ</p>
                  </div>
                </div>
              </div>
              <div class="swing-slider-item">
                <div class="flex bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg h-full">
                  <div class="w-1/2">
                    <img src=${pic12} 
                         class="h-full w-full object-cover"
                         alt="Testimonial author">
                  </div>
                  <div class="w-2/3 md:w-3/4 p-3 md:p-4 text-white">
                    <div class="flex gap-1 star-rating">
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                      <i class="ri-star-fill text-yellow-400 text-sm md:text-xl"></i>
                    </div>
                    <p class="text-gray-200 text-xs md:text-sm line-clamp-3 mt-1 md:mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.
                    </p>
                    <h3 class="text-base font-bold mt-1 md:mt-2">Lanny B.</h3>
                    <p class="text-gray-400 text-xs">Founder of XYZ</p>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  </div> 
`;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let prevWidth = window.innerWidth;
      const sliders = document.querySelectorAll('.swing-scrolling-image');
      const sliderHtml = [];

      const getInitialWidth = (container) => {
        let width = 0;
        const items = container.querySelectorAll('.swing-slider-item');

        // Get computed style to properly handle gap
        const computedStyle = getComputedStyle(container);
        const gap = parseFloat(
          computedStyle.columnGap || computedStyle.gap || 0,
        );

        items.forEach((item) => {
          width += item.offsetWidth + gap;
        });

        // Adjust for the last item's gap
        if (items.length > 0) {
          width -= gap;
        }

        return width;
      };

      const setValues = (container, width, indexI, indexJ) => {
        // Calculate how many sets of items we need to fill the screen at least twice
        const parentWidth = container.parentElement.offsetWidth;
        const minDuplicateSets = Math.max(
          3,
          Math.ceil((parentWidth * 2) / width),
        );

        // Clear existing duplicated items
        while (
          container.children.length >
          sliderHtml[indexI][indexJ].childElementCount
        ) {
          container.removeChild(container.lastChild);
        }

        // Clone and append the sets of items
        for (let i = 0; i < minDuplicateSets; i++) {
          const items = sliderHtml[indexI][indexJ].children;
          for (let j = 0; j < items.length; j++) {
            const clone = items[j].cloneNode(true);
            container.appendChild(clone);
          }
        }

        // Set the container width to accommodate all items
        const totalWidth = width * (minDuplicateSets + 1);
        container.style.width = `${totalWidth}px`;

        // Update CSS variables for animation
        container.style.setProperty('--total', minDuplicateSets + 1);
        container.style.setProperty('--est-speed', width / 50); // Adjusted for smoother animation
      };

      const setDirection = (container, width) => {
        if (
          getComputedStyle(container).getPropertyValue('--direction').trim() ===
          '-1'
        ) {
          container.style.marginLeft = `-${width}px`;
        }
      };

      const setPauseOnHover = (container) => {
        const pauseOnHover =
          window.innerWidth > 767
            ? '--pause-on-hover'
            : '--pause-on-hover-mobile';

        const shouldPause =
          getComputedStyle(container).getPropertyValue(pauseOnHover).trim() ===
          'true';
        container.style.setProperty(
          '--poh',
          shouldPause ? 'paused' : 'running',
        );
      };

      // Initialize sliders
      sliders.forEach((slider, indexI) => {
        sliderHtml[indexI] = [];
        const containers = slider.querySelectorAll('.slider-container');

        containers.forEach((container, indexJ) => {
          // Store initial HTML structure as DocumentFragment for efficient cloning
          const fragment = document.createDocumentFragment();
          Array.from(container.children).forEach((child) => {
            fragment.appendChild(child.cloneNode(true));
          });
          sliderHtml[indexI][indexJ] = fragment;

          // Get initial width calculation
          const width = getInitialWidth(container);

          if (width > 0) {
            setValues(container, width, indexI, indexJ);
            setDirection(container, width);
            setPauseOnHover(container);
          }
        });

        // Add showing class after initialization
        slider.classList.add('showing');
      });

      // Handle window resize
      const handleResize = () => {
        if (window.innerWidth === prevWidth) return;
        prevWidth = window.innerWidth;

        sliders.forEach((slider, indexI) => {
          const containers = slider.querySelectorAll('.slider-container');

          containers.forEach((container, indexJ) => {
            // Clear container and add back original items
            container.innerHTML = '';
            const clone = document.createDocumentFragment();
            Array.from(sliderHtml[indexI][indexJ].children).forEach((child) => {
              clone.appendChild(child.cloneNode(true));
            });
            container.appendChild(clone);

            // Recalculate width and set values
            const width = getInitialWidth(container);
            if (width > 0) {
              setValues(container, width, indexI, indexJ);
              setDirection(container, width);
              setPauseOnHover(container);
            }
          });
        });
      };

      window.addEventListener('resize', handleResize);

      // Add CSS for animation if not already present
      if (!document.getElementById('swing-slider-animation')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'swing-slider-animation';
        styleElement.textContent = `
          .swing-slider-wrapper {
            overflow: hidden;
            position: relative;
          }
          .swing-scrolling-image {
            overflow: visible;
            position: relative;
          }
          .slider-container {
            display: flex;
            column-gap: 16px;
            animation: slideContent calc(var(--est-speed, 15) * var(--speed, 10) * 1s) 
                        linear infinite;
            animation-play-state: var(--poh, running);
          }
          .swing-scrolling-image:hover .slider-container {
            animation-play-state: var(--poh, running);
          }
          .swing-slider-item {
            flex: 0 0 auto;
            width: 300px;
            height: 100%;
          }
          @keyframes slideContent {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(var(--direction, 1) * -100%));
            }
          }
        `;
        document.head.appendChild(styleElement);
      }

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  },);

  return (
    <div>
    <div
      className={`w-full min-h-[100dvh] max-w-screen-xl mx-auto px-4 py-0  transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } overflow-x-hidden`}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-12'>
          Testimonial
        </h1>
        <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Swing Dynamic Testimonials</h3>
        <p className='mb-15'>
          This dynamic Tabs component provides seamless navigation between
          categorized content blocks with responsive design, interactive hover
          effects, and optional code previews — ideal for modern UI/UX needs.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div
            key={`${darkMode}-${showCode}`}
            className={`flex justify-center items-center overflow-hidden bg-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md`}
          >
            {/* Render live preview */}
            <div
              className='w-full'
              dangerouslySetInnerHTML={{ __html: htmlCssCode }}
            />
          </div>
        )}

        {showCode && (
          <div className='w-full my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}
      </div>
      </div>
      <BottomFooter/>
    </div>
  );
}

export default Testimonial;
