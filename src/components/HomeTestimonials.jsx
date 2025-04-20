import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../../src/index.css';
import '../docs/internal-components/ImageGallery/responsive.css';
import pic1 from '../assets/Images-For-Testimonials/pic1.webp';
import pic2 from '../assets/Images-For-Testimonials/pic2.webp';
import pic3 from '../assets/Images-For-Testimonials/pic3.webp';
import pic4 from '../assets/Images-For-Testimonials/pic4.webp';
import pic5 from '../assets/Images-For-Testimonials/pic5.webp';
import pic6 from '../assets/Images-For-Testimonials/pic6.webp';
import pic7 from '../assets/Images-For-Testimonials/pic7.webp';
import pic8 from '../assets/Images-For-Testimonials/pic8.webp';
import pic9 from '../assets/Images-For-Testimonials/pic9.webp';
import pic10 from '../assets/Images-For-Testimonials/pic10.webp';
import pic11 from '../assets/Images-For-Testimonials/pic11.webp';
import pic12 from '../assets/Images-For-Testimonials/pic12.webp';

const testimonialsTop = [
  {
    img: pic1,
    text: 'So impressed with the quality!',
    name: 'Emily R.',
    title: 'Marketing Lead',
  },
  {
    img: pic2,
    text: 'Couldn’t be happier!',
    name: 'Jordan M.',
    title: 'UI/UX Designer',
  },
  {
    img: pic3,
    text: 'Really smooth experience.',
    name: 'Liam B.',
    title: 'CTO',
  },
  {
    img: pic4,
    text: 'Fantastic support!',
    name: 'Sophie T.',
    title: 'Product Manager',
  },
  {
    img: pic5,
    text: 'Loved working with the team.',
    name: 'Chris D.',
    title: 'Developer Advocate',
  },
  {
    img: pic6,
    text: 'Five stars all the way!',
    name: 'Mia W.',
    title: 'Entrepreneur',
  },
];

const testimonialsBottom = [
  {
    img: pic7,
    text: 'Highly recommend!',
    name: 'Jake L.',
    title: 'Software Engineer',
  },
  {
    img: pic8,
    text: 'Beautiful design & UX.',
    name: 'Ava K.',
    title: 'Creative Director',
  },
  {
    img: pic9,
    text: 'Easy and intuitive!',
    name: 'Ethan G.',
    title: 'Data Analyst',
  },
  {
    img: pic10,
    text: 'Top-notch service.',
    name: 'Grace S.',
    title: 'HR Manager',
  },
  {
    img: pic11,
    text: 'Exceeded expectations!',
    name: 'Noah F.',
    title: 'Operations Lead',
  },
  { img: pic12, text: 'Will use again!', name: 'Zoe H.', title: 'Founder' },
];

const HomeTestimonials = () => {
  const { darkMode } = useTheme();
  const topRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    const setupSlider = (sliderRef) => {
      const slider = sliderRef.current;
      const containers = slider.querySelectorAll('.slider-container');
      const sliderHtml = [];

      const getInitialWidth = (container) => {
        let width = 0;
        const items = container.querySelectorAll('.swing-slider-item');
        const gap = parseFloat(getComputedStyle(container).gap || 0);
        items.forEach((item) => (width += item.offsetWidth + gap));
        return width;
      };

      const setValues = (container, width, index) => {
        const parentWidth = container.parentElement.offsetWidth;
        const ratio = Math.ceil(parentWidth / width);
        const total = ratio + 1;

        while (
          container.children.length >
          sliderHtml[index].split('swing-slider-item').length - 1
        ) {
          container.lastChild.remove();
        }

        for (let i = 0; i < ratio; i++) {
          const div = document.createElement('div');
          div.innerHTML = sliderHtml[index];
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

      const setPause = (container) => {
        const pauseVar =
          window.innerWidth > 767
            ? '--pause-on-hover'
            : '--pause-on-hover-mobile';
        const shouldPause =
          getComputedStyle(container).getPropertyValue(pauseVar).trim() ===
          'true';
        container.style.setProperty(
          '--poh',
          shouldPause ? 'paused' : 'running',
        );
      };

      const update = () => {
        containers.forEach((container, index) => {
          sliderHtml[index] = container.innerHTML;
          const width = getInitialWidth(container);
          if (width) {
            setValues(container, width, index);
            setDirection(container, width);
          }
          setPause(container);
        });
        slider.classList.add('showing');
      };

      setTimeout(update, 100);
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    };

    setupSlider(topRef);
    setupSlider(bottomRef);
  }, []);

  const renderSlider = (testimonials, direction, ref) => (
    <div
      className={`relative overflow-hidden ${
        darkMode ? 'swing-slider-wrapper-dark' : 'swing-slider-wrapper-light'
      }`}
    >
      <div
        className='swing-scrolling-image'
        ref={ref}
        style={{
          '--direction': direction,
          '--speed': 10,
          '--pause-on-hover': 'false',
        }}
      >
        <div className='slider-container gap-4 p-3 sm:gap-6 md:gap-4'>
          {testimonials.map((item, index) => (
            <div className='swing-slider-item' key={index}>
              <div className='flex flex-row bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl overflow-hidden w-[310px] sm:w-[460px] md:w-[490px] lg:w-[400px] shadow-lg h-full'>
                <div className='w-1/2 h-full'>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='w-2/3 md:w-3/4 p-3 md:p-4 text-white flex flex-col justify-center'>
                  <div className='flex gap-1 star-rating'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        className='ri-star-fill text-yellow-400 text-sm md:text-base lg:text-xl'
                      />
                    ))}
                  </div>
                  <p className='text-gray-200 text-xs sm:text-sm md:text-base line-clamp-3 mt-1 md:mt-2'>
                    {item.text}
                  </p>
                  <h3 className='text-sm sm:text-base md:text-lg font-bold mt-1 md:mt-2'>
                    {item.name}
                  </h3>
                  <p className='text-gray-400 text-xs sm:text-sm'>
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`w-full px-2 sm:px-4 md:px-6 lg:px-8 py-6 max-w-screen-2xl mx-auto transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-white text-black'
      } overflow-x-hidden`}
    >
      <div className='text-center mb-12'>
        <span className='swing-ocean-gradient-animate hover:swing-ocean-gradient-animate text-white text-[14px] font-medium px-6 py-2 rounded-full inline-block mb-4'>
          EASY TO USE
        </span>
        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
          Built on Top of Tailwind CSS
        </h2>
        <p className='text-lg max-w-3xl mx-auto'>
          We provide our own pre-built component classes—just layer them on top
          of your Tailwind setup. Here's an example:
        </p>
      </div>
      {renderSlider(testimonialsTop, 1, topRef)}
      {renderSlider(testimonialsBottom, -1, bottomRef)}
    </div>
  );
};

export default HomeTestimonials;
