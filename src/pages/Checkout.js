import { State } from '../store/state.js';

export function CheckoutPage() {
  const isAr = State.state.lang === 'ar';
  const cart = State.state.cart;
  const subtotal = State.getCartSubtotal();
  const discount = State.getCartDiscount();
  const total = State.getCartTotal();
  const shipping = subtotal > 100 ? 0 : 2.500;
  const user = State.state.user;

  if (cart.length === 0 && !CheckoutPage.successOrder) {
    return `
      <div class="container" style="padding: 6rem 0; text-align: center;">
        <h2>${isAr ? 'عربة التسوق فارغة' : 'Your cart is empty'}</h2>
        <p style="color:var(--text-muted); margin-bottom: 1.5rem;">${isAr ? 'يرجى إضافة منتجات للسلة أولاً لإتمام عملية الشراء.' : 'Please add items to your cart to checkout.'}</p>
        <a href="#/category" class="btn btn-primary">${isAr ? 'تصفح المنتجات' : 'Browse Products'}</a>
      </div>
    `;
  }

  // Success view display if order went through
  if (CheckoutPage.successOrder) {
    const order = CheckoutPage.successOrder;
    // Clear success state after mounting so refreshing doesn't lock it
    setTimeout(() => { CheckoutPage.successOrder = null; }, 100);

    return `
      <div class="checkout-success-view container animate-fade-in">
        <div class="success-card">
          <div class="checkmark-circle">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1>${isAr ? 'تم استلام طلبك بنجاح!' : 'Order Placed Successfully!'}</h1>
          <p class="order-id-label">${isAr ? 'رقم الطلب:' : 'Order ID:'} <strong>${order.id}</strong></p>
          <p class="sub-msg">
            ${isAr 
              ? 'نشكرك على تسوقك من سناء بوتيك. تم إرسال رسالة تأكيد إلكترونية وتفاصيل التوصيل إلى بريدك الإلكتروني.' 
              : 'Thank you for shopping at Sana Boutique. A confirmation email with details has been sent to your email.'}
          </p>

          <div class="order-summary-box">
            <h6>${isAr ? 'تفاصيل الطلب' : 'Order Details'}</h6>
            <div class="detail-line"><span>${isAr ? 'تاريخ الطلب:' : 'Date:'}</span> <span>${order.date}</span></div>
            <div class="detail-line"><span>${isAr ? 'وسيلة الدفع:' : 'Payment Method:'}</span> <span>${order.paymentMethod.toUpperCase()}</span></div>
            <div class="detail-line"><span>${isAr ? 'شركة التوصيل:' : 'Carrier:'}</span> <span>${order.shippingCompanyEn}</span></div>
            <div class="detail-line total"><span>${isAr ? 'الإجمالي النهائي:' : 'Final Total:'}</span> <span>${order.total % 1 === 0 ? order.total.toFixed(0) : order.total.toFixed(3)} KWD</span></div>
          </div>

          <div class="success-actions">
            <a href="#/dashboard?tab=orders" class="btn btn-primary">${isAr ? '📦 تتبع طلبك الآن' : '📦 Track Your Order'}</a>
            <a href="#/" class="btn btn-secondary">${isAr ? 'العودة للرئيسية' : 'Back to Home'}</a>
          </div>
        </div>
      </div>

      <style>
        .checkout-success-view { padding: 4rem 1rem; display: flex; justify-content: center; }
        .success-card { background-color: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 8px; box-shadow: var(--modal-shadow); max-width: 550px; width:100%; padding: 3rem 2rem; text-align:center; }
        .checkmark-circle { width: 80px; height: 80px; border-radius: 50%; background-color: var(--success-color); display:flex; align-items:center; justify-content:center; margin: 0 auto 2rem auto; }
        .success-card h1 { font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 0.5rem; }
        .order-id-label { font-size: 1.1rem; color: var(--accent-gold); margin-bottom: 1.5rem; }
        .sub-msg { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; }
        
        .order-summary-box { background-color: var(--bg-secondary); border-radius: 6px; padding: 1.2rem; margin-bottom: 2rem; text-align: left; }
        [dir="rtl"] .order-summary-box { text-align: right; }
        .order-summary-box h6 { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.8rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; }
        .detail-line { display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; }
        .detail-line.total { border-top: 1px solid var(--border-color); padding-top: 0.6rem; font-weight: 600; color: var(--text-primary); font-size: 0.95rem; margin-top: 0.4rem; }
        
        .success-actions { display: flex; gap: 1rem; justify-content: center; }
        @media (max-width: 480px) { .success-actions { flex-direction: column; } }
      </style>
    `;
  }

  // Default checkout layout view
  return `
    <div class="checkout-page-container container animate-fade-in">
      <h1 class="page-title">${isAr ? 'إتمام عملية الشراء' : 'Checkout'}</h1>

      <div class="checkout-grid-layout">
        <!-- Left Column: Forms -->
        <div class="checkout-forms-column">
          <form id="checkout-main-form">
            
            <!-- Shipping Info Section -->
            <div class="form-section">
              <h5 class="section-title"><span>1</span> ${isAr ? 'عنوان الشحن والتوصيل' : 'Shipping Address'}</h5>
              
              <div class="form-row-2">
                <div class="form-group">
                  <label>${isAr ? 'الاسم بالكامل *' : 'Full Name *'}</label>
                  <input type="text" id="chk-name" class="form-control" value="${user ? user.name : ''}" required>
                </div>
                <div class="form-group">
                  <label>${isAr ? 'رقم الهاتف *' : 'Phone Number *'}</label>
                  <input type="tel" id="chk-phone" class="form-control number-input" value="${user ? user.phone : ''}" translate="no" required placeholder="+965 99887766">
                </div>
              </div>

              <div class="form-group">
                <label>${isAr ? 'البريد الإلكتروني *' : 'Email Address *'}</label>
                <input type="email" id="chk-email" class="form-control" value="${user ? user.email : ''}" required>
              </div>

              <!-- Address Specific to Kuwait (Governorate/Area/Block/Street/Apt) -->
              <div class="form-row-2">
                <div class="form-group">
                  <label>${isAr ? 'المنطقة *' : 'Area *'}</label>
                  <input type="text" id="chk-area" class="form-control" required placeholder="${isAr ? 'السالمية، الجابرية...' : 'Salmiya, Jabriya...'}">
                </div>
                <div class="form-group">
                  <label>${isAr ? 'القطعة *' : 'Block *'}</label>
                  <input type="text" id="chk-block" class="form-control number-input" required translate="no" placeholder="1">
                </div>
              </div>

              <div class="form-row-3">
                <div class="form-group">
                  <label>${isAr ? 'الشارع *' : 'Street *'}</label>
                  <input type="text" id="chk-street" class="form-control" required>
                </div>
                <div class="form-group">
                  <label>${isAr ? 'المنزل/المبنى *' : 'Building / House *'}</label>
                  <input type="text" id="chk-building" class="form-control" required>
                </div>
                <div class="form-group">
                  <label>${isAr ? 'الدور والشقة (اختياري)' : 'Floor / Apartment (Optional)'}</label>
                  <input type="text" id="chk-floor" class="form-control">
                </div>
              </div>
            </div>

            <!-- Shipping Carrier choice -->
            <div class="form-section">
              <h5 class="section-title"><span>2</span> ${isAr ? 'شركة الشحن وسرعة التوصيل' : 'Shipping Carrier'}</h5>
              <div class="carrier-selector-group">
                <label class="carrier-card active">
                  <input type="radio" name="shipping-carrier" value="express" checked>
                  <div class="carrier-info">
                    <span class="name">${isAr ? 'سناء إكسبرس (خلال 24 ساعة)' : 'Sana Express (Under 24h)'}</span>
                    <span class="price">${shipping === 0 ? (isAr ? 'مجاني' : 'Free') : '2.5 KWD'}</span>
                  </div>
                </label>
                <label class="carrier-card">
                  <input type="radio" name="shipping-carrier" value="dhl">
                  <div class="carrier-info">
                    <span class="name">${isAr ? 'شحن دي إتش إل السريع (يصل غداً)' : 'DHL Next Day Delivery'}</span>
                    <span class="price">4 KWD</span>
                  </div>
                </label>
              </div>
            </div>

            <!-- Payment gateway selection -->
            <div class="form-section">
              <h5 class="section-title"><span>3</span> ${isAr ? 'طريقة الدفع' : 'Payment Method'}</h5>
              
              <div class="payment-method-selector-group">
                <!-- KNET (Kuwait Local) -->
                <label class="pay-method-card active">
                  <input type="radio" name="payment-method" value="knet" checked>
                  <span class="icon">💻</span>
                  <div class="info">
                    <span class="name">KNET</span>
                    <span class="desc">${isAr ? 'الدفع الآمن الفوري عبر كي نت' : 'Direct local bank payment'}</span>
                  </div>
                </label>
                <!-- Credit Card -->
                <label class="pay-method-card">
                  <input type="radio" name="payment-method" value="cc">
                  <span class="icon">💳</span>
                  <div class="info">
                    <span class="name">${isAr ? 'بطاقة ائتمانية' : 'Credit Card'}</span>
                    <span class="desc">Visa / Mastercard</span>
                  </div>
                </label>
                <!-- Cash On Delivery -->
                <label class="pay-method-card">
                  <input type="radio" name="payment-method" value="cod">
                  <span class="icon">💵</span>
                  <div class="info">
                    <span class="name">${isAr ? 'الدفع عند الاستلام' : 'Cash on Delivery'}</span>
                    <span class="desc">${isAr ? 'رسوم إضافية بقيمة 1.000 د.ك' : 'Extra 1.000 KWD fee applies'}</span>
                  </div>
                </label>
              </div>

              <!-- Credit Card Fields Wrapper (Hidden by default, shown if CC selected) -->
              <div id="credit-card-fields-area" class="credit-card-fields-area" style="display:none; margin-top: 1.5rem;">
                <div class="form-group">
                  <label>${isAr ? 'اسم حامل البطاقة *' : 'Cardholder Name *'}</label>
                  <input type="text" id="cc-name" class="form-control">
                </div>
                <div class="form-group">
                  <label>${isAr ? 'رقم البطاقة *' : 'Card Number *'}</label>
                  <input type="text" id="cc-number" class="form-control number-input" translate="no" placeholder="1234 5678 9012 3456">
                </div>
                <div class="form-row-2">
                  <div class="form-group">
                    <label>${isAr ? 'تاريخ الانتهاء *' : 'Expiry Date *'}</label>
                    <input type="text" id="cc-expiry" class="form-control number-input" translate="no" placeholder="MM/YY">
                  </div>
                  <div class="form-group">
                    <label>CVV *</label>
                    <input type="text" id="cc-cvv" class="form-control number-input" translate="no" placeholder="123">
                  </div>
                </div>
              </div>
            </div>

            <!-- Submit buttons -->
            <button type="submit" class="btn btn-accent btn-lg order-submit-btn" style="width: 100%; height:52px; margin-top: 2rem;">
              ${isAr ? 'تأكيد الطلب والدفع' : 'Confirm Order & Pay'}
            </button>
          </form>
        </div>

        <!-- Right Column: Summary Box -->
        <div class="checkout-summary-column">
          <div class="summary-box">
            <h6>${isAr ? 'مراجعة طلبك' : 'Review Your Order'}</h6>
            
            <div class="checkout-items-list">
              ${cart.map(item => {
                const itemPrice = item.price || item.product.price;
                const itemImage = item.image || item.product.image;
                const itemTotal = itemPrice * item.quantity;
                return `
                  <div class="chk-item">
                    <img src="${itemImage}" alt="${isAr ? item.product.titleAr : item.product.titleEn}">
                    <div class="info">
                      <span class="title">${isAr ? item.product.titleAr : item.product.titleEn}</span>
                      <span class="meta">${isAr ? 'الكمية:' : 'Qty:'} ${item.quantity} ${item.color ? `| ${item.color}` : ''}</span>
                    </div>
                    <span class="price">${itemTotal % 1 === 0 ? itemTotal.toFixed(0) : itemTotal.toFixed(3)} KWD</span>
                  </div>
                `;
              }).join('')}
            </div>

            <hr class="divider" style="margin: 1.2rem 0;">

            <div class="summary-lines">
              <div class="line"><span>${isAr ? 'المجموع الفرعي' : 'Subtotal'}</span> <span>${subtotal % 1 === 0 ? subtotal.toFixed(0) : subtotal.toFixed(3)} KWD</span></div>
              ${discount > 0 ? `<div class="line discount"><span>${isAr ? 'خصم كوبون' : 'Coupon Discount'}</span> <span>-${discount % 1 === 0 ? discount.toFixed(0) : discount.toFixed(3)} KWD</span></div>` : ''}
              <div class="line"><span>${isAr ? 'تكلفة الشحن' : 'Shipping'}</span> <span>${shipping === 0 ? (isAr ? 'مجاني' : 'Free') : (shipping % 1 === 0 ? shipping.toFixed(0) : shipping.toFixed(3)) + ' KWD'}</span></div>
              <div class="line total-line"><span>${isAr ? 'إجمالي الدفع' : 'Total Amount'}</span> <span>${total % 1 === 0 ? total.toFixed(0) : total.toFixed(3)} KWD</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Realistic KNET Payment Gateway Overlay Gateway Modal (Popup simulated) -->
      <div id="knet-gateway-modal" class="knet-modal-backdrop">
        <div class="knet-modal-box">
          <div class="knet-modal-header">
            <span class="knet-logo-text">knet</span>
            <span class="title">${isAr ? 'بوابة الدفع الإلكتروني كي نت' : 'KNET Payment Gateway'}</span>
          </div>
          <div class="knet-modal-body">
            <div class="knet-summary-row">
              <div class="lbl">${isAr ? 'التاجر:' : 'Merchant:'}</div>
              <div class="val">SANA BOUTIQUE CO.</div>
            </div>
            <div class="knet-summary-row">
              <div class="lbl">${isAr ? 'المبلغ:' : 'Amount:'}</div>
              <div class="val text-gold">${total % 1 === 0 ? total.toFixed(0) : total.toFixed(3)} KWD</div>
            </div>

            <hr style="border:0; border-top:1px solid #ddd; margin:1rem 0;">

            <div class="form-group">
              <label>${isAr ? 'البنك المصدر *' : 'Select Bank *'}</label>
              <select id="knet-bank" class="form-control" style="font-size:0.9rem; padding: 0.5rem;">
                <option value="nbk">National Bank of Kuwait (NBK)</option>
                <option value="kfh">Kuwait Finance House (KFH)</option>
                <option value="burgan">Burgan Bank</option>
                <option value="gulf">Gulf Bank</option>
                <option value="boubyan">Boubyan Bank</option>
              </select>
            </div>

            <div class="form-group">
              <label>${isAr ? 'رقم البطاقة *' : 'Card Number *'}</label>
              <div style="display:flex; gap:0.4rem; align-items:center;">
                <span style="font-size:0.85rem; font-weight:600; padding:0.5rem; background:#eee; border-radius:4px; border:1px solid #ccc;" class="num" translate="no">5069</span>
                <input type="text" id="knet-card" class="form-control number-input" translate="no" placeholder="12345678" style="padding:0.5rem; font-size:0.9rem;" required>
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label>${isAr ? 'تاريخ الانتهاء' : 'Expiry Date'}</label>
                <input type="text" id="knet-expiry" class="form-control number-input" translate="no" placeholder="MM/YY" style="padding:0.5rem;">
              </div>
              <div class="form-group">
                <label>${isAr ? 'رقم السر (PIN) *' : 'PIN Code *'}</label>
                <input type="password" id="knet-pin" class="form-control number-input" translate="no" placeholder="****" style="padding:0.5rem;" required>
              </div>
            </div>

            <div class="knet-actions">
              <button id="knet-cancel-btn" type="button" class="btn btn-secondary">${isAr ? 'إلغاء' : 'Cancel'}</button>
              <button id="knet-submit-btn" type="button" class="btn btn-primary">${isAr ? 'دفع الآن' : 'Pay Now'}</button>
            </div>

            <!-- Loader spinner (Hidden by default) -->
            <div id="knet-spinner" class="knet-loader-overlay">
              <div class="spinner"></div>
              <p>${isAr ? 'جاري التحقق من عملية الدفع وإتمام الطلب...' : 'Verifying transaction & finalizing order...'}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <style>
      .checkout-page-container { padding-top: 3rem; }
      .page-title { font-family: 'Playfair Display', serif; font-size: 2.2rem; margin-bottom: 2rem; }

      .checkout-grid-layout { display: grid; grid-template-columns: 1fr 380px; gap: 3.5rem; align-items: start; }
      @media (max-width: 992px) { .checkout-grid-layout { grid-template-columns: 1fr; gap: 2.5rem; } }

      /* Form Sections */
      .form-section { background-color: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 6px; padding: 2rem; margin-bottom: 2rem; }
      .form-section .section-title { font-size: 1.1rem; font-weight: 600; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.8rem; }
      .form-section .section-title span { width: 24px; height: 24px; background-color: var(--accent-gold); color: #151515; font-size: 0.8rem; font-weight: 700; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

      .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .form-row-3 { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 1rem; }
      
      @media (max-width: 576px) { 
        .form-row-2, .form-row-3 { grid-template-columns: 1fr; gap: 0; } 
      }

      /* Carriers */
      .carrier-selector-group { display: flex; flex-direction: column; gap: 0.8rem; }
      .carrier-card { display: flex; align-items: center; gap: 1rem; border: 1px solid var(--border-color); border-radius: 4px; padding: 1rem; cursor: pointer; transition: var(--transition-fast); }
      .carrier-card.active, .carrier-card:hover { border-color: var(--accent-gold); background-color: var(--accent-gold-light); }
      .carrier-card input { accent-color: var(--accent-gold); }
      .carrier-info { display: flex; justify-content: space-between; flex:1; font-size: 0.9rem; font-weight: 500; }
      .carrier-info .price { font-weight: 600; color: var(--accent-gold); }

      /* Payments options */
      .payment-method-selector-group { display: flex; flex-direction: column; gap: 0.8rem; }
      .pay-method-card { display: flex; align-items: center; gap: 1rem; border: 1px solid var(--border-color); border-radius: 4px; padding: 1rem; cursor: pointer; transition: var(--transition-fast); }
      .pay-method-card.active, .pay-method-card:hover { border-color: var(--accent-gold); background-color: var(--accent-gold-light); }
      .pay-method-card input { accent-color: var(--accent-gold); }
      .pay-method-card .icon { font-size: 1.4rem; }
      .pay-method-card .name { font-weight: 600; font-size: 0.95rem; display: block; }
      .pay-method-card .desc { font-size: 0.75rem; color: var(--text-secondary); }

      /* CC wrapper */
      .credit-card-fields-area { padding: 1.2rem; background-color: var(--bg-secondary); border-radius: 4px; border: 1px solid var(--border-color); }

      /* Summary Box */
      .summary-box { background-color: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; padding: 1.8rem; }
      .summary-box h6 { font-size: 1.05rem; font-weight: 600; margin-bottom: 1.2rem; }
      
      .checkout-items-list { display: flex; flex-direction: column; gap: 1rem; }
      .chk-item { display: flex; gap: 0.8rem; align-items: center; font-size: 0.85rem; }
      .chk-item img { width: 45px; height: 60px; object-fit: cover; border-radius: 3px; background-color: var(--bg-primary); }
      .chk-item .info { flex: 1; }
      .chk-item .title { font-weight: 500; display: block; margin-bottom: 0.15rem; color: var(--text-primary); }
      .chk-item .meta { color: var(--text-muted); font-size: 0.75rem; }
      .chk-item .price { font-weight: 600; color: var(--text-primary); }

      .summary-lines .line { display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem; }
      .summary-lines .line.discount { color: var(--success-color); }
      .summary-lines .total-line { border-top: 1px solid var(--border-color); padding-top: 0.8rem; margin-top: 0.5rem; font-size: 1.1rem; font-weight: 600; color: var(--text-primary); }

      /* KNET Simulation Modal */
      .knet-modal-backdrop { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.65); backdrop-filter: blur(5px); z-index: 2000; display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: var(--transition-smooth); }
      .knet-modal-backdrop.active { opacity: 1; visibility: visible; }
      .knet-modal-box { background-color: white; color: #333; width: 100%; max-width: 440px; border-radius: 8px; overflow: hidden; box-shadow: 0 15px 45px rgba(0,0,0,0.3); border: 2px solid #005a9c; }
      
      .knet-modal-header { background-color: #005a9c; color: white; padding: 1rem; display: flex; align-items: center; gap: 1rem; }
      .knet-logo-text { font-size: 1.3rem; font-weight: 800; font-style: italic; background-color: white; color: #005a9c; padding: 0.1rem 0.6rem; border-radius: 4px; letter-spacing: -0.05em; }
      .knet-modal-header .title { font-size: 0.9rem; font-weight: 600; }
      
      .knet-modal-body { padding: 1.5rem; position: relative; }
      .knet-summary-row { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.5rem; }
      .knet-summary-row .lbl { color: #666; }
      .knet-summary-row .val { font-weight: 600; }
      .knet-summary-row .val.text-gold { color: #b8860b; font-size: 1rem; }

      .knet-actions { display: flex; justify-content: space-between; margin-top: 1.5rem; gap: 1rem; }
      .knet-actions button { flex:1; font-size: 0.85rem; padding: 0.6rem; }
      
      .knet-loader-overlay { position: absolute; top:0; left:0; right:0; bottom:0; background-color: rgba(255,255,255,0.92); z-index: 10; display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 1.5rem; }
      .knet-loader-overlay.active { display: flex; }
      .knet-loader-overlay .spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #005a9c; border-radius: 50%; animation: knetSpin 1s linear infinite; margin-bottom: 1rem; }
      @keyframes knetSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      .knet-loader-overlay p { font-size: 0.85rem; color: #333; font-weight: 500; }
    </style>
  `;
}

