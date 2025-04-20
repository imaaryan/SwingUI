import React, { useState, useEffect, useRef } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import Table from '../../components/TableComponent/Table.jsx'; // Import the Table component
import BottomFooter from '../../../components/BottomFooter.jsx';

import pic1 from '../../../assets/Images-for-avatar/pic1.webp';
import pic2 from '../../../assets/Images-for-avatar/pic2.webp';
import pic3 from '../../../assets/Images-for-avatar/pic3.webp';
import pic4 from '../../../assets/Images-for-avatar/pic4.webp';
import pic5 from '../../../assets/Images-for-avatar/pic5.webp';
import pic6 from '../../../assets/Images-for-avatar/pic6.webp';
import pic7 from '../../../assets/Images-for-avatar/pic7.webp';
import pic8 from '../../../assets/Images-for-avatar/pic8.webp';
import pic9 from '../../../assets/Images-for-avatar/pic9.webp';

function LevitatingAvatars() {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();
  const containerRef = useRef(null);

  // const propertiesData = [
  //   {
  //     propertyName: 'Orbit wrapper',
  //     defaultValue:
  //       'center relative w-1/4 h-1/4 max-w-xs max-h-xs md:w-1/3 md:h-1/3 lg:w-1/2 lg:h-1/2',
  //     description:
  //       'Responsive container for the orbit rings; adapts size across screen breakpoints.',
  //   },
  //   {
  //     propertyName: 'Orbit ring (outer)',
  //     defaultValue:
  //       'absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300',
  //     description: 'Centers and styles the outer ring with a gray border.',
  //   },
  //   {
  //     propertyName: 'Orbit ring (outer) attributes',
  //     defaultValue:
  //       'data-scale="0.5" data-speed="0.6" data-direction="clockwise"',
  //     description:
  //       'Controls size, animation speed, and rotation direction for the outer orbit.',
  //   },
  //   {
  //     propertyName: 'Orbit ring (inner)',
  //     defaultValue:
  //       'absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300',
  //     description:
  //       'Similar layout to the outer ring but used for a second layer of icons.',
  //   },
  //   {
  //     propertyName: 'Orbit ring (inner) attributes',
  //     defaultValue:
  //       'data-scale="0.83" data-speed="0.8" data-direction="anticlockwise"',
  //     description:
  //       'Custom attributes to define size, speed, and direction for the inner orbit.',
  //   },
  //   {
  //     propertyName: 'Orbiting icons',
  //     defaultValue: 'absolute -translate-x-1/2 -translate-y-1/2 orbit-icon',
  //     description:
  //       'Places each icon in the ring and centers them for orbiting motion.',
  //   },
  // ];

  // // Define table columns configuration
  // const propertiesColumns = [
  //   {
  //     key: 'propertyName',
  //     title: 'Property Name',
  //     width: 'w-1/5',
  //   },
  //   {
  //     key: 'defaultValue',
  //     title: 'Value / Class',
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

  useEffect(() => {
    const center = containerRef.current?.querySelector('.center');
    const orbits = containerRef.current?.querySelectorAll('[data-scale]');
    const animationRefs = [];

    if (!center || orbits.length === 0) return;

    function updateSizes() {
      const containerSize = center.offsetWidth;
      const baseIconSize = containerSize * 0.15;

      orbits.forEach((orbit) => {
        const scale = parseFloat(orbit.getAttribute('data-scale'));
        const ringSize = containerSize * scale * 2;
        orbit.style.width = `${ringSize}px`;
        orbit.style.height = `${ringSize}px`;
        orbit.dataset.radius = (ringSize / 2).toFixed(1);

        const icons = orbit.querySelectorAll('.orbit-icon');
        const iconSize = baseIconSize * scale * 2;
        icons.forEach((icon) => {
          icon.style.width = `${iconSize}px`;
          icon.style.height = `${iconSize}px`;
        });
      });
    }

    function animateOrbit(orbit) {
      const icons = orbit.querySelectorAll('.orbit-icon');
      const speed = parseFloat(orbit.dataset.speed);
      let angle = Math.random() * Math.PI * 2;
      const direction = orbit.getAttribute('data-direction');

      function animate() {
        const radius = parseFloat(orbit.dataset.radius);
        angle += (direction === 'clockwise' ? 1 : -1) * 0.008 * speed;

        icons.forEach((icon, index) => {
          const offsetAngle = angle + (Math.PI * 2 * index) / icons.length;
          const x = Math.cos(offsetAngle) * radius;
          const y = Math.sin(offsetAngle) * radius;

          icon.style.left = `calc(50% + ${x}px)`;
          icon.style.top = `calc(50% + ${y}px)`;
        });

        const frameId = requestAnimationFrame(animate);
        animationRefs.push(frameId);
      }

      animate();
    }

    window.addEventListener('resize', updateSizes);
    updateSizes();
    orbits.forEach(animateOrbit);

    return () => {
      window.removeEventListener('resize', updateSizes);
      animationRefs.forEach(cancelAnimationFrame);
    };
  });

  const htmlCssCode = `
<div class="bg-white flex justify-center items-center h-screen overflow-hidden">
  <div class="center relative w-1/4 h-1/4 max-w-xs max-h-xs md:w-1/3 md:h-1/3 lg:w-1/2 lg:h-1/2">
    <div class="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300" data-scale="0.5" data-speed="0.6" data-direction="clockwise">
      <img src="${pic1}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic2}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic3}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic4}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
    </div>
    <div class="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300" data-scale="0.83" data-speed="0.8" data-direction="anticlockwise">
      <img src="${pic5}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic6}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic7}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic8}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic9}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
    </div>
    <!-- Centered Logo -->
   <div class="absolute text-8x1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img src="/logo.webp" class="h-20 object-contain" alt="SwingUI Logo" />
    </div>
  </div>
</div>`;

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
         Avatar
        </h2>
        <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
          Swing Orbit Display
        </h2>
        <p className='mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
          SwingUI's dynamic orbital display features dual rotating rings with
          configurable speed and direction, creating an engaging visual
          interface for showcasing key elements.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div className='flex justify-center items-center min-h-[12rem] bg-gray-200 rounded-lg shadow-md'>
            <div
              ref={containerRef}
              className='w-full'
              dangerouslySetInnerHTML={{ __html: htmlCssCode }}
            />
          </div>
        )}

        {showCode && (
          <div className='w-full my-4 rounded-xl relative whitespace-pre overflow-x-auto md:whitespace-pre-wrap md:break-words md:overflow-x-visible'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}

        {/* <hr
          className={`my-10 border-t ${
            darkMode
              ? 'border-gray-700 opacity-30'
              : 'border-gray-300 opacity-50'
          }`}
        /> */}

        {/* <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Properties</h2>
        <div className='mb-12'>
          <Table data={propertiesData} columns={propertiesColumns} />
        </div> */}
      </div>
    </div>
    
 <BottomFooter/>
    </div>
  );
}

export default LevitatingAvatars;
