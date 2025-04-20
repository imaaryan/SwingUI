document.addEventListener('DOMContentLoaded', () => {
  let openIndex = null;

  const headersDesktop = document.querySelectorAll(
    '.desktop-accordion .accordion-header',
  );
  const contentsDesktop = document.querySelectorAll(
    '.desktop-accordion .accordion-content',
  );
  const imageContainer = document.getElementById('desktop-image');
  const headersMobile = document.querySelectorAll(
    '.mobile-accordion .accordion-header',
  );
  const contentsMobile = document.querySelectorAll(
    '.mobile-accordion .accordion-content',
  );

  function update() {
    // Desktop toggling
    headersDesktop.forEach((header, idx) => {
      const icon = header.querySelector('svg');
      if (openIndex === idx) {
        icon.classList.add('rotate-180');
        contentsDesktop[idx].style.display = 'block';
      } else {
        icon.classList.remove('rotate-180');
        contentsDesktop[idx].style.display = 'none';
      }
    });
    // Update desktop image panel from data-image attribute
    if (openIndex !== null) {
      const imgSrc = headersDesktop[openIndex].dataset.image;
      imageContainer.innerHTML = `<img src="${imgSrc}" alt="Accordion image" class="w-full h-full object-cover"/>`;
    } else {
      imageContainer.innerHTML =
        '<div class="w-full h-full flex items-center justify-center p-8 text-white text-center"><p>Select a question to view details</p></div>';
    }
    // Mobile toggling
    headersMobile.forEach((header, idx) => {
      const icon = header.querySelector('svg');
      const content = contentsMobile[idx];
      if (openIndex === idx) {
        icon.classList.add('rotate-180');
        content.style.display = 'block';
      } else {
        icon.classList.remove('rotate-180');
        content.style.display = 'none';
      }
    });
  }

  // Attach click handlers
  headersDesktop.forEach((header, idx) => {
    header.addEventListener('click', () => {
      openIndex = openIndex === idx ? null : idx;
      update();
    });
  });
  headersMobile.forEach((header, idx) => {
    header.addEventListener('click', () => {
      openIndex = openIndex === idx ? null : idx;
      update();
    });
  });

  // Initial render
  update();
});