CheckoutPage.successOrder = null;

CheckoutPage.onMount = () => {
  const isAr = State.state.lang === 'ar';
  const mainForm = document.getElementById('checkout-main-form');
  if (!mainForm) return;

  // Arabic digit to English digit auto-converter
  const convertArabicToEnglishDigits = (str) => {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return str.replace(/[٠-٩]/g, (w) => arabicDigits.indexOf(w));
  };

  const sanitizeNumberFields = (e) => {
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    const val = e.target.value;
    const clean = convertArabicToEnglishDigits(val);
    if (val !== clean) {
      e.target.value = clean;
      e.target.setSelectionRange(start, end);
    }
  };

  // Target all .number-input fields on the checkout page (including knet modal inputs)
  const numberInputs = document.querySelectorAll('.number-input');
  numberInputs.forEach(input => {
    input.addEventListener('input', sanitizeNumberFields);
  });

  // Toggle active carrier selection
  const carriers = document.querySelectorAll('input[name="shipping-carrier"]');
  carriers.forEach(input => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.carrier-card').forEach(c => c.classList.remove('active'));
      input.closest('.carrier-card').classList.add('active');
    });
  });

  // Toggle active payment method card
  const payMethods = document.querySelectorAll('input[name="payment-method"]');
  const ccFields = document.getElementById('credit-card-fields-area');

  payMethods.forEach(input => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.pay-method-card').forEach(c => c.classList.remove('active'));
      input.closest('.pay-method-card').classList.add('active');

      if (input.value === 'cc') {
        ccFields.style.display = 'block';
      } else {
        ccFields.style.display = 'none';
      }
    });
  });

  // KNET Gateway Dialog triggers
  const knetModal = document.getElementById('knet-gateway-modal');
  const knetCancel = document.getElementById('knet-cancel-btn');
  const knetSubmit = document.getElementById('knet-submit-btn');
  const knetSpinner = document.getElementById('knet-spinner');

  const showKnetModal = () => knetModal.classList.add('active');
  const hideKnetModal = () => knetModal.classList.remove('active');

  if (knetCancel) knetCancel.addEventListener('click', hideKnetModal);

  // Form submission handler
  mainForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Pick payment method
    const payment = mainForm.querySelector('input[name="payment-method"]:checked').value;
    
    if (payment === 'knet') {
      showKnetModal();
    } else {
      // Direct processing for CC and COD
      processCheckout(payment);
    }
  });

  // Proceed payment validation inside KNET gateway
  if (knetSubmit) {
    knetSubmit.addEventListener('click', () => {
      const cardNum = document.getElementById('knet-card').value.trim();
      const pinNum = document.getElementById('knet-pin').value.trim();

      if (!cardNum || !pinNum) {
        alert(isAr ? 'يرجى ملء جميع حقول بطاقة كي نت المطلوبة!' : 'Please enter card number and PIN code.');
        return;
      }

      // Show spinner loader
      knetSpinner.classList.add('active');

      // Wait 2.5s simulated check
      setTimeout(() => {
        knetSpinner.classList.remove('active');
        hideKnetModal();
        processCheckout('knet');
      }, 2500);
    });
  }

  // Core submit processor
  const processCheckout = (paymentMethod) => {
    // Collect shipping details
    const shippingInfo = {
      name: document.getElementById('chk-name').value,
      phone: document.getElementById('chk-phone').value,
      email: document.getElementById('chk-email').value,
      area: document.getElementById('chk-area').value,
      block: document.getElementById('chk-block').value,
      street: document.getElementById('chk-street').value,
      building: document.getElementById('chk-building').value,
      floor: document.getElementById('chk-floor').value || ''
    };

    const selectedCarrierVal = mainForm.querySelector('input[name="shipping-carrier"]:checked').value;
    const carrierName = selectedCarrierVal === 'dhl' ? 'DHL Express' : 'Sana Courier';

    // Submit order into state
    const order = State.createOrder(shippingInfo, paymentMethod, carrierName);
    
    // Set success tracking parameters
    order.shippingCompanyEn = carrierName;
    CheckoutPage.successOrder = order;

    // Trigger router re-render page
    State.notify('state_changed');
  };
};
