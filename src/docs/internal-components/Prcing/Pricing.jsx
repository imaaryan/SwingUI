import React, { useState, useEffect } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import BottomFooter from '../../../components/BottomFooter.jsx';
import "./Pricing.js"
import './Pricing.css';

function Pricing() {
  const [showCode, setShowCode] = useState(false);

  const { darkMode } = useTheme();

  const htmlCssCode = `<div class="w-full max-w-7xl mx-auto text-center px-4 sm:px-6 mb-8 md:mb-12 lg:mb-16">

    <div class="flex flex-col items-center lg:flex-row justify-center mt-6 sm:mt-8 space-y-4 lg:space-y-0 lg:space-x-4 relative">
      <div class="relative w-58 h-12 bg-gray-100 rounded-md flex items-center overflow-hidden">
        <div id="toggleSlider" class="absolute top-1 left-1 w-[calc(50%-0.5rem)] h-10 bg-black rounded-md transition-all duration-300 ease-in-out z-0"></div>
        <button id="monthlyBtn" class="w-1/2 z-10 text-center text-sm font-medium text-gray-700 relative">
          Monthly
        </button>
        <button id="annualBtn" class="w-1/2 z-10 text-center text-sm font-medium text-gray-700 relative">
          Annual
        </button>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">

    <div class="border border-gray-200 rounded-lg p-6 sm:p-8 flex flex-col">
      <h2 class="text-xl sm:text-2xl font-bold mb-1">Free</h2>
      <p class="text-gray-600 mb-4 sm:mb-6">Everything to start</p>
      <div class="flex items-end mb-4 sm:mb-6">
        <span class="text-4xl sm:text-5xl md:text-6xl font-bold price-animation" id="free-price">$0</span>
        <span class="text-gray-600 mb-1 ml-1">/month</span>
      </div>
      <ul class="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow text-sm sm:text-base">
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> 10,000 requests/month</li>
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> Basic in-app support</li>
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> 2 users on your account</li>
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> 1 workspace</li>
      </ul>
      <button class="w-full bg-black text-white py-3 sm:py-4 font-medium rounded-md uppercase text-sm button-pop">Sign up free</button>
    </div>

    
    <div class="border border-gray-200 rounded-lg p-6 sm:p-8 flex flex-col">
      <h2 class="text-xl sm:text-2xl font-bold mb-1">Pro</h2>
      <p class="text-gray-600 mb-4 sm:mb-6">For growing teams</p>
      <div class="flex items-end mb-4 sm:mb-6">
        <span class="text-4xl sm:text-5xl md:text-6xl font-bold price-animation" style="color: #1c79b0" id="pro-price">$39</span>
        <span class="text-gray-600 mb-1 ml-1" style="color: #1c79b0">/month</span>
      </div>
      <ul class="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow text-sm sm:text-base">
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> 100,000 requests/month</li>
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> Priority support</li>
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> Unlimited users</li>
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> 5 workspaces</li>
      </ul>
      <button class="w-full text-white py-3 sm:py-4 font-medium rounded-md uppercase text-sm button-pop" style="background-color: #1c79b0">Start trial</button>
    </div>

    
    <div class="border border-gray-200 rounded-lg p-6 sm:p-8 flex flex-col">
      <h2 class="text-xl sm:text-2xl font-bold mb-1">Enterprise</h2>
      <p class="text-gray-600 mb-4 sm:mb-6">For large-scale needs</p>
      <div class="flex items-end mb-4 sm:mb-6">
        <span class="text-4xl sm:text-5xl md:text-6xl font-bold price-animation" id="enterprise-price">$79</span>
        <span class="text-gray-600 mb-1 ml-1">/month</span>
      </div>
      <ul class="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow text-sm sm:text-base">
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> Custom requests</li>
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> Dedicated manager</li>
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> Custom integrations</li>
        <li class="flex items-start"><i class="ri-check-line mr-2"></i> Unlimited workspaces</li>
      </ul>
      <button class="w-full bg-black text-white py-3 sm:py-4 font-medium rounded-md uppercase text-sm button-pop">Contact sales</button>
    </div>
  </div>
`;
  useEffect(() => {
    if (!showCode) {
      const timeoutId = setTimeout(() => {
        const monthlyBtn = document.getElementById('monthlyBtn');
        const annualBtn = document.getElementById('annualBtn');
        const slider = document.getElementById('toggleSlider');

        const proPrice = document.getElementById('pro-price');
        const enterprisePrice = document.getElementById('enterprise-price');

        if (
          !monthlyBtn ||
          !annualBtn ||
          !slider ||
          !proPrice ||
          !enterprisePrice
        )
          return;

        monthlyBtn.classList.replace('text-gray-700', 'text-white');

        const animatePriceChange = (element, newValue) => {
          element.classList.add('price-hidden');
          setTimeout(() => {
            element.textContent = newValue;
            element.classList.remove('price-hidden');
          }, 300);
        };

        const handleMonthlyClick = () => {
          slider.style.left = '0.25rem';
          animatePriceChange(proPrice, '$39');
          animatePriceChange(enterprisePrice, '$79');
          monthlyBtn.classList.replace('text-gray-700', 'text-white');
          annualBtn.classList.replace('text-white', 'text-gray-700');
        };

        const handleAnnualClick = () => {
          slider.style.left = 'calc(50% + 0.25rem)';
          animatePriceChange(proPrice, '$390');
          animatePriceChange(enterprisePrice, '$790');
          annualBtn.classList.replace('text-gray-700', 'text-white');
          monthlyBtn.classList.replace('text-white', 'text-gray-700');
        };

        monthlyBtn.addEventListener('click', handleMonthlyClick);
        annualBtn.addEventListener('click', handleAnnualClick);

        // Cleanup
        return () => {
          monthlyBtn.removeEventListener('click', handleMonthlyClick);
          annualBtn.removeEventListener('click', handleAnnualClick);
        };
      }, 100); // Delay to allow DOM + Tailwind to finish rendering

      return () => clearTimeout(timeoutId);
    }
  });

  return (
    <div>
    <div
      className={`w-full py-6 min-h-[100dvh]  transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }  px-4`}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6'>
        <h2 className='text-3xl mb-3 sm:mb-8 sm:text-4xl font-bold pb-4'>
          Pricing
        </h2>
        <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
          Swing Tier Pricing
        </h2>
        <p className='mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
          SwingUI's tiered pricing component offers a clean, interactive layout
          with smooth plan toggling between monthly/annual billing.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div
            key={`${darkMode}-${showCode}`}
            className={`flex justify-center items-center ${
              darkMode
                ? 'bg-[var(--light-bg)] text-[var(--color-text)]'
                : 'bg-[var(--light-bg)] text-[var(--color-text)]'
            }  bg-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md`}
          >
            {/* Render live preview */}
            <div
              className='w-full'
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

export default Pricing;
