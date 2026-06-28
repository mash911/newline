import { State, CATEGORY_TREE, findCategoryInTree } from '../store/state.js';
import { renderProductCard } from './Home.js';

export function CategoryPage(params, query) {
  const isAr = State.state.lang === 'ar';
  
  // Set initial category filter from query parameters if present
  if (query && query.category && State.state.filters.category !== query.category) {
    State.state.filters.category = query.category;
  }

  // Set search query in state
  State.state.searchQuery = (query && query.q) ? query.q : '';

  const renderCategoryFilterNode = (cat, depth = 0) => {
    const hasSubs = cat.subcategories && cat.subcategories.length > 0;
    const padding = depth * 12;
    const isActive = State.state.filters.category === cat.id;
    
    let html = `
      <button class="filter-link-btn ${isActive ? 'active' : ''}" data-cat="${cat.id}" style="padding-inline-start:${padding + 8}px; font-size:${depth === 0 ? '0.85rem' : '0.78rem'}; font-weight:${depth === 0 ? '600' : '400'}; text-align:start; display:flex; align-items:center; width:100%; gap:0.4rem; border:none; background:none; cursor:pointer; color:var(--text-primary); transition:var(--transition-fast); padding-top:0.35rem; padding-bottom:0.35rem;">
        ${depth > 0 ? `<span style="opacity:0.35;">—</span>` : ''}
        <span>${isAr ? cat.titleAr : cat.titleEn}</span>
      </button>
    `;
    
    if (hasSubs) {
      cat.subcategories.forEach(sub => {
        html += renderCategoryFilterNode(sub, depth + 1);
      });
    }
    
    return html;
  };

  const filterCategoriesHtml = CATEGORY_TREE.map(cat => renderCategoryFilterNode(cat)).join('');

  return `
    <div class="category-page-container container animate-fade-in">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#/">${isAr ? 'الرئيسية' : 'Home'}</a>
        <span>/</span>
        <a href="#/category">${isAr ? 'المتجر' : 'Shop'}</a>
        ${State.state.filters.category !== 'all' ? `
          <span>/</span>
          <span class="active">${isAr ? getCategoryNameAr(State.state.filters.category) : getCategoryNameEn(State.state.filters.category)}</span>
        ` : ''}
      </div>

      <!-- Main Layout: Sidebar & Content -->
      <div class="shop-layout">
        
        <!-- Sidebar Filters -->
        <aside class="filters-sidebar">
          <div class="filter-header">
            <h5>${isAr ? 'تصفية المنتجات' : 'Filter Products'}</h5>
            <button id="reset-filters-btn" class="btn-text-reset">${isAr ? 'إعادة ضبط' : 'Reset All'}</button>
          </div>

          <!-- Category Selection -->
          <div class="filter-group">
            <h6>${isAr ? 'التصنيفات' : 'Categories'}</h6>
            <div class="filter-links-list">
              <button class="filter-link-btn ${State.state.filters.category === 'all' ? 'active' : ''}" data-cat="all" style="font-size:0.85rem; font-weight:600; text-align:start; display:flex; align-items:center; width:100%; gap:0.4rem; border:none; background:none; cursor:pointer; color:var(--text-primary); transition:var(--transition-fast); padding-top:0.35rem; padding-bottom:0.35rem;">
                <span>${isAr ? 'جميع المنتجات' : 'All Products'}</span>
              </button>
              ${filterCategoriesHtml}
            </div>
          </div>

          <!-- Price Range Slider -->
          <div class="filter-group">
            <h6>${isAr ? 'السعر (د.ك)' : 'Price (KWD)'}</h6>
            <div class="price-slider-wrapper">
              <input type="range" id="price-range-slider" min="0" max="400" step="5" value="${State.state.filters.priceRange[1]}">
              <div class="price-labels">
                <span>0 KWD</span>
                <span id="price-max-label">${State.state.filters.priceRange[1]} KWD</span>
              </div>
            </div>
          </div>

          <!-- Availability filter -->
          <div class="filter-group">
            <h6>${isAr ? 'حالة التوفر' : 'Availability'}</h6>
            <div class="checkbox-options">
              <label class="checkbox-label">
                <input type="radio" name="availability" value="all" ${State.state.filters.availability === 'all' ? 'checked' : ''}>
                <span>${isAr ? 'الكل' : 'All'}</span>
              </label>
              <label class="checkbox-label">
                <input type="radio" name="availability" value="instock" ${State.state.filters.availability === 'instock' ? 'checked' : ''}>
                <span>${isAr ? 'متوفر بالمخزون' : 'In Stock only'}</span>
              </label>
            </div>
          </div>
        </aside>

        <!-- Product Listing Grid Area -->
        <div class="listing-area">
          <!-- Top Tool Bar (Sorting / Grid List toggle) -->
          <div class="listing-toolbar" style="flex-direction:column; align-items:flex-start; gap:0.5rem;">
            ${State.state.searchQuery ? `
              <div style="font-size:0.95rem; color:var(--text-primary); margin-bottom:0.25rem;">
                ${isAr ? 'نتائج البحث عن:' : 'Search results for:'} <strong style="color:var(--accent-gold);">"${State.state.searchQuery}"</strong>
              </div>
            ` : ''}
            <div class="results-count" style="display:flex; justify-content:space-between; width:100%; align-items:center; flex-wrap:wrap; gap:0.5rem;">
              <div>
                <span id="total-results-count">0</span> ${isAr ? 'منتج تم العثور عليه' : 'products found'}
              </div>
            </div>
            
            <div class="toolbar-controls">
              <!-- Sort Select -->
              <div class="sort-select-wrapper">
                <label for="sort-select">${isAr ? 'ترتيب حسب:' : 'Sort By:'}</label>
                <select id="sort-select" class="form-control sort-select">
                  <option value="featured" ${State.state.filters.sort === 'featured' ? 'selected' : ''}>${isAr ? 'المميز' : 'Featured'}</option>
                  <option value="price-asc" ${State.state.filters.sort === 'price-asc' ? 'selected' : ''}>${isAr ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
                  <option value="price-desc" ${State.state.filters.sort === 'price-desc' ? 'selected' : ''}>${isAr ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
                  <option value="rating" ${State.state.filters.sort === 'rating' ? 'selected' : ''}>${isAr ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
                </select>
              </div>

              <!-- Grid / List Switcher -->
              <div class="view-switcher">
                <button id="grid-view-btn" class="btn-icon active" title="${isAr ? 'عرض شبكي' : 'Grid View'}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button id="list-view-btn" class="btn-icon" title="${isAr ? 'عرض طولي' : 'List View'}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Product Cards Grid / Container -->
          <div id="shop-products-container" class="products-grid">
            <!-- Dynamic products loaded by script -->
          </div>

          <!-- Pagination -->
          <div class="pagination-container" id="shop-pagination">
            <!-- Dynamic page numbers -->
          </div>
        </div>

      </div>
    </div>

    <style>
      .category-page-container {
        padding-top: 2rem;
      }
      .breadcrumbs {
        display: flex;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: var(--text-muted);
        margin-bottom: 2rem;
      }
      .breadcrumbs a {
        text-decoration: none;
        color: inherit;
        transition: var(--transition-fast);
      }
      .breadcrumbs a:hover {
        color: var(--accent-gold);
      }
      .breadcrumbs .active {
        color: var(--text-primary);
        font-weight: 500;
      }

      /* Main layout */
      .shop-layout {
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 2.5rem;
      }
      @media (max-width: 992px) {
        .shop-layout {
          grid-template-columns: 1fr;
        }
      }

      /* Sidebar Filters */
      .filters-sidebar {
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-light);
        border-radius: 6px;
        padding: 1.5rem;
        height: fit-content;
      }
      .filter-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
      }
      .filter-header h5 {
        font-size: 1rem;
        font-weight: 600;
      }
      .btn-text-reset {
        background: none;
        border: none;
        color: var(--accent-gold);
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
      }
      .btn-text-reset:hover {
        color: var(--text-primary);
      }

      .filter-group {
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .filter-group:last-child {
        border-bottom: none;
        padding-bottom: 0;
        margin-bottom: 0;
      }
      .filter-group h6 {
        font-size: 0.85rem;
        text-transform: uppercase;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 1rem;
        letter-spacing: 0.05em;
      }
      
      .filter-links-list {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }
      .filter-link-btn {
        background: none;
        border: none;
        text-align: inherit;
        font-size: 0.9rem;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.2rem 0;
        transition: var(--transition-fast);
      }
      .filter-link-btn.active, .filter-link-btn:hover {
        color: var(--accent-gold);
        font-weight: 500;
      }

      .price-slider-wrapper input {
        width: 100%;
        accent-color: var(--accent-gold);
      }
      .price-labels {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: var(--text-secondary);
        margin-top: 0.5rem;
      }

      .checkbox-options {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 0.9rem;
        color: var(--text-secondary);
        cursor: pointer;
      }
      .checkbox-label input {
        accent-color: var(--accent-gold);
      }

      /* Toolbar */
      .listing-toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
      }
      .results-count {
        font-size: 0.9rem;
        color: var(--text-secondary);
      }
      .toolbar-controls {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }
      .sort-select-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .sort-select-wrapper label {
        font-size: 0.85rem;
        color: var(--text-secondary);
        white-space: nowrap;
      }
      .sort-select {
        padding: 0.4rem 2rem 0.4rem 0.8rem;
        font-size: 0.85rem;
        border-radius: 4px;
        width: auto;
      }
      [dir="rtl"] .sort-select {
        padding: 0.4rem 0.8rem 0.4rem 2rem;
      }
      
      .view-switcher {
        display: flex;
        gap: 0.3rem;
      }

      /* List View Override styling */
      .products-grid.list-view {
        grid-template-columns: 1fr !important;
        gap: 1.5rem;
      }
      .products-grid.list-view .product-card {
        flex-direction: row;
        height: 200px;
      }
      .products-grid.list-view .product-card .img-wrapper {
        width: 160px;
        aspect-ratio: auto;
        height: 100%;
      }
      .products-grid.list-view .product-card .content {
        padding: 1.5rem;
      }
      .products-grid.list-view .product-card .card-actions {
        transform: translateY(0);
        background: none;
        position: relative;
        padding: 0;
        justify-content: flex-start;
        margin-top: 1rem;
      }
      .products-grid.list-view .product-card .action-btn {
        box-shadow: none;
        border: 1px solid var(--border-color);
      }

      /* Pagination */
      .pagination-container {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 3rem;
      }
      .page-btn {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-color);
        background-color: var(--bg-primary);
        color: var(--text-primary);
        cursor: pointer;
        border-radius: 4px;
        font-size: 0.9rem;
        font-weight: 500;
        transition: var(--transition-fast);
      }
      .page-btn:hover, .page-btn.active {
        background-color: var(--text-primary);
        border-color: var(--text-primary);
        color: var(--bg-primary);
      }
    </style>
  `;
}

