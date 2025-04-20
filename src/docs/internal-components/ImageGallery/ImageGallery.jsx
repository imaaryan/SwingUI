import React, { useState, useEffect } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';

import Table from '../../components/TableComponent/Table.jsx'; // Import Table component

import BottomFooter from '../../../components/BottomFooter.jsx';

import './responsive.css';

import img1 from '../../../assets/Images-For-Gallery/img1.webp';
import img2 from '../../../assets/Images-For-Gallery/img2.webp';
import img3 from '../../../assets/Images-For-Gallery/img3.webp';
import img4 from '../../../assets/Images-For-Gallery/img4.webp';
import img5 from '../../../assets/Images-For-Gallery/img5.webp';
import img6 from '../../../assets/Images-For-Gallery/img6.webp';
import img7 from '../../../assets/Images-For-Gallery/img7.webp';
import img8 from '../../../assets/Images-For-Gallery/img8.webp';

function ImageGallery() {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  const htmlCssCode = `<div class=" bg-black">
      <div class="space-y-8 w-full pt-8 pb-8">
          <div class="swing-scrolling-image"
            style="
            --direction: 1;
            --speed: 10; 
            --pause-on-hover: false;">
              <div class="slider-container w-full flex animate-scroll gap-4 px-4">
         <div class="swing-slider-item">
          <img
            src="${img1}"
            alt="Image 1"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>
              <div class="swing-slider-item">
          <img
            src="${img2}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>

              <div class="swing-slider-item">
          <img
            src="${img3}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>

           <div class="swing-slider-item">
          <img
            src="${img4}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>

            </div>
          </div>

          <div class="swing-scrolling-image"
            style="
            --direction: -1; 
            --speed: 10; 
            --pause-on-hover: false;">
              <div class="slider-container w-full flex animate-scroll gap-4 px-4">
         <div class="swing-slider-item">
          <img
            src="${img5}"
            alt="Image 1"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>
              <div class="swing-slider-item">
          <img
            src="${img6}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>

              <div class="swing-slider-item">
          <img
            src="${img7}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>

           <div class="swing-slider-item">
          <img
            src="${img8}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>
      </div>
    </div> 
  `;

  // Define properties data for the table
  const propertiesData = [
    {
      propertyName: 'scrolling wrapper class',
      defaultValue: 'swing-scrolling-image',
      description:
        'Custom class controlling scrolling animation using CSS variables.',
    },
    {
      propertyName: 'scroll direction',
      defaultValue: '--direction: 1 or --direction: -1',
      description:
        'Controls the direction of the scroll: 1 for left-to-right, -1 for right-to-left.',
    },
    {
      propertyName: 'scroll speed',
      defaultValue: '--speed: 10',
      description:
        'Defines the speed of the scroll animation. Higher values mean faster scrolling.',
    },
    {
      propertyName: 'pause on hover',
      defaultValue: '--pause-on-hover: false',
      description: 'Disables pause-on-hover functionality.',
    },
    {
      propertyName: 'scroll animation container',
      defaultValue: 'slider-container w-full flex animate-scroll gap-4 px-4',
      description:
        'Sets up a horizontal flex container with spacing and horizontal padding, and applies scroll animation.',
    },
    {
      propertyName: 'slider item class',
      defaultValue: 'swing-slider-item',
      description:
        'Wrapper for each image, possibly used for future styling or animation targeting.',
    },
  ];

  // Define table columns configuration
  const propertiesColumns = [
    {
      key: 'propertyName',
      title: 'Property Name',
      width: 'w-1/5',
    },
    {
      key: 'defaultValue',
      title: 'Value',
      width: 'w-1/3',
      render: (value) => (
        <code
          className={`px-2 py-1 rounded-lg text-sm ${
            darkMode ? 'bg-gray-700' : 'bg-gray-200'
          } inline-block min-w-full break-words`}
        >
          {value}
        </code>
      ),
    },
    {
      key: 'description',
      title: 'Description',
      width: 'w-1/2',
    },
  ];

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
  });

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
          Image Gallery
        </h2>
        <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
          Swing Flow Infinite Scroller
        </h2>
        <p className='mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
          SwingUI's auto-scrolling gallery delivers dynamic visual storytelling
          with dual-directional motion, creating an eye-catching yet
          distraction-free presentation.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div
            key={`${darkMode}-${showCode}`}
            className={`flex justify-center items-center rounded-lg shadow-md overflow-hidden ${
              darkMode
                ? 'bg-[var(--light-bg)] text-[var(--color-text)]'
                : 'bg-[var(--light-bg)] text-[var(--color-text)]'
            }  bg-gray-200 dark:from-gray-800 dark:to-gray-700`}
          >
            <div
              className='w-full'
              dangerouslySetInnerHTML={{
                __html: htmlCssCode,
              }}
            />
          </div>
        )}

        {showCode && (
          <div className='w-full my-4 rounded-xl relative whitespace-pre overflow-x-auto md:whitespace-pre-wrap md:break-words md:overflow-x-visible'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}

        <hr
          className={`my-10 border-t ${
            darkMode
              ? 'border-gray-700 opacity-30'
              : 'border-gray-300 opacity-50'
          }`}
        />

        <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Properties</h2>
        <div className='mb-12'>
          <Table data={propertiesData} columns={propertiesColumns} />
        </div>
      </div>

    </div>
    <BottomFooter/>
    </div>
  );
}

export default ImageGallery;
