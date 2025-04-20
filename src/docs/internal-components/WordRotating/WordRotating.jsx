import React, { useEffect, useRef, useState } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import BottomFooter from '../../../components/BottomFooter.jsx';


const RotatingWordsComponent = ({ rotatingWords = ['Like !', 'Love !', 'are Proud Of !'] }) => {
  const { darkMode } = useTheme();
  const [showCode, setShowCode] = useState(false);
  const wordsRef = useRef([]);
  const [index, setIndex] = useState(0);

  const htmlCssCode = `
<div class="flex items-center flex-wrap justify-center gap-2 text-center">
  <span class="text-xl sm:text-3xl md:text-4xl font-bold">Made To Build Things You</span>
  <div class="relative h-14 sm:h-20 w-48 sm:w-64 overflow-hidden perspective-1000 flex items-center justify-center">
${rotatingWords
  .map(
    (word, i) =>
      `    <span class="rotating-word swing-ocean-gradient-text text-xl sm:text-3xl md:text-4xl font-bold ${
        i !== 0 ? 'hidden' : ''
      }">${word}</span>`
  )
  .join('\n')}
  </div>
</div>
`;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  useEffect(() => {
    wordsRef.current.forEach((el) => {
      if (el) {
        el.classList.add('hidden');
        el.classList.remove('word-active');
      }
    });

    const currentWord = wordsRef.current[index];
    if (currentWord) {
      currentWord.classList.remove('hidden');
      currentWord.classList.add('word-transition', 'word-enter');
      void currentWord.offsetWidth;
      currentWord.classList.add('word-active');

      setTimeout(() => {
        currentWord.classList.remove('word-enter');
      }, 500);
    }
  }, [index]);

  wordsRef.current = [];

  return (
    <div>
    <div
      className={`w-full min-h-[100dvh]  transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className="max-w-5xl mx-auto responsive-width px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h2 className='text-3xl sm:text-4xl font-bold pb-4 mb-3 sm:mb-8'>
          Word Rotating
        </h2>
        <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Swing Dynamic Headline</h3>
        <p className="mb-6 sm:mb-10 text-left sm:text-left">
        SwingUI's animated text component dynamically rotates through impactful phrases with smooth transitions, creating engaging headlines that capture attention.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode ? (
          <div className="flex justify-center items-center h-[200px] bg-white text-black rounded-lg shadow-md px-2">
            <div className="flex items-center gap-2 flex-wrap justify-center text-center">
              <span className="text-xl sm:text-3xl md:text-4xl font-bold">Made To Build Things You</span>
              <div className="relative h-14 sm:h-20 w-48 sm:w-64 overflow-hidden perspective-1000 flex items-center justify-start">
                {rotatingWords.map((word, i) => (
                  <span
                    key={i}
                    ref={(el) => (wordsRef.current[i] = el)}
                    className={`absolute text-xl sm:text-3xl md:text-4xl font-bold rotating-word swing-ocean-gradient-text ${
                      i !== 0 ? 'hidden' : ''
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full overflow-x-auto my-4 rounded-xl">
            <CodeBlock language="html" code={htmlCssCode} />
          </div>
        )}
      </div>

      <style jsx>{`
        .word-transition {
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .word-enter {
          opacity: 0;
          transform: translateY(50%) rotateX(-90deg);
        }
        .word-active {
          opacity: 1;
          transform: translateY(0) rotateX(0deg);
        }
        .word-exit {
          opacity: 0;
          transform: translateY(-50%) rotateX(90deg);
        }

        @media (max-width: 480px) {
        .rotating-word {
      font-size: 1.125rem !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      width: max-content !important;
      position: absolute !important;
    }

    .perspective-1000 {
      width: 100% !important;
      height: 3rem !important;
      position: relative !important;
      justify-content: center !important;
    }
  }

       @media (max-width: 320px) {
    .rotating-word {
      font-size: 1.125rem !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      width: max-content !important;
      position: absolute !important;
    }

    .perspective-1000 {
      width: 100% !important;
      height: 3rem !important;
      position: relative !important;
      justify-content: center !important;
    }
  }
      `}</style>
      </div>
 <BottomFooter/>
    </div>
  );
};

export default RotatingWordsComponent;
