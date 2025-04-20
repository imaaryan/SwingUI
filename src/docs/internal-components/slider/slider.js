// swingScroller.js
(function () {
  let prevWidth = window.innerWidth;
  const sliders = document.querySelectorAll('.swing-scrolling-image');
  const sliderHtml = [];

  // Compute the total width of all items + gaps
  function getInitialWidth(container) {
    const items = Array.from(container.children);
    const gap = parseFloat(getComputedStyle(container).gap) || 0;
    return items.reduce((sum, item) => sum + item.offsetWidth + gap, 0);
  }

  // Duplicate items so container is wide enough to scroll continuously
  function setValues(container, width, i, j) {
    const parentWidth = container.parentElement.offsetWidth;
    const repeatCount = Math.ceil(parentWidth / width) + 1;

    // Reset to original HTML
    container.innerHTML = sliderHtml[i][j];

    // Append duplicates
    for (let k = 0; k < repeatCount; k++) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = sliderHtml[i][j];
      container.append(...wrapper.children);
    }

    // Update CSS variables
    container.style.width = `${width * repeatCount}px`;
    container.style.setProperty('--total', repeatCount);
    container.style.setProperty('--est-speed', width / 100);
  }

  // If direction is -1, offset start to the left
  function setDirection(container, width) {
    if (
      getComputedStyle(container.parentElement)
        .getPropertyValue('--direction')
        .trim() === '-1'
    ) {
      container.style.marginLeft = `-${width}px`;
    }
  }

  // Pause on hover if enabled (desktop vs mobile toggle handled by CSS var)
  function setPauseOnHover(container) {
    const hoverVar =
      window.innerWidth > 767 ? '--pause-on-hover' : '--pause-on-hover-mobile';
    const shouldPause =
      getComputedStyle(container.parentElement)
        .getPropertyValue(hoverVar)
        .trim() === 'true';
    container.style.setProperty('--poh', shouldPause ? 'paused' : 'running');
  }

  // Initialize all sliders
  function initSliders() {
    sliders.forEach((slider, i) => {
      sliderHtml[i] = [];
      const containers = slider.querySelectorAll('.slider-container');

      containers.forEach((container, j) => {
        // Store original markup
        sliderHtml[i][j] = container.innerHTML;

        const width = getInitialWidth(container);
        if (width) {
          setValues(container, width, i, j);
          setDirection(container, width);
        }
        setPauseOnHover(container);
      });

      slider.classList.add('showing');
    });
  }

  // Re-calc on resize if width changes
  function handleResize() {
    if (window.innerWidth === prevWidth) return;
    prevWidth = window.innerWidth;
    initSliders();
  }

  // Kick off after DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    initSliders();
    window.addEventListener('resize', handleResize);
  });
})();
