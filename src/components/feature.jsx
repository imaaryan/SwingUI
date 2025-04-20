import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

import img1 from '../assets/features/link-cdn.webp';
import img2 from '../assets/features/want-gradinent.webp';
import img3 from '../assets/features/add-animate.webp';
import linkIcon from '../assets/icons/link.webp';
import blendToolIcon from '../assets/icons/blend-tool.webp';
import motionGraphicIcon from '../assets/icons/motion-graphic.webp';

import '../docs/SwingKit/Gradients/style.css';

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const [touchStartY, setTouchStartY] = useState(0);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const [sliderItems, setSliderItems] = useState([]);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const interactionTimeoutRef = useRef(null);

  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }

    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  };

  const features = [
    {
      icon: 'link',
      title: 'Link the Essentials',
      description:
        "Include Tailwind CSS, Remix Icon, and our SwingUI CSS & JS CDN files in your project — you're all set to start building.",
    },
    {
      icon: 'gradient',
      title: 'Need a Gradient?',
      description:
        'Add our custom gradient class to any element and get a clean, modern background instantly. No configs. No chaos.',
    },
    {
      icon: 'animation',
      title: 'Add Animation',
      description:
        'Want it to move? Just slap on -animate and SwingUI will handle the rest — smooth, stylish motion with zero setup.',
    },
  ];

  useEffect(() => {
    if (scrollContainerRef.current && sliderContainerRef.current) {
      const sliderElements =
        sliderContainerRef.current.querySelectorAll('.slider-item');
      const sliderArr = Array.from(sliderElements);
      setSliderItems(sliderArr);

      setInitialPosition(sliderArr);

      if (sliderElements.length > 0) {
        sliderElements[0].classList.add('active');
      }
    }
  }, []);

  const getMaxScroll = () => {
    if (!sliderContainerRef.current || !scrollContainerRef.current) return 0;
    return -(
      sliderContainerRef.current.scrollHeight -
      scrollContainerRef.current.clientHeight
    );
  };

  const setInitialPosition = (sliderArr) => {
    if (!sliderArr.length || !scrollContainerRef.current) return;

    const newScrollY = 0;
    setCurrentScrollY(newScrollY);
    if (sliderContainerRef.current) {
      sliderContainerRef.current.style.transform = `translateY(${newScrollY}px)`;
    }

    setActiveIndex(0);
    updateItemVisibility(0);
  };

  const updateItemVisibility = (index) => {
    if (!sliderItems.length) return;

    sliderItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
        item.classList.remove('fade-out');
      } else {
        item.classList.remove('active');

        const distance = Math.abs(i - index);
        if (distance > 1) {
          item.classList.add('fade-out');
        } else {
          item.classList.remove('fade-out');
        }
      }
    });
  };

  const scrollToIndex = (index) => {
    if (!sliderItems.length) return;

    const itemHeight = sliderItems[0]?.offsetHeight || 0;
    const targetScrollY = -(index * itemHeight);

    const boundedScrollY = Math.max(getMaxScroll(), Math.min(0, targetScrollY));

    setCurrentScrollY(boundedScrollY);
    if (sliderContainerRef.current) {
      sliderContainerRef.current.style.transform = `translateY(${boundedScrollY}px)`;
    }

    setActiveIndex(index);
    updateItemVisibility(index);
  };

  const getIndexFromScrollPosition = (scrollY) => {
    if (!sliderItems.length) return 0;

    const itemHeight = sliderItems[0]?.offsetHeight || 0;
    if (itemHeight === 0) return 0;

    const rawIndex = Math.abs(scrollY) / itemHeight;

    return Math.round(rawIndex);
  };

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      handleUserInteraction();

      const newScrollY = Math.max(
        getMaxScroll(),
        Math.min(0, currentScrollY - e.deltaY),
      );

      setCurrentScrollY(newScrollY);
      if (sliderContainerRef.current) {
        sliderContainerRef.current.style.transform = `translateY(${newScrollY}px)`;
      }

      const newIndex = getIndexFromScrollPosition(newScrollY);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < features.length
      ) {
        setActiveIndex(newIndex);
        updateItemVisibility(newIndex);
      }
    },
    [currentScrollY, activeIndex, features.length],
  );

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
    handleUserInteraction();
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleUserInteraction();

    const touchDelta = touchStartY - e.touches[0].clientY;
    setTouchStartY(e.touches[0].clientY);

    const newScrollY = Math.max(
      getMaxScroll(),
      Math.min(0, currentScrollY - touchDelta),
    );

    setCurrentScrollY(newScrollY);
    if (sliderContainerRef.current) {
      sliderContainerRef.current.style.transform = `translateY(${newScrollY}px)`;
    }

    const newIndex = getIndexFromScrollPosition(newScrollY);
    if (
      newIndex !== activeIndex &&
      newIndex >= 0 &&
      newIndex < features.length
    ) {
      setActiveIndex(newIndex);
      updateItemVisibility(newIndex);
    }
  };

  // useEffect(() => {
  //   const handleGlobalWheel = (e) => {
  //     if (!scrollContainerRef.current) return;
  //     const rect = scrollContainerRef.current.getBoundingClientRect();
  //     const withinSlider =
  //       e.clientY >= rect.top &&
  //       e.clientY <= rect.bottom &&
  //       e.clientX >= rect.left &&
  //       e.clientX <= rect.right;
  //     const canScrollDown = currentScrollY > getMaxScroll();
  //     const canScrollUp = currentScrollY < 0;
  //     if (withinSlider && (canScrollUp || canScrollDown)) {
  //       handleWheel(e);
  //     }
  //   };

  //   const handleGlobalTouchMove = (e) => {
  //     if (!scrollContainerRef.current) return;
  //     const rect = scrollContainerRef.current.getBoundingClientRect();
  //     const touch = e.touches[0];
  //     if (!touch) return;
  //     const withinSlider =
  //       touch.clientY >= rect.top &&
  //       touch.clientY <= rect.bottom &&
  //       touch.clientX >= rect.left &&
  //       touch.clientX <= rect.right;
  //     const canScrollDown = currentScrollY > getMaxScroll();
  //     const canScrollUp = currentScrollY < 0;
  //     if (withinSlider && (canScrollUp || canScrollDown)) {
  //       e.preventDefault();
  //       handleTouchMove(e);
  //     }
  //   };

  //   window.addEventListener('wheel', handleGlobalWheel, { passive: false });
  //   window.addEventListener('touchmove', handleGlobalTouchMove, {
  //     passive: false,
  //   });

  //   const handleGlobalTouchStart = (e) => {
  //     if (!scrollContainerRef.current) return;
  //     const rect = scrollContainerRef.current.getBoundingClientRect();
  //     const touch = e.touches[0];
  //     if (!touch) return;
  //     const withinSlider =
  //       touch.clientY >= rect.top &&
  //       touch.clientY <= rect.bottom &&
  //       touch.clientX >= rect.left &&
  //       touch.clientX <= rect.right;
  //     if (withinSlider) {
  //       handleTouchStart(e);
  //     }
  //   };

  //   window.addEventListener('touchstart', handleGlobalTouchStart);

  //   return () => {
  //     window.removeEventListener('wheel', handleGlobalWheel);
  //     window.removeEventListener('touchmove', handleGlobalTouchMove);
  //     window.removeEventListener('touchstart', handleGlobalTouchStart);
  //   };
  // }, [handleWheel, currentScrollY]);

  useEffect(() => {
    if (sliderItems.length === 0 || isUserInteracting) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % features.length;
      scrollToIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderItems, isUserInteracting, activeIndex, features.length]);

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'link':
        return (
          <div className='w-14 h-14 rounded-full swing-ocean-gradient flex items-center justify-center shrink-0'>
            <img src={linkIcon} alt='link' className='w-6 h-6 object-contain' />
          </div>
        );
      case 'gradient':
        return (
          <div className='w-14 h-14 rounded-full swing-ocean-gradient flex items-center justify-center shrink-0'>
            <img
              src={blendToolIcon}
              alt='gradient'
              className='w-6 h-6 object-contain'
            />
          </div>
        );
      case 'animation':
        return (
          <div className='w-14 h-14 rounded-full swing-ocean-gradient flex items-center justify-center shrink-0'>
            <img
              src={motionGraphicIcon}
              alt='animation'
              className='w-6 h-6 object-contain'
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className={`w-full py-16 ${
        darkMode
          ? 'bg-[var(--dark-navbar-bg)] text-white'
          : 'bg-white text-black'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <span className='swing-ocean-gradient-animate hover:swing-ocean-gradient-animate text-white text-[14px] font-medium px-6 py-2 rounded-full inline-block mb-4'>
            EASY TO USE
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Built on Top of Tailwind CSS
          </h2>
          <p className='text-lg max-w-3xl mx-auto'>
            We provide our own pre-built component classes—just layer them on
            top of your Tailwind setup. Here's an example:
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-y-8 lg:gap-x-12 max-w-6xl mx-auto px-4'>
          <div className='w-full lg:w-1/2 space-y-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-sm transition-all duration-300 ${
                  activeIndex === index
                    ? darkMode
                      ? 'scale-105 border-2 border-gray-100'
                      : 'scale-105 border-2 border-gray-800'
                    : ''
                }`}
                onClick={() => scrollToIndex(index)}
              >
                <div className='flex items-start gap-4'>
                  {renderIcon(feature.icon)}
                  <div>
                    <h3 className='font-bold text-xl mb-2'>{feature.title}</h3>
                    <p className='text-sm md:text-base'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='relative w-full lg:w-1/2'>
            <div
              className='relative w-full h-80 md:h-[33rem] overflow-hidden rounded-3xl shadow-xl flex items-center justify-center swing-ocean-gradient'
              ref={scrollContainerRef}
            >
              <div
                ref={sliderContainerRef}
                className='absolute inset-0 transition-transform duration-300 ease-out'
                style={{ transform: `translateY(${currentScrollY}px)` }}
              >
                {[img1, img2, img3].map((img, i) => (
                  <div
                    key={i}
                    className='slider-item w-full h-90 md:h-[33rem] transition-all duration-500'
                  >
                    <div className='w-full h-full flex items-center justify-center'>
                      <img
                        src={img}
                        alt={`Feature Demo ${i + 1}`}
                        className='w-full h-full object-contain rounded-3xl'
                      />
                    </div>
                  </div>
                ))}
              </div>
              <i
                className='absolute z-20 ri-play-fill text-4xl md:text-4xl text-white opacity-100'
                onClick={() => setShowVideoModal(true)}
              ></i>
              <div className='pulse z-10 w-full h-full flex items-center justify-center'>
                <div className='ring'></div>
                <div className='ring'></div>
                <div className='ring'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showVideoModal && (
        <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
          <div className='relative p-4'>
            <button
              onClick={() => setShowVideoModal(false)}
              className='absolute -top-2 -right-2 text-white text-3xl bg-black/80 rounded-full pl-1 pr-1 hover:bg-black'
            >
              &times;
            </button>
            <iframe
              className='w-[85vw] h-[50vw] md:w-[90vw] md:h-[50vw] max-w-[800px] max-h-[450px] rounded-lg shadow-lg'
              src='https://www.youtube.com/embed/O_AguXt0VNM?si=v1OZ4CUnSNze-zzr'
              title='YouTube video of how to use swingkit?'
              allow='encrypted-media'
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
