document.addEventListener('DOMContentLoaded', () => {
  const tabs = [
    { id: 'Issues', title: '# Issues' },
    { id: 'Kanban', title: '# Kanban' },
    { id: 'Gantt', title: '# Gantt' },
    { id: 'Documentation', title: '# Documentation' },
  ];
  let activeTab = 'Issues';

  const tabContainer = document.getElementById('tabContainer');
  const tabTitle = document.getElementById('tab-title');

  function renderTabs() {
    tabContainer.innerHTML = '';
    tabs.forEach((tab) => {
      const btn = document.createElement('button');
      btn.innerHTML = `<span class="sm:inline">${tab.id}</span>`;
      btn.className = [
        'flex-1',
        'w-full',
        'sm:w-40',
        'md:w-64',
        'text-xs',
        'sm:text-sm',
        'font-semibold',
        'py-2',
        'sm:py-3',
        'px-6',
        'sm:px-2',
        'border-2',
        'rounded-lg',
        'bg-white',
        'transition-all',
        'duration-300',
        activeTab === tab.id
          ? 'text-[var(--light-nav-hover)] border-[var(--light-nav-hover)] border-b-[6px]'
          : 'text-black border-black hover:bg-gray-100 hover:-rotate-3 hover:-translate-y-1 hover:shadow-[4px_6px_0px_rgba(0,0,0,0.7)]',
      ].join(' ');
      btn.addEventListener('click', () => {
        activeTab = tab.id;
        renderTabs();
        renderContent();
      });
      tabContainer.appendChild(btn);
    });
  }

  function renderContent() {
    const current = tabs.find((t) => t.id === activeTab);
    tabTitle.textContent = current.title;
  }

  renderTabs();
  renderContent();
});

console.log('Is CDN working?');
