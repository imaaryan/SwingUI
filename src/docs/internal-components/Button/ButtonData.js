const buttonData = [
  {
    id: 'swing_normal',
    section: '',
    label: 'Normal Button',
    description:
      'Elevate your UI with this captivating gradient button—smooth animations and vibrant colors create an irresistible urge to click.',
    code: `<button>
  <a href="#" class="group swing-ocean-gradient hover:swing-ocean-gradient px-8 py-2 rounded-md text-white inline-flex items-center justify-center overflow-hidden">Hover Me</a>
</button>`,
  },
  {
    id: 'swing_call',
    section: '',
    label: 'Button with Icon',
    description:
      'A professional call-to-action button combining intuitive phone iconography with high-impact gradient visuals to optimize engagement.',
    code: `<button>
  <a href="#" class="group swing-ocean-gradient hover:swing-ocean-gradient px-8 py-2 rounded-md text-white inline-flex items-center justify-center overflow-hidden">
    <span>
      <i class="ri-phone-fill"></i> Call Now
    </span>
  </a>
</button>`,
  },
  {
    id: 'swing_getStarted',
    section: '',
    label: 'Icon On Hover ',
    description:
      'Dynamic gradient button with intuitive arrow animation—guides users seamlessly toward conversion with purposeful motion design.',
    code: `<button>
  <a href="#" class="group swing-ocean-gradient hover:swing-ocean-gradient px-10 py-2 rounded-md text-white inline-flex items-center justify-center overflow-hidden transition-all duration-200">
    <div class="relative flex items-center">
      <span class="transition-transform duration-200 group-hover:translate-x-[-10px]">
        Get Started
      </span>
      <i class="ri-arrow-right-s-line transition-all duration-200 absolute left-full opacity-0 group-hover:opacity-100"></i>
    </div>
  </a>
</button>`,
  },
  {
    id: 'animated_hover',
    section: '',
    label: 'Animated Swing Button ',
    description:
      'Animated gradient button with fluid hover effects—designed to capture attention while maintaining clean, professional aesthetics.',
    code: `<button>
  <a href="#" class="swing-ocean-gradient-animate hover:swing-ocean-gradient px-8 py-2 rounded-md text-white inline-flex items-center justify-center overflow-hidden">Hover Me</a>
</button>`,
  },
];

export default buttonData;
