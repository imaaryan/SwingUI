window.addEventListener('DOMContentLoaded', () => {
    let prevWidth = window.innerWidth;
    const sliders = document.querySelectorAll('.swing-scrolling-image');
    const sliderHtml = [];

    const getInitialWidth = (container) => {
      let width = 0;
      const items = container.querySelectorAll('.swing-slider-item');
      const gap = parseFloat(getComputedStyle(container).gap || 0);

      items.forEach((item) => {
        width += item.offsetWidth + gap;
      });

      return width;
    };

    const setValues = (container, width, indexI, indexJ) => {
      const parentWidth = container.parentElement.offsetWidth;
      const ratio = Math.ceil(parentWidth / width);
      const total = ratio + 1;

      while (
        container.children.length >
        sliderHtml[indexI][indexJ].split('swing-slider-item').length - 1
      ) {
        container.lastChild.remove();
      }

      for (let i = 0; i < ratio; i++) {
        const div = document.createElement('div');
        div.innerHTML = sliderHtml[indexI][indexJ];
        container.append(...div.children);
      }

      container.style.width = `${width * total}px`;
      container.style.setProperty('--total', total);
      container.style.setProperty('--est-speed', width / 100);
    };

    const setDirection = (container, width) => {
      if (
        getComputedStyle(container).getPropertyValue('--direction') === '-1'
      ) {
        container.style.marginLeft = `-${width}px`;
      }
    };

    const setPauseOnHover = (container) => {
      const pauseOnHover =
        window.innerWidth > 767
          ? '--pause-on-hover'
          : '--pause-on-hover-mobile';

      const shouldPause =
        getComputedStyle(container).getPropertyValue(pauseOnHover).trim() ===
        'true';

      container.style.setProperty(
        '--poh',
        shouldPause ? 'paused' : 'running'
      );
    };

    const initializeSliders = () => {
      sliders.forEach((slider, indexI) => {
        sliderHtml[indexI] = [];
        const containers = slider.querySelectorAll('.slider-container');

        containers.forEach((container, indexJ) => {
          sliderHtml[indexI][indexJ] = container.innerHTML;
          const width = getInitialWidth(container);
          if (width) {
            setValues(container, width, indexI, indexJ);
            setDirection(container, width);
          }
          setPauseOnHover(container);
        });

        slider.classList.add('showing');
      });
    };

    const handleResize = () => {
      if (window.innerWidth === prevWidth) return;
      prevWidth = window.innerWidth;

      sliders.forEach((slider, indexI) => {
        const containers = slider.querySelectorAll('.slider-container');
        containers.forEach((container, indexJ) => {
          container.innerHTML = sliderHtml[indexI][indexJ];
          const width = getInitialWidth(container);
          if (width) {
            setValues(container, width, indexI, indexJ);
            setDirection(container, width);
          }
          setPauseOnHover(container);
        });
      });
    };

    // Delay to allow HTML/CSS rendering
    setTimeout(() => {
      initializeSliders();
      window.addEventListener('resize', handleResize);
    }, 100);
  });