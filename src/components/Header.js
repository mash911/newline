import { State, CATEGORY_TREE } from '../store/state.js';
import { AppRouter } from '../router.js';

export function Header() {
  const isAr = State.state.lang === 'ar';
  const cartCount = State.state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = State.state.wishlist.length;

  // Render a single category link (with popover if it has subcategories)
  const renderCategoryNav = (cat) => {
    const hasSubs = cat.subcategories && cat.subcategories.length > 0;
    const title = isAr ? cat.titleAr : cat.titleEn;
    
    if (hasSubs) {
      return `
        <div class="nav-item-dropdown">
          <a href="#/category?category=${cat.id}" class="nav-link dropdown-trigger">
            ${title}
            <svg class="dropdown-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </a>
          <div class="megamenu-panel">
            <div class="megamenu-grid">
              ${cat.subcategories.map(sub => {
                const subTitle = isAr ? sub.titleAr : sub.titleEn;
                const hasNested = sub.subcategories && sub.subcategories.length > 0;
                
                return `
                  <div class="megamenu-col">
                    <a href="#/category?category=${sub.id}" class="megamenu-title-link">
                      <img src="${sub.image}" class="megamenu-thumb">
                      <span>${subTitle}</span>
                    </a>
                    ${hasNested ? `
                      <ul class="megamenu-sublist">
                        ${sub.subcategories.map(nested => `
                          <li>
                            <a href="#/category?category=${nested.id}" class="megamenu-item-link">
                              <img src="${nested.image}" class="nested-thumb">
                              <span>${isAr ? nested.titleAr : nested.titleEn}</span>
                            </a>
                          </li>
                        `).join('')}
                      </ul>
                    ` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    } else {
      return `
        <a href="#/category?category=${cat.id}" class="nav-link">${title}</a>
      `;
    }
  };

  const categoriesNavHtml = CATEGORY_TREE.map(cat => renderCategoryNav(cat)).join('');

  return `
    <!-- Top Announcement Bar -->
    <div class="announcement-bar">
      <div class="container bar-content">
        <p>${isAr ? 'شحن مجاني للطلبات بقيمة 100 د.ك أو أكثر!' : 'Free Shipping on orders 100 KWD or above!'}</p>
        <div class="top-links">
          <a href="#/faq">${isAr ? 'الأسئلة الشائعة' : 'FAQs'}</a>
          <span class="divider">|</span>
          <button id="lang-switch-btn" class="lang-switch-btn">
            ${isAr ? 'English' : 'العربية'}
          </button>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="nav-bar-wrapper">
      <div class="container nav-bar-container">
        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-toggle" class="mobile-menu-toggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <!-- Brand Logo -->
        <a href="#/" class="logo" style="display: flex; align-items: center; max-height: 48px;">
          <img src="/feather_logo.png" alt="Feather Home Textile" style="height: 45px; width: auto; object-fit: contain;">
        </a>

        <!-- Desktop Categories Navbar Links Wrapper with scroll arrows -->
        <div class="nav-scroll-container">
          <button type="button" class="nav-scroll-arrow arrow-left" id="nav-arrow-left" aria-label="Scroll left">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <nav class="desktop-nav" id="desktop-nav-scroller">
            ${categoriesNavHtml}
          </nav>

          <button type="button" class="nav-scroll-arrow arrow-right" id="nav-arrow-right" aria-label="Scroll right">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <!-- Search Bar Header Widget -->
        <div class="header-search-container">
          <div class="search-input-wrapper">
            <input type="text" id="header-search-input" class="search-input" placeholder="${isAr ? 'ابحث عن منتج...' : 'Search product...'}">
            <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <!-- Live search dropdown list -->
          <div id="search-suggestions" class="search-suggestions-dropdown"></div>
        </div>

        <!-- Quick Icons Menu -->
        <div class="header-icons">
          <!-- Profile/Admin -->
          <a href="#/dashboard" class="btn-icon" title="${isAr ? 'حسابي' : 'Account'}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>

          <!-- Wishlist -->
          <a href="#/dashboard?tab=wishlist" class="btn-icon" title="${isAr ? 'المفضلة' : 'Wishlist'}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            ${wishlistCount > 0 ? `<span class="badge">${wishlistCount}</span>` : ''}
          </a>

          <!-- Shopping Cart -->
          <button id="cart-drawer-toggle" class="btn-icon" title="${isAr ? 'السلة' : 'Cart'}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            ${cartCount > 0 ? `<span class="badge">${cartCount}</span>` : ''}
          </button>
          
          <!-- Admin Panel Shortcut -->
          <a href="#/admin" class="btn-icon admin-shortcut" title="${isAr ? 'لوحة الإدارة' : 'Admin Board'}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect>
              <rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Navigation -->
    <div id="mobile-menu-backdrop" class="drawer-backdrop">
      <div class="drawer-panel mobile-nav-panel">
        <div class="drawer-header">
          <span class="logo" style="display: flex; align-items: center; max-height: 40px;">
            <img src="/feather_logo.png" alt="Feather Home Textile" style="height: 35px; width: auto; object-fit: contain;">
          </span>
          <button id="mobile-menu-close" style="background:none; border:none; cursor:pointer;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="drawer-body">
          <nav class="mobile-nav-links">
            <a href="#/" class="mobile-nav-link">${isAr ? 'الرئيسية' : 'Home'}</a>
            <a href="#/category" class="mobile-nav-link">${isAr ? 'جميع المنتجات' : 'All Products'}</a>
            ${CATEGORY_TREE.map(cat => `
              <a href="#/category?category=${cat.id}" class="mobile-nav-link" style="font-weight:600;">
                ${isAr ? cat.titleAr : cat.titleEn}
              </a>
              ${cat.subcategories ? cat.subcategories.map(sub => `
                <a href="#/category?category=${sub.id}" class="mobile-nav-link" style="padding-inline-start: 1.5rem; font-size: 0.95rem;">
                  — ${isAr ? sub.titleAr : sub.titleEn}
                </a>
              `).join('') : ''}
            `).join('')}
          </nav>
          
          <!-- Mobile Search -->
          <div class="mobile-search-wrapper" style="margin-top: 2rem;">
            <input type="text" id="mobile-search-input" class="form-control" placeholder="${isAr ? 'ابحث عن منتج...' : 'Search product...'}">
            <div id="mobile-search-suggestions" class="search-suggestions-dropdown" style="position:relative; width:100%; top:5px;"></div>
          </div>
        </div>
        <div class="drawer-footer">
          <button id="mobile-lang-switch" class="btn btn-primary" style="width:100%">
            ${isAr ? 'English Language' : 'اللغة العربية'}
          </button>
        </div>
      </div>
    </div>

    <style>
      /* Announcement Bar */
      .announcement-bar {
        background-color: var(--text-primary);
        color: var(--bg-primary);
        font-size: 0.8rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--border-color);
      }
      .bar-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .top-links {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }
      .top-links a {
        color: inherit;
        text-decoration: none;
      }
      .top-links a:hover {
        color: var(--accent-gold);
      }
      .lang-switch-btn {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 500;
        transition: var(--transition-fast);
      }
      .lang-switch-btn:hover {
        color: var(--accent-gold);
      }
      
      /* Navigation Bar Wrapper */
      .nav-bar-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: var(--header-height);
        background-color: rgba(252, 251, 250, 0.95);
        backdrop-filter: blur(8px);
        border-bottom: 1px solid var(--border-light);
        z-index: 900;
        transition: var(--transition-smooth);
      }
      .dark-theme .nav-bar-wrapper {
        background-color: rgba(15, 15, 17, 0.95);
      }
      .sticky-shrink .nav-bar-wrapper {
        height: var(--header-height-shrink);
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      }
      .announcement-bar + .nav-bar-wrapper {
        top: 31px;
      }
      .sticky-shrink.announcement-bar + .nav-bar-wrapper {
        top: 0;
      }
      
      .nav-bar-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        gap: 1rem;
      }

      /* Logo Styling */
      .logo {
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-decoration: none;
        color: var(--text-primary);
        flex-shrink: 0;
      }
      .logo span {
        font-weight: 300;
        font-size: 0.75rem;
        color: var(--accent-gold);
        letter-spacing: 0.05em;
        display: block;
        margin-top: -4px;
      }
      
      /* Desktop Navigation Scroll Container */
      .nav-scroll-container {
        display: flex;
        align-items: center;
        flex: 1;
        position: relative;
        overflow: hidden;
        margin: 0 1rem;
        padding: 0 28px;
      }
      .nav-scroll-arrow {
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        color: var(--text-primary);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10;
        transition: var(--transition-fast);
        opacity: 0.8;
        flex-shrink: 0;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .nav-scroll-arrow.arrow-left {
        left: 2px;
      }
      .nav-scroll-arrow.arrow-right {
        right: 2px;
      }
      .nav-scroll-arrow:hover {
        background: var(--text-primary);
        color: var(--bg-primary);
        opacity: 1;
        border-color: var(--text-primary);
      }
      .nav-scroll-arrow:disabled {
        opacity: 0;
        pointer-events: none;
      }
      
      /* Desktop Navigation Categories */
      .desktop-nav {
        display: flex;
        gap: 0.8rem;
        flex: 1;
        overflow-x: auto;
        padding: 0 0.5rem;
        scrollbar-width: none; /* Firefox */
        align-items: center;
        scroll-behavior: smooth;
      }
      .desktop-nav::-webkit-scrollbar {
        display: none; /* Chrome/Safari */
      }
      .nav-link {
        font-size: 0.82rem;
        font-weight: 600;
        text-decoration: none;
        color: var(--text-primary);
        position: relative;
        padding: 0.5rem 0.4rem;
        transition: var(--transition-fast);
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }
      .nav-link:hover {
        color: var(--accent-gold);
      }
      .dropdown-chevron {
        opacity: 0.6;
        transition: transform 0.2s ease;
      }
      .nav-item-dropdown:hover .dropdown-chevron {
        transform: rotate(180deg);
      }

      /* Dropdown Mega-Menu Panel */
      .nav-item-dropdown {
        position: relative;
      }
      .megamenu-panel {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(10px);
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        box-shadow: var(--modal-shadow);
        border-radius: 8px;
        width: max-content;
        min-width: 280px;
        max-width: 600px;
        padding: 1rem;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease, transform 0.25s ease;
        z-index: 1000;
      }
      .nav-item-dropdown:hover .megamenu-panel {
        opacity: 1;
        pointer-events: auto;
        transform: translateX(-50%) translateY(0);
      }
      .megamenu-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 1rem;
      }
      .megamenu-col {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .megamenu-title-link {
        font-size: 0.85rem;
        font-weight: 700;
        text-decoration: none;
        color: var(--text-primary);
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding-bottom: 0.35rem;
        border-bottom: 1px solid var(--border-light);
      }
      .megamenu-title-link:hover {
        color: var(--accent-gold);
      }
      .megamenu-thumb {
        width: 24px;
        height: 24px;
        object-fit: cover;
        border-radius: 4px;
      }
      .nested-thumb {
        width: 18px;
        height: 18px;
        object-fit: cover;
        border-radius: 3px;
      }
      .megamenu-sublist {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }
      .megamenu-item-link {
        font-size: 0.78rem;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-secondary);
        display: flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.15rem 0;
        transition: var(--transition-fast);
      }
      .megamenu-item-link:hover {
        color: var(--accent-gold);
        transform: translateX(3px);
      }
      [dir="rtl"] .megamenu-item-link:hover {
        transform: translateX(-3px);
      }

      /* Search Bar widget styles */
      .header-search-container {
        position: relative;
        flex-shrink: 0;
        width: 180px;
        transition: width 0.3s ease;
      }
      .header-search-container:focus-within {
        width: 220px;
      }
      .search-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }
      .search-input {
        width: 100%;
        padding: 0.4rem 1rem 0.4rem 2rem;
        background-color: var(--bg-secondary);
        border: 1px solid transparent;
        border-radius: 20px;
        font-size: 0.8rem;
        color: var(--text-primary);
        outline: none;
        transition: var(--transition-fast);
      }
      [dir="rtl"] .search-input {
        padding: 0.4rem 2rem 0.4rem 1rem;
      }
      .search-input:focus {
        background-color: var(--bg-primary);
        border-color: var(--accent-gold);
        box-shadow: 0 0 0 3px rgba(197, 168, 128, 0.1);
      }
      .search-icon {
        position: absolute;
        left: 0.6rem;
        color: var(--text-muted);
        pointer-events: none;
        width: 14px;
        height: 14px;
      }
      [dir="rtl"] .search-icon {
        left: auto;
        right: 0.6rem;
      }
      .search-suggestions-dropdown {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        right: 0;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        box-shadow: var(--modal-shadow);
        z-index: 999;
        max-height: 380px;
        overflow-y: auto;
        display: none;
      }
      .search-suggestions-dropdown.active {
        display: block;
      }
      .suggestion-item {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.6rem 1rem;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        border-bottom: 1px solid var(--border-light);
        transition: var(--transition-fast);
      }
      .suggestion-item:hover {
        background-color: var(--bg-secondary);
      }
      .suggestion-item img {
        width: 40px;
        height: 50px;
        object-fit: cover;
        border-radius: 3px;
      }
      .suggestion-item .info {
        flex: 1;
      }
      .suggestion-item .title {
        font-size: 0.85rem;
        font-weight: 500;
        margin-bottom: 0.15rem;
      }
      .suggestion-item .price {
        font-size: 0.8rem;
        color: var(--accent-gold);
        font-weight: 600;
      }

      /* Icons styling */
      .header-icons {
        display: flex;
        gap: 0.2rem;
        align-items: center;
        flex-shrink: 0;
      }
      .btn-icon {
        position: relative;
      }
      .btn-icon .badge {
        position: absolute;
        top: -4px;
        right: -4px;
        background-color: var(--accent-gold);
        color: white;
        font-size: 0.65rem;
        padding: 0.1rem 0.3rem;
        border-radius: 10px;
        font-weight: 700;
      }
      
      .admin-shortcut {
        color: var(--accent-gold) !important;
      }

      /* Mobile elements */
      .mobile-menu-toggle {
        display: none;
        background: none;
        border: none;
        color: var(--text-primary);
        cursor: pointer;
        padding: 0.5rem;
      }
      .mobile-nav-panel {
        transform: translateX(-100%);
      }
      [dir="rtl"] .mobile-nav-panel {
        transform: translateX(100%);
      }
      .mobile-nav-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .mobile-nav-link {
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-primary);
        border-bottom: 1px solid var(--border-light);
        padding-bottom: 0.4rem;
      }

      @media (max-width: 1024px) {
        .desktop-nav {
          display: none;
        }
        .mobile-menu-toggle {
          display: block;
        }
        .header-search-container {
          display: none; /* Show mobile search instead */
        }
      }
    </style>
  `;
}

// Interactive scripts for search suggestions, sticky navbar, mobile drawers, and language switches
Header.onMount = () => {
  // Sticky Navbar shrink
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      document.body.classList.add('sticky-shrink');
    } else {
      document.body.classList.remove('sticky-shrink');
    }
  });

  // Language switch
  const langSwitchBtn = document.getElementById('lang-switch-btn');
  const mobileLangSwitch = document.getElementById('mobile-lang-switch');
  
  const switchLang = () => {
    const nextLang = State.state.lang === 'ar' ? 'en' : 'ar';
    State.setLanguage(nextLang);
  };

  if (langSwitchBtn) langSwitchBtn.addEventListener('click', switchLang);
  if (mobileLangSwitch) mobileLangSwitch.addEventListener('click', switchLang);

  // Mobile Menu drawer controls
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const backdrop = document.getElementById('mobile-menu-backdrop');

  if (toggleBtn && backdrop) {
    toggleBtn.addEventListener('click', () => {
      backdrop.classList.add('active');
      backdrop.querySelector('.drawer-panel').style.transform = 'translateX(0)';
    });
  }

  const hideMobileMenu = () => {
    if (backdrop) {
      backdrop.classList.remove('active');
      const isRtl = State.state.lang === 'ar';
      backdrop.querySelector('.drawer-panel').style.transform = isRtl ? 'translateX(100%)' : 'translateX(-100%)';
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', hideMobileMenu);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) hideMobileMenu();
    });
  }

  // Cart Drawer show trigger
  const cartToggle = document.getElementById('cart-drawer-toggle');
  if (cartToggle) {
    cartToggle.addEventListener('click', () => {
      const drawer = document.getElementById('cart-drawer-backdrop');
      if (drawer) {
        drawer.classList.add('active');
        drawer.querySelector('.drawer-panel').style.transform = 'translateX(0)';
      }
    });
  }

  // Live Autocomplete Search implementation
  const setupAutocomplete = (inputId, dropdownId) => {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);
    if (!input || !dropdown) return;

    input.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        dropdown.classList.remove('active');
        dropdown.innerHTML = '';
        return;
      }

      const isAr = State.state.lang === 'ar';
      // Search matches title, SKU, or category
      const matches = State.state.products.filter(p => {
        const title = isAr ? p.titleAr.toLowerCase() : p.titleEn.toLowerCase();
        const category = isAr ? p.categoryAr.toLowerCase() : p.categoryEn.toLowerCase();
        const sku = p.sku.toLowerCase();
        return title.includes(query) || category.includes(query) || sku.includes(query);
      });

      if (matches.length === 0) {
        dropdown.innerHTML = `
          <div style="padding:1rem; text-align:center; font-size:0.85rem; color:var(--text-muted);">
            ${isAr ? 'لا توجد نتائج مطابقة' : 'No matching results found.'}
          </div>
        `;
        dropdown.classList.add('active');
        return;
      }

      dropdown.innerHTML = matches.slice(0, 5).map(p => `
        <a href="#/product/${p.id}" class="suggestion-item">
          <img src="${p.image}" alt="${isAr ? p.titleAr : p.titleEn}">
          <div class="info">
            <div class="title">${isAr ? p.titleAr : p.titleEn}</div>
            <div class="price">${p.price.toFixed(3)} KWD</div>
          </div>
        </a>
      `).join('');

      dropdown.classList.add('active');

      // Add click handler to close suggestions
      dropdown.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
          dropdown.classList.remove('active');
          input.value = '';
          hideMobileMenu();
        });
      });
    });

    // Redirect to category search page when Enter is pressed
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const queryVal = e.target.value.trim();
        if (queryVal) {
          dropdown.classList.remove('active');
          window.location.hash = `#/category?q=${encodeURIComponent(queryVal)}`;
          if (typeof hideMobileMenu === 'function') hideMobileMenu();
        }
      }
    });

    // Close suggestions if clicked outside
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  };

  setupAutocomplete('header-search-input', 'search-suggestions');
  setupAutocomplete('mobile-search-input', 'mobile-search-suggestions');

  // Desktop Category Scroller navigation arrows logic
  const scroller = document.getElementById('desktop-nav-scroller');
  const btnLeft = document.getElementById('nav-arrow-left');
  const btnRight = document.getElementById('nav-arrow-right');

  if (scroller && btnLeft && btnRight) {
    const updateArrows = () => {
      const scrollLeft = scroller.scrollLeft;
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const isRtl = State.state.lang === 'ar';

      if (isRtl) {
        // RTL logic (scrollLeft is negative or zero)
        const absScrollLeft = Math.abs(scrollLeft);
        btnRight.disabled = absScrollLeft <= 5;
        btnLeft.disabled = absScrollLeft >= maxScroll - 5;
      } else {
        // LTR logic (scrollLeft is positive)
        btnLeft.disabled = scrollLeft <= 5;
        btnRight.disabled = scrollLeft >= maxScroll - 5;
      }
    };

    // Initial arrow check
    updateArrows();
    scroller.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);

    const isRtl = State.state.lang === 'ar';
    btnLeft.addEventListener('click', () => {
      // In LTR: Left button scrolls LEFT (reveals left content, i.e. scrollLeft goes down).
      // In RTL: Left button (which is on the right side) scrolls LEFT (reveals left content, i.e. scrollLeft goes down/negative).
      // So Left click always decreases scroll index (negative delta).
      const dir = isRtl ? -150 : -150;
      scroller.scrollBy({ left: dir, behavior: 'smooth' });
    });
    btnRight.addEventListener('click', () => {
      // In LTR: Right button scrolls RIGHT (reveals right content, i.e. scrollLeft goes up).
      // In RTL: Right button scrolls RIGHT (reveals right content, i.e. scrollLeft goes up/less negative).
      // So Right click always increases scroll index (positive delta).
      const dir = isRtl ? 150 : 150;
      scroller.scrollBy({ left: dir, behavior: 'smooth' });
    });
  }
};
