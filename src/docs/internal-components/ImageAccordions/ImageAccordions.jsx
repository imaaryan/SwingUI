'use client';
import React, { useState } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';

import Table from '../../components/TableComponent/Table.jsx'; // Import the Table component

import BottomFooter from '../../../components/BottomFooter.jsx';


import htmlCssCode from './ImageAccordions';

const items = [
  {
    url: 'https://picsum.photos/id/1015/800/600',
    title: 'Mountain View',
    description: 'Experience the serenity of mountain landscapes.',
  },
  {
    url: 'https://picsum.photos/id/1016/800/600',
    title: 'Forest Path',
    description: 'Walk through the lush green forest trails.',
  },
  {
    url: 'https://picsum.photos/id/1018/800/600',
    title: 'City Skyline',
    description: 'The bustling city life captured from above.',
  },
  {
    url: 'https://picsum.photos/id/1020/800/600',
    title: 'Desert Dunes',
    description: 'Golden sands stretching beyond the horizon.',
  },
  {
    url: 'https://picsum.photos/id/1024/800/600',
    title: 'Ocean Waves',
    description: 'Feel the calmness of the endless ocean.',
  },
];

const ImageAccordions = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState(2);

  // Define properties data for the table
  // const propertiesData = [
  //   {
  //     propertyName: 'Gallery item',
  //     defaultValue:
  //       'gallery-item rounded-xl relative h-[400px] flex-shrink-0 transition-[width] ease-in-linear duration-500 origin-center w-[50px]',
  //     description:
  //       "Defines each item's layout and transition behavior, including rounded corners, fixed height, flexible width, and transition on width change.",
  //   },
  //   {
  //     propertyName: 'Gallery image',
  //     defaultValue: 'w-full h-full object-cover rounded-xl cursor-pointer',
  //     description:
  //       'Ensures the image covers the entire container, is rounded, and is clickable (cursor pointer).',
  //   },
  //   {
  //     propertyName: 'Image overlay',
  //     defaultValue:
  //       'hidden absolute flex flex-col justify-end h-full top-0 p-3 space-y-2 overflow-hidden rounded-xl bg-gradient-to-t dark:from-gray-900/60 from-gray-100/60 from-20% to-transparent to-80%',
  //     description:
  //       'Positioned over the image but hidden by default; contains text elements with gradient background for a dark/light mode effect.',
  //   },
  //   {
  //     propertyName: 'Description text',
  //     defaultValue: 'leading-[120%]',
  //     description:
  //       'Adds line spacing to the description text for better readability.',
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
  //     title: 'Value',
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
          Image Accordions
        </h2>
        <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
          Swing Hover Gallery
        </h2>
        <p className='mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
          SwingUI's interactive image gallery features smooth hover-triggered
          expansion with elegant content overlays, creating a space-efficient
          yet engaging visual presentation.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode ? (
          <div className='flex justify-center items-center h-[300px] sm:h-[450px] md:h-[400px] lg:h-[600px] bg-gray-200 rounded-lg shadow-md'>
            <div className='relative overflow-hidden rounded-[20px] shadow-lg flex'>
              <div className='flex gap-1 w-fit mx-auto'>
                {items.map((item, i) => (
                  <div
                    key={i}
                    className={`relative h-[200px] sm:h-[300px] md:h-[250px] lg:h-[400px] rounded-xl overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === i
                        ? 'w-[150px] sm:w-[350px] md:w-[300px]  lg:w-[400px]'
                        : 'w-[30px] sm:w-[40px] md:w-[36px] lg:w-[50px]'
                    }`}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className='w-full h-full object-cover cursor-pointer'
                    />
                    {activeIndex === i && (
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pl-3 pb-3 sm:pl-5 sm:pb-6 md:pl-6 md:pb-8 lg:pl-8 lg:pb-10 flex flex-col justify-end text-white'>
                        <h2 className='text-2xl font-semibold'>{item.title}</h2>
                        <p className='mt-2 text-sm'>{item.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className='w-full overflow-x-auto my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}

        {/* <h2 className='text-xl sm:text-2xl font-semibold mb-4 mt-12'>
          Properties
        </h2>
        <div className='mb-12'>
          <Table data={propertiesData} columns={propertiesColumns} />
        </div> */}
      </div>
    </div>
    <BottomFooter/>
    </div>
  );
};

export default ImageAccordions;
