import { State } from '../store/state.js';

export function UserDashboardPage(params, query) {
  const isAr = State.state.lang === 'ar';
  const user = State.state.user;
  const orders = State.state.orders;
  const wishlist = State.state.wishlist;

  // Active tab selection (default from query parameters if matching)
  let activeTab = 'orders';
  if (query && query.tab) activeTab = query.tab;

  return `
    <div class="dashboard-page-container container animate-fade-in">
      <h1 class="page-title">${isAr ? 'لوحة التحكم الشخصية' : 'My Account'}</h1>

      <div class="dashboard-layout">
        <!-- Sidebar Navigation -->
        <aside class="dashboard-sidebar">
          <div class="user-profile-summary">
            <div class="avatar-large">${user.name.charAt(0)}</div>
            <div class="info">
              <h6>${user.name}</h6>
              <p>${user.email}</p>
            </div>
          </div>

          <div class="dashboard-menu">
            <button class="menu-btn ${activeTab === 'orders' ? 'active' : ''}" data-tab="orders">
              📦 ${isAr ? 'طلباتي' : 'My Orders'} (${orders.length})
            </button>
            <button class="menu-btn ${activeTab === 'wishlist' ? 'active' : ''}" data-tab="wishlist">
              ❤️ ${isAr ? 'المفضلة' : 'Wishlist'} (${wishlist.length})
            </button>
            <button class="menu-btn ${activeTab === 'addresses' ? 'active' : ''}" data-tab="addresses">
              📍 ${isAr ? 'عناوين التوصيل' : 'Address Book'}
            </button>
            <button class="menu-btn ${activeTab === 'profile' ? 'active' : ''}" data-tab="profile">
              ⚙️ ${isAr ? 'بيانات الحساب' : 'Profile Settings'}
            </button>
          </div>
        </aside>

        <!-- Dynamic Content Section -->
        <main class="dashboard-content-area" style="padding-top: 0;">
          
          <!-- Orders Panel -->
          <div class="dashboard-panel-view ${activeTab === 'orders' ? 'active' : ''}" id="panel-orders">
            <h3>${isAr ? 'تتبع طلباتي' : 'Order History'}</h3>
            
            ${orders.length === 0 ? `
              <div class="empty-dashboard-state">
                <p>${isAr ? 'لم تقم بإنشاء أي طلبات حتى الآن.' : 'You have not placed any orders yet.'}</p>
                <a href="#/category" class="btn btn-primary">${isAr ? 'تصفح المتجر الآن' : 'Shop Our Store'}</a>
              </div>
            ` : `
              <div class="orders-accordion-list">
                ${orders.map(order => {
                  const statusClass = order.status; // pending, shipped, delivered, cancelled
                  const isActive = (s) => order.statusHistory.some(h => h.status === s);
                  
                  return `
                    <div class="order-card-accordion" data-id="${order.id}">
                      <div class="order-header-trigger">
                        <div class="summary-details">
                          <span class="id">#${order.id}</span>
                          <span class="date">${order.date}</span>
                          <span class="badge-status ${statusClass}">${isAr ? getStatusLabelAr(order.status) : getStatusLabelEn(order.status)}</span>
                        </div>
                        <div class="summary-total">
                          <strong class="price">${order.total % 1 === 0 ? order.total.toFixed(0) : order.total.toFixed(3)} KWD</strong>
                          <span class="chevron">▼</span>
                        </div>
                      </div>

                      <div class="order-details-drawer">
                        <!-- Tracking Stepper -->
                        <div class="stepper-wrapper">
                          <h6>${isAr ? 'تتبع مسار الشحنة' : 'Delivery Tracking'}</h6>
                          <div class="stepper">
                            <div class="step ${isActive('pending') ? 'completed' : ''}">
                              <div class="step-bubble">1</div>
                              <span class="step-label">${isAr ? 'تم استلام الطلب' : 'Received'}</span>
                            </div>
                            <div class="step ${isActive('shipped') ? 'completed' : (order.status === 'pending' ? 'active' : '')}">
                              <div class="step-bubble">2</div>
                              <span class="step-label">${isAr ? 'جاري التجهيز والشحن' : 'Shipped'}</span>
                            </div>
                            <div class="step ${isActive('delivered') ? 'completed' : (order.status === 'shipped' ? 'active' : '')}">
                              <div class="step-bubble">3</div>
                              <span class="step-label">${isAr ? 'مع المندوب للتوصيل' : 'Out for Delivery'}</span>
                            </div>
                            <div class="step ${order.status === 'delivered' ? 'completed' : ''}">
                              <div class="step-bubble">4</div>
                              <span class="step-label">${isAr ? 'تم التوصيل بنجاح' : 'Delivered'}</span>
                            </div>
                          </div>
                        </div>

                        <!-- Items details list -->
                        <div class="order-items-grid">
                          ${order.items.map(item => `
                            <div class="order-item-mini">
                              <img src="${item.product.image}" alt="${isAr ? item.product.titleAr : item.product.titleEn}">
                              <div class="details">
                                <span class="name">${isAr ? item.product.titleAr : item.product.titleEn}</span>
                                <span class="meta">${isAr ? 'الكمية:' : 'Qty:'} <span class="num">${item.quantity}</span> ${item.color ? `| ${item.color}` : ''} ${item.size ? `| ${item.size}` : ''}</span>
                              </div>
                              <span class="item-total">${((item.product.price * item.quantity) % 1 === 0) ? (item.product.price * item.quantity).toFixed(0) : (item.product.price * item.quantity).toFixed(3)} KWD</span>
                            </div>
                          `).join('')}
                        </div>

                        <!-- Address Info summary -->
                        <div class="order-address-box">
                          <h6>${isAr ? 'عنوان التوصيل' : 'Delivery Address'}</h6>
                          <p>${order.shippingInfo.name} | <span class="num">${order.shippingInfo.phone}</span></p>
                          <p>${order.shippingInfo.area}، ${isAr ? 'قطعة' : 'Block'} <span class="num">${order.shippingInfo.block}</span>، ${isAr ? 'شارع' : 'Street'} ${order.shippingInfo.street}، ${isAr ? 'منزل/مبنى' : 'Bldg/House'} <span class="num">${order.shippingInfo.building}</span> ${order.shippingInfo.floor ? `، ${isAr ? 'دور/شقة' : 'Floor/Apt'} <span class="num">${order.shippingInfo.floor}</span>` : ''}</p>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>

          <!-- Wishlist Panel -->
          <div class="dashboard-panel-view ${activeTab === 'wishlist' ? 'active' : ''}" id="panel-wishlist">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.5rem; border-bottom:1px solid var(--border-light); padding-bottom:1rem;">
              <h3 style="margin:0;">${isAr ? 'المنتجات المفضلة' : 'Wishlist'}</h3>
              ${State.state.lastProduct ? `
                <a href="#/product/${State.state.lastProduct.id}" class="btn btn-secondary btn-sm" style="display:flex; align-items:center; gap:0.4rem; padding:0.4rem 0.8rem; font-size:0.85rem; font-weight:600; border-radius:30px; text-decoration:none; background:var(--bg-secondary); border:1px solid var(--border-color); color:var(--text-primary); transition:var(--transition-fast);">
                  <span>${isAr ? '← العودة للمنتج:' : '← Back to product:'} ${isAr ? State.state.lastProduct.titleAr : State.state.lastProduct.titleEn}</span>
                </a>
              ` : ''}
            </div>
            
            ${wishlist.length === 0 ? `
              <div class="empty-dashboard-state">
                <p>${isAr ? 'قائمة الأمنيات فارغة حالياً.' : 'Your wishlist is empty.'}</p>
                <a href="#/category" class="btn btn-primary">${isAr ? 'تصفح المنتجات' : 'Browse Products'}</a>
              </div>
            ` : `
              <div class="wishlist-cards-grid">
                ${wishlist.map(p => `
                  <div class="wish-item-card" data-id="${p.id}">
                    <img src="${p.image}" alt="${isAr ? p.titleAr : p.titleEn}">
                    <div class="details">
                      <span class="cat">${isAr ? p.categoryAr : p.categoryEn}</span>
                      <a href="#/product/${p.id}" class="title">${isAr ? p.titleAr : p.titleEn}</a>
                      <span class="price">${p.price % 1 === 0 ? p.price.toFixed(0) : p.price.toFixed(3)} KWD</span>
                      
                      <div class="actions">
                        <button class="btn btn-primary btn-sm wish-add-to-cart" data-id="${p.id}">${isAr ? 'أضف للسلة' : 'Add to Cart'}</button>
                        <button class="btn btn-secondary btn-sm wish-remove" data-id="${p.id}">${isAr ? 'إزالة' : 'Remove'}</button>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <!-- Addresses Panel -->
          <div class="dashboard-panel-view ${activeTab === 'addresses' ? 'active' : ''}" id="panel-addresses">
            <h3>${isAr ? 'عناوين التوصيل المسجلة' : 'Address Book'}</h3>
            
            <div class="address-grid">
              ${user.addresses.map(addr => `
                <div class="address-card">
                  <h6>${isAr ? addr.type : addr.typeEn}</h6>
                  <p>${addr.city}، ${addr.area}</p>
                  <p>${isAr ? 'شارع' : 'Street'} ${addr.street}، ${isAr ? 'قطعة' : 'Block'} <span class="num">${addr.block}</span>، ${isAr ? 'مبنى' : 'Bldg'} <span class="num">${addr.building}</span></p>
                  <p class="num">${addr.floor}</p>
                  <button class="btn-text-remove remove-address-btn" data-id="${addr.id}" style="margin-top:1rem;">${isAr ? 'حذف العنوان' : 'Delete Address'}</button>
                </div>
              `).join('')}

              <!-- Add Address Form Card -->
              <div class="address-card add-new-box">
                <button id="show-add-address-form" class="btn btn-secondary" style="width:100%; height:100%; min-height:120px;">
                  ➕ ${isAr ? 'إضافة عنوان جديد' : 'Add New Address'}
                </button>
              </div>
            </div>

            <!-- New Address Form (Hidden by default) -->
            <form id="add-address-form" class="address-form-box" style="display:none; margin-top:2rem; padding:1.5rem; background:var(--bg-secondary); border-radius:6px;">
              <h5>${isAr ? 'إضافة عنوان توصيل جديد' : 'New Shipping Address'}</h5>
              <div class="form-row-2">
                <div class="form-group">
                  <label>${isAr ? 'نوع العنوان (منزل، عمل...)' : 'Address Label (Home, Office)'}</label>
                  <input type="text" id="addr-label" class="form-control" required placeholder="منزل">
                </div>
                <div class="form-group">
                  <label>${isAr ? 'المنطقة *' : 'Area *'}</label>
                  <input type="text" id="addr-area" class="form-control" required>
                </div>
              </div>
              <div class="form-row-3">
                <div class="form-group">
                  <label>${isAr ? 'القطعة *' : 'Block *'}</label>
                  <input type="text" id="addr-block" class="form-control number-input" translate="no" required>
                </div>
                <div class="form-group">
                  <label>${isAr ? 'الشارع *' : 'Street *'}</label>
                  <input type="text" id="addr-street" class="form-control" required>
                </div>
                <div class="form-group">
                  <label>${isAr ? 'المنزل/المبنى *' : 'Bldg / House *'}</label>
                  <input type="text" id="addr-building" class="form-control number-input" translate="no" required>
                </div>
              </div>
              <div class="form-group">
                <label>${isAr ? 'الدور والشقة (اختياري)' : 'Floor / Apartment (Optional)'}</label>
                <input type="text" id="addr-floor" class="form-control number-input" translate="no">
              </div>
              <div class="knet-actions">
                <button type="button" id="cancel-addr-btn" class="btn btn-secondary">${isAr ? 'إلغاء' : 'Cancel'}</button>
                <button type="submit" class="btn btn-primary">${isAr ? 'حفظ العنوان' : 'Save Address'}</button>
              </div>
            </form>
          </div>

          <!-- Profile Settings Panel -->
          <div class="dashboard-panel-view ${activeTab === 'profile' ? 'active' : ''}" id="panel-profile">
            <h3>${isAr ? 'تعديل بيانات الحساب' : 'Profile Settings'}</h3>
            
            <form id="profile-settings-form" style="max-width: 500px; margin-top: 1.5rem;">
              <div class="form-group">
                <label>${isAr ? 'الاسم بالكامل *' : 'Full Name *'}</label>
                <input type="text" id="prof-name" class="form-control" value="${user.name}" required>
              </div>
              <div class="form-group">
                <label>${isAr ? 'البريد الإلكتروني *' : 'Email Address *'}</label>
                <input type="email" id="prof-email" class="form-control" value="${user.email}" required>
              </div>
              <div class="form-group">
                <label>${isAr ? 'رقم الهاتف *' : 'Phone Number *'}</label>
                <input type="tel" id="prof-phone" class="form-control number-input" value="${user.phone}" translate="no" required>
              </div>

              <hr class="divider" style="margin:1.5rem 0;">
              
              <h5>${isAr ? 'تغيير كلمة المرور' : 'Change Password'}</h5>
              <div class="form-group">
                <label>${isAr ? 'كلمة المرور الحالية' : 'Current Password'}</label>
                <input type="password" id="prof-curr-pass" class="form-control">
              </div>
              <div class="form-group">
                <label>${isAr ? 'كلمة المرور الجديدة' : 'New Password'}</label>
                <input type="password" id="prof-new-pass" class="form-control">
              </div>

              <button type="submit" class="btn btn-primary" style="margin-top: 1.5rem;">${isAr ? 'حفظ التعديلات' : 'Save Changes'}</button>
            </form>
          </div>

        </main>
      </div>
    </div>

    <style>
      .dashboard-page-container { padding-top: 3rem; }
      .dashboard-layout { display: grid; grid-template-columns: 280px 1fr; gap: 3rem; align-items: start; }
      
      @media (max-width: 992px) {
        .dashboard-layout { grid-template-columns: 1fr; gap: 2rem; }
      }

      /* Sidebar */
      .dashboard-sidebar { background-color: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; padding: 1.5rem; }
      
      .user-profile-summary { display: flex; align-items: center; gap: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1.2rem; margin-bottom: 1.5rem; }
      .avatar-large { width: 50px; height: 50px; border-radius: 50%; background-color: var(--accent-gold); color: #151515; font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; justify-content: center; }
      .user-profile-summary h6 { font-size: 0.95rem; font-weight: 600; }
      .user-profile-summary p { font-size: 0.75rem; color: var(--text-muted); }

      .dashboard-menu { display: flex; flex-direction: column; gap: 0.5rem; }
      .menu-btn { background: none; border: none; text-align: inherit; padding: 0.8rem 1rem; border-radius: 4px; color: var(--text-secondary); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: var(--transition-fast); }
      .menu-btn:hover, .menu-btn.active { background-color: var(--bg-tertiary); color: var(--text-primary); }
      .menu-btn.active { border-left: 3px solid var(--accent-gold); }
      [dir="rtl"] .menu-btn.active { border-left: none; border-right: 3px solid var(--accent-gold); }

      @media (max-width: 992px) {
        .dashboard-menu { flex-direction: row; overflow-x: auto; padding: 0.2rem 0; }
        .menu-btn { white-space: nowrap; }
        .menu-btn.active { border-left: none; border-bottom: 2px solid var(--accent-gold); }
        [dir="rtl"] .menu-btn.active { border-right: none; border-bottom: 2px solid var(--accent-gold); }
      }

      /* Panel visibility */
      .dashboard-panel-view { display: none; }
      .dashboard-panel-view.active { display: block; animation: fadeIn 0.4s ease; }
      .dashboard-panel-view h3 { font-size: 1.3rem; font-weight: 600; margin-bottom: 1.5rem; }

      .empty-dashboard-state { text-align: center; padding: 4rem 1rem; background-color: var(--bg-secondary); border-radius: 6px; }
      .empty-dashboard-state p { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.9rem; }

      /* Orders Accordion */
      .orders-accordion-list { display: flex; flex-direction: column; gap: 1rem; }
      .order-card-accordion { background-color: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; overflow: hidden; }
      .order-header-trigger { display: flex; justify-content: space-between; align-items: center; padding: 1.2rem; cursor: pointer; user-select: none; }
      .order-header-trigger:hover { background-color: var(--bg-tertiary); }
      .order-header-trigger .chevron { font-size: 0.75rem; color: var(--text-muted); transition: transform 0.3s; }
      .order-card-accordion.expanded .chevron { transform: rotate(180deg); }

      .order-header-trigger .summary-details { display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; }
      .order-header-trigger .id { font-weight: 600; }
      .order-header-trigger .date { font-size: 0.85rem; color: var(--text-muted); }

      .order-details-drawer { display: none; padding: 1.5rem; border-top: 1px solid var(--border-color); background-color: var(--bg-primary); }
      .order-card-accordion.expanded .order-details-drawer { display: block; }
      
      .stepper-wrapper { margin-bottom: 2rem; }
      .stepper-wrapper h6 { font-size: 0.85rem; text-transform: uppercase; font-weight: 600; margin-bottom: 1rem; }

      .order-items-grid { display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 1.5rem; }
      .order-item-mini { display: flex; gap: 0.8rem; align-items: center; border-bottom: 1px solid var(--border-light); padding-bottom: 0.8rem; }
      .order-item-mini:last-child { border-bottom: none; padding-bottom: 0; }
      .order-item-mini img { width: 40px; height: 50px; object-fit: cover; border-radius: 3px; background-color: var(--bg-secondary); }
      .order-item-mini .details { flex: 1; }
      .order-item-mini .name { font-size: 0.85rem; font-weight: 500; display: block; }
      .order-item-mini .meta { font-size: 0.75rem; color: var(--text-muted); }
      .order-item-mini .item-total { font-weight: 600; font-size: 0.85rem; }

      .order-address-box { padding: 1rem; background-color: var(--bg-secondary); border-radius: 4px; font-size: 0.85rem; }
      .order-address-box h6 { font-weight: 600; margin-bottom: 0.4rem; }
      .order-address-box p { color: var(--text-secondary); line-height: 1.4; }

      /* Wishlist Cards Grid */
      .wishlist-cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
      .wish-item-card { display: flex; gap: 1rem; background-color: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; padding: 1rem; align-items: center; }
      .wish-item-card img { width: 70px; height: 95px; object-fit: cover; border-radius: 4px; }
      .wish-item-card .details { flex: 1; display: flex; flex-direction: column; gap: 0.25rem; }
      .wish-item-card .cat { font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); }
      .wish-item-card .title { font-size: 0.85rem; font-weight: 600; text-decoration: none; color: var(--text-primary); line-height: 1.3; }
      .wish-item-card .price { font-size: 0.9rem; font-weight: 600; color: var(--accent-gold); }
      .wish-item-card .actions { display: flex; gap: 0.4rem; margin-top: 0.5rem; }
      
      /* Addresses Grid */
      .address-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.5rem; }
      .address-card { background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.5rem; font-size: 0.85rem; }
      .address-card h6 { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.8rem; }
      .address-card p { color: var(--text-secondary); margin-bottom: 0.2rem; }
      .add-new-box { display: flex; align-items: center; justify-content: center; border-style: dashed; }
    </style>
  `;
}

// Helpers
function getStatusLabelEn(status) {
  if (status === 'pending') return 'Processing';
  if (status === 'shipped') return 'Shipped';
  if (status === 'delivered') return 'Delivered';
  return 'Cancelled';
}

function getStatusLabelAr(status) {
  if (status === 'pending') return 'قيد التجهيز';
  if (status === 'shipped') return 'تم الشحن';
  if (status === 'delivered') return 'تم التوصيل';
  return 'ملغي';
}

UserDashboardPage.onMount = (params, query) => {
  const container = document.querySelector('.dashboard-page-container');
  const isAr = State.state.lang === 'ar';
  if (!container) return;

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

  const numberInputs = container.querySelectorAll('.number-input');
  numberInputs.forEach(input => {
    input.addEventListener('input', sanitizeNumberFields);
  });

  // Sidebar Menu switching tab
  const menuButtons = container.querySelectorAll('.menu-btn');
  const panels = container.querySelectorAll('.dashboard-panel-view');

  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      
      menuButtons.forEach(b => b.classList.toggle('active', b === btn));
      panels.forEach(p => p.classList.toggle('active', p.id === `panel-${tabId}`));
      
      // Update browser hash query silently to preserve tab state on refreshes
      window.history.pushState(null, null, `#/dashboard?tab=${tabId}`);
    });
  });

  // Orders accordion dropdown expand/collapse script
  const orderCards = container.querySelectorAll('.order-card-accordion');
  orderCards.forEach(card => {
    const trigger = card.querySelector('.order-header-trigger');
    trigger.addEventListener('click', () => {
      // Toggle expanded class
      const isExpanded = card.classList.contains('expanded');
      
      // Close all first
      orderCards.forEach(c => c.classList.remove('expanded'));
      
      // Open if was closed
      if (!isExpanded) {
        card.classList.add('expanded');
      }
    });
  });

  // Wishlist Actions: Add to Cart
  container.querySelectorAll('.wish-add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const prod = State.state.products.find(p => p.id === id);
      if (prod) {
        State.addToCart(prod, 1);
      }
    });
  });

  // Remove from Wishlist
  container.querySelectorAll('.wish-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const prod = State.state.products.find(p => p.id === id);
      if (prod) {
        State.toggleWishlist(prod);
        // Refresh component
        State.notify('state_changed');
      }
    });
  });

  // Toggle address form visibility
  const showFormBtn = document.getElementById('show-add-address-form');
  const addressForm = document.getElementById('add-address-form');
  const cancelAddrBtn = document.getElementById('cancel-addr-btn');

  if (showFormBtn && addressForm) {
    showFormBtn.addEventListener('click', () => {
      addressForm.style.display = 'block';
      showFormBtn.closest('.add-new-box').style.display = 'none';
    });
  }

  if (cancelAddrBtn && addressForm) {
    cancelAddrBtn.addEventListener('click', () => {
      addressForm.reset();
      addressForm.style.display = 'none';
      if (showFormBtn) showFormBtn.closest('.add-new-box').style.display = 'flex';
    });
  }

  // Address submission
  if (addressForm) {
    addressForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const newAddr = {
        id: Date.now(),
        type: document.getElementById('addr-label').value,
        typeEn: document.getElementById('addr-label').value,
        city: isAr ? "الكويت" : "Kuwait",
        area: document.getElementById('addr-area').value,
        block: document.getElementById('addr-block').value,
        street: document.getElementById('addr-street').value,
        building: document.getElementById('addr-building').value,
        floor: document.getElementById('addr-floor').value || ''
      };

      State.state.user.addresses.push(newAddr);
      State.save('user');
      State.showToast(isAr ? 'تم حفظ العنوان بنجاح!' : 'Address saved successfully!', 'success');
      State.notify('state_changed');
    });
  }

  // Address Delete
  container.querySelectorAll('.remove-address-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      State.state.user.addresses = State.state.user.addresses.filter(a => a.id !== id);
      State.save('user');
      State.showToast(isAr ? 'تم حذف العنوان.' : 'Address deleted.', 'info');
      State.notify('state_changed');
    });
  });

  // Profile Form submissions update
  const profileForm = document.getElementById('profile-settings-form');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const newName = document.getElementById('prof-name').value;
      const newEmail = document.getElementById('prof-email').value;
      const newPhone = document.getElementById('prof-phone').value;

      State.state.user.name = newName;
      State.state.user.email = newEmail;
      State.state.user.phone = newPhone;
      State.save('user');

      State.showToast(isAr ? 'تم تحديث بيانات الحساب بنجاح!' : 'Profile settings updated successfully!', 'success');
      State.notify('state_changed');
    });
  }
};
