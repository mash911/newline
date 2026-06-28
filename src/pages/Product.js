import { State } from '../store/state.js';
import { renderProductCard } from './Home.js';

export function ProductPage(params) {
  const isAr = State.state.lang === 'ar';
  const id = parseInt(params.id);
  const prod = State.state.products.find(p => p.id === id);

  if (!prod) {
    return `
      <div class="container" style="padding: 6rem 0; text-align: center;">
        <h2>${isAr ? 'عذراً، المنتج غير موجود' : 'Product Not Found'}</h2>
        <a href="#/category" class="btn btn-primary" style="margin-top: 1.5rem;">${isAr ? 'العودة للمتجر' : 'Back to Shop'}</a>
      </div>
    `;
  }

  // Update Recently Viewed history (limit to 4)
  if (!State.state.recentlyViewed) State.state.recentlyViewed = [];
  if (!State.state.recentlyViewed.includes(id)) {
    State.state.recentlyViewed.unshift(id);
    if (State.state.recentlyViewed.length > 4) State.state.recentlyViewed.pop();
  }

  const isWish = State.isInWishlist(prod.id);
  const discountPercent = prod.originalPrice > prod.price ? Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100) : 0;
  
  // Find related products (same category, excluding current)
  const related = State.state.products.filter(p => p.category === prod.category && p.id !== prod.id).slice(0, 3);
  
  // Find recently viewed products (excluding current)
  const viewed = State.state.products.filter(p => State.state.recentlyViewed.includes(p.id) && p.id !== prod.id);

  return `
    <div class="product-page-container container animate-fade-in">
      
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#/">${isAr ? 'الرئيسية' : 'Home'}</a>
        <span>/</span>
        <a href="#/category">${isAr ? 'المتجر' : 'Shop'}</a>
        <span>/</span>
        <a href="#/category?category=${prod.category}">${isAr ? prod.categoryAr : prod.categoryEn}</a>
        <span>/</span>
        <span class="active">${isAr ? prod.titleAr : prod.titleEn}</span>
      </div>

      <!-- Main Columns: Gallery & Buy Actions -->
      <div class="product-hero-layout">
        
        <!-- Left: Image Gallery & Zoom -->
        <div class="gallery-column">
          <!-- Main Display image with magnifying lens zoom wrapper -->
          <div class="main-image-zoom-container" id="zoom-img-wrapper">
            <img src="${prod.image}" alt="${isAr ? prod.titleAr : prod.titleEn}" id="zoom-display-image">
            <div class="lens" id="zoom-lens"></div>
            <div class="zoom-panel-result" id="zoom-result-panel" style="background-image: url('${prod.image}');"></div>
          </div>

          <!-- Thumbnails Row -->
          <div class="thumbnails-row">
            ${prod.images.map((imgUrl, i) => `
              <div class="thumbnail-wrapper ${i === 0 ? 'active' : ''}" data-url="${imgUrl}">
                <img src="${imgUrl}" alt="Thumbnail">
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right: Actions Form details -->
        <div class="actions-column">
          <span class="category-tag">${isAr ? prod.categoryAr : prod.categoryEn}</span>
          <h1 class="product-title">${isAr ? prod.titleAr : prod.titleEn}</h1>
          
          <!-- Price & Discounts -->
          <div class="price-box">
            <span class="price">${prod.price % 1 === 0 ? prod.price.toFixed(0) : prod.price.toFixed(3)} KWD</span>
            ${prod.originalPrice > prod.price ? `
              <span class="old-price">${prod.originalPrice % 1 === 0 ? prod.originalPrice.toFixed(0) : prod.originalPrice.toFixed(3)} KWD</span>
              <span class="discount-badge">${isAr ? `وفر ${discountPercent}%` : `${discountPercent}% OFF`}</span>
            ` : ''}
          </div>

          <hr class="divider">

          <!-- SKU / Stock -->
          <div class="meta-rows">
            <p><strong>SKU:</strong> <span class="num">${prod.sku}</span></p>
            <p>
              <strong>${isAr ? 'التوفر:' : 'Stock Status:'}</strong> 
              ${prod.stock > 0 
                ? (prod.stock < 5 
                    ? `<span class="stock-badge low">${isAr ? `مخزون منخفض - متبقي <span class="num">${prod.stock}</span> فقط!` : `Low Stock - Only <span class="num">${prod.stock}</span> left!`}</span>`
                    : `<span class="stock-badge in">${isAr ? 'متوفر بالمخزون' : 'In Stock'}</span>`)
                : `<span class="stock-badge out">${isAr ? 'نفذت الكمية' : 'Out of Stock'}</span>`
              }
            </p>
          </div>

          <!-- Color Swatches selection -->
          ${prod.colors && prod.colors.length > 0 ? `
            <div class="swatches-group">
              <span class="label">
                ${isAr ? 'اختر اللون:' : 'Select Color:'} 
                <strong id="selected-color-label">${isAr ? prod.colors[0].nameAr : prod.colors[0].nameEn}</strong>
              </span>
              <div class="swatches">
                ${prod.colors.map((c, i) => `
                  <div class="color-swatch ${i === 0 ? 'active' : ''}" 
                       style="background-color: ${c.code};" 
                       data-color-en="${c.nameEn}" 
                       data-color-ar="${c.nameAr}">
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Size Selection swatches -->
          ${prod.sizes && prod.sizes.length > 0 ? `
            <div class="swatches-group">
              <span class="label">
                ${isAr ? 'المقاس:' : 'Size:'} 
                <strong id="selected-size-label">${prod.sizes[0]}</strong>
              </span>
              <div class="swatches">
                ${prod.sizes.map((s, i) => `
                  <div class="size-swatch ${i === 0 ? 'active' : ''}" data-size="${s}">${s}</div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Quantity Counter and Action Buttons -->
          <div class="buy-section-actions">
            <div class="quantity-controller">
              <button id="detail-dec-qty" class="qty-control">-</button>
              <input type="text" id="detail-qty-input" class="number-input" value="1" readonly translate="no">
              <button id="detail-inc-qty" class="qty-control">+</button>
            </div>

            <div class="buttons-grid">
              <button id="detail-add-to-cart" class="btn btn-primary btn-lg" ${prod.stock <= 0 ? 'disabled' : ''}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span>${isAr ? 'إضافة إلى السلة' : 'Add to Cart'}</span>
              </button>
              <button id="detail-buy-now" class="btn btn-accent btn-lg" ${prod.stock <= 0 ? 'disabled' : ''}>
                ${isAr ? 'شراء الآن' : 'Buy Now'}
              </button>
            </div>
          </div>

          <!-- Wishlist & Share Shortcuts -->
          <div class="extra-actions-flex">
            <button id="detail-wish-btn" class="btn-text-action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" style="${isWish ? 'color:var(--error-color)' : ''}">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>${isWish ? (isAr ? 'مضاف في المفضلة' : 'In Wishlist') : (isAr ? 'أضف للمفضلة' : 'Add to Wishlist')}</span>
            </button>
            <span class="divider">|</span>
            <button id="detail-share-btn" class="btn-text-action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              <span>${isAr ? 'مشاركة المنتج' : 'Share Product'}</span>
            </button>
          </div>

        </div>
      </div>

      <!-- Description Section -->
      <section class="description-tabs-container" style="border-top:1px solid var(--border-light); padding-top:2rem; margin-top:2rem;">
        <h2 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-primary); border-bottom: 2px solid var(--accent-gold); display: inline-block; padding-bottom: 0.25rem;">
          ${isAr ? 'وصف المنتج' : 'Product Description'}
        </h2>
        <div class="tab-panel active" id="panel-desc" style="display: block; padding-top: 0.5rem;">
          <p class="tab-paragraph" style="line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">${isAr ? prod.descriptionAr : prod.descriptionEn}</p>
          <ul class="features-bullets-list" style="margin-top: 1rem; list-style: none; padding: 0;">
            ${(isAr ? prod.featuresAr : prod.featuresEn).map(f => `<li style="margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">✨ ${f}</li>`).join('')}
          </ul>
        </div>
      </section>

      <!-- Related Products Grid -->
      ${related.length > 0 ? `
        <section class="related-products-section">
          <h4 class="section-title">${isAr ? 'منتجات ذات صلة' : 'Related Products'}</h4>
          <div class="products-grid">
            ${related.map(p => renderProductCard(p, isAr)).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Recently Viewed section -->
      ${viewed.length > 0 ? `
        <section class="related-products-section" style="margin-top: 4rem;">
          <h4 class="section-title">${isAr ? 'منتجات شاهدتها مؤخراً' : 'Recently Viewed'}</h4>
          <div class="products-grid">
            ${viewed.map(p => renderProductCard(p, isAr)).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Share Modal (Hidden by default) -->
      <div id="share-modal-backdrop" class="modal-backdrop">
        <div class="share-modal-content">
          <h6>${isAr ? 'مشاركة هذا المنتج' : 'Share this Product'}</h6>
          <div class="share-buttons">
            <button class="btn btn-secondary share-link-copy-btn">${isAr ? 'نسخ الرابط' : 'Copy Link'}</button>
            <a href="https://twitter.com" target="_blank" class="btn btn-secondary">Twitter</a>
            <a href="https://facebook.com" target="_blank" class="btn btn-secondary">Facebook</a>
          </div>
          <button id="close-share-modal" class="btn btn-primary" style="margin-top:1.5rem; width:100%">${isAr ? 'إغلاق' : 'Close'}</button>
        </div>
      </div>

    </div>

    <style>
      .product-page-container {
        padding-top: 2rem;
      }
      .product-hero-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3.5rem;
        margin-top: 1rem;
      }
      @media (max-width: 992px) {
        .product-hero-layout {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }

      /* Gallery styling */
      .gallery-column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .main-image-zoom-container {
        position: relative;
        aspect-ratio: 4 / 5;
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-light);
        border-radius: 6px;
        overflow: hidden;
        cursor: crosshair;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .main-image-zoom-container img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
      }
      
      /* Lens & Result zoom panel */
      .main-image-zoom-container .lens {
        position: absolute;
        border: 1px solid var(--accent-gold);
        width: 120px;
        height: 120px;
        background-color: rgba(197, 168, 128, 0.15);
        display: none;
        pointer-events: none;
      }
      .zoom-panel-result {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 200% 200%; /* zoom level */
        display: none;
        pointer-events: none;
        z-index: 5;
      }

      .thumbnails-row {
        display: none !important;
        gap: 0.8rem;
      }
      .thumbnail-wrapper {
        width: 70px;
        height: 90px;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid var(--border-color);
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .thumbnail-wrapper.active, .thumbnail-wrapper:hover {
        border-color: var(--text-primary);
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      }
      .thumbnail-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      /* Detail Info */
      .actions-column {
        display: flex;
        flex-direction: column;
      }
      .category-tag {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: var(--text-muted);
        letter-spacing: 0.05em;
        margin-bottom: 0.5rem;
      }
      .product-title {
        font-family: 'Playfair Display', serif;
        font-size: 2.2rem;
        font-weight: 500;
        line-height: 1.25;
        margin-bottom: 0.8rem;
      }
      .rating-row {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 0.85rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
      }
      
      .price-box {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }
      .price-box .price {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--accent-gold);
      }
      .price-box .old-price {
        text-decoration: line-through;
        font-size: 1.2rem;
        color: var(--text-muted);
      }
      .price-box .discount-badge {
        background-color: var(--accent-gold-light);
        color: var(--accent-gold);
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0.25rem 0.6rem;
        border-radius: 4px;
      }
      
      .meta-rows {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        font-size: 0.9rem;
        margin: 1.5rem 0;
      }
      .meta-rows strong {
        color: var(--text-primary);
      }
      .meta-rows span {
        color: var(--text-secondary);
      }
      .stock-badge {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.15rem 0.5rem;
        border-radius: 3px;
      }
      .stock-badge.in { background-color: #e8f5e9; color: var(--success-color); }
      .stock-badge.low { background-color: #fff3e0; color: var(--warning-color); }
      .stock-badge.out { background-color: #ffebee; color: var(--error-color); }

      .swatches-group {
        margin-bottom: 1.5rem;
      }
      .swatches-group .label {
        font-size: 0.85rem;
        color: var(--text-secondary);
        display: block;
        margin-bottom: 0.6rem;
      }

      /* Buttons & Qty */
      .buy-section-actions {
        display: flex;
        gap: 1rem;
        margin: 2rem 0;
        flex-wrap: wrap;
      }
      .quantity-controller {
        display: flex;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        overflow: hidden;
        height: 50px;
        background-color: var(--bg-primary);
      }
      .qty-control {
        background: none;
        border: none;
        width: 45px;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 500;
      }
      .qty-control:hover {
        background-color: var(--bg-secondary);
      }
      .quantity-controller input {
        width: 50px;
        text-align: center;
        border: none;
        border-left: 1px solid var(--border-color);
        border-right: 1px solid var(--border-color);
        font-weight: 600;
        font-size: 1rem;
        background-color: transparent;
        color: var(--text-primary);
      }
      
      .buttons-grid {
        display: flex;
        gap: 0.8rem;
        flex: 1;
        min-width: 250px;
      }
      .buttons-grid button {
        flex: 1;
        height: 50px;
      }
      
      .extra-actions-flex {
        display: flex;
        gap: 1.5rem;
        font-size: 0.85rem;
        color: var(--text-secondary);
        align-items: center;
      }
      .btn-text-action {
        background: none;
        border: none;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        cursor: pointer;
        color: inherit;
        font-size: inherit;
        transition: var(--transition-fast);
      }
      .btn-text-action:hover {
        color: var(--text-primary);
      }

      /* Tabs description */
      .description-tabs-container {
        margin: 5rem 0;
      }
      .tab-paragraph {
        font-size: 1rem;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 1.5rem;
      }
      .features-bullets-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        font-size: 0.95rem;
        color: var(--text-secondary);
      }
      .specs-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.95rem;
      }
      .specs-table tr {
        border-bottom: 1px solid var(--border-light);
      }
      .specs-table td {
        padding: 0.8rem 1rem;
        color: var(--text-secondary);
      }
      .specs-table td:first-child {
        width: 30%;
        color: var(--text-primary);
      }

      .related-products-section .section-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.6rem;
        margin-bottom: 1.8rem;
      }

      /* Share Modal style */
      .share-modal-content {
        background-color: var(--bg-primary);
        padding: 2rem;
        border-radius: 8px;
        max-width: 400px;
        width: calc(100% - 4rem);
        box-shadow: var(--modal-shadow);
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1002;
      }
      .share-modal-content h6 {
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
      }
      .share-buttons {
        display: flex;
        justify-content: center;
        gap: 0.8rem;
      }
    </style>
  `;
}

ProductPage.onMount = (params) => {
  const isAr = State.state.lang === 'ar';
  const id = parseInt(params.id);
  const prod = State.state.products.find(p => p.id === id);
  if (!prod) return;

  State.setLastViewedProduct(prod.id, prod.titleAr, prod.titleEn);

  // Thumbnail click selection logic
  const thumbs = document.querySelectorAll('.thumbnail-wrapper');
  const mainDisplay = document.getElementById('zoom-display-image');
  const resultPanel = document.getElementById('zoom-result-panel');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const url = thumb.dataset.url;
      if (mainDisplay) mainDisplay.src = url;
      if (resultPanel) resultPanel.style.backgroundImage = `url('${url}')`;
    });
  });

  // Hover Zoom pan effect script
  const imgWrapper = document.getElementById('zoom-img-wrapper');
  const lens = document.getElementById('zoom-lens');

  if (imgWrapper && mainDisplay && lens && resultPanel) {
    const handleMove = (e) => {
      resultPanel.style.display = 'block';
      lens.style.display = 'block';
      
      const rect = imgWrapper.getBoundingClientRect();
      let x = e.clientX - rect.left - lens.offsetWidth / 2;
      let y = e.clientY - rect.top - lens.offsetHeight / 2;

      // Bound lens dimensions inside boundary
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      if (x > imgWrapper.offsetWidth - lens.offsetWidth) x = imgWrapper.offsetWidth - lens.offsetWidth;
      if (y > imgWrapper.offsetHeight - lens.offsetHeight) y = imgWrapper.offsetHeight - lens.offsetHeight;

      lens.style.left = `${x}px`;
      lens.style.top = `${y}px`;

      // Translate coordinates to percentage zoom
      const px = (x / (imgWrapper.offsetWidth - lens.offsetWidth)) * 100;
      const py = (y / (imgWrapper.offsetHeight - lens.offsetHeight)) * 100;

      resultPanel.style.backgroundPosition = `${px}% ${py}%`;
    };

    const handleLeave = () => {
      resultPanel.style.display = 'none';
      lens.style.display = 'none';
    };

    imgWrapper.addEventListener('mousemove', handleMove);
    imgWrapper.addEventListener('mouseleave', handleLeave);
  }

  // Active color swatch switch logic
  const colorSwatches = document.querySelectorAll('.color-swatch');
  const selectedColorLabel = document.getElementById('selected-color-label');
  let selectedColor = prod.colors && prod.colors[0] ? prod.colors[0].nameEn : null;

  const updateVariationUI = () => {
    if (!prod.variations || prod.variations.length === 0) return;
    
    const variation = prod.variations.find(
      v => (v.colorEn === selectedColor || v.colorAr === selectedColor || (v.color && v.color.nameEn === selectedColor)) && v.size === selectedSize
    );
    
    if (variation) {
      const priceBox = document.querySelector('.price-box');
      if (priceBox) {
        const formattedPrice = variation.price % 1 === 0 ? variation.price.toFixed(0) : variation.price.toFixed(3);
        priceBox.innerHTML = `<span class="price">${formattedPrice} KWD</span>`;
      }
      
      if (variation.image) {
        if (mainDisplay) mainDisplay.src = variation.image;
        if (resultPanel) resultPanel.style.backgroundImage = `url('${variation.image}')`;
      }

      const metaRows = document.querySelector('.meta-rows');
      if (metaRows) {
        const stockBadgeWrapper = metaRows.querySelector('p:nth-child(3)');
        if (stockBadgeWrapper) {
          stockBadgeWrapper.innerHTML = `
            <strong>${isAr ? 'التوفر:' : 'Stock Status:'}</strong> 
            ${variation.stock > 0 
              ? (variation.stock < 5 
                  ? `<span class="stock-badge low">${isAr ? `مخزون منخفض - متبقي <span class="num">${variation.stock}</span> فقط!` : `Low Stock - Only <span class="num">${variation.stock}</span> left!`}</span>`
                  : `<span class="stock-badge in">${isAr ? 'متوفر بالمخزون' : 'In Stock'}</span>`)
              : `<span class="stock-badge out">${isAr ? 'نفذت الكمية' : 'Out of Stock'}</span>`
            }
          `;
        }
      }
    }
  };

  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      colorSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      const label = isAr ? swatch.dataset.colorAr : swatch.dataset.colorEn;
      selectedColor = swatch.dataset.colorEn;
      if (selectedColorLabel) selectedColorLabel.innerText = label;
      updateVariationUI();
    });
  });

  // Active size swatch switch
  const sizeSwatches = document.querySelectorAll('.size-swatch');
  const selectedSizeLabel = document.getElementById('selected-size-label');
  let selectedSize = prod.sizes && prod.sizes[0] ? prod.sizes[0] : null;

  sizeSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      sizeSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      const size = swatch.dataset.size;
      selectedSize = size;
      if (selectedSizeLabel) selectedSizeLabel.innerText = size;
      updateVariationUI();
    });
  });

  // Run initial sync
  updateVariationUI();

  // Detail Counter (+ / -) controls
  const decBtn = document.getElementById('detail-dec-qty');
  const incBtn = document.getElementById('detail-inc-qty');
  const qtyInput = document.getElementById('detail-qty-input');
  let currentQty = 1;

  if (decBtn && incBtn && qtyInput) {
    decBtn.addEventListener('click', () => {
      if (currentQty > 1) {
        currentQty--;
        qtyInput.value = currentQty;
      }
    });

    incBtn.addEventListener('click', () => {
      if (currentQty < prod.stock) {
        currentQty++;
        qtyInput.value = currentQty;
      } else {
        State.showToast(
          isAr 
            ? `عذراً، الحد الأقصى المتوفر بالمخزون هو ${prod.stock}` 
            : `Sorry, maximum available stock is ${prod.stock}`, 
          'error'
        );
      }
    });
  }

  // Add To Cart Submit action
  const addToCartBtn = document.getElementById('detail-add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const activeColorSwatch = document.querySelector('.actions-column .color-swatch.active') || document.querySelector('.color-swatch.active');
      const activeSizeSwatch = document.querySelector('.actions-column .size-swatch.active') || document.querySelector('.size-swatch.active');
      
      const chosenColor = activeColorSwatch ? activeColorSwatch.dataset.colorEn : (prod.colors && prod.colors[0] ? prod.colors[0].nameEn : null);
      const chosenSize = activeSizeSwatch ? activeSizeSwatch.dataset.size : (prod.sizes && prod.sizes[0] ? prod.sizes[0] : null);
      
      State.addToCart(prod, currentQty, chosenColor, chosenSize);
    });
  }

  // Buy Now Action
  const buyNowBtn = document.getElementById('detail-buy-now');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      const activeColorSwatch = document.querySelector('.actions-column .color-swatch.active') || document.querySelector('.color-swatch.active');
      const activeSizeSwatch = document.querySelector('.actions-column .size-swatch.active') || document.querySelector('.size-swatch.active');
      
      const chosenColor = activeColorSwatch ? activeColorSwatch.dataset.colorEn : (prod.colors && prod.colors[0] ? prod.colors[0].nameEn : null);
      const chosenSize = activeSizeSwatch ? activeSizeSwatch.dataset.size : (prod.sizes && prod.sizes[0] ? prod.sizes[0] : null);
      
      State.addToCart(prod, currentQty, chosenColor, chosenSize);
      AppRouter.navigateTo('/checkout');
    });
  }

  // Toggle Wishlist
  const wishBtn = document.getElementById('detail-wish-btn');
  if (wishBtn) {
    wishBtn.addEventListener('click', () => {
      State.toggleWishlist(prod);
      // Reload page to reflect wishlist state
      AppRouter.handleRoute();
    });
  }

  // Share Modal triggers
  const shareBtn = document.getElementById('detail-share-btn');
  const shareModal = document.getElementById('share-modal-backdrop');
  const closeShare = document.getElementById('close-share-modal');
  const copyBtn = document.querySelector('.share-link-copy-btn');

  if (shareBtn && shareModal) {
    shareBtn.addEventListener('click', () => {
      shareModal.classList.add('active');
    });
  }

  const hideShare = () => {
    if (shareModal) shareModal.classList.remove('active');
  };

  if (closeShare) closeShare.addEventListener('click', hideShare);
  if (shareModal) {
    shareModal.addEventListener('click', (e) => {
      if (e.target === shareModal) hideShare();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const dummyUrl = window.location.href;
      navigator.clipboard.writeText(dummyUrl).then(() => {
        State.showToast(isAr ? 'تم نسخ رابط المنتج للحافظة!' : 'Product link copied to clipboard!', 'success');
        hideShare();
      });
    });
  }

  // Tabs toggle control
  const tabHeaders = document.querySelectorAll('.description-tabs-container .tab-header');
  const tabPanels = document.querySelectorAll('.description-tabs-container .tab-panel');

  tabHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const tabId = header.dataset.tab;
      tabHeaders.forEach(h => h.classList.toggle('active', h === header));
      tabPanels.forEach(p => p.classList.toggle('active', p.id === `panel-${tabId}`));
    });
  });

  // Bind links for viewed & related product cards (since clicking them changes hash)
  const relContainers = document.querySelectorAll('.related-products-section');
  relContainers.forEach(container => {
    container.querySelectorAll('.card-quick-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cardId = parseInt(btn.dataset.id);
        const cardProd = State.state.products.find(p => p.id === cardId);
        if (cardProd) State.addToCart(cardProd, 1);
      });
    });

    container.querySelectorAll('.card-toggle-wish').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cardId = parseInt(btn.dataset.id);
        const cardProd = State.state.products.find(p => p.id === cardId);
        if (cardProd) {
          State.toggleWishlist(cardProd);
          AppRouter.handleRoute(); // reload details state
        }
      });
    });
  });
};
