import React from 'react';
import CodeBlock from '../components/CodeBlock/CodeBlock.jsx';
import { useTheme } from '../../context/ThemeContext';
import '../SwingKit/TextGradients/style.css';
import './style.css';
import { Link } from 'react-router';
import Footer from '../../components/Footer.jsx';
import BottomFooter from '../../components/BottomFooter.jsx';


const QuickStart = () => {
  const { darkMode } = useTheme();

  return (
    <>
    <div
      className={`w-full min-h-[100dvh] transition-colors duration-300 ${
        darkMode
        ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
        : 'bg-[var(--light-bg)] text-[var(--color-text)]'
        }`}
        style={{
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
        }}
        >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <div className='flex flex-col items-start'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
            <strong>Quick Start</strong>
          </h1>
          <p className='mb-10 sm:mb-16'>
            Getting started with{' '}
            <span className='swing-ocean-gradient-text font-bold'>SwingUI</span>
          </p>

          <div className='w-full'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
              1. Install the Prerequisites
            </h2>

            <div className='w-full mb-8'>
              <p className='mb-6'>
                Include Tailwind CSS and Remix Icon in your{' '}
                <code>{`<head>`}</code> to make sure everything works as
                expected.
              </p>

              <div className='w-full codeblock-wrapper mb-6'>
                <CodeBlock
                  code={` <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`}
                  />
              </div>

              <div className='w-full codeblock-wrapper mb-6'>
                <CodeBlock
                  code={`<link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet"/>`}
                  />
              </div>
            </div>

            <hr
              className={`my-10 border-t ${
                darkMode
                ? 'border-gray-700 opacity-30'
                : 'border-gray-300 opacity-50'
                }`}
                />

            <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
              2. Add SwingUI CDN
            </h2>
            <div className='w-full mb-6'>
              <p className='mb-6'>
                Now, drop in SwingUI's CSS and JS to unlock all the components
                and styles.
              </p>
              <div className='w-full codeblock-wrapper mb-6'>
                <CodeBlock
                  code={`<!-- SwingUI CSS Paste this code in Header -->
<link href="https://cdn.jsdelivr.net/gh/imaaryan/cdn-swing@main/dist/assets/swingui.min.css" rel="stylesheet">`}
                    />
              </div>
            </div>

            <div className='w-full codeblock-wrapper mb-8'>
              <CodeBlock
                code={`<!-- SwingUI JS Paste this code above Body tag end -->
<script src="https://cdn.jsdelivr.net/gh/imaaryan/cdn-swing@main/dist/assets/swingui.min.js"></script>`}
                  />
            </div>
            <p className='mb-6'>
              That's it — no config, no setup. Just plug and play..
            </p>

            

           
          </div>
        </div>
      </div>
    </div>
    <BottomFooter/>
                </>
  );
};

export default QuickStart;
