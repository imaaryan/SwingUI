import React, { useState } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './style.css';
import BottomFooter from '../../../components/BottomFooter.jsx';
import './script.js';

const AccordionDemo = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  // First accordion starts open
  const [openAccordion, setOpenAccordion] = useState(0);

  const htmlCssCode = `
<div class="w-full py-6 px-4">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6">
        <div class="hidden md:flex flex-row gap-6 desktop-accordion">
          <div class="w-1/2 flex flex-col gap-4">
            <!-- Item 1 -->
            <div class="overflow-hidden rounded-lg accordion-item">
              <div
                class="bg-[#1c79af] text-white p-4 cursor-pointer flex justify-between items-center accordion-header"
                data-image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?fit=crop&w=800&h=600"
              >
                <h3 class="text-xl font-bold">
                  How do UI components improve UX?
                </h3>
                <span class="transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </span>
              </div>
              <div class="bg-white p-6 accordion-content" style="display: none">
                <p class="text-gray-800">
                  UI components can improve UX by providing familiar, consistent
                  interactions that make it easy for users to navigate and
                  interact with an application.
                </p>
              </div>
            </div>
            <!-- Item 2 -->
            <div class="overflow-hidden rounded-lg accordion-item">
              <div
                class="bg-[#1c79af] text-white p-4 cursor-pointer flex justify-between items-center accordion-header"
                data-image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?fit=crop&w=800&h=600"
              >
                <h3 class="text-xl font-bold">Importance of UI component.</h3>
                <span class="transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </div>
              <div class="bg-white p-6 accordion-content" style="display: none">
                <p class="text-gray-800">
                  UI components are crucial as they provide reusable interface
                  elements that ensure consistency across applications, improve
                  development efficiency, and enhance user experience through
                  familiar patterns.
                </p>
              </div>
            </div>

            <div class="overflow-hidden rounded-lg accordion-item">
              <div
                class="bg-[#1c79af] text-white p-4 cursor-pointer flex justify-between items-center accordion-header"
                data-image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
              >
                <h3 class="text-xl font-bold">Is UI and UX Same?</h3>
                <span class="transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </div>
              <div class="bg-white p-6 accordion-content" style="display: none">
                <p class="text-gray-800">
                  No, UI (User Interface) and UX (User Experience) are not the
                  same. UI focuses on the visual elements and aesthetics of a
                  product, while UX encompasses the entire user journey and how
                  users interact with a product. UI is a part of the broader UX
                  discipline.
                </p>
              </div>
            </div>
          </div>
          <!-- Right: Image Display -->
          <div
            class="w-1/2 bg-[#1c79af] rounded-lg overflow-hidden"
            id="desktop-image"
          >
            <div
              class="w-full h-full flex items-center justify-center p-8 text-white text-center"
            >
              <p>Select a question to view details</p>
            </div>
          </div>
        </div>

        <!-- Mobile Layout -->
        <div class="flex md:hidden flex-col gap-4 mobile-accordion">
          <!-- Item 1 -->
          <div class="overflow-hidden rounded-lg accordion-item">
            <div
              class="bg-[#1c79af] text-white p-4 flex justify-between items-center cursor-pointer accordion-header"
            >
              <h3 class="text-base font-bold">
                How do UI components improve UX?
              </h3>
              <span class="transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </span>
            </div>
            <div class="accordion-content" style="display: none">
              <div class="bg-white p-6 border-b">
                <p class="text-gray-800">
                  UI components can improve UX by providing familiar, consistent
                  interactions that make it easy for users to navigate and
                  interact with an application.
                </p>
              </div>
              <div class="bg-[#1c79af]">
                <img
                  src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?fit=crop&w=800&h=600"
                  alt="Improving UX"
                  class="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="overflow-hidden rounded-lg accordion-item">
            <div
              class="bg-[#1c79af] text-white p-4 flex justify-between items-center cursor-pointer accordion-header"
            >
              <h3 class="text-base font-bold">Importance of UI component.</h3>
              <span class="transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </div>
            <div class="accordion-content" style="display: none">
              <div class="bg-white p-6 border-b">
                <p class="text-gray-800">
                  UI components are crucial as they provide reusable interface
                  elements that ensure consistency across applications, improve
                  development efficiency, and enhance user experience through
                  familiar patterns.
                </p>
              </div>
              <div class="bg-[#1c79af]">
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?fit=crop&w=800&h=600"
                  alt="UI importance"
                  class="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          <!-- Item 3 -->
          <div class="overflow-hidden rounded-lg accordion-item">
            <div
              class="bg-[#1c79af] text-white p-4 flex justify-between items-center cursor-pointer accordion-header"
            >
              <h3 class="text-base font-bold">Is UI and UX Same?</h3>
              <span class="transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </div>
            <div class="accordion-content" style="display: none">
              <div class="bg-white p-6 border-b">
                <p class="text-gray-800">
                  No, UI (User Interface) and UX (User Experience) are not the
                  same. UI focuses on the visual elements and aesthetics of a
                  product, while UX encompasses the entire user journey and how
                  users interact with a product. UI is a part of the broader UX
                  discipline.
                </p>
              </div>
              <div class="bg-[#1c79af]">
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                  alt="UI vs UX"
                  class="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const accordionData = [
    {
      title: 'How do UI components improve UX?',
      content:
        'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
      image:
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?fit=crop&w=800&h=600',
    },
    {
      title: 'Important of UI component.',
      content:
        'UI components are crucial as they provide reusable interface elements that ensure consistency across applications, improve development efficiency, and enhance user experience through familiar patterns.',
      image:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?fit=crop&w=800&h=600',
    },
    {
      title: 'Is UI and UX Same?',
      content:
        'No, UI (User Interface) and UX (User Experience) are not the same. UI focuses on the visual elements and aesthetics of a product, while UX encompasses the entire user journey and how users interact with a product. UI is a part of the broader UX discipline.',
      image:
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div>
    <div
      className={`[@media(min-width:300px)_and_(max-width:350px)]:w-[325px] w-full py-6 transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } px-4 min-h-[100dvh]`}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6'>
        <h2 className='text-3xl mb-3 sm:mb-8 sm:text-4xl font-bold pb-4'>Accordion</h2>
        <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Swing Accordion Panel</h3>
        <p className='mb-10 sm:mb-16'>
        SwingUI's accordion component organizes content into expandable sections with smooth transitions, paired with a complementary visual for enhanced engagement.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div className='flex justify-center items-center min-h-[12rem] bg-gray-200 rounded-lg shadow-md'>
            <div className='w-full'>
              <div className='w-full  p-6'>
                <div className='max-w-6xl mx-auto'>
                  {/* Desktop layout (md and up): Side-by-side accordions and image */}
                  <div className='hidden md:flex flex-row gap-6'>
                    {/* Left side - Accordions */}
                    <div className='w-1/2 flex flex-col gap-4'>
                      {accordionData.map((item, index) => (
                        <div key={index} className='overflow-hidden rounded-lg'>
                          {/* Accordion Header */}
                          <div
                            className='bg-[#1c79af] text-white p-4 cursor-pointer flex justify-between items-center'
                            onClick={() => toggleAccordion(index)}
                          >
                            <h3 className='text-xl font-bold'>{item.title}</h3>
                            <span className='transition-transform duration-300'>
                              {openAccordion === index ? (
                                <ChevronUp className='h-6 w-6' />
                              ) : (
                                <ChevronDown className='h-6 w-6' />
                              )}
                            </span>
                          </div>

                          {openAccordion === index && (
                            <div className='bg-white p-6'>
                              <p className='text-gray-800'>{item.content}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className='w-1/2 bg-[#1c79af] rounded-lg overflow-hidden'>
                      {openAccordion !== null && (
                        <img
                          src={accordionData[openAccordion].image}
                          alt={`Illustration for ${accordionData[openAccordion].title}`}
                          className='w-full h-full object-cover'
                        />
                      )}
                      {openAccordion === null && (
                        <div className='w-full h-full flex items-center justify-center p-8 text-white text-center'>
                          <p>Select a question to view details</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='flex md:hidden flex-col gap-4'>
                    {accordionData.map((item, index) => (
                      <div key={index} className='overflow-hidden rounded-lg'>
                        {/* Accordion Header */}
                        <div
                          className='bg-[#1c79af] text-white p-4 cursor-pointer flex justify-between items-center'
                          onClick={() => toggleAccordion(index)}
                        >
                          <h3 className='text-base font-bold'>{item.title}</h3>
                          <span className='transition-transform duration-300'>
                            {openAccordion === index ? (
                              <ChevronUp className='h-6 w-6' />
                            ) : (
                              <ChevronDown className='h-6 w-6' />
                            )}
                          </span>
                        </div>

                        {openAccordion === index && (
                          <div className='flex flex-col rounded-b-lg overflow-hidden'>
                            {/* Content section */}
                            <div className='bg-white p-6 border-b'>
                              <p className='text-gray-800'>{item.content}</p>
                            </div>

                            <div className='bg-[#1c79af]'>
                              <img
                                src={item.image}
                                alt={`Illustration for ${item.title}`}
                                className='w-full h-64 object-cover'
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showCode && (
          <div className='w-full overflow-x-auto my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}
      </div>

    </div>
    <BottomFooter />
    </div>
  );
};

export default AccordionDemo;
