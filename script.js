document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  const heroSection = document.getElementById('hero');
  const imageContainer = document.getElementById('imageContainer');
  const mainImage = document.getElementById('mainImage');
  const zoomPreview = document.getElementById('zoomPreview');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  const carouselImages = Array.from(thumbnails)
    .map(button => button.dataset.src)
    .filter(src => src); // Filter out empty placeholders
    
  let currentIndex = 0;
  let lastScrollY = window.scrollY;
  let isSticky = false;

  const updateMainImage = (index) => {
    currentIndex = index;
    const src = carouselImages[index];
    if (src) {
      mainImage.src = src;
      // Only set active class on valid thumbnails
      thumbnails.forEach(button => {
        if (button.dataset.src === src) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }
  };

  thumbnails.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (button.dataset.src) {
        // Find the index of this valid src in our filtered array
        const validIndex = carouselImages.indexOf(button.dataset.src);
        if (validIndex !== -1) updateMainImage(validIndex);
      }
    });
  });

  prevButton.addEventListener('click', () => {
    updateMainImage((currentIndex - 1 + carouselImages.length) % carouselImages.length);
  });

  nextButton.addEventListener('click', () => {
    updateMainImage((currentIndex + 1) % carouselImages.length);
  });

  const showZoom = (event) => {
    const rect = mainImage.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Ensure bounds are safe
    const boundedX = Math.max(0, Math.min(x, rect.width));
    const boundedY = Math.max(0, Math.min(y, rect.height));

    const xPercent = (boundedX / rect.width) * 100;
    const yPercent = (boundedY / rect.height) * 100;
    
    zoomPreview.style.backgroundImage = `url(${mainImage.src})`;
    zoomPreview.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    
    // Move the zoom lens to follow the cursor
    zoomPreview.style.left = `${boundedX}px`;
    zoomPreview.style.top = `${boundedY}px`;
    
    zoomPreview.style.display = 'block';
  };

  imageContainer.addEventListener('mousemove', (event) => {
    if (window.innerWidth > 1024) {
      showZoom(event);
    }
  });

  imageContainer.addEventListener('mouseenter', () => {
    if (window.innerWidth > 1024) {
      zoomPreview.style.display = 'block';
    }
  });

  imageContainer.addEventListener('mouseleave', () => {
    zoomPreview.style.display = 'none';
  });

  const handleStickyHeader = () => {
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    const currentScroll = window.scrollY;

    if (heroBottom <= 0) {
      if (!isSticky) {
        document.body.style.paddingTop = `${header.offsetHeight}px`;
        header.classList.add('sticky');
        isSticky = true;
      }
    } else {
      if (isSticky) {
        document.body.style.paddingTop = '0px';
        header.classList.remove('sticky', 'sticky-hidden');
        isSticky = false;
      }
    }

    if (isSticky) {
      if (currentScroll > lastScrollY + 10) {
        header.classList.add('sticky-hidden');
      } else if (currentScroll < lastScrollY - 10) {
        header.classList.remove('sticky-hidden');
      }
    }

    lastScrollY = currentScroll;
  };

  window.addEventListener('scroll', handleStickyHeader, { passive: true });

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.classList.toggle('active');
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.mobile-nav-link, .mobile-nav-action button').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.classList.remove('active');
      mobileMenu.setAttribute('aria-hidden', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      
      // Optional: Close all other FAQs (Accordion behavior)
      faqQuestions.forEach(q => q.setAttribute('aria-expanded', 'false'));
      
      // Toggle current FAQ
      question.setAttribute('aria-expanded', String(!isExpanded));
    });
  });

  updateMainImage(0);
});
