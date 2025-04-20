import React, { useState, useEffect, useRef } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import BottomFooter from '../../../components/BottomFooter.jsx';


const SpotLightText = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();
  const [showText, setShowText] = useState(false);

  // First spotlight effect refs
  const previewRef = useRef(null);
  const cursorRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const shape3Ref = useRef(null);
  const textRef = useRef(null);

  // Second bubble effect refs
  const bubbleContainerRef = useRef(null);
  const bubbleCursorRef = useRef(null);
  const bubbleHeadingRef = useRef(null);

  const htmlCode = `
<div class="relative h-screen w-full overflow-hidden">

  <div class="fixed w-5 h-5 rounded-full bg-blue-900 z-50 pointer-events-none transition-transform duration-50 ease-linear opacity-0"></div>
  

  <div class="relative h-full w-full bg-blue-900 overflow-hidden">
    <div class="absolute rounded-full bg-blue-600 w-[650px] h-[650px] -ml-[325px] -mt-[325px] transition-transform duration-100 ease-linear"></div>
    <div class="absolute rounded-full bg-red-100 w-[440px] h-[440px] -ml-[220px] -mt-[220px] transition-transform duration-150 ease-linear"></div>
    <div class="absolute rounded-full bg-yellow-400 w-[270px] h-[270px] -ml-[135px] -mt-[135px] transition-transform duration-200 ease-linear"></div>
  </div>
  

  <div class="absolute inset-0 flex items-center justify-center bg-white mix-blend-screen">
    <h1 class="text-7xl md:text-8xl lg:text-9xl font-black text-blue-900 text-center">Hello there!</h1>
  </div>
</div>
`;

  const htmlCode2 = `
    <div
      class="main realtive h-full w-full bg-white flex justify-center items-center"
    >
      <div
        class="cursor h-16 w-16 bg-white mix-blend-difference rounded-full absolute transition-all duration-200 ease-linear pointer-events-none"
      ></div>
      <h1 class="text-9xl font-bold">MOUSEMOVE</h1>
    </div>
`;

  // First spotlight effect
  useEffect(() => {
    if (showCode) return;

    const containerEl = previewRef.current;
    const textEl = textRef.current;
    if (!containerEl || !textEl) return;

    const resetPositions = () => {
      [cursorRef, shape1Ref, shape2Ref, shape3Ref].forEach((ref) => {
        if (ref.current) {
          ref.current.style.opacity = '0';
        }
      });
    };

    resetPositions();

    const handleTextMouseMove = (e) => {
      const { left, top } = containerEl.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      [cursorRef, shape1Ref, shape2Ref, shape3Ref].forEach((ref) => {
        if (ref.current) {
          ref.current.style.opacity = '1';
          ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    };

    textEl.addEventListener('mousemove', handleTextMouseMove);
    textEl.addEventListener('mouseleave', resetPositions);
    containerEl.addEventListener('mouseleave', resetPositions);

    return () => {
      textEl.removeEventListener('mousemove', handleTextMouseMove);
      textEl.removeEventListener('mouseleave', resetPositions);
      containerEl.removeEventListener('mouseleave', resetPositions);
    };
  }, [showCode]);

  // Second bubble effect - FIXED VERSION
  useEffect(() => {
    if (showCode) return;

    const main = bubbleContainerRef.current;
    const crsr = bubbleCursorRef.current;
    const heading = bubbleHeadingRef.current;

    if (!main || !crsr || !heading) return;

    const handleMouseMove = (e) => {
      const { left, top } = main.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        crsr.style.left = `${x}px`;
        crsr.style.top = `${y}px`;

        if (crsr.style.opacity !== '1') {
          crsr.style.opacity = '1';
        }
      });
    };

    const handleMouseEnter = () => {
      crsr.style.transform = 'scale(2.5)';
    };

    const handleMouseLeave = () => {
      crsr.style.transform = 'scale(1)';
    };

    // Handle mouse leaving the container
    const handleContainerMouseLeave = () => {
      crsr.style.opacity = '0';
    };

    // Add event listeners
    main.addEventListener('mousemove', handleMouseMove);
    main.addEventListener('mouseleave', handleContainerMouseLeave);
    heading.addEventListener('mouseenter', handleMouseEnter);
    heading.addEventListener('mouseleave', handleMouseLeave);

    // Clean up event listeners
    return () => {
      main.removeEventListener('mousemove', handleMouseMove);
      main.removeEventListener('mouseleave', handleContainerMouseLeave);
      heading.removeEventListener('mouseenter', handleMouseEnter);
      heading.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [showText]); // Add showCode as dependency

  return (
    <div>
    <div className='max-w-5xl min-h-[100dvh]  mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      <h2 className='text-3xl sm:text-4xl font-bold pb-4 mb-3 sm:mb-8'>Spotlight Text</h2>
      <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Swing Particle Canvas</h3>
      <p className='mb-10 sm:mb-16'>
      SwingUI's dynamic motion component creates an immersive visual experience with interactive circular elements that respond to user movement.
      </p>

      <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

      {!showCode && (
        <div
          ref={previewRef}
          className='relative h-96 rounded-lg overflow-hidden cursor-default bg-blue-900'
        >
          <div
            ref={cursorRef}
            style={{ willChange: 'transform' }}
            className='absolute w-5 h-5 rounded-full bg-blue-900 z-50 pointer-events-none transition-transform duration-50 ease-linear opacity-0'
          />

          <div
            ref={shape1Ref}
            style={{ willChange: 'transform' }}
            className='absolute rounded-full bg-blue-600 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
                       -ml-32 md:-ml-40 lg:-ml-48 -mt-32 md:-mt-40 lg:-mt-48
                       transition-transform duration-100 ease-linear opacity-0'
          />
          <div
            ref={shape2Ref}
            style={{ willChange: 'transform' }}
            className='absolute rounded-full bg-red-100 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80
                       -ml-24 md:-ml-32 lg:-ml-40 -mt-24 md:-mt-32 lg:-mt-40
                       transition-transform duration-150 ease-linear opacity-0'
          />
          <div
            ref={shape3Ref}
            style={{ willChange: 'transform' }}
            className='absolute rounded-full bg-yellow-400 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48
                       -ml-16 md:-ml-20 lg:-ml-24 -mt-16 md:-mt-20 lg:-mt-24
                       transition-transform duration-200 ease-linear opacity-0'
          />

          <div className='absolute inset-0 flex items-center justify-center bg-white mix-blend-screen'>
            <h1
              ref={textRef}
              className='text-4xl md:text-6xl lg:text-8xl font-black text-blue-900 text-center cursor-none hover:scale-105 transition-transform'
            >
              Hello there!
            </h1>
          </div>
        </div>
      )}

      {showCode && (
        <div className='w-full overflow-x-auto my-4 rounded-xl'>
          <CodeBlock language='html' code={htmlCode} />
        </div>
      )}
<hr
          className={`my-10 border-t ${
            darkMode
              ? 'border-gray-700 opacity-30'
              : 'border-gray-300 opacity-50'
          }`}
        />

      <div className='max-w-5xl mx-auto  py-2 sm:p-1'>
      <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Swing BlackHole Canvas</h3>
        <p className='mb-10 sm:mb-16'>
        SwingUI's interactive cursor component creates a striking visual contrast with its blend-mode inversion effect, transforming mouse movement into a dynamic design element.
        </p>

        <PreviewCodeBtn showCode={showText} setShowCode={setShowText} />

        {!showText && (
          <div className='relative flex justify-center items-center h-[30rem] w-full bg-gray-200 rounded-lg shadow-md overflow-hidden'>
            <div
              ref={bubbleContainerRef}
              className='main relative w-full h-full bg-white flex justify-center items-center'
            >
              <div
                ref={bubbleCursorRef}
                style={{ willChange: 'transform, opacity' }}
                className='cursor h-16 w-16 bg-white mix-blend-difference rounded-full absolute transition-all duration-200 ease-linear pointer-events-none opacity-0'
              ></div>
              <h1
                ref={bubbleHeadingRef}
                className='text-4xl sm:text-6xl lg:text-8xl md:text-8xl font-bold text-black'
              >
                MOUSEMOVE
              </h1>
            </div>
          </div>
        )}

        {showText && (
          <div className='w-full overflow-x-auto my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCode2} />
          </div>
        )}
      </div>
    </div>
    <BottomFooter/>
    </div>
  );
};

export default SpotLightText;
