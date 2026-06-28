import { State } from '../store/state.js';

export function CartPage() {
  const isAr = State.state.lang === 'ar';
  const cart = State.state.cart;
  const subtotal = State.getCartSubtotal();
  const discount = State.getCartDiscount();
  const total = State.getCartTotal();
  const shipping = subtotal > 100 ? 0 : 2.500;
  const coupon = State.state.appliedCoupon;

  return `
    <div class="cart-page-container container animate-fade-in">
      <h1 class="page-title">${isAr ? 'عربة التسوق' : 'Shopping Cart'}</h1>

      ${cart.length === 0 ? `
        <div class="empty-cart-full-view">
          <div class="icon-wrap">🛍️</div>
          <h3>${isAr ? 'عربة التسوق فارغة حالياً!' : 'Your shopping cart is empty!'}</h3>
          <p>${isAr ? 'لم تقم بإضافة أي منتجات للسلة بعد. ابدأ باكتشاف مجموعتنا الفاخرة الآن.' : 'You have not added any products to your cart yet. Discover our premium collections now.'}</p>
          <a href="#/category" class="btn btn-primary btn-lg">${isAr ? 'ابدأ التسوق' : 'Start Shopping'}</a>
        </div>
      ` : `
        <div class="cart-grid-layout">
          <!-- Left Column: Items Table list -->
          <div class="cart-items-column">
            <div class="cart-table-header">
              <span class="col-prod">${isAr ? 'المنتج' : 'Product'}</span>
              <span class="col-price">${isAr ? 'السعر' : 'Price'}</span>
              <span class="col-qty">${isAr ? 'الكمية' : 'Quantity'}</span>
              <span class="col-total">${isAr ? 'الإجمالي' : 'Total'}</span>
              <span class="col-actions"></span>
            </div>

            <div class="cart-items-body">
              ${cart.map(item => {
                const prod = item.product;
                const title = isAr ? prod.titleAr : prod.titleEn;
                const itemPrice = item.price || prod.price;
                const itemImage = item.image || prod.image;
                const itemTotal = itemPrice * item.quantity;
                return `
                  <div class="cart-item-row">
                    <div class="col-prod prod-cell">
                      <img src="${itemImage}" alt="${title}">
                      <div class="prod-details">
                        <a href="#/product/${prod.id}" class="title">${title}</a>
                        <div class="options">
                          ${item.color ? `<span><strong>${isAr ? 'اللون:' : 'Color:'}</strong> ${item.color}</span>` : ''}
                          ${item.size ? `<span><strong>${isAr ? 'المقاس:' : 'Size:'}</strong> ${item.size}</span>` : ''}
                        </div>
                        <span class="mobile-price">${itemPrice % 1 === 0 ? itemPrice.toFixed(0) : itemPrice.toFixed(3)} KWD</span>
                      </div>
                    </div>
                    
                    <div class="col-price price-cell">
                      <span>${itemPrice % 1 === 0 ? itemPrice.toFixed(0) : itemPrice.toFixed(3)} KWD</span>
                    </div>

                    <div class="col-qty qty-cell">
                      <div class="quantity-controller">
                        <button class="qty-control dec-cart-qty" data-id="${prod.id}" data-color="${item.color || ''}" data-size="${item.size || ''}">-</button>
                        <input type="text" class="number-input" value="${item.quantity}" readonly translate="no">
                        <button class="qty-control inc-cart-qty" data-id="${prod.id}" data-color="${item.color || ''}" data-size="${item.size || ''}">+</button>
                      </div>
                    </div>

                    <div class="col-total total-cell">
                      <span>${itemTotal % 1 === 0 ? itemTotal.toFixed(0) : itemTotal.toFixed(3)} KWD</span>
                    </div>

                    <div class="col-actions action-cell">
                      <button class="remove-cart-item-btn" data-id="${prod.id}" data-color="${item.color || ''}" data-size="${item.size || ''}" title="${isAr ? 'إزالة' : 'Remove'}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
            
            <div class="cart-actions-row">
              <a href="#/category" class="btn btn-secondary">${isAr ? '⬅️ مواصلة التسوق' : '⬅️ Continue Shopping'}</a>
              <button id="clear-cart-btn" class="btn btn-secondary delete-all-btn">${isAr ? '⚠️ تفريغ السلة' : '⚠️ Clear Cart'}</button>
            </div>
          </div>

          <!-- Right Column: Order summary & coupon actions -->
          <div class="cart-summary-column">
            <div class="summary-card">
              <h5>${isAr ? 'ملخص الطلب' : 'Order Summary'}</h5>
              
              <!-- Coupon Box -->
              <div class="summary-coupon-area">
                ${coupon ? `
                  <div class="active-coupon-card">
                    <div class="info">
                      <span class="code">🏷️ ${coupon.code}</span>
                      <span class="desc">${isAr ? 'كوبون فعال ومطبق' : 'Active coupon code'}</span>
                    </div>
                    <button id="cart-remove-coupon" class="btn-remove-link">${isAr ? 'إزالة' : 'Remove'}</button>
                  </div>
                ` : `
                  <label>${isAr ? 'هل لديك كود خصم؟' : 'Have a Promo Code?'}</label>
                  <form id="cart-coupon-form" class="coupon-input-group">
                    <input type="text" id="cart-coupon-input" placeholder="${isAr ? 'أدخل الكود هنا' : 'Enter code'}" class="form-control" required>
                    <button type="submit" class="btn btn-primary">${isAr ? 'تطبيق' : 'Apply'}</button>
                  </form>
                `}
              </div>

              <hr class="divider">

              <!-- Pricing lines -->
              <div class="summary-lines">
                <div class="summary-line">
                  <span>${isAr ? 'المجموع الفرعي' : 'Subtotal'}</span>
                  <span>${subtotal % 1 === 0 ? subtotal.toFixed(0) : subtotal.toFixed(3)} KWD</span>
                </div>
                ${discount > 0 ? `
                  <div class="summary-line discount">
                    <span>${isAr ? 'خصم الكوبون' : 'Coupon Discount'}</span>
                    <span>-${discount % 1 === 0 ? discount.toFixed(0) : discount.toFixed(3)} KWD</span>
                  </div>
                ` : ''}
                <div class="summary-line">
                  <span>${isAr ? 'تكلفة الشحن' : 'Shipping Fee'}</span>
                  <span>${shipping === 0 ? (isAr ? 'مجاني' : 'Free') : (shipping % 1 === 0 ? shipping.toFixed(0) : shipping.toFixed(3)) + ' KWD'}</span>
                </div>
                
                <div class="summary-line total-line">
                  <span>${isAr ? 'الإجمالي النهائي' : 'Estimated Total'}</span>
                  <span>${total % 1 === 0 ? total.toFixed(0) : total.toFixed(3)} KWD</span>
                </div>
              </div>

              <!-- Checkout Action -->
              <a href="#/checkout" class="btn btn-accent btn-lg checkout-btn" style="width: 100%; margin-top: 1.5rem; height: 50px;">
                ${isAr ? 'إتمام عملية الشراء ➡️' : 'Proceed to Checkout ➡️'}
              </a>

              <!-- Trust Payments Badges -->
              <div class="trust-badges-area">
                <p>${isAr ? 'تسوق آمن ومحمي 100%' : '100% Safe & Secure Checkout'}</p>
                <div class="badges">
                  <span>KNET</span>
                  <span>VISA</span>
                  <span>MASTERCARD</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      `}
    </div>

    <style>
      .cart-page-container {
        padding-top: 3rem;
      }
      .page-title {
        font-family: 'Playfair Display', serif;
        font-size: 2.2rem;
        margin-bottom: 2rem;
      }

      /* Empty View */
      .empty-cart-full-view {
        text-align: center;
        padding: 6rem 1.5rem;
        background-color: var(--bg-secondary);
        border-radius: 8px;
        border: 1px dashed var(--border-color);
        max-width: 600px;
        margin: 2rem auto;
      }
      .empty-cart-full-view .icon-wrap {
        font-size: 4rem;
        margin-bottom: 1.5rem;
      }
      .empty-cart-full-view h3 {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
      }
      .empty-cart-full-view p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
        font-size: 0.95rem;
      }

      /* Grid Layout */
      .cart-grid-layout {
        display: grid;
        grid-template-columns: 1fr 360px;
        gap: 3rem;
        align-items: start;
      }
      @media (max-width: 992px) {
        .cart-grid-layout {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }

      /* Items Table */
      .cart-table-header {
        display: grid;
        grid-template-columns: 3fr 1.2fr 1.5fr 1.2fr 0.5fr;
        padding: 1rem;
        background-color: var(--bg-secondary);
        border-radius: 4px;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .cart-item-row {
        display: grid;
        grid-template-columns: 3fr 1.2fr 1.5fr 1.2fr 0.5fr;
        padding: 1.5rem 1rem;
        border-bottom: 1px solid var(--border-light);
        align-items: center;
      }
      .prod-cell {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      .prod-cell img {
        width: 65px;
        height: 85px;
        object-fit: cover;
        border-radius: 4px;
        background-color: var(--bg-secondary);
      }
      .prod-details .title {
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--text-primary);
        text-decoration: none;
        display: block;
        margin-bottom: 0.3rem;
      }
      .prod-details .title:hover {
        color: var(--accent-gold);
      }
      .prod-details .options {
        font-size: 0.75rem;
        color: var(--text-muted);
        display: flex;
        gap: 0.8rem;
      }
      .prod-details .mobile-price {
        display: none;
        font-size: 0.85rem;
        color: var(--accent-gold);
        font-weight: 600;
        margin-top: 0.4rem;
      }

      .price-cell, .total-cell {
        font-weight: 600;
        color: var(--text-primary);
        font-size: 0.95rem;
      }
      .total-cell {
        color: var(--accent-gold);
      }

      .remove-cart-item-btn {
        background: none;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .remove-cart-item-btn:hover {
        color: var(--error-color);
      }

      .cart-actions-row {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
      }

      /* Summary sidebar */
      .summary-card {
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-light);
        border-radius: 6px;
        padding: 2rem;
      }
      .summary-card h5 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
      }
      
      .summary-coupon-area {
        margin-bottom: 1.5rem;
      }
      .summary-coupon-area label {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--text-secondary);
        display: block;
        margin-bottom: 0.5rem;
      }
      .coupon-input-group {
        display: flex;
        gap: 0.5rem;
      }
      .coupon-input-group input {
        padding: 0.5rem 0.8rem;
        font-size: 0.85rem;
      }
      .coupon-input-group button {
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
      }

      .active-coupon-card {
        background-color: var(--accent-gold-light);
        border: 1px dashed var(--accent-gold);
        border-radius: 4px;
        padding: 0.8rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .active-coupon-card .code {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-primary);
        display: block;
      }
      .active-coupon-card .desc {
        font-size: 0.75rem;
        color: var(--text-secondary);
      }
      .btn-remove-link {
        background: none;
        border: none;
        color: var(--error-color);
        font-weight: 600;
        font-size: 0.8rem;
        cursor: pointer;
      }

      .summary-lines {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin: 1.5rem 0;
      }
      .summary-lines .summary-line {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: var(--text-secondary);
      }
      .summary-lines .summary-line.discount {
        color: var(--success-color);
        font-weight: 500;
      }
      .summary-lines .total-line {
        font-size: 1.15rem;
        font-weight: 600;
        color: var(--text-primary);
        border-top: 1px solid var(--border-color);
        padding-top: 1rem;
        margin-top: 0.4rem;
      }

      .trust-badges-area {
        text-align: center;
        margin-top: 2rem;
        font-size: 0.75rem;
        color: var(--text-muted);
      }
      .trust-badges-area p {
        margin-bottom: 0.6rem;
      }
      .trust-badges-area .badges {
        display: flex;
        gap: 0.4rem;
        justify-content: center;
      }
      .trust-badges-area span {
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        padding: 0.2rem 0.5rem;
        border-radius: 3px;
        font-weight: 700;
      }

      @media (max-width: 768px) {
        .cart-table-header {
          display: none;
        }
        .cart-item-row {
          grid-template-columns: 1fr;
          gap: 1rem;
          padding: 1.5rem 0.5rem;
          text-align: center;
          position: relative;
        }
        .prod-cell {
          flex-direction: column;
          align-items: center;
        }
        .prod-details .options {
          justify-content: center;
        }
        .prod-details .mobile-price {
          display: block;
        }
        .price-cell, .total-cell {
          display: none;
        }
        .qty-cell {
          display: flex;
          justify-content: center;
        }
        .action-cell {
          position: absolute;
          top: 1rem;
          right: 0.5rem;
        }
        [dir="rtl"] .action-cell {
          right: auto;
          left: 0.5rem;
        }
      }
    </style>
  `;
}

CartPage.onMount = () => {
  const container = document.querySelector('.cart-page-container');
  const isAr = State.state.lang === 'ar';
  if (!container) return;

  // Qty Increment Button inside full cart list
  container.querySelectorAll('.inc-cart-qty').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const color = btn.dataset.color || null;
      const size = btn.dataset.size || null;
      const cartItem = State.state.cart.find(i => i.product.id === id && i.color === color && i.size === size);
      if (cartItem) {
        State.updateCartQty(id, color, size, cartItem.quantity + 1);
        // Refresh full view to update totals
        State.notify('state_changed');
      }
    });
  });

  // Qty Decrement Button
  container.querySelectorAll('.dec-cart-qty').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const color = btn.dataset.color || null;
      const size = btn.dataset.size || null;
      const cartItem = State.state.cart.find(i => i.product.id === id && i.color === color && i.size === size);
      if (cartItem) {
        State.updateCartQty(id, color, size, cartItem.quantity - 1);
        State.notify('state_changed');
      }
    });
  });

  // Remove single row item
  container.querySelectorAll('.remove-cart-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const color = btn.dataset.color || null;
      const size = btn.dataset.size || null;
      State.removeFromCart(id, color, size);
      State.notify('state_changed');
    });
  });

  // Clear entire cart
  const clearCartBtn = document.getElementById('clear-cart-btn');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      if (confirm(isAr ? 'هل أنت متأكد من رغبتك في تفريغ السلة بالكامل؟' : 'Are you sure you want to clear your cart?')) {
        State.clearCart();
      }
    });
  }

  // Apply coupon
  const couponForm = document.getElementById('cart-coupon-form');
  if (couponForm) {
    couponForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = document.getElementById('cart-coupon-input').value;
      if (State.applyCouponCode(code)) {
        State.notify('state_changed');
      }
    });
  }

  // Remove Coupon
  const removeCouponBtn = document.getElementById('cart-remove-coupon');
  if (removeCouponBtn) {
    removeCouponBtn.addEventListener('click', () => {
      State.removeCoupon();
      State.notify('state_changed');
    });
  }
};
