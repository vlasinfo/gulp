document.addEventListener('DOMContentLoaded', () => {

  // --- Search ---
  const openBtnSearch = document.querySelectorAll('.search_btn');
  const inputSearch    = document.getElementById('search_input');
  const closeBtnSearch = document.querySelector('.search_close');
  //just for test
  const meter = document.querySelector('.cart__metter');

  function openSearch() {
    document.body.classList.remove('cart-open', 'no-scroll');
    document.body.classList.add('search-modal-open', 'no-scroll');
    document.body.classList.remove("menu-mob-open");
    menuToggle.setAttribute('aria-expanded', 'false');

    if (inputSearch) {
      inputSearch.value = '';
      setTimeout(() => inputSearch.focus(), 10);
    }
  }

  function closeSearch() {
    document.body.classList.remove('search-modal-open', 'no-scroll');
    if (inputSearch) setTimeout(() => inputSearch.value = '', 300);
  }

  if(openBtnSearch)
  openBtnSearch.forEach(btn => 
    btn.addEventListener('click', openSearch)
  );

  if (closeBtnSearch) closeBtnSearch.addEventListener('click', closeSearch);

  // --- Cart ---
  const openBtnCart = document.querySelector('.cart-btn');
  const closeBtnCart = document.querySelector('.cart__close');
  const overlayCart = document.querySelector('.cart-overlay');

  function openCart() { 
    document.body.classList.add('cart-open', 'no-scroll');
    document.body.classList.remove("menu-mob-open");
    menuToggle.setAttribute('aria-expanded', 'false');

    // just for test
    setTimeout(() => {
      if (meter) {
        meter.classList.add('filled'); 
      }
    }, 1000);    
  }

  function closeCart() {
    document.body.classList.remove('cart-open', 'no-scroll'); 
    if (meter) {
      meter.classList.remove('filled'); 
    }    
  }

  if (openBtnCart) openBtnCart.addEventListener('click', openCart);
  if (closeBtnCart) closeBtnCart.addEventListener('click', closeCart);
  if (overlayCart) overlayCart.addEventListener('click', closeCart);

// --- Promo Slider ---
  const sliderLine = document.querySelector('.slider-line');
  const sliderProducts = document.querySelector('.slider-products');
  const sliderBlog = document.querySelector('.slider-blog');

  if (sliderLine) {
    new Swiper('.slider-line', {
      loop: true,
      autoHeight: true,
      speed: 800,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
    });
  }

  if (sliderProducts) {
    new Swiper('.slider-products', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        nextEl: ".slider-products__slide-next",
        prevEl: ".slider-products__slide-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },      
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 24,
        },        
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },       
      },
    });    

  }

if (sliderBlog) {
    const swiper = new Swiper('.slider-blog', {
      loop: true,
      autoHeight: true,
      speed: 800,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
    });

    const navItems = document.querySelectorAll('.slider-blog-nav__item');
    let hoverTimeout;

    navItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        // Clear timer
        clearTimeout(hoverTimeout);

        // timer to delay hover
        hoverTimeout = setTimeout(() => {
          swiper.slideToLoop(index);
        }, 200);
      });

      // if mouse out - clear timer
      item.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
      });
    });

    // Active state
    swiper.on('slideChange', () => {
      navItems.forEach(el => el.classList.remove('active'));
      navItems[swiper.realIndex]?.classList.add('active');
    });
  }

  // Mobile menu
  const menuToggle = document.getElementById("menu_toggle");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !expanded);
      document.body.classList.toggle("menu-mob-open");
    });
  }
 

  // Mobile dropdown
  const dropdowns = document.querySelectorAll('.navigation__mob-list-item.dropdown');

  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.navigation__mob-list-link');
    const submenu = dropdown.querySelector('.navigation__mob-list-sub');

    link.addEventListener('click', e => {
      e.preventDefault();
      link.classList.toggle('open');

      if (submenu.style.height && submenu.style.height !== '0px') {
        // Close submenu
        submenu.style.height = '0';
      } else {
        // Open submenu to its full height
        submenu.style.height = submenu.scrollHeight + 'px';
      }
    });
  });  


  // --- Close on Esc ---
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSearch();
      closeCart();

      document.body.classList.remove("menu-mob-open");
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });  



});
