import React, { useEffect, useState, useRef } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import BottomFooter from '../../../components/BottomFooter.jsx';

import './responsive.css';
import logo from '../../../assets/SwingUI.webp';

function Scratchcard() {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  const htmlcssCode = `
     <div id="card"
      class="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl transition-transform ">
      <div
        class="absolute inset-0 z-0 flex items-center justify-center swing-peach-gradient">
          <div className='text-8xl'>
          <img src={logo} className="h-20" alt="SwingUI Logo" />
          </div>
        </div>
      <canvas id="scratchCanvas" class="absolute inset-0 z-10"></canvas>
    </div>`;

  // Component for the actual scratch card functionality
  const ScratchCardComponent = () => {
    const canvasRef = useRef(null);
    const cardRef = useRef(null);
    const isDrawingRef = useRef(false);
    const isMouseDownRef = useRef(false);

    // Initialize the scratch card once on mount
    useEffect(() => {
      const canvas = canvasRef.current;
      const card = cardRef.current;

      if (!canvas || !card) return;

      const ctx = canvas.getContext('2d');

      // Set up the canvas dimensions and initial state
      function resizeCanvas() {
        const rect = card.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Fill the entire canvas with the scratch-off layer
        ctx.globalCompositeOperation = 'source-over';

        // Create a gray background
        ctx.fillStyle = '#dadada';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add "Scratch" text
        ctx.fillStyle = '#94a3b8'; // Slightly darker text color for contrast
        ctx.font = 'bold 32px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('SCRATCH', canvas.width / 2, canvas.height / 2);
      }

      function getPosition(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
          x: clientX - rect.left,
          y: clientY - rect.top,
        };
      }

      function draw(e) {
        if (!isDrawingRef.current) return;
        e.preventDefault();

        const pos = getPosition(e);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 30, 0, 2 * Math.PI);
        ctx.fill();

        checkScratchPercentage();
      }

      function checkScratchPercentage() {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let total = imageData.data.length / 4;
        let cleared = 0;

        for (let i = 0; i < imageData.data.length; i += 4) {
          const alpha = imageData.data[i + 3];
          if (alpha < 128) cleared++;
        }

        const percent = (cleared / total) * 100;

        if (percent >= 70) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          canvas.style.pointerEvents = 'none';

          card.classList.add('animate-pop');
          card.addEventListener(
            'animationend',
            () => {
              card.classList.remove('animate-pop');
            },
            { once: true },
          );
        }
      }

      // Canvas-specific event handlers
      function handleCanvasMouseDown() {
        isDrawingRef.current = true;
      }

      function handleCanvasMouseEnter() {
        // If mouse is already down (tracked globally), enable drawing
        if (isMouseDownRef.current) {
          isDrawingRef.current = true;
        }
      }

      function handleCanvasMouseLeave() {
        // Stop drawing when leaving canvas but keep track that mouse is still down
        isDrawingRef.current = false;
      }

      function handleTouchStart(e) {
        e.preventDefault();
        isDrawingRef.current = true;
        isMouseDownRef.current = true;
      }

      function handleTouchEnd() {
        isDrawingRef.current = false;
        isMouseDownRef.current = false;
      }

      // Global event handlers
      function handleGlobalMouseDown() {
        isMouseDownRef.current = true;
      }

      function handleGlobalMouseUp() {
        isMouseDownRef.current = false;
        isDrawingRef.current = false;
      }

      // Add canvas event listeners
      canvas.addEventListener('mousedown', handleCanvasMouseDown);
      canvas.addEventListener('mouseenter', handleCanvasMouseEnter);
      canvas.addEventListener('mouseleave', handleCanvasMouseLeave);
      canvas.addEventListener('mousemove', draw);

      canvas.addEventListener('touchstart', handleTouchStart, {
        passive: false,
      });
      canvas.addEventListener('touchend', handleTouchEnd);
      canvas.addEventListener('touchcancel', handleTouchEnd);
      canvas.addEventListener('touchmove', draw, { passive: false });

      // Add global event listeners
      document.addEventListener('mousedown', handleGlobalMouseDown);
      document.addEventListener('mouseup', handleGlobalMouseUp);

      // Handle window resize
      window.addEventListener('resize', resizeCanvas);

      // Initial setup
      resizeCanvas();

      // Also resize after a short delay to ensure all styles are applied
      const timeoutId = setTimeout(resizeCanvas, 100);

      // Clean up event listeners on unmount
      return () => {
        // Clean up canvas listeners
        canvas.removeEventListener('mousedown', handleCanvasMouseDown);
        canvas.removeEventListener('mouseenter', handleCanvasMouseEnter);
        canvas.removeEventListener('mouseleave', handleCanvasMouseLeave);
        canvas.removeEventListener('mousemove', draw);

        canvas.removeEventListener('touchstart', handleTouchStart);
        canvas.removeEventListener('touchend', handleTouchEnd);
        canvas.removeEventListener('touchcancel', handleTouchEnd);
        canvas.removeEventListener('touchmove', draw);

        // Clean up global listeners
        document.removeEventListener('mousedown', handleGlobalMouseDown);
        document.removeEventListener('mouseup', handleGlobalMouseUp);

        window.removeEventListener('resize', resizeCanvas);
        clearTimeout(timeoutId);
      };
    }, []); // Empty dependency array - run only once on mount

    return (

      <div
        ref={cardRef}
        className='relative  w-64 h-64 rounded-2xl overflow-hidden shadow-xl transition-transform swing-ocean-gradient'
      >
        <div className='absolute inset-0 z-0 flex items-center justify-center swing-ocean-gradient'>
          <div className='text-8xl'>
            <img src={logo} className='h-20' alt='SwingUI Logo' />
          </div>
        </div>

        <canvas
          ref={canvasRef}
          className='absolute inset-0 z-10 w-full h-full'
          style={{ touchAction: 'none' }}
        />

        <style jsx='true'>{`
          @keyframes pop {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
          .animate-pop {
            animation: pop 0.7s ease-in-out;
          }
        `}</style>
      </div>
    );
  };

  return (
    <div>
    <div className='max-w-5xl min-h-[100dvh]  mx-auto responsive-width px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      <h1 className='text-3xl sm:text-4xl font-bold pb-4 mb-3 sm:mb-8'>Scratch Card </h1>
      <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Swing Scratch Card</h3>
      <p className='mb-10 sm:mb-16'>
      SwingUI's interactive scratch card combines playful discovery with elegant visuals, using canvas technology to create a tactile reveal experience.
      </p>


      <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

      {!showCode && (
        <div
          key={`${darkMode}-${showCode}`}
          className={`rounded-lg shadow-md overflow-hidden p-10 ${
            darkMode
              ? 'bg-[var(--light-bg)] text-[var(--color-text)]'
              : 'bg-[var(--light-bg)] text-[var(--color-text)]'
          }  bg-gray-200 dark:from-gray-800 dark:to-gray-700`}
        >
          <div className='flex justify-center items-center min-h-[300px]'>
            <ScratchCardComponent />
          </div>
        </div>
      )}

      {showCode && (
        <div className='flex justify-center w-full  overflow-x-auto rounded-xl'>
          <CodeBlock language='html' code={htmlcssCode} />
        </div>
      )}

    </div> 
<BottomFooter/>
    </div>
    
  );
  
}
export default Scratchcard;