// Categories Helpers
function getCategoryNameEn(key) {
  const cat = findCategoryInTree(CATEGORY_TREE, key);
  return cat ? cat.titleEn : 'All';
}

function getCategoryNameAr(key) {
  const cat = findCategoryInTree(CATEGORY_TREE, key);
  return cat ? cat.titleAr : 'الكل';
}

CategoryPage.onMount = () => {
  const productsContainer = document.getElementById('shop-products-container');
  const countLabel = document.getElementById('total-results-count');
  const sortSelect = document.getElementById('sort-select');
  const priceSlider = document.getElementById('price-range-slider');
  const priceMaxLabel = document.getElementById('price-max-label');
  const resetBtn = document.getElementById('reset-filters-btn');
  const gridBtn = document.getElementById('grid-view-btn');
  const listBtn = document.getElementById('list-view-btn');

  let activePage = 1;
  const itemsPerPage = 4;
  let viewMode = 'grid';

  const filterAndRender = () => {
    const isAr = State.state.lang === 'ar';
    const filters = State.state.filters;

    // Helper to get all category IDs under a node recursively
    const getAllCategoryIds = (node) => {
      let ids = [node.id];
      if (node.subcategories) {
        node.subcategories.forEach(sub => {
          ids = ids.concat(getAllCategoryIds(sub));
        });
      }
      return ids;
    };

    // Filter
    let filtered = State.state.products.filter(p => {
      // Category check supporting nested trees
      if (filters.category !== 'all') {
        const activeCatNode = findCategoryInTree(CATEGORY_TREE, filters.category);
        if (activeCatNode) {
          const allowedIds = getAllCategoryIds(activeCatNode);
          if (!allowedIds.includes(p.category)) return false;
        } else {
          // Fallback if not found in tree
          if (p.category !== filters.category) return false;
        }
      }
      // Price range
      if (p.price > filters.priceRange[1]) return false;
      // Availability
      if (filters.availability === 'instock' && p.stock <= 0) return false;
      
      // Search query
      if (State.state.searchQuery) {
        const query = State.state.searchQuery.trim().toLowerCase();
        const title = isAr ? p.titleAr.toLowerCase() : p.titleEn.toLowerCase();
        const category = isAr ? p.categoryAr.toLowerCase() : p.categoryEn.toLowerCase();
        const sku = p.sku.toLowerCase();
        if (!title.includes(query) && !category.includes(query) && !sku.includes(query)) {
          return false;
        }
      }
      return true;
    });

    // Sort
    if (filters.sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      // Default / Featured
      filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    // Update Counter
    if (countLabel) countLabel.innerText = filtered.length;

    // Paginate
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIdx = (activePage - 1) * itemsPerPage;
    const paginated = filtered.slice(startIdx, startIdx + itemsPerPage);

    // Render Products
    if (productsContainer) {
      if (paginated.length === 0) {
        productsContainer.innerHTML = `
          <div style="grid-column: 1 / -1; padding: 4rem; text-align: center; color: var(--text-muted);">
            ${isAr ? 'لا توجد منتجات مطابقة لخيارات التصفية الحالية.' : 'No products match the selected filters.'}
          </div>
        `;
      } else {
        productsContainer.className = `products-grid ${viewMode}-view`;
        productsContainer.innerHTML = paginated.map(p => renderProductCard(p, isAr)).join('');
        
        // Re-attach quick card actions listeners
        productsContainer.querySelectorAll('.card-quick-add').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const prod = State.state.products.find(p => p.id === id);
            if (prod) State.addToCart(prod, 1);
          });
        });

        productsContainer.querySelectorAll('.card-toggle-wish').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const prod = State.state.products.find(p => p.id === id);
            if (prod) {
              State.toggleWishlist(prod);
              // Simple reload icon state
              filterAndRender();
            }
          });
        });
      }
    }

    // Render Pagination Buttons
    const pagContainer = document.getElementById('shop-pagination');
    if (pagContainer) {
      pagContainer.innerHTML = '';
      if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
          const btn = document.createElement('button');
          btn.className = `page-btn ${i === activePage ? 'active' : ''}`;
          btn.innerText = i;
          btn.addEventListener('click', () => {
            activePage = i;
            filterAndRender();
            window.scrollTo({ top: 150, behavior: 'smooth' });
          });
          pagContainer.appendChild(btn);
        }
      }
    }
  };

  // Attach Sidebar Interactions
  const catBtns = document.querySelectorAll('.filter-link-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      State.state.filters.category = cat;
      activePage = 1;
      filterAndRender();
    });
  });

  if (priceSlider && priceMaxLabel) {
    priceSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      priceMaxLabel.innerText = `${val} KWD`;
      State.state.filters.priceRange[1] = val;
      activePage = 1;
      filterAndRender();
    });
  }

  // Availability radio
  const radios = document.querySelectorAll('input[name="availability"]');
  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      State.state.filters.availability = e.target.value;
      activePage = 1;
      filterAndRender();
    });
  });

  // Sort Select Change
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      State.state.filters.sort = e.target.value;
      filterAndRender();
    });
  }

  // Grid/List views toggles
  if (gridBtn && listBtn) {
    gridBtn.addEventListener('click', () => {
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
      viewMode = 'grid';
      filterAndRender();
    });
    listBtn.addEventListener('click', () => {
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
      viewMode = 'list';
      filterAndRender();
    });
  }

  // Reset Filters
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      State.resetFilters();
      
      // Reset DOM state
      if (priceSlider) {
        priceSlider.value = 400;
        priceMaxLabel.innerText = "400 KWD";
      }
      radios.forEach(r => {
        if (r.value === 'all') r.checked = true;
      });
      catBtns.forEach(b => {
        b.classList.toggle('active', b.dataset.cat === 'all');
      });
      if (sortSelect) sortSelect.value = "featured";

      activePage = 1;
      filterAndRender();
    });
  }

  // Initial call
  filterAndRender();
};
