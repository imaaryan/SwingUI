document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById('swing-mobile-menu-button');
    const mobileMenu = document.getElementById('swing-mobile-menu');
    const servicesDropdownButton = document.getElementById('services-dropdown-button');
    const servicesDropdown = document.getElementById('swing-services-dropdown');
    const desktopButton = document.getElementById('desktop-services-dropdown-button');
    const desktopDropdown = document.getElementById('desktop-services-dropdown');
    const previewContainer = document.querySelector('.preview-container');

    function toggleMobileMenu() {
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
      }
    }

    function toggleMobileDropdown(e) {
      e.stopPropagation();
      if (servicesDropdown) {
        servicesDropdown.classList.toggle('hidden');
      }
    }

    function toggleDesktopDropdown(e) {
      e.stopPropagation();
      if (desktopDropdown) {
        desktopDropdown.classList.toggle('hidden');
        if (!desktopDropdown.classList.contains('hidden')) {
          previewContainer?.classList.add('pb-30', 'pt-4');
        } else {
          previewContainer?.classList.remove('pb-30', 'pt-4');
        }
      }
    }

    function closeAllDropdowns() {
      if (servicesDropdown && !servicesDropdown.classList.contains('hidden')) {
        servicesDropdown.classList.add('hidden');
      }
      if (desktopDropdown && !desktopDropdown.classList.contains('hidden')) {
        desktopDropdown.classList.add('hidden');
        previewContainer?.classList.remove('pb-30', 'pt-2');
      }
    }

    mobileMenuButton?.addEventListener('click', toggleMobileMenu);
    servicesDropdownButton?.addEventListener('click', toggleMobileDropdown);
    desktopButton?.addEventListener('click', toggleDesktopDropdown);
    document.addEventListener('click', closeAllDropdowns);
  });
