import React, { useState } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import BottomFooter from '../../../components/BottomFooter.jsx';

import './style.css';

function Preloader() {
  const [showCode, setShowCode] = useState(false);

  const { darkMode } = useTheme();

  const htmlCssCode = ` <svg class="pl" viewBox="0 0 240 240">
    <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
    <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
    <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
    <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
  </svg>
  `;

  return (
    <div>
    <div
      className={`w-full py-6 min-h-[100dvh]  transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } px-4`}
    >
      <div className='max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6'>
        <h2 className='text-3xl mb-3 sm:mb-8 sm:text-4xl font-bold pb-4'>
          Preloader
        </h2>
        <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
          Swing Pulse Rings
        </h2>
        <p className='mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
          SwingUI's dynamic circular preloader features synchronized multi-ring
          animations for a visually engaging loading experience.
        </p>
        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div
            key={`${darkMode}-${showCode}`}
            className={`flex justify-center items-center ${
              darkMode
                ? 'bg-[var(--light-bg)] text-[var(--color-text)]'
                : 'bg-[var(--light-bg)] text-[var(--color-text)]'
            }  bg-gray-200 dark:from-gray-800 dark:to-gray-700 py-5 sm:py-10 rounded-lg shadow-md`}
          >
            {/* Render live preview */}
            <div
              className='w-full flex justify-center items-center '
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
}

export default Preloader;