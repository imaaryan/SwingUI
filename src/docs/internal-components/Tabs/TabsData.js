const TabsData = [
  {
    id: 'tab1',
    section: 'Shift Highlight Tabs',
    label: '',
    description: '',
    code: `<div class="flex flex-col items-center bg-gray-100 max-w-6xl w-[78vw] md:w-full rounded-lg p-2 md:p-6">
        <div
          class="flex flex-col flex-wrap gap-4 md:gap-10 items-center justify-center md:flex-row bg-gray-100 max-w-6xl px-10 py-6 rounded-lg w-full"
          id="tabContainer"
        ></div>
  
        <div
          id="tab-box"
          class="w-full max-w-[1050px] flex flex-col justify-center items-center bg-white rounded-lg p-6 shadow-md mt-4 h-64 text-gray-500"
        >
          <h2 class="font-semibold mb-4 md:mb-6" id="tab-title"></h2>
        </div>
      </div>`,
  },
];

export default TabsData;
