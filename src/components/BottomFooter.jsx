import React from 'react';
import { useTheme } from '../context/ThemeContext';

function BottomFooter() {
  const { darkMode } = useTheme();

  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-300';
  const textColor = darkMode ? 'text-gray-200' : 'text-gray-700';

  return (
    <div
      className={`bottom-footer flex flex-col lg:px-6 lg:flex-row lg:justify-between lg:items-center border-t ${borderClass} pt-10 pb-8 gap-y-4 text-sm mt-4 mb-4 ${textColor}`}
    >
      <div className='text-center lg:text-left w-full lg:w-auto font-normal'>
        <span>© 2025 SwingUI. All Rights Reserved.</span>
      </div>

      <div className='w-full lg:w-auto flex justify-center lg:justify-end'>
        <div className='flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6 font-normal text-center break-words'>
          <a
            href='https://github.com/imaaryan/SwingUI'
                className='hover:text-[var(--dark-nav-hover)] transition-colors'
                rel='noopener noreferrer'
                target='_blank'
          >
            Github
          </a>
          <a
            href='https://discord.com/invite/gd9Vjb6VCm'
            rel='noopener noreferrer'
            target='_blank'
            className='hover:text-[var(--dark-nav-hover)] transition-colors'
          >
            Discord
          </a>
          <a
            href='https://x.com/swing_ui'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-[var(--dark-nav-hover)] transition-colors break-words'
          >
            X (formerly Twitter)
          </a>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
