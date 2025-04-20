import React, { useState } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';

import Table from '../../components/TableComponent/Table.jsx'; // Import the Table component
import './Ratings.css';

import BottomFooter from '../../../components/BottomFooter.jsx';

import './Ratings.css'


const Rating = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  const htmlCssCode = `
<section>
  <div class="swing-ratings">
    <label class="angry">
      <input type="radio" value="1" name="swing-ratings" />
      <div>
        <svg class="eye left">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="eye right">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="mouth">
          <use xlink:href="#mouth"></use>
        </svg>
      </div>
    </label>
    <label class="sad">
      <input type="radio" value="2" name="swing-ratings" />
      <div>
        <svg class="eye left">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="eye right">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="mouth">
          <use xlink:href="#mouth"></use>
        </svg>
      </div>
    </label>
    <label class="ok">
      <input type="radio" value="3" name="swing-ratings" />
      <div></div>
    </label>
    <label class="good">
      <input type="radio" value="4" name="swing-ratings" checked />
      <div>
        <svg class="eye left">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="eye right">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="mouth">
          <use xlink:href="#mouth"></use>
        </svg>
      </div>
    </label>
    <label class="happy">
      <input type="radio" value="5" name="swing-ratings" />
      <div>
        <svg class="eye left">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="eye right">
          <use xlink:href="#eye"></use>
        </svg>
      </div>
    </label>
  </div>
  
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 4" id="eye">
      <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 7" id="mouth">
      <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"></path>
    </symbol>
  </svg>
</section>
`;

  // Define properties data for the table
  // const propertiesData = [
  //   {
  //     propertyName: 'Wrapper',
  //     defaultValue: 'swing-ratings',
  //     description: 'Container for all emoji-based rating labels.',
  //   },
  //   {
  //     propertyName: 'Rating label (emoji)',
  //     defaultValue: 'angry, sad, ok, good, happy',
  //     description:
  //       'Each label corresponds to an emoji-based rating from 1 to 5.',
  //   },
  //   {
  //     propertyName: 'Radio input',
  //     defaultValue: 'type="radio" name="swing-ratings" value="1-5"',
  //     description:
  //       'Radio input elements for selecting a rating. The value indicates the score.',
  //   },
  //   {
  //     propertyName: 'Default checked input',
  //     defaultValue: 'checked (on value="4")',
  //     description:
  //       'Marks the "Good" rating as the default selected when the page loads.',
  //   },
  //   {
  //     propertyName: 'Face wrapper',
  //     defaultValue: '<div> inside each label',
  //     description:
  //       'Contains the SVG facial parts like eyes and mouth for each expression.',
  //   },
  //   {
  //     propertyName: 'Eye (left & right)',
  //     defaultValue: 'eye left, eye right',
  //     description:
  //       'Reusable SVG symbol for eye graphic, included twice in most expressions.',
  //   },
  //   {
  //     propertyName: 'Mouth',
  //     defaultValue: 'mouth',
  //     description:
  //       'Reusable SVG symbol for mouth graphic, omitted in "ok" and "happy" labels.',
  //   },
  //   {
  //     propertyName: 'SVG <symbol>: Eye',
  //     defaultValue: 'id="eye"',
  //     description:
  //       'Defines the eye shape used in each face, reused via <use xlink:href="#eye">.',
  //   },
  //   {
  //     propertyName: 'SVG <symbol>: Mouth',
  //     defaultValue: 'id="mouth"',
  //     description:
  //       'Defines the mouth shape used in expressions, reused similarly.',
  //   },
  //   {
  //     propertyName: 'Hidden SVG symbols',
  //     defaultValue: 'style="display: none;"',
  //     description: 'SVG definitions are hidden but reusable in the DOM.',
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
  //     title: 'Value / Class / Attribute',
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
          Rating
        </h2>
        <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
          Swing Feedback Faces
        </h2>
        <p className='mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
          SwingUI's visual feedback system captures user sentiment through
          intuitive facial expressions, transforming traditional ratings into an
          engaging, human-centered experience.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode ? (
          <div className='flex justify-center items-center h-[200px] bg-gray-200 rounded-lg shadow-md'>
            <div className='p-8 bg-white rounded-xl shadow-lg'>
              <div dangerouslySetInnerHTML={{ __html: htmlCssCode }} />
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

export default Rating;
