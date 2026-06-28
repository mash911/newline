import { State } from '../store/state.js';

export function HomePage() {
  const isAr = State.state.lang === 'ar';
  
  // Define all available categories
  const categories = [
    { id: 'double', nameAr: 'شخصين', nameEn: 'Double Bedding' },
    { id: 'single', nameAr: 'شخص واحد', nameEn: 'Single Bedding' },
    { id: 'bridal', nameAr: 'مفارش عرايسي', nameEn: 'Bridal Bedding' },
    { id: 'kids', nameAr: 'مفارش الأطفال', nameEn: 'Kids Bedding' },
    { id: 'toppers', nameAr: 'لباد ومخدات', nameEn: 'Toppers & Pillows' },
    { id: 'sheets', nameAr: 'شراشف سرير', nameEn: 'Bed Sheets' },
    { id: 'strollers', nameAr: 'عربات الأطفال', nameEn: 'Baby Strollers' },
    { id: 'bath', nameAr: 'مستلزمات الحمام', nameEn: 'Bath Essentials' }
  ];

  // Define the banner pairs to alternate
  const bannerPairs = State.state.bannerPairs;

  // Get active product sections (only categories/classifications that contain products)
  const activeSections = [];

  // 1. New Arrivals classification (isNew = true, sorted newest first)
  const newArrivals = [...State.state.products].filter(p => p.isNew).reverse();
  if (newArrivals.length > 0) {
    activeSections.push({
      id: 'new-arrivals',
      nameAr: 'وصل حديثاً',
      nameEn: 'New Arrivals',
      link: '#/category',
      products: newArrivals.slice(0, 10)
    });
  }

  // 2. Active Category sections
  categories.forEach(cat => {
    const catProducts = State.state.products.filter(p => p.category === cat.id);
    if (catProducts.length > 0) {
      activeSections.push({
        id: cat.id,
        nameAr: cat.nameAr,
        nameEn: cat.nameEn,
        link: `#/category?category=${cat.id}`,
        products: catProducts.slice(0, 10)
      });
    }
  });

  // Construct dynamic product sections with alternating banners between them
  let dynamicSectionsHtml = '';
  activeSections.forEach((section, index) => {
    dynamicSectionsHtml += `
      <!-- Section: ${section.nameEn} -->
      <section class="${section.id}-section container">
        <div class="homepage-section-header">
          <a href="${section.link}" class="view-all-link">${isAr ? 'عرض الكل' : 'View All'}</a>
          <h2 class="section-title">${isAr ? section.nameAr : section.nameEn}</h2>
        </div>
        <div class="products-grid">
          ${section.products.map(p => renderProductCard(p, isAr)).join('')}
        </div>
      </section>
    `;

    // If it's not the last section, render an alternating double banner between them
    if (index < activeSections.length - 1) {
      const bannerPair = bannerPairs[index % bannerPairs.length];
      dynamicSectionsHtml += `
        <!-- Alternating Promo Banners -->
        <section class="promo-banners-container container animate-fade-in">
          <div class="promo-banners-row">
            <a href="#/category?category=${bannerPair[0].id}" class="promo-banner-card" style="background-image: linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.3)), url('${bannerPair[0].image}');">
              <span class="banner-title">${isAr ? bannerPair[0].nameAr : bannerPair[0].nameEn}</span>
            </a>
            <a href="#/category?category=${bannerPair[1].id}" class="promo-banner-card" style="background-image: linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.3)), url('${bannerPair[1].image}');">
              <span class="banner-title">${isAr ? bannerPair[1].nameAr : bannerPair[1].nameEn}</span>
            </a>
          </div>
        </section>
      `;
    }
  });

  return `
    <div class="home-page-container animate-fade-in">
      
      <!-- Hero Carousel Slider -->
      <section class="hero-slider">
        <div class="slides-container" id="hero-slides">
          ${State.state.homeSlides.map((slide, i) => `
            <div class="hero-slide ${i === 0 ? 'active' : ''}" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.45)), url('${slide.image}');">
              <div class="hero-content container">
                <span class="subtitle">${isAr ? slide.subtitleAr : slide.subtitleEn}</span>
                <h1>${isAr ? slide.titleAr : slide.titleEn}</h1>
                <p>${isAr ? slide.descAr : slide.descEn}</p>
                <a href="${slide.link}" class="btn btn-accent">${isAr ? slide.btnTextAr : slide.btnTextEn}</a>
              </div>
            </div>
          `).join('')}
        </div>
        <!-- Dots Navigation -->
        <div class="slider-dots">
          ${State.state.homeSlides.map((_, i) => `
            <span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
          `).join('')}
        </div>
      </section>

      <!-- Premium Brands Showcase Bar -->
      <section class="store-features" style="background-color: var(--bg-secondary); padding: 2.2rem 0; border-bottom: 1px solid var(--border-light);">
        <div class="container" style="display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:2.5rem;">
          <a href="#/category?category=brand-feather" style="text-decoration:none; color:inherit;"><span class="brand-logo" style="font-size:1.6rem; font-weight:700; letter-spacing:0.25em; color:var(--text-muted); opacity:0.6; transition:var(--transition-fast); cursor:pointer;">FEATHER</span></a>
          <a href="#/category?category=brand-calvo" style="text-decoration:none; color:inherit;"><span class="brand-logo" style="font-size:1.6rem; font-weight:700; letter-spacing:0.25em; color:var(--text-muted); opacity:0.6; transition:var(--transition-fast); cursor:pointer;">CALVO</span></a>
          <a href="#/category?category=brand-venice" style="text-decoration:none; color:inherit;"><span class="brand-logo" style="font-size:1.6rem; font-weight:700; letter-spacing:0.25em; color:var(--text-muted); opacity:0.6; transition:var(--transition-fast); cursor:pointer;">VENEZIA</span></a>
          <a href="#/category?category=brand-silk" style="text-decoration:none; color:inherit;"><span class="brand-logo" style="font-size:1.6rem; font-weight:700; letter-spacing:0.25em; color:var(--text-muted); opacity:0.6; transition:var(--transition-fast); cursor:pointer;">HARIR</span></a>
          <a href="#/category?category=brand-highcrest" style="text-decoration:none; color:inherit;"><span class="brand-logo" style="font-size:1.6rem; font-weight:700; letter-spacing:0.25em; color:var(--text-muted); opacity:0.6; transition:var(--transition-fast); cursor:pointer;">HIGH CREST</span></a>
        </div>
      </section>

      ${dynamicSectionsHtml}

      <!-- Customer Testimonials Slider -->
      <section class="testimonials-section container">
        <div class="section-header">
          <h2>${isAr ? 'آراء عملائنا' : 'Client Testimonials'}</h2>
          <p>${isAr ? 'ماذا يقول عشاق الفخامة عن تجربتهم معنا' : 'Hear from our premium clients about their experience'}</p>
        </div>
        <div class="testimonials-slider">
          <div class="testimonial-card">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="quote">"${isAr ? 'لحاف قطني مريح جداً ونوعية ممتازة، التوصيل في نفس اليوم، واللباد 8 سم حكاية ثانية غير شكل نومي تماماً. شكراً نيو لاين!' : 'Incredibly soft cotton comforter. Delivery was fast, and the 8cm topper completely resolved my back pain. Highly recommended!'}"</p>
            <div class="client">
              <span class="name">${isAr ? 'أحمد الشمري' : 'Ahmad Al-Shammari'}</span>
              <span class="loc">${isAr ? 'الكويت، السالمية' : 'Salmiya, Kuwait'}</span>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="quote">"${isAr ? 'أرواب ومناشف الحمام ناعمة وتمتص الماء بسرعة، والمقاسات مريحة جداً. بالتأكيد سأكرر الطلب!' : 'The bathrobes are incredibly soft and absorb moisture instantly. Great customer support and premium package box!'}"</p>
            <div class="client">
              <span class="name">${isAr ? 'مريم العتيبي' : 'Maryam Al-Otaibi'}</span>
              <span class="loc">${isAr ? 'الكويت، ضاحية عبد الله السالم' : 'Abdullah Al-Salem, KW'}</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <style>
      /* Custom Homepage Layout Styling */
      .home-page-container .products-grid {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        justify-content: flex-start;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        gap: 1.5rem;
        padding-bottom: 1.2rem;
        scrollbar-width: thin;
        scroll-behavior: smooth;
      }
      .home-page-container .products-grid::-webkit-scrollbar {
        height: 6px;
      }
      .home-page-container .products-grid::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
        border-radius: 4px;
      }
      .home-page-container .products-grid::-webkit-scrollbar-thumb:hover {
        background-color: var(--accent-gold);
      }
      .home-page-container .product-card {
        flex: 0 0 calc(20% - 1.2rem); /* 5 items on desktop */
        min-width: 250px;
        scroll-snap-align: start;
      }
      @media (max-width: 1200px) {
        .home-page-container .product-card {
          flex: 0 0 calc(25% - 1.125rem); /* 4 items */
        }
      }
      @media (max-width: 992px) {
        .home-page-container .product-card {
          flex: 0 0 calc(33.333% - 1rem); /* 3 items */
        }
      }
      @media (max-width: 768px) {
        .home-page-container .product-card {
          flex: 0 0 calc(50% - 0.75rem); /* 2 items */
        }
      }
      @media (max-width: 480px) {
        .home-page-container .product-card {
          flex: 0 0 80%; /* 1.25 items */
        }
      }

      .homepage-section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 3.5rem 0 1.5rem 0;
        border-bottom: 1.5px solid var(--border-light);
        padding-bottom: 0.75rem;
      }
      .homepage-section-header .section-title {
        font-size: 1.8rem;
        font-weight: 700;
        margin: 0;
        color: var(--text-primary);
        font-family: 'Cairo', 'Playfair Display', serif;
      }
      .homepage-section-header .view-all-link {
        font-size: 0.95rem;
        color: var(--accent-gold);
        text-decoration: none;
        font-weight: 600;
        transition: var(--transition-fast);
      }
      .homepage-section-header .view-all-link:hover {
        color: var(--text-primary);
        text-decoration: underline;
      }
      .promo-banners-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin: 3.5rem auto;
      }
      .promo-banner-card {
        height: 260px;
        background-size: cover;
        background-position: center;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        transition: var(--transition-smooth);
        box-shadow: var(--card-shadow);
      }
      .promo-banner-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0, 0, 0, 0.25);
        transition: var(--transition-smooth);
        z-index: 1;
      }
      .promo-banner-card:hover::before {
        background: rgba(0, 0, 0, 0.35);
      }
      .promo-banner-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--card-shadow-hover);
      }
      .promo-banner-card .banner-title {
        color: #ffffff;
        font-size: 2.2rem;
        font-weight: 700;
        font-family: 'Cairo', sans-serif;
        z-index: 2;
        text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      }
      @media (max-width: 768px) {
        .promo-banners-row {
          grid-template-columns: 1fr;
        }
        .promo-banner-card {
          height: 180px;
        }
        .promo-banner-card .banner-title {
          font-size: 1.6rem;
        }
      }

      /* Hero Slider CSS */
      .hero-slider {
        position: relative;
        height: 580px;
        overflow: hidden;
        margin-top: -1px;
      }
      .hero-slide {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        opacity: 0;
        transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1;
      }
      .hero-slide.active {
        opacity: 1;
        z-index: 2;
      }
      .hero-content {
        color: white;
        max-width: 700px;
        animation: heroFadeUp 1s ease forwards;
        transform: translateY(20px);
        opacity: 0;
      }
      .hero-slide.active .hero-content {
        animation: heroFadeUp 0.8s 0.2s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
      }
      .hero-content .subtitle {
        color: var(--accent-gold);
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.15em;
        display: block;
        margin-bottom: 1rem;
      }
      .hero-content h1 {
        font-family: 'Playfair Display', serif;
        font-size: 3.2rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        color: #ffffff;
        line-height: 1.2;
      }
      .hero-content p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        line-height: 1.6;
      }
      
      @keyframes heroFadeUp {
        to { transform: translateY(0); opacity: 1; }
      }

      .slider-dots {
        position: absolute;
        bottom: 1.5rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 0.8rem;
        z-index: 3;
      }
      .slider-dots .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.4);
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .slider-dots .dot.active {
        background-color: var(--accent-gold);
        transform: scale(1.2);
      }

      /* Store Features */
      .store-features {
        background-color: var(--bg-secondary);
        padding: 2rem 0;
        border-bottom: 1px solid var(--border-light);
      }
      .features-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }
      .feature-item {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .feature-item .icon {
        font-size: 1.8rem;
      }
      .feature-item h6 {
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 0.15rem;
      }
      .feature-item p {
        font-size: 0.8rem;
        color: var(--text-secondary);
      }

      /* Category Cards */
      .section-header {
        text-align: center;
        margin: 4rem 0 2.5rem 0;
      }
      .section-header h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.2rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
      .section-header p {
        color: var(--text-secondary);
        font-size: 0.95rem;
      }
      
      .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, 250px);
        justify-content: center;
        gap: 1.5rem;
      }
      .category-card {
        width: 250px;
        height: 250px;
        background-size: cover;
        background-position: center;
        border-radius: 6px;
        display: flex;
        align-items: flex-end;
        padding: 1.5rem;
        text-decoration: none;
        transition: var(--transition-smooth);
        overflow: hidden;
      }
      .category-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.12);
      }
      .category-card .title {
        color: white;
        font-size: 1.15rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        text-shadow: 0 2px 10px rgba(0,0,0,0.3);
      }

      /* Tabbed products */
      .tabbed-products-section {
        margin: 5rem auto;
      }

      /* Flash Sale Banner */
      .flash-sale-banner {
        background-color: var(--bg-secondary);
        padding: 5rem 0;
        margin: 5rem 0;
      }
      .sale-flex {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }
      .sale-info h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.2rem;
        margin-bottom: 1.2rem;
      }
      .sale-info p {
        color: var(--text-secondary);
        font-size: 1rem;
        margin-bottom: 2rem;
        line-height: 1.6;
      }
      .countdown-timer {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
      }
      .timer-box {
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        width: 75px;
        height: 75px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: var(--card-shadow);
      }
      .timer-box .num {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--accent-gold);
      }
      .timer-box .label {
        font-size: 0.75rem;
        color: var(--text-muted);
        font-weight: 500;
      }
      .sale-image-wrapper {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: var(--card-shadow-hover);
        aspect-ratio: 4 / 3;
      }
      .sale-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      /* Testimonials */
      .testimonials-section {
        margin: 5rem auto;
      }
      .testimonials-slider {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      .testimonial-card {
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-light);
        border-radius: 6px;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }
      .testimonial-card .stars {
        color: var(--accent-gold);
        font-size: 1rem;
      }
      .testimonial-card .quote {
        font-style: italic;
        color: var(--text-secondary);
        line-height: 1.6;
        font-size: 0.95rem;
      }
      .testimonial-card .client {
        display: flex;
        flex-direction: column;
        margin-top: auto;
      }
      .testimonial-card .name {
        font-weight: 600;
        font-size: 0.9rem;
      }
      .testimonial-card .loc {
        font-size: 0.75rem;
        color: var(--text-muted);
      }

      /* Brands showcase */
      .brands-section {
        padding: 3rem 0;
        border-top: 1px solid var(--border-light);
        border-bottom: 1px solid var(--border-light);
        margin: 5rem auto;
      }
      .brands-flex {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
      }
      .brand-logo {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.2em;
        color: var(--text-muted);
        opacity: 0.5;
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .brand-logo:hover {
        color: var(--text-primary);
        opacity: 1;
        transform: scale(1.08);
      }

      @media (max-width: 992px) {
        .hero-slider { height: 420px; }
        .hero-content h1 { font-size: 2.3rem; }
        .features-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .sale-flex { grid-template-columns: 1fr; gap: 2rem; }
        .testimonials-slider { grid-template-columns: 1fr; }
      }
      @media (max-width: 576px) {
        .hero-slider { height: 350px; }
        .hero-content h1 { font-size: 1.8rem; }
        .features-grid { grid-template-columns: 1fr; gap: 1rem; }
      }
    </style>
  `;
}

