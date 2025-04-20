import React, { useState } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';

import Table from '../../components/TableComponent/Table.jsx';

import BottomFooter from '../../../components/BottomFooter.jsx';

import '../../SwingKit/Gradients/style.css';
import './style.css';

const Cards = () => {
  const { darkMode } = useTheme();

  const [codeViews, setCodeViews] = useState({
    depthCards: false,
    edgeCards: false,
  });

  const toggleCodeView = (id) => {
    setCodeViews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const depthCardsCode = `
<div class="w-full flex justify-center">
  <div class="flex flex-wrap justify-center w-full max-w-4xl bg-gray-200 rounded-lg p-6 mx-auto">
    
    <!-- Card 1 -->
    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:mr-[2%] transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2" style="max-width: 350px;">
      <div class="absolute top-1 left-1 h-full w-full swing-ocean-gradient border-2 border-black rounded-lg -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
      <div class="absolute top-2 left-2 h-full w-full swing-ocean-gradient border-2 border-black rounded-lg -z-20 transition-all duration-300 group-hover:top-4 group-hover:left-4"></div>

      <div class="relative flex flex-col justify-between h-full w-full p-6 swing-ocean-gradient border-2 border-black rounded-lg">
        <div class="flex flex-col justify-between h-full">
          <h1 class="font-semibold text-2xl text-gray-900">DYNAMIC</h1>
          <p class="text-[18px] text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae molestias culpa nesciunt assumenda mollitia.
          </p>
        </div>
        <a href="#!" class="hidden group-hover:flex justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold transition duration-300 text-gray-900">
          LET'S GO
        </a>
        <a href="#!" class="flex xl:hidden justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold text-gray-900">
          LET'S GO
        </a>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:ml-[2%] transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2" style="max-width: 350px;">
      <div class="absolute top-1 left-1 h-full w-full swing-peach-gradient border-2 border-black rounded-lg -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
      <div class="absolute top-2 left-2 h-full w-full swing-peach-gradient border-2 border-black rounded-lg -z-20 transition-all duration-300 group-hover:top-4 group-hover:left-4"></div>

      <div class="relative flex flex-col justify-between h-full w-full p-6 swing-peach-gradient border-2 border-black rounded-lg">
        <div class="flex flex-col justify-between h-full">
          <h1 class="font-semibold text-2xl text-gray-900">DATA DRIVEN</h1>
          <p class="text-[18px] text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae molestias culpa nesciunt assumenda mollitia.
          </p>
        </div>
        <a href="#!" class="hidden group-hover:flex justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold transition duration-300 text-gray-900">
          LET'S GO
        </a>
        <a href="#!" class="flex xl:hidden justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold text-gray-900">
          LET'S GO
        </a>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:mr-[2%] transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2" style="max-width: 350px;">
      <div class="absolute top-1 left-1 h-full w-full swing-fire-gradient border-2 border-black rounded-lg -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
      <div class="absolute top-2 left-2 h-full w-full swing-fire-gradient border-2 border-black rounded-lg -z-20 transition-all duration-300 group-hover:top-4 group-hover:left-4"></div>

      <div class="relative flex flex-col justify-between h-full w-full p-6 swing-fire-gradient border-2 border-black rounded-lg">
        <div class="flex flex-col justify-between h-full">
          <h1 class="font-semibold text-2xl text-gray-900">DUTIFUL</h1>
          <p class="text-[18px] text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae molestias culpa nesciunt assumenda mollitia.
          </p>
        </div>
        <a href="#!" class="hidden group-hover:flex justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold transition duration-300 text-gray-900">
          LET'S GO
        </a>
        <a href="#!" class="flex xl:hidden justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold text-gray-900">
          LET'S GO
        </a>
      </div>
    </div>

    <!-- Card 4 -->
    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:ml-[2%] transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2" style="max-width: 350px;">
      <div class="absolute top-1 left-1 h-full w-full swing-love-gradient border-2 border-black rounded-lg -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
      <div class="absolute top-2 left-2 h-full w-full swing-love-gradient border-2 border-black rounded-lg -z-20 transition-all duration-300 group-hover:top-4 group-hover:left-4"></div>

      <div class="relative flex flex-col justify-between h-full w-full p-6 swing-love-gradient border-2 border-black rounded-lg">
        <div class="flex flex-col justify-between h-full">
          <h1 class="font-semibold text-2xl text-gray-900">DEMURE</h1>
          <p class="text-[18px] text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae molestias culpa nesciunt assumenda mollitia.
          </p>
        </div>
        <a href="#!" class="hidden group-hover:flex justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold transition duration-300 text-gray-900">
          LET'S GO
        </a>
        <a href="#!" class="flex xl:hidden justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold text-gray-900">
          LET'S GO
        </a>
      </div>
    </div>
  </div>
</div>
`;

  const edgeCardsCode = `
<div class="max-w-6xl flex justify-center">
  <div class="flex flex-wrap  justify-center w-full max-w-4xl bg-gray-200 rounded-lg p-6 mx-auto">

  
    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:mr-[2%] transition-all duration-300 " style="max-width: 300px;">
      <div class="overflow-hidden rounded-3xl">
        <a
          href="#!"
          class="course-bg-hover block p-8 bg-zinc-900 overflow-hidden relative"
        >
          <div
            class="course-bg h-32 w-32 bg-yellow-500 absolute -top-20 -right-20 rounded-full transition-all duration-500"
          ></div>
          <div
            class="min-h-[87px] font-bold text-2xl text-white relative mb-0 z-10"
          >
            Responsive Web Design
          </div>
          <div class="card-text text-zinc-400 text-base mb-7 relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="relative z-10">
            <span class="know-more text-yellow-500 inline-block"
              >Know more</span
            >
          </div>
        </a>
      </div>
    </div>

    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:mr-[2%] transition-all duration-300 " style="max-width: 300px;">
      <div class="overflow-hidden rounded-3xl">
        <a
          href="#!"
          class="course-bg-hover block p-8 bg-zinc-900 overflow-hidden relative"
        >
          <div
            class="course-bg h-32 w-32 bg-green-600 absolute -top-20 -right-20 rounded-full transition-all duration-500"
          ></div>
          <div
            class="min-h-[87px]  font-bold text-2xl text-white relative z-10"
          >
            User Interface Development
          </div>
          <div class="card-text text-zinc-400 text-base mb-7 relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="relative z-10">
            <span class="know-more text-green-600 inline-block"
              >Know more</span
            >
          </div>
        </a>
      </div>
    </div>

    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:mr-[2%] transition-all duration-300 " style="max-width: 300px;">
      <div class="overflow-hidden rounded-3xl">
        <a
          href="#!"
          class="course-bg-hover block p-8 bg-zinc-900 overflow-hidden relative"
        >
          <div
            class="course-bg h-32 w-32 bg-red-600 absolute -top-20 -right-20 rounded-full transition-all duration-500"
          ></div>
          <div
            class="min-h-[87px]  font-bold text-2xl text-white relative z-10"
          >
            Frontend Coding Fundamentals
          </div>
          <div class="card-text text-zinc-400 text-base mb-7 relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="relative z-10">
            <span class="know-more text-red-600 inline-block"
              >Know more</span
            >
          </div>
        </a>
      </div>
    </div>

    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:mr-[2%] transition-all duration-300 " style="max-width: 300px;">
      <div class="overflow-hidden rounded-3xl">
        <a
          href="#!"
          class="course-bg-hover block p-8 bg-zinc-900 overflow-hidden relative"
        >
          <div
            class="course-bg h-32 w-32 bg-purple-600 absolute -top-20 -right-20 rounded-full transition-all duration-500"
          ></div>
          <div
            class="min-h-[87px] font-bold text-2xl text-white relative z-10"
          >
           Interactive Web Applications
          </div>
          <div class="card-text text-zinc-400 text-base mb-7 relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="relative z-10">
            <span class="know-more text-purple-600 inline-block"
              >Know more</span
            >
          </div>
        </a>
      </div>
    </div>
  </div>
</div>`;

  // const propertiesData = [
  //   {
  //     propertyName: 'background (custom class)',
  //     defaultValue:
  //       'swing-ocean-gradient, swing-peach-gradient, swing-fire-gradient, swing-love-gradient',
  //     description:
  //       'Applies a gradient background effect using the official swing gradient classes (each card has a different gradient).',
  //   },
  //   {
  //     propertyName: 'hover background (custom)',
  //     defaultValue:
  //       'hover:swing-ocean-gradient, hover:swing-peach-gradient, hover:swing-fire-gradient, hover:swing-love-gradient',
  //     description:
  //       'Applies the respective gradient background on hover for visual interactivity.',
  //   },
  //   {
  //     propertyName: 'card hover transform',
  //     defaultValue: 'hover:-translate-x-2 hover:-translate-y-2',
  //     description:
  //       'Moves the card 2px to the left and top on hover for a subtle hover effect.',
  //   },
  //   {
  //     propertyName: 'text transition',
  //     defaultValue: 'transition duration-300',
  //     description:
  //       'Smoothly animates the text with a 300ms transition effect when hovered.',
  //   },
  //   {
  //     propertyName: 'button visibility',
  //     defaultValue: 'hidden (default), flex (hover)',
  //     description:
  //       'Hides the "LET\'S GO" button by default, revealing it on hover for interactivity.',
  //   },
  //   {
  //     propertyName: 'responsive css (small screens)',
  //     defaultValue: 'xl:hidden',
  //     description:
  //       'Hides the button on extra-large screens and shows it on smaller screens.',
  //   },
  //   {
  //     propertyName: 'z-index (background layers)',
  //     defaultValue: '-z-10 (first layer), -z-20 (second)',
  //     description:
  //       'Ensures background layers are placed behind the card content.',
  //   },
  //   {
  //     propertyName: 'course background hover effect',
  //     defaultValue: 'course-bg-hover',
  //     description:
  //       'Adds a hover effect for the background of the card (defined by a custom class).',
  //   },
  //   {
  //     propertyName: 'course image (circle) position',
  //     defaultValue: 'absolute -top-20 -right-20',
  //     description:
  //       'Positions the circular background image in the top-right corner outside the card.',
  //   },
  // ];

  // const propertiesColumns = [
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

  const CardDemo = ({ title, description, code, id }) => {
    const showCode = !!codeViews[id];

    return (
      <div>
        <h2 className='text-xl sm:text-2xl font-semibold mb-2'>{title}</h2>
        <p className='mb-4'>{description}</p>

        <PreviewCodeBtn
          showCode={showCode}
          setShowCode={() => toggleCodeView(id)}
        />

        {!showCode ? (
          <div className='flex justify-center items-center min-h-[12rem] bg-gray-200 rounded-lg shadow-md'>
            <div
              className='w-full'
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </div>
        ) : (
          <div
            className='
              w-full my-4 rounded-xl relative
              whitespace-pre overflow-x-auto
              md:whitespace-pre-wrap md:break-words md:overflow-x-visible
            '
          >
            <CodeBlock language='html' code={code} />
          </div>
        )}

        {/* <hr
          className={`my-10 border-t ${
            darkMode
              ? 'border-gray-700 opacity-30'
              : 'border-gray-300 opacity-50'
          }`}
        /> */}
      </div>
    );
  };

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
          Cards
        </h2>

        <div className='space-y-12'>
          <CardDemo
            title='Swing Depth Cards'
            description="Elevate interactions with SwingUI's gradient cards—dynamic hover effects, layered depth, and responsive hidden CTAs for seamless engagement."
            code={depthCardsCode}
            id='depthCards'
          />

        <hr
          className={`my-10 border-t ${
            darkMode
              ? 'border-gray-700 opacity-30'
              : 'border-gray-300 opacity-50'
          }`}
        />
          <CardDemo
            title='Swing Edge Cards'
            description="SwingUI's modern course cards combine sleek dark backgrounds with vibrant floating circles for visual impact. The clean typography and hover-triggered animations ensure an engaging, professional user experience."
            code={edgeCardsCode}
            id='edgeCards'
          />
        </div>

        {/* <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Properties</h2>
        <div className='mb-12'>
          <Table data={propertiesData} columns={propertiesColumns} />
        </div> */}
      </div>
    </div>
    <BottomFooter/>
    </div>
  );
};

export default Cards;
