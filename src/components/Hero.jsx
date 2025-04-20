import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import bigwindowimg from '../assets/Hero-assets/bigwindow.webp';
import smallwindowleftimg from '../assets/Hero-assets/smallwindowleft.webp';
import smallwindowrightimg from '../assets/Hero-assets/smallwindowright.webp';
import herobg from '../assets/Hero-assets/herobg.webp';
import '../docs/SwingKit/AnimatedGradients/style.css';
import '../docs/SwingKit/Gradients/style.css';
import darkherobg from '../assets/Hero-assets/darkherobg.webp';
import { useTheme } from '../context/ThemeContext';
import ComponentsFeaturesGallery from './ComponentsFeaturesGallery';

const Hero = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaRef = useRef(null);
  const floatingLeftRef = useRef(null);
  const floatingRightRef = useRef(null);
  const bottomImageSection = useRef(null);

  const { darkMode } = useTheme();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        [
          headingRef.current,
          subheadingRef.current,
          paragraphRef.current,
          ctaRef.current,
        ],
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
        },
      );

      gsap.to(floatingLeftRef.current, {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(floatingRightRef.current, {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.from(bottomImageSection.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert(); // clean up properly
  }, []);

  return (
    <section
      className={`w-screen min-h-screen flex flex-col items-center justify-center mt-[-70px] px-4 pt-38 pb-14 bg-no-repeat bg-cover bg-center ${
        darkMode
          ? ' text-[var(--color-text-dark)]'
          : ' text-[var(--color-text)]'
      }`}
      style={{ backgroundImage: `url(${darkMode ? darkherobg : herobg})` }}
    >
      {/* Text Content */}
      <div
        className={`w-full text-center space-y-8 ${
          darkMode
            ? ' text-[var(--color-text-dark)]'
            : ' text-[var(--color-text)]'
        }`}
      >
        <div
          ref={headingRef}
          className='inline-block px-4 py-2 swing-ocean-gradient-animate text-white rounded-full text-sm font-semibold tracking-wide shadow'
        >
          PUT SOME SWING IN YOUR STACK
        </div>

        <h1
          ref={subheadingRef}
          className='text-4xl sm:text-5xl md:text-6xl font-bold '
        >
          Made To Build Things <br />
          You’re Proud Of.
        </h1>

        <p
          ref={paragraphRef}
          className='text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto'
        >
          A modern Tailwind CSS component library that helps you design sleek,
          responsive interfaces with ease — and style to spare.
        </p>

        <div
          ref={ctaRef}
          className='flex flex-col sm:flex-row justify-center items-center gap-4'
        >
          <Link
            to='/docs'
            className='px-6 py-3 rounded-full w-[70%] sm:w-auto text-white swing-ocean-gradient font-semibold shadow hover:opacity-90 transition'
          >
            Get Started For Free
          </Link>
          <Link
            to='/components/accordion'
            className={`px-6 py-3  rounded-full w-[85%] sm:w-auto border border-gray-300 font-semibold hover:text-white hover:bg-gray-800 transition`}
          >
            Explore All Components
          </Link>
        </div>
      </div>

      {/* Bottom Image Section */}
      {/* <div
        ref={bottomImageSection}
        className='relative mt-10 sm:mt-20 w-full max-w-6xl px-4 flex items-center justify-center'
      >
        <img
          src={bigwindowimg}
          alt='Big Window'
          className='w-full mx-auto z-10 relative sm:-mt-10'
        />

        <img
          ref={floatingLeftRef}
          src={smallwindowleftimg}
          alt='Small Left Floating'
          className='hidden sm:block absolute left-0 sm:-left-20 top-1/2 -translate-y-1/2 w-32 sm:w-70 z-30'
        />
        <img
          ref={floatingRightRef}
          src={smallwindowrightimg}
          alt='Small Right Floating'
          className='hidden sm:block absolute right-0 sm:-right-20 top-1/2 -translate-y-1/2 w-32 sm:w-70 z-30'
        />
      </div> */}
      <ComponentsFeaturesGallery />
    </section>
  );
};

export default Hero;
