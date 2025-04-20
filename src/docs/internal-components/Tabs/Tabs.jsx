import React, { useEffect, useState } from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import BottomFooter from '../../../components/BottomFooter.jsx';

import TabsData from './TabsData.js';
import Table from '../../components/TableComponent/Table.jsx';
import '../../SwingKit/AnimatedGradients/style.css';
import '../../SwingKit/Gradients/style.css';
import './script.js';

const Tabs = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (!showCode) {
      const tabs = [
        {
          id: 'Issues',
          title: '# Issues',
        },
        {
          id: 'Kanban',
          title: '# Kanban',
        },
        {
          id: 'Gantt',
          title: '# Gantt',
        },
        {
          id: 'Documentation',
          title: '# Documentation',
        },
      ];

      let activeTab = 'Issues';

      const tabContainer = document.getElementById('tabContainer');
      const tabTitle = document.getElementById('tab-title');
      // const tabbox = document.getElementById('tab-box');

      function renderTabs() {
        tabContainer.innerHTML = '';
        tabs.forEach((tab) => {
          const btn = document.createElement('button');
          btn.innerHTML = `
                <span class="sm:inline">${tab.id}</span>
                `;
          btn.className = `tab-button flex-1 w-full w-1 sm:w-40 md:w-64 text-xs sm:text-sm font-semibold py-2 sm:py-3 px-6 sm:px-2 border-2 rounded-lg bg-white transition-all duration-300 ${
            activeTab === tab.id
              ? 'text-[var(--light-nav-hover)] border-[var(--light-nav-hover)] border-b-[6px]'
              : 'text-black border-black hover:bg-gray-100 hover:-rotate-3 hover:-translate-y-1 hover:shadow-[4px_6px_0px_rgba(0,0,0,0.7)]'
          }`;
          btn.addEventListener('click', () => {
            activeTab = tab.id;
            renderTabs();
            renderContent();
          });
          tabContainer.appendChild(btn);
        });
      }

      function renderContent() {
        const currentTab = tabs.find((t) => t.id === activeTab);
        tabTitle.textContent = currentTab.title;
      }

      renderTabs();
      renderContent();
    }
  });

  const groupedTabs = TabsData.reduce((acc, tab) => {
    if (!acc[tab.section]) {
      acc[tab.section] = [];
    }
    acc[tab.section].push(tab);
    return acc;
  }, {});

  // const tabPropertiesData = [
  //   {
  //     propertyName: 'Main Wrapper',
  //     defaultValue:
  //       'flex flex-col items-center bg-gray-100 max-w-6xl w-[78vw] md:w-full rounded-lg p-2 md:p-6',
  //     description:
  //       'Centers content vertically and horizontally, applies background color, rounded corners, and responsive padding.',
  //   },
  //   {
  //     propertyName: 'Tab Container',
  //     defaultValue:
  //       'flex flex-col flex-wrap gap-4 md:gap-10 items-center justify-center md:flex-row bg-gray-100 max-w-6xl px-10 py-6 rounded-lg w-full',
  //     description:
  //       'Contains tab elements with responsive gap spacing, background color, padding, and layout adjustments (column on mobile → row on desktop).',
  //   },
  //   {
  //     propertyName: 'Tab Box',
  //     defaultValue:
  //       'w-full max-w-[1050px] flex flex-col justify-center items-center bg-white rounded-lg p-6 shadow-md mt-4 h-64 text-gray-500',
  //     description:
  //       'Content display area with white background, shadow elevation, rounded corners, fixed height, and centered alignment.',
  //   },
  //   {
  //     propertyName: 'Tab Title',
  //     defaultValue: 'font-semibold mb-4 md:mb-6',
  //     description:
  //       'Semantic heading with bold weight and responsive bottom margin spacing.',
  //   },
  // ];

  // const tabPropertiesColumns = [
  //   {
  //     key: 'propertyName',
  //     title: 'Property Name',
  //     width: 'w-1/5',
  //   },
  //   {
  //     key: 'defaultValue',
  //     title: 'Value',
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

  const TabDemo = ({ tab }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(tab.code.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    return (
      <div className='mb-8 max-w-full'>
        <h2 className='text-2xl sm:text-3xl font-bold mb-2'>{tab.label}</h2>
        <p className='mb-4 sm:mb-6 text-sm sm:text-base'>{tab.description}</p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div className='flex justify-center items-center w-full max-w-full bg-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md'>
            <div
              className='w-full mx-w-full flex justify-center p-4 sm:p-4'
              dangerouslySetInnerHTML={{ __html: tab.code }}
            />
          </div>
        )}

        {showCode && (
          <div className='w-full overflow-x-auto my-2 sm:my-4 rounded-xl relative'>
            <button
              onClick={copyToClipboard}
              className='absolute top-2 right-2 p-1 sm:p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
              title='Copy to clipboard'
            >
              {copied ? (
                <ClipboardCheck size={16} className='sm:w-5 sm:h-5' />
              ) : (
                <Clipboard size={16} className='sm:w-5 sm:h-5' />
              )}
            </button>
            <CodeBlock language='html' code={tab.code} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
    <div
      className={`w-full px-2 min-h-[100dvh]  max-w-[90rem] transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } `}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <h2 className='text-3xl mb-3 sm:mb-8 sm:text-4xl font-bold pb-4'>
          Tabs
        </h2>
        <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
          Swing Tab System
        </h2>
        <p className='mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
          SwingUI's responsive tab system delivers intuitive content
          organization with smooth transitions between views, featuring adaptive
          layouts for all screen sizes.
        </p>

        {Object.entries(groupedTabs).map(([sectionName, Tabs]) => (
          <div key={sectionName} className='mb-6 sm:mb-8 w-full'>
            <div className='space-y-8 sm:space-y-12'>
              {Tabs.map((tab) => (
                <TabDemo key={tab.id} tab={tab} />
              ))}
            </div>
          </div>
        ))}

        {/* <hr
          className={`my-6 sm:my-8 md:my-10 lg:my-10 border-t ${
            darkMode
              ? 'border-gray-700 opacity-30'
              : 'border-gray-300 opacity-50'
          }`}
        /> */}

        {/* <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Properties</h2>
        <div className='mb-12'>
          <Table data={tabPropertiesData} columns={tabPropertiesColumns} />
        </div> */}
  </div>
    </div>
    <BottomFooter/>
    </div>
  );
};

export default Tabs;
