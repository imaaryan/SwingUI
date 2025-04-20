document.addEventListener("DOMContentLoaded", function () {
    const monthlyBtn = document.getElementById('monthlyBtn');
    const annualBtn = document.getElementById('annualBtn');
    const slider = document.getElementById('toggleSlider');

    const proPrice = document.getElementById('pro-price');
    const enterprisePrice = document.getElementById('enterprise-price');

    if (!monthlyBtn || !annualBtn || !slider || !proPrice || !enterprisePrice) return;

    // Initial styling (default: monthly)
    monthlyBtn.classList.replace('text-gray-700', 'text-white');

    const animatePriceChange = (element, newValue) => {
      element.classList.add('price-hidden'); // You can define this class in CSS
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
  });