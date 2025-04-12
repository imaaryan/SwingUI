import React, { useState, useEffect } from 'react';
import PreviewCodeBtn from '../../../components/previewcodebtn';
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

function Testimonial() {
  const [showCode, setShowCode] = useState(false);

  const { darkMode } = useTheme();

  const htmlCssCode = `<div class=" bg-black text-white p-1 flex flex-col items-center justify-center">
    <div class="space-y-8 w-full">
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
        const gap = parseFloat(getComputedStyle(container).gap || 0);

        items.forEach((item) => {
          width += item.offsetWidth + gap;
        });

        return width;
      };

      const setValues = (container, width, indexI, indexJ) => {
        const parentWidth = container.parentElement.offsetWidth;
        const ratio = Math.ceil(parentWidth / width);
        const total = ratio + 1;

        while (
          container.children.length >
          sliderHtml[indexI][indexJ].split('swing-slider-item').length - 1
        ) {
          container.lastChild.remove();
        }

        for (let i = 0; i < ratio; i++) {
          const div = document.createElement('div');
          div.innerHTML = sliderHtml[indexI][indexJ];
          container.append(...div.children);
        }

        container.style.width = `${width * total}px`;
        container.style.setProperty('--total', total);
        container.style.setProperty('--est-speed', width / 100);
      };

      const setDirection = (container, width) => {
        if (
          getComputedStyle(container).getPropertyValue('--direction') === '-1'
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

      sliders.forEach((slider, indexI) => {
        sliderHtml[indexI] = [];
        const containers = slider.querySelectorAll('.slider-container');

        containers.forEach((container, indexJ) => {
          sliderHtml[indexI][indexJ] = container.innerHTML;
          const width = getInitialWidth(container);
          if (width) {
            setValues(container, width, indexI, indexJ);
            setDirection(container, width);
          }
          setPauseOnHover(container);
        });

        slider.classList.add('showing');
      });

      const handleResize = () => {
        if (window.innerWidth === prevWidth) return;
        prevWidth = window.innerWidth;

        sliders.forEach((slider, indexI) => {
          const containers = slider.querySelectorAll('.slider-container');
          containers.forEach((container, indexJ) => {
            container.innerHTML = sliderHtml[indexI][indexJ];
            const width = getInitialWidth(container);
            if (width) {
              setValues(container, width, indexI, indexJ);
              setDirection(container, width);
            }
            setPauseOnHover(container);
          });
        });
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } p-4`}
    >
      <h2 className='text-3xl font-bold mb-2'>Testimonial Component</h2>
      <p className='mb-6'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
        necessitatibus libero ab officiis dolorum ipsum voluptates rerum? Quis
        voluptates atque voluptate ducimus provident, reprehenderit
        necessitatibus tempora quaerat, quisquam nostrum ad.
      </p>

      <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

      {!showCode && (
        <div
          key={`${darkMode}-${showCode}`}
          className={`flex justify-center items-center pt-[1vh] ${
            darkMode
              ? 'bg-[var(--light-bg)] text-[var(--color-text)]'
              : 'bg-[var(--light-bg)] text-[var(--color-text)]'
          }  bg-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md`}
        >
          {/* Render live preview */}
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
  );
}

export default Testimonial;
