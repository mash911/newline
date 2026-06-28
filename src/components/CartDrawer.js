import { State } from '../store/state.js';

export function CartDrawer() {
  const isAr = State.state.lang === 'ar';
  const cart = State.state.cart;
  const subtotal = State.getCartSubtotal();
  const discount = State.getCartDiscount();
  const total = State.getCartTotal();
  const shipping = subtotal > 100 ? 0 : 2.500;
  const coupon = State.state.appliedCoupon;

  return `
    <div id="cart-drawer-backdrop" class="drawer-backdrop">
      <div class="drawer-panel cart-drawer-panel">
        <!-- Header -->
        <div class="drawer-header">
          <span style="font-weight:600; font-size:1.1rem;">
            ${isAr ? 'عربة التسوق' : 'Shopping Cart'} (${cart.reduce((sum, item) => sum + item.quantity, 0)})
          </span>
          <button id="cart-drawer-close" style="background:none; border:none; cursor:pointer; color:var(--text-primary);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Body: Cart Items -->
        <div class="drawer-body">
          ${cart.length === 0 ? `
            <div class="empty-cart-view">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-muted); margin-bottom:1rem;">
                <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:1.5rem;">
                ${isAr ? 'عربة التسوق فارغة حالياً' : 'Your cart is currently empty.'}
              </p>
              <a href="#/category" class="btn btn-primary" id="cart-drawer-shop-btn">
                ${isAr ? 'ابدأ التسوق' : 'Start Shopping'}
              </a>
            </div>
          ` : `
            <div class="cart-items-list">
              ${cart.map(item => {
                const prod = item.product;
                const title = isAr ? prod.titleAr : prod.titleEn;
                const price = prod.price.toFixed(3);
                const itemImg = item.image || prod.image;
                const itemPrice = item.price || prod.price;
                return `
                  <div class="cart-drawer-item">
                    <img src="${itemImg}" alt="${title}" class="item-img">
                    <div class="item-details">
                      <a href="#/product/${prod.id}" class="item-title">${title}</a>
                      <div class="item-meta">
                        ${item.color ? `<span>${isAr ? 'اللون:' : 'Color:'} ${item.color}</span>` : ''}
                        ${item.size ? `<span>${isAr ? 'المقاس:' : 'Size:'} ${item.size}</span>` : ''}
                      </div>
                      <div class="qty-price-flex">
                        <!-- Qty Selector -->
                        <div class="qty-counter">
                          <button class="qty-btn dec-qty" data-id="${prod.id}" data-color="${item.color || ''}" data-size="${item.size || ''}">-</button>
                          <span class="qty-num">${item.quantity}</span>
                          <button class="qty-btn inc-qty" data-id="${prod.id}" data-color="${item.color || ''}" data-size="${item.size || ''}">+</button>
                        </div>
                        <span class="item-price">${(itemPrice * item.quantity).toFixed(3)} KWD</span>
                      </div>
                    </div>
                    <!-- Delete Button -->
                    <button class="delete-item-btn" data-id="${prod.id}" data-color="${item.color || ''}" data-size="${item.size || ''}" title="${isAr ? 'إزالة' : 'Remove'}">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>

        <!-- Footer -->
        ${cart.length > 0 ? `
          <div class="drawer-footer">
            <!-- Coupon Input -->
            <div class="drawer-coupon-section">
              ${coupon ? `
                <div class="applied-coupon-row">
                  <span>🏷️ ${coupon.code} (-${coupon.type === 'percent' ? coupon.discount + '%' : coupon.discount.toFixed(3) + ' KWD'})</span>
                  <button id="drawer-remove-coupon" class="btn-text-remove">${isAr ? 'إزالة' : 'Remove'}</button>
                </div>
              ` : `
                <form id="drawer-coupon-form" class="coupon-form-inline">
                  <input type="text" id="drawer-coupon-input" placeholder="${isAr ? 'كوبون الخصم' : 'Coupon Code'}" class="form-control">
                  <button type="submit" class="btn btn-secondary">${isAr ? 'تطبيق' : 'Apply'}</button>
                </form>
              `}
            </div>

            <!-- Price Summary -->
            <div class="cart-summary-lines">
              <div class="summary-line">
                <span>${isAr ? 'المجموع الفرعي:' : 'Subtotal:'}</span>
                <span>${subtotal.toFixed(3)} KWD</span>
              </div>
              ${discount > 0 ? `
                <div class="summary-line discount">
                  <span>${isAr ? 'الخصم:' : 'Discount:'}</span>
                  <span>-${discount.toFixed(3)} KWD</span>
                </div>
              ` : ''}
              <div class="summary-line">
                <span>${isAr ? 'الشحن:' : 'Shipping:'}</span>
                <span>${shipping === 0 ? (isAr ? 'مجاني' : 'Free') : shipping.toFixed(3) + ' KWD'}</span>
              </div>
              <div class="summary-line total-row">
                <span>${isAr ? 'الإجمالي:' : 'Total:'}</span>
                <span>${total.toFixed(3)} KWD</span>
              </div>
            </div>

            <!-- Checkout Buttons -->
            <div class="drawer-actions-grid">
              <a href="#/cart" id="drawer-view-cart-btn" class="btn btn-secondary">${isAr ? 'عرض السلة الكاملة' : 'View Full Cart'}</a>
              <a href="#/checkout" id="drawer-checkout-btn" class="btn btn-primary">${isAr ? 'إتمام الشراء' : 'Checkout Now'}</a>
            </div>
          </div>
        ` : ''}
      </div>
    </div>

    <style>
      .cart-drawer-panel {
        transform: translateX(100%);
      }
      [dir="rtl"] .cart-drawer-panel {
        transform: translateX(-100%);
      }
      
      .empty-cart-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-align: center;
      }
      
      /* Items list */
      .cart-items-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .cart-drawer-item {
        display: flex;
        gap: 1rem;
        position: relative;
        border-bottom: 1px solid var(--border-light);
        padding-bottom: 1.2rem;
      }
      .cart-drawer-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
      .cart-drawer-item .item-img {
        width: 70px;
        height: 90px;
        object-fit: cover;
        border-radius: 4px;
        background-color: var(--bg-secondary);
      }
      .cart-drawer-item .item-details {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .cart-drawer-item .item-title {
        font-size: 0.9rem;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-primary);
        line-height: 1.3;
        margin-bottom: 0.25rem;
      }
      .cart-drawer-item .item-title:hover {
        color: var(--accent-gold);
      }
      .cart-drawer-item .item-meta {
        font-size: 0.75rem;
        color: var(--text-muted);
        display: flex;
        gap: 0.8rem;
        margin-bottom: 0.6rem;
      }
      .qty-price-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
      }
      .qty-counter {
        display: flex;
        align-items: center;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        overflow: hidden;
      }
      .qty-btn {
        background: none;
        border: none;
        width: 26px;
        height: 26px;
        cursor: pointer;
        font-weight: 500;
        font-size: 0.9rem;
        color: var(--text-primary);
      }
      .qty-btn:hover {
        background-color: var(--bg-secondary);
      }
      .qty-num {
        font-size: 0.85rem;
        font-weight: 600;
        width: 30px;
        text-align: center;
      }
      .item-price {
        font-weight: 600;
        font-size: 0.95rem;
        color: var(--accent-gold);
      }
      .delete-item-btn {
        background: none;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        padding: 0.25rem;
        transition: var(--transition-fast);
        align-self: flex-start;
      }
      .delete-item-btn:hover {
        color: var(--error-color);
      }

      /* Coupon row */
      .drawer-coupon-section {
        margin-bottom: 1.2rem;
      }
      .coupon-form-inline {
        display: flex;
        gap: 0.5rem;
      }
      .coupon-form-inline input {
        padding: 0.5rem 0.8rem;
        font-size: 0.85rem;
      }
      .coupon-form-inline button {
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
      }
      .applied-coupon-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.85rem;
        background-color: var(--accent-gold-light);
        padding: 0.6rem 1rem;
        border-radius: 4px;
        border: 1px dashed var(--accent-gold);
      }
      .btn-text-remove {
        background: none;
        border: none;
        color: var(--error-color);
        font-weight: 600;
        cursor: pointer;
        font-size: 0.8rem;
      }

      /* Summary lines */
      .cart-summary-lines {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        margin-bottom: 1.5rem;
      }
      .summary-line {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: var(--text-secondary);
      }
      .summary-line.discount {
        color: var(--success-color);
      }
      .summary-line.total-row {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-primary);
        border-top: 1px solid var(--border-color);
        padding-top: 0.8rem;
        margin-top: 0.2rem;
      }

      /* Actions Grid */
      .drawer-actions-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.8rem;
      }
    </style>
  `;
}

CartDrawer.onMount = () => {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const closeBtn = document.getElementById('cart-drawer-close');
  const shopBtn = document.getElementById('cart-drawer-shop-btn');
  const viewCartBtn = document.getElementById('drawer-view-cart-btn');
  const checkoutBtn = document.getElementById('drawer-checkout-btn');

  const hideDrawer = () => {
    if (backdrop) {
      backdrop.classList.remove('active');
      const isRtl = State.state.lang === 'ar';
      backdrop.querySelector('.drawer-panel').style.transform = isRtl ? 'translateX(-100%)' : 'translateX(100%)';
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', hideDrawer);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) hideDrawer();
    });
  }

  // Hook navigation buttons to hide drawer upon navigation
  if (shopBtn) shopBtn.addEventListener('click', hideDrawer);
  if (viewCartBtn) viewCartBtn.addEventListener('click', hideDrawer);
  if (checkoutBtn) checkoutBtn.addEventListener('click', hideDrawer);

  // Cart edit behaviors: Qty Buttons
  backdrop.querySelectorAll('.inc-qty').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const color = btn.dataset.color || null;
      const size = btn.dataset.size || null;
      
      const cartItem = State.state.cart.find(i => i.product.id === id && i.color === color && i.size === size);
      if (cartItem) {
        State.updateCartQty(id, color, size, cartItem.quantity + 1);
      }
    });
  });

  backdrop.querySelectorAll('.dec-qty').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const color = btn.dataset.color || null;
      const size = btn.dataset.size || null;
      
      const cartItem = State.state.cart.find(i => i.product.id === id && i.color === color && i.size === size);
      if (cartItem) {
        State.updateCartQty(id, color, size, cartItem.quantity - 1);
      }
    });
  });

  // Remove item button
  backdrop.querySelectorAll('.delete-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const color = btn.dataset.color || null;
      const size = btn.dataset.size || null;
      State.removeFromCart(id, color, size);
    });
  });

  // Coupon apply
  const couponForm = document.getElementById('drawer-coupon-form');
  if (couponForm) {
    couponForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = document.getElementById('drawer-coupon-input').value;
      State.applyCouponCode(code);
    });
  }

  // Coupon remove
  const removeCouponBtn = document.getElementById('drawer-remove-coupon');
  if (removeCouponBtn) {
    removeCouponBtn.addEventListener('click', () => {
      State.removeCoupon();
    });
  }
};