// Global Product Card layout helper
export function renderProductCard(p, isAr) {
  const isWish = State.isInWishlist(p.id);
  const discountPercent = p.originalPrice > p.price ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
  
  return `
    <div class="product-card" onclick="window.location.hash = '#/product/${p.id}'" style="cursor: pointer;">
      <div class="img-wrapper">
        <img src="${p.image}" alt="${isAr ? p.titleAr : p.titleEn}" loading="lazy">
        
        <!-- Badges -->
        ${p.stock <= 0 ? `
          <span class="badge badge-soldout">${isAr ? 'نفذت الكمية' : 'Sold Out'}</span>
        ` : discountPercent > 0 ? `
          <span class="badge badge-sale">${isAr ? `خصم ${discountPercent}%` : `${discountPercent}% OFF`}</span>
        ` : p.isNew ? `
          <span class="badge badge-new">${isAr ? 'جديد' : 'New'}</span>
        ` : ''}

        <!-- Actions panel -->
        <div class="card-actions" onclick="event.stopPropagation()">
          <button class="action-btn card-toggle-wish" data-id="${p.id}" title="${isAr ? 'المفضلة' : 'Wishlist'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" style="${isWish ? 'color:var(--error-color)' : ''}">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <button class="action-btn card-quick-add" data-id="${p.id}" ${p.stock <= 0 ? 'disabled' : ''} title="${isAr ? 'إضافة للسلة' : 'Add to Cart'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="content">
        <span class="category">${isAr ? p.categoryAr : p.categoryEn}</span>
        <a href="#/product/${p.id}" class="title" onclick="event.stopPropagation()">${isAr ? p.titleAr : p.titleEn}</a>
        <div class="price-wrapper">
          <span class="price">${p.price % 1 === 0 ? p.price.toFixed(0) : p.price.toFixed(3)} KWD</span>
          ${p.originalPrice > p.price ? `<span class="old-price">${p.originalPrice % 1 === 0 ? p.originalPrice.toFixed(0) : p.originalPrice.toFixed(3)} KWD</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

HomePage.onMount = () => {
  // Hero Carousel Autoplay script
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  let currentSlide = 0;
  let slideInterval;

  const showSlide = (idx) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
      dots[i].classList.toggle('active', i === idx);
    });
    currentSlide = idx;
  };

  const startAutoplay = () => {
    slideInterval = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }, 6000);
  };

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      const idx = parseInt(dot.dataset.index);
      showSlide(idx);
      startAutoplay();
    });
  });

  startAutoplay();

  // Quick Action Buttons events binding
  const cardsContainer = document.querySelector('.home-page-container');
  if (cardsContainer) {
    // Quick Add to Cart
    cardsContainer.querySelectorAll('.card-quick-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const prod = State.state.products.find(p => p.id === id);
        if (prod) {
          State.addToCart(prod, 1);
        }
      });
    });

    // Toggle Wishlist
    cardsContainer.querySelectorAll('.card-toggle-wish').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const prod = State.state.products.find(p => p.id === id);
        if (prod) {
          State.toggleWishlist(prod);
        }
      });
    });
  }
};
