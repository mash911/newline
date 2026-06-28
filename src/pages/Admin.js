import { State, CATEGORY_TREE, findCategoryInTree } from '../store/state.js';

export function AdminPage(params, query) {
  const isAr = State.state.lang === 'ar';
  const products = State.state.products;
  const orders = State.state.orders;
  const coupons = State.state.coupons;

  // Active tab inside admin
  let activeTab = 'overview';
  if (query && query.tab) activeTab = query.tab;

  // Analytics helper calculations
  const totalRevenue = orders.reduce((sum, o) => sum + (o.status !== 'cancelled' ? o.total : 0), 0);
  const activeOrdersCount = orders.filter(o => o.status === 'pending' || o.status === 'shipped').length;
  const lowStockAlerts = products.filter(p => p.stock < 5).length;

  const renderCategoryNode = (cat, depth = 0) => {
    const hasSubs = cat.subcategories && cat.subcategories.length > 0;
    const padding = depth * 15;
    
    let html = `
      <div class="category-list-item" style="margin-inline-start:${padding}px; border-inline-start:${depth > 0 ? '1px dashed var(--border-color)' : 'none'}; padding-inline-start:${depth > 0 ? '10px' : '0'}; display:flex; align-items:center; justify-content:space-between; padding-top:0.4rem; padding-bottom:0.4rem;">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <input type="checkbox" name="categories_select" id="cat-${cat.id}" value="${cat.id}">
          <label for="cat-${cat.id}" style="display:flex; align-items:center; gap:0.5rem; margin:0; cursor:pointer;">
            <img src="${cat.image}" class="cat-thumb" style="width:28px; height:28px; border-radius:4px; object-fit:cover;">
            <div class="cat-meta" style="display:flex; flex-direction:column;">
              <span class="title" style="font-size:0.85rem; font-weight:600; color:var(--text-primary);">${isAr ? cat.titleAr : cat.titleEn}</span>
              <span class="en" style="font-size:0.7rem; color:var(--text-secondary);">${cat.titleEn}</span>
            </div>
          </label>
        </div>
        ${hasSubs ? `
          <span style="font-size: 0.65rem; background: var(--border-light); color: var(--text-secondary); padding: 0.15rem 0.4rem; border-radius: 20px; font-weight: 600; white-space: nowrap; margin-inline-start:0.5rem;">
            ${cat.subcategories.length} ${isAr ? 'الفئات الفرعية' : 'Subcategories'}
          </span>
        ` : ''}
      </div>
    `;
    
    if (hasSubs) {
      cat.subcategories.forEach(sub => {
        html += renderCategoryNode(sub, depth + 1);
      });
    }
    
    return html;
  };

  const categoriesHtml = CATEGORY_TREE.map(cat => renderCategoryNode(cat)).join('');

  return `
    <div class="admin-page-container animate-fade-in">
      <div class="container admin-header">
        <h1>${isAr ? 'لوحة التحكم بالإدارة' : 'Admin Control Panel'}</h1>
        <p>${isAr ? 'إدارة المنتجات، الطلبات، الكوبونات والتقارير في مكان واحد' : 'Manage products, orders, coupons, and view metrics in one place.'}</p>
      </div>

      <div class="admin-layout">
        <!-- Admin Sidebar -->
        <aside class="admin-sidebar">
          <a href="#/admin?tab=overview" class="admin-nav-item ${activeTab === 'overview' ? 'active' : ''}">
            📊 ${isAr ? 'نظرة عامة والتقارير' : 'Dashboard Overview'}
          </a>
          <a href="#/admin?tab=products" class="admin-nav-item ${activeTab === 'products' ? 'active' : ''}">
            🛍️ ${isAr ? 'إدارة المنتجات' : 'Manage Products'}
          </a>
          <a href="#/admin?tab=orders" class="admin-nav-item ${activeTab === 'orders' ? 'active' : ''}">
            📦 ${isAr ? 'إدارة الطلبات' : 'Manage Orders'} (${orders.length})
          </a>
          <a href="#/admin?tab=coupons" class="admin-nav-item ${activeTab === 'coupons' ? 'active' : ''}">
            🏷️ ${isAr ? 'الكوبونات والخصومات' : 'Coupons & Promos'}
          </a>
          <a href="#/admin?tab=banners" class="admin-nav-item ${activeTab === 'banners' ? 'active' : ''}">
            🖼️ ${isAr ? 'إدارة البنرات' : 'Manage Banners'}
          </a>
          <a href="#/admin?tab=slides" class="admin-nav-item ${activeTab === 'slides' ? 'active' : ''}">
            🎠 ${isAr ? 'إدارة السلايدر الرئيسي' : 'Manage Hero Slider'}
          </a>
        </aside>

        <!-- Admin Main Content -->
        <main class="admin-content" style="padding-top: 0;">
          
          <!-- Tab 1: Overview Dashboard -->
          <div class="admin-panel-view ${activeTab === 'overview' ? 'active' : ''}" id="adm-overview">
            <div class="admin-metrics">
              <div class="metric-card">
                <span class="title">${isAr ? 'إجمالي المبيعات' : 'Total Revenue'}</span>
                <span class="value" style="color:var(--success-color);">${totalRevenue % 1 === 0 ? totalRevenue.toFixed(0) : totalRevenue.toFixed(3)} KWD</span>
              </div>
              <div class="metric-card">
                <span class="title">${isAr ? 'الطلبات النشطة' : 'Active Orders'}</span>
                <span class="value">${activeOrdersCount}</span>
              </div>
              <div class="metric-card">
                <span class="title">${isAr ? 'تنبيهات المخزون المنخفض' : 'Low Stock Alerts'}</span>
                <span class="value" style="color:${lowStockAlerts > 0 ? 'var(--error-color)' : 'inherit'};">${lowStockAlerts}</span>
              </div>
              <div class="metric-card">
                <span class="title">${isAr ? 'كوبونات الخصم النشطة' : 'Active Coupons'}</span>
                <span class="value">${coupons.length}</span>
              </div>
            </div>

            <!-- Recent Orders Section -->
            <div class="admin-section-box">
              <h5>${isAr ? 'آخر عمليات الشراء' : 'Recent Transactions'}</h5>
              ${orders.length === 0 ? `
                <p style="color:var(--text-muted); font-size:0.9rem;">${isAr ? 'لا توجد طلبات مسجلة حالياً.' : 'No transactions recorded yet.'}</p>
              ` : `
                <table class="admin-table">
                  <thead>
                    <tr>
                      <th>${isAr ? 'رقم الطلب' : 'Order ID'}</th>
                      <th>${isAr ? 'العميل' : 'Customer'}</th>
                      <th>${isAr ? 'التاريخ' : 'Date'}</th>
                      <th>${isAr ? 'وسيلة الدفع' : 'Payment'}</th>
                      <th>${isAr ? 'الإجمالي' : 'Total'}</th>
                      <th>${isAr ? 'الحالة' : 'Status'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${orders.slice(0, 5).map(o => `
                      <tr>
                        <td><strong class="id">#${o.id}</strong></td>
                        <td>${o.shippingInfo.name}</td>
                        <td><span class="date">${o.date}</span></td>
                        <td>${o.paymentMethod.toUpperCase()}</td>
                        <td><span class="price">${o.total % 1 === 0 ? o.total.toFixed(0) : o.total.toFixed(3)} KWD</span></td>
                        <td><span class="badge-status ${o.status}">${isAr ? getStatusLabelAr(o.status) : getStatusLabelEn(o.status)}</span></td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              `}
            </div>
          </div>

          <!-- Tab 2: Manage Products Catalog CRUD -->
          <div class="admin-panel-view ${activeTab === 'products' ? 'active' : ''}" id="adm-products">
            <div class="admin-section-header-row">
              <h3>${isAr ? 'كتالوج المنتجات' : 'Products Catalog'}</h3>
              <button id="show-add-product-modal" class="btn btn-primary">➕ ${isAr ? 'إضافة منتج جديد' : 'Add New Product'}</button>
            </div>

            <!-- Add/Edit product form (Hidden by default) -->
            <form id="product-crud-form" class="new-admin-form" style="display:none; margin-bottom:2.5rem;">
              <h5 id="form-action-title" style="display:none;">${isAr ? 'إدخال منتج جديد' : 'New Product Details'}</h5>
              <input type="hidden" id="crud-prod-id">
              <div class="form-body-grid">
                <!-- Right/Main Column -->
                <div class="form-main-col">
                  
                  <!-- Form Header: Product Type Cards -->
                  <div class="product-type-cards">
                    <div class="type-card active" data-type="simple">
                      <span class="radio-indicator"></span>
                      <div class="type-info">
                        <label>${isAr ? 'بسيط' : 'Simple'}</label>
                        <p>${isAr ? 'المنتج البسيط هو عنصر مادي بدون تنويعات' : 'Simple product is a physical item with no variations'}</p>
                      </div>
                      <input type="radio" name="product_type" id="type-simple" checked style="display:none;">
                    </div>
                    <div class="type-card" data-type="variable">
                      <span class="radio-indicator"></span>
                      <div class="type-info">
                        <label>${isAr ? 'متغير' : 'Variable'}</label>
                        <p>${isAr ? 'المنتج المتغير له تنويعات متعددة (الحجم، اللون، إلخ)' : 'Variable product has multiple options like size, color, etc.'}</p>
                      </div>
                      <input type="radio" name="product_type" id="type-variable" style="display:none;">
                    </div>
                    <div class="type-card" data-type="multiple">
                      <span class="radio-indicator"></span>
                      <div class="type-info">
                        <label>${isAr ? 'متعدد' : 'Multiple'}</label>
                        <p>${isAr ? 'أنشئ عدة منتجات بسيطة دفعة واحدة من نموذج واحد' : 'Create multiple simple products at once from a single model'}</p>
                      </div>
                      <input type="radio" name="product_type" id="type-multiple" style="display:none;">
                    </div>
                  </div>

                  <!-- Section 1: Basic Information -->
                  <div class="form-section-card">
                    <div class="card-header">
                      <span class="section-icon">📝</span>
                      <h5>${isAr ? 'المعلومات الأساسية' : 'Basic Information'}</h5>
                    </div>
                    <div class="card-body">
                      <div class="form-group">
                        <label>${isAr ? 'اسم المنتج (العربية) *' : 'Product Name (Arabic) *'}</label>
                        <input type="text" id="crud-title-ar" class="form-control" placeholder="${isAr ? 'شراشف قطن مصري' : 'e.g. Cotton sheet set'}" required>
                        <span class="input-subtitle">${isAr ? 'سيتم ترجمة النص الإنجليزي تلقائياً من العربية' : 'English title will be auto-translated from Arabic'}</span>
                        <input type="hidden" id="crud-title-en">
                      </div>
                      
                      <div class="form-group">
                        <label>${isAr ? 'رمز المنتج *' : 'Product SKU *'}</label>
                        <input type="text" id="crud-sku" class="form-control" placeholder="CVH-BS-EC-Q-001" required>
                        <input type="hidden" id="crud-type" value="simple">
                      </div>

                      <div class="form-group">
                        <label>${isAr ? 'الوصف (العربية) *' : 'Description (Arabic) *'}</label>
                        <textarea id="crud-desc-ar" class="form-control" rows="4" placeholder="${isAr ? 'وصف المنتج باللغة العربية' : 'Product description in Arabic'}" required></textarea>
                        <span class="input-subtitle">${isAr ? 'سيتم ترجمة الوصف تلقائياً للغة الإنجليزية' : 'Description will be auto-translated to English'}</span>
                        <textarea id="crud-desc-en" class="form-control" style="display:none;"></textarea>
                      </div>
                    </div>
                  </div>

                  <!-- Section 2: Pricing and Inventory -->
                  <div class="form-section-card" id="pricing-inventory-section">
                    <div class="card-header">
                      <span class="section-icon">💵</span>
                      <h5>${isAr ? 'التسعير والمخزون' : 'Pricing & Inventory'}</h5>
                    </div>
                    <div class="card-body">
                      <div class="form-row-3">
                        <div class="form-group">
                          <label>${isAr ? 'السعر *' : 'Price *'}</label>
                          <input type="text" inputmode="decimal" pattern="[0-9]*\\.?[0-9]*" id="crud-price" class="form-control number-input" placeholder="299.99" translate="no" required>
                        </div>
                        <div class="form-group">
                          <label>${isAr ? 'سعر التخفيض' : 'Sale Price'}</label>
                          <input type="text" inputmode="decimal" pattern="[0-9]*\\.?[0-9]*" id="crud-old-price" class="form-control number-input" placeholder="249.99" translate="no">
                        </div>
                        <div class="form-group">
                          <label>${isAr ? 'كمية المخزون *' : 'Stock Quantity *'}</label>
                          <input type="text" inputmode="numeric" pattern="[0-9]*" id="crud-stock" class="form-control number-input" value="100" translate="no" required>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Section 4: Variable Attributes & Variations -->
                  <div class="form-section-card" id="variable-attributes-section" style="display:none; padding: 1.5rem; background: var(--bg-primary); border-radius: 8px; border: 1px solid var(--border-color);">
                    <div class="card-header" style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--border-light); padding-bottom:0.75rem; margin-bottom:1rem;">
                      <h5 style="margin:0; font-weight:700; font-size:1.1rem; display:flex; align-items:center; gap:0.5rem;">
                        ⚙️ ${isAr ? 'إعدادات المنتج المتغير' : 'Variable Product Settings'}
                      </h5>
                      <span id="variations-combos-count" style="font-size:0.8rem; color:var(--text-muted); font-weight:600;">0 ${isAr ? 'تركيبة ممكنة' : 'possible combinations'}</span>
                    </div>

                    <!-- Tabs switcher -->
                    <div class="var-tabs" style="display:flex; border-bottom:2px solid var(--border-light); margin-bottom:1.5rem; gap:1rem;">
                      <button type="button" class="var-tab-btn active" data-tab="attribs" style="background:none; border:none; padding:0.6rem 1.2rem; font-weight:700; font-size:0.9rem; cursor:pointer; color:var(--text-muted); position:relative; border-bottom:2px solid transparent;">
                        🎛️ ${isAr ? 'الخصائص' : 'Attributes'}
                      </button>
                      <button type="button" class="var-tab-btn" data-tab="preview" style="background:none; border:none; padding:0.6rem 1.2rem; font-weight:700; font-size:0.9rem; cursor:pointer; color:var(--text-muted); position:relative; border-bottom:2px solid transparent;">
                        👁️ ${isAr ? 'المعاينة' : 'Preview'} <span class="badge" id="preview-tab-count-badge" style="background:var(--accent-gold); color:white; font-size:0.7rem; padding:0.1rem 0.4rem; border-radius:10px; margin-inline-start:0.3rem; display:none;">0</span>
                      </button>
                    </div>

                    <!-- Panel 1: Attributes -->
                    <div class="var-panel active" id="var-panel-attribs">
                      <p style="font-size:0.9rem; font-weight:700; margin-bottom:0.8rem;">${isAr ? 'اختر خصائص الأشكال' : 'Select variation attributes'}</p>
                      <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:1.5rem;">${isAr ? 'اختر الخصائص التي ستنشئ أشكالاً لهذا المنتج' : 'Choose attributes that will create variations for this product'}</p>

                      <!-- Color Attribute Block -->
                      <div class="attr-box" style="border:1px solid var(--border-color); border-radius:6px; padding:1.2rem; margin-bottom:1.25rem; background:var(--bg-secondary);">
                        <label style="display:flex; align-items:center; gap:0.6rem; font-weight:700; font-size:0.9rem; cursor:pointer;">
                          <input type="checkbox" id="attr-enable-color" style="width:18px; height:18px; accent-color:var(--accent-gold);">
                          <span>color (${isAr ? 'اللون' : 'Color'})</span>
                        </label>

                        <div id="attr-color-inputs-area" style="display:none; margin-top:1rem; border-top:1px solid var(--border-light); padding-top:1rem;">
                          <div style="display:grid; grid-template-columns: 2fr 1fr auto; gap:0.75rem; align-items:end;">
                            <div class="form-group" style="margin-bottom:0;">
                              <label style="font-size:0.8rem; font-weight:600; color:var(--text-secondary);">${isAr ? 'القيمة (عربي) *' : 'Value (Arabic) *'}</label>
                              <input type="text" id="attr-color-val" class="form-control" placeholder="${isAr ? 'مثال: أزرق كحلي' : 'e.g. Navy Blue'}" style="padding:0.4rem;">
                            </div>
                            <div class="form-group" style="margin-bottom:0;">
                              <label style="font-size:0.8rem; font-weight:600; color:var(--text-secondary);">${isAr ? 'اللون' : 'Color'}</label>
                              <input type="color" id="attr-color-picker" class="form-control" value="#c5a880" style="padding:0; height:36px; cursor:pointer;">
                            </div>
                            <button type="button" id="add-color-val-btn" class="btn btn-secondary" style="height:36px; padding:0 1rem; font-weight:700;">
                              + ${isAr ? 'إضافة قيمة' : 'Add Value'}
                            </button>
                          </div>

                          <!-- Colors tag list -->
                          <div id="added-colors-list" style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1rem;">
                          </div>
                        </div>
                      </div>

                      <!-- Size Attribute Block -->
                      <div class="attr-box" style="border:1px solid var(--border-color); border-radius:6px; padding:1.2rem; margin-bottom:1.5rem; background:var(--bg-secondary);">
                        <label style="display:flex; align-items:center; gap:0.6rem; font-weight:700; font-size:0.9rem; cursor:pointer;">
                          <input type="checkbox" id="attr-enable-size" style="width:18px; height:18px; accent-color:var(--accent-gold);">
                          <span>size (${isAr ? 'المقاس' : 'Size'})</span>
                        </label>

                        <div id="attr-size-inputs-area" style="display:none; margin-top:1rem; border-top:1px solid var(--border-light); padding-top:1rem;">
                          <div style="display:grid; grid-template-columns: 2fr auto; gap:0.75rem; align-items:end;">
                            <div class="form-group" style="margin-bottom:0;">
                              <label style="font-size:0.8rem; font-weight:600; color:var(--text-secondary);">${isAr ? 'القيمة (عربي) *' : 'Value (Arabic) *'}</label>
                              <input type="text" id="attr-size-val" class="form-control" placeholder="${isAr ? 'مثال: L, XL, XXL' : 'e.g. L, XL, XXL'}" style="padding:0.4rem;">
                            </div>
                            <button type="button" id="add-size-val-btn" class="btn btn-secondary" style="height:36px; padding:0 1rem; font-weight:700;">
                              + ${isAr ? 'إضافة قيمة' : 'Add Value'}
                            </button>
                          </div>

                          <!-- Sizes tag list -->
                          <div id="added-sizes-list" style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1rem;">
                          </div>
                        </div>
                      </div>

                      <!-- Default Stock Quantity -->
                      <div class="form-group" style="margin-bottom:1.5rem;">
                        <label style="font-weight:700; font-size:0.85rem; margin-bottom:0.4rem; display:block;">${isAr ? 'الكمية الافتراضية للمخزون' : 'Default stock quantity'}</label>
                        <input type="text" inputmode="numeric" pattern="[0-9]*" id="var-default-stock" class="form-control number-input" value="100" style="padding:0.5rem; font-weight:600;" translate="no">
                      </div>

                      <button type="button" id="var-preview-trigger-btn" class="btn btn-secondary" style="width:100%; padding:0.6rem; font-weight:700; font-size:0.95rem;">
                        👁️ ${isAr ? 'معاينة الأشكال' : 'Preview Variations'}
                      </button>
                      <p style="font-size:0.75rem; color:var(--text-muted); margin-top:0.5rem; text-align:center;" id="attribs-summary-help">
                        ${isAr ? 'سيتم إنشاء 0 شكل عند نشر المنتج.' : '0 variations will be created when publishing.'}
                      </p>
                    </div>

                    <!-- Panel 2: Preview -->
                    <div class="var-panel" id="var-panel-preview" style="display:none;">
                      <!-- Summary metrics row -->
                      <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:6px; padding:0.75rem 1rem; margin-bottom:1.25rem; font-size:0.85rem; font-weight:600;">
                        <span>👁️ ${isAr ? 'معاينة عدد الأشكال:' : 'Preview Variations count:'} <strong id="preview-metric-count">0</strong></span>
                        <span>✅ ${isAr ? 'المحدد:' : 'Selected:'} <strong id="preview-metric-selected">0</strong></span>
                        <span>📦 ${isAr ? 'المخزون:' : 'Stock:'} <strong id="preview-metric-stock">0</strong></span>
                      </div>

                      <p style="font-size:0.85rem; font-weight:700; margin-bottom:0.25rem;">${isAr ? 'أشكال المنتج' : 'Product Variations'}</p>
                      <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:1rem;">${isAr ? 'راجع وخصص كل شكل قبل الحفظ' : 'Review and customize each variation before saving'}</p>

                      <div style="overflow-x:auto;">
                        <table class="admin-table" style="font-size:0.85rem; width:100%; border-collapse:collapse;">
                          <thead>
                            <tr>
                              <th style="padding:0.5rem;">${isAr ? 'الخيار' : 'Variation'}</th>
                              <th style="padding:0.5rem;">${isAr ? 'رمز المنتج' : 'SKU'}</th>
                              <th style="padding:0.5rem;">${isAr ? 'السعر' : 'Price'}</th>
                              <th style="padding:0.5rem;">${isAr ? 'سعر التخفيض' : 'Sale Price'}</th>
                              <th style="padding:0.5rem;">${isAr ? 'المخزون' : 'Stock'}</th>
                              <th style="padding:0.5rem; text-align:center;">${isAr ? 'الصورة' : 'Image'}</th>
                            </tr>
                          </thead>
                          <tbody id="var-matrix-tbody">
                          </tbody>
                        </table>
                      </div>

                      <div style="display:flex; justify-content:flex-end; gap:0.75rem; margin-top:1.5rem; border-top:1px solid var(--border-light); padding-top:1.25rem;">
                        <span style="font-size:0.8rem; color:var(--text-muted); align-self:center;" id="preview-summary-footer-text">
                          ${isAr ? 'جاهز للنشر مع 0 شكل. سيتم إنشاء الأشكال عند نشر المنتج.' : 'Ready to publish with 0 variations.'}
                        </span>
                      </div>
                    </div>
                  </div>


                  <!-- Section 3: Categories -->
                  <div class="form-section-card">
                    <div class="card-header">
                      <span class="section-icon">🗂️</span>
                      <h5>${isAr ? 'الفئات *' : 'Categories *'}</h5>
                    </div>
                    <div class="card-body">
                      <p class="section-desc">${isAr ? 'تنظيم المنتج في فئات ذات صلة' : 'Organize product in relevant categories'}</p>
                      <label class="list-label" style="font-weight:600; font-size:0.85rem; margin-bottom:0.5rem; display:block;">${isAr ? 'اختيار الفئة' : 'Select Category'}</label>
                      
                      <div class="categories-list-scroll">
                        ${categoriesHtml}
                      </div>
                    </div>
                  </div>



                  <!-- Section 5: Images -->
                  <div class="form-section-card">
                    <div class="card-header">
                      <span class="section-icon">🖼️</span>
                      <h5>${isAr ? 'صور المنتج' : 'Product Images'}</h5>
                    </div>
                    <div class="card-body">
                      <p class="section-desc">${isAr ? 'رفع صور عالية الجودة للمنتج' : 'Upload high quality product images'}</p>
                      <div class="upload-dropzone" id="image-upload-zone">
                        <div class="upload-icon">📤</div>
                        <p>${isAr ? 'اسحب وأفلت الصور هنا أو انقر لتوليد صورة عشوائية فاخرة' : 'Drag & drop images here or click to auto-generate a luxury comforter photo'}</p>
                        <small>${isAr ? 'الحد الأقصى لحجم الملف 5 ميجابايت' : 'Max file size 5MB'}</small>
                        
                        <!-- Browse local file button -->
                        <div style="margin-top: 1rem;">
                          <button type="button" class="btn btn-secondary" id="crud-browse-btn" style="padding: 0.4rem 1.5rem; font-size: 0.8rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.4rem;">
                            📂 ${isAr ? 'تصفح من جهازك' : 'Browse from computer'}
                          </button>
                          <input type="file" id="crud-file-input" accept="image/*" multiple style="display:none;">
                        </div>

                        <!-- Image Preview Container -->
                        <div id="image-preview-container" style="display:none; margin-top: 1.25rem; display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; width: 100%;">
                        </div>

                        <input type="hidden" id="crud-image" value="">
                      </div>
                    </div>
                  </div>

                  <!-- Submit Actions -->
                  <div class="form-actions-bar">
                    <button type="button" id="cancel-crud-btn" class="btn btn-secondary">${isAr ? 'إلغاء' : 'Cancel'}</button>
                    <button type="submit" class="btn btn-primary">${isAr ? 'حفظ المنتج' : 'Save Product'}</button>
                  </div>
                </div>

                <!-- Left Sidebar Column (Tips & Status) -->
                <div class="form-sidebar-col">
                  <!-- Top Status Widget -->
                  <div class="sidebar-widget">
                    <label>${isAr ? 'الحالة *' : 'Status *'}</label>
                    <select id="crud-status-select" class="form-control" style="font-weight: 600;">
                      <option value="active">${isAr ? 'نشط' : 'Active'}</option>
                      <option value="draft" selected>${isAr ? 'مسودة' : 'Draft'}</option>
                    </select>
                  </div>

                  <!-- Tips Box Card -->
                  <div class="tips-box-card">
                    <h6>💡 ${isAr ? 'نصائح وإرشادات' : 'Tips & Guidelines'}</h6>
                    <ul class="tips-list">
                      <li>${isAr ? 'استخدم صور عالية الجودة لتحسين المبيعات' : 'Use high quality photos to improve sales.'}</li>
                      <li>${isAr ? 'اكتب أوصاف مفصلة بكلتا اللغتين' : 'Write detailed descriptions in both languages.'}</li>
                      <li>${isAr ? 'حدد أسعار تنافسية بناء على أبحاث السوق' : 'Set competitive prices based on market.'}</li>
                      <li>${isAr ? 'فعّل تنبيهات المخزون المنخفض لتجنب نفاد المخزون' : 'Enable low stock warnings to avoid stockouts.'}</li>
                      <li>${isAr ? 'حسّن العناوين والأوصاف لمحركات البحث' : 'Optimize titles/descriptions for search engines.'}</li>
                    </ul>
                  </div>
                </div>

              </div>
            </form>

            <!-- Products List Table -->
            <table class="admin-table">
              <thead>
                <tr>
                  <th>${isAr ? 'صورة' : 'Image'}</th>
                  <th>SKU</th>
                  <th>${isAr ? 'الاسم' : 'Title'}</th>
                  <th>${isAr ? 'التصنيف' : 'Category'}</th>
                  <th>${isAr ? 'السعر' : 'Price'}</th>
                  <th>${isAr ? 'المخزون' : 'Stock'}</th>
                  <th>${isAr ? 'الإجراءات' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody>
                ${products.map(p => `
                  <tr>
                    <td><img src="${p.image}" alt="${p.titleEn}" style="width:35px; height:45px; object-fit:cover; border-radius:3px;"></td>
                    <td><code>${p.sku}</code></td>
                    <td><strong>${isAr ? p.titleAr : p.titleEn}</strong></td>
                    <td><span style="font-size:0.8rem; color:var(--text-muted);">${p.category.toUpperCase()}</span></td>
                    <td><span class="price">${p.price % 1 === 0 ? p.price.toFixed(0) : p.price.toFixed(3)} KWD</span></td>
                    <td>
                      ${p.stock === 0 
                        ? `<span style="color:var(--error-color); font-weight:600;">${isAr ? 'نفذت' : 'Out'}</span>` 
                        : p.stock < 5 
                          ? `<span style="color:var(--warning-color); font-weight:600;"><span class="num">${p.stock}</span> (${isAr ? 'قليل' : 'Low'})</span>` 
                          : `<span class="num">${p.stock}</span>`
                      }
                    </td>
                    <td>
                      <div style="display:flex; gap:0.4rem;">
                        <button class="btn btn-secondary btn-sm edit-prod-btn" data-id="${p.id}">${isAr ? 'تعديل' : 'Edit'}</button>
                        <button class="btn btn-secondary btn-sm delete-prod-btn" data-id="${p.id}" style="color:var(--error-color);">${isAr ? 'حذف' : 'Delete'}</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- Tab 3: Manage Orders Status -->
          <div class="admin-panel-view ${activeTab === 'orders' ? 'active' : ''}" id="adm-orders">
            <h3>${isAr ? 'إدارة طلبات العملاء' : 'Client Orders Log'}</h3>
            
            ${orders.length === 0 ? `
              <p style="color:var(--text-muted); font-size:0.95rem; margin-top:1.5rem;">${isAr ? 'لا توجد طلبات مسجلة بعد.' : 'No orders submitted yet.'}</p>
            ` : `
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>${isAr ? 'رقم الطلب' : 'Order ID'}</th>
                    <th>${isAr ? 'العميل' : 'Customer'}</th>
                    <th>${isAr ? 'التاريخ' : 'Date'}</th>
                    <th>${isAr ? 'الإجمالي' : 'Total'}</th>
                    <th>${isAr ? 'طريقة الدفع' : 'Payment'}</th>
                    <th>${isAr ? 'الحالة الحالية' : 'Current Status'}</th>
                    <th>${isAr ? 'تغيير الحالة' : 'Modify Status'}</th>
                  </tr>
                </thead>
                <tbody>
                  ${orders.map(o => `
                    <tr>
                      <td><strong class="id">#${o.id}</strong></td>
                      <td>
                        <div style="display:flex; flex-direction:column;">
                          <span>${o.shippingInfo.name}</span>
                          <span style="font-size:0.75rem; color:var(--text-muted);" class="num">${o.shippingInfo.phone}</span>
                        </div>
                      </td>
                      <td><span class="date">${o.date}</span></td>
                      <td><strong class="price">${o.total % 1 === 0 ? o.total.toFixed(0) : o.total.toFixed(3)} KWD</strong></td>
                      <td><span style="font-size:0.8rem;">${o.paymentMethod.toUpperCase()}</span></td>
                      <td><span class="badge-status ${o.status}">${isAr ? getStatusLabelAr(o.status) : getStatusLabelEn(o.status)}</span></td>
                      <td>
                        <!-- Status Update Quick Select -->
                        <select class="form-control admin-status-select" data-id="${o.id}" style="font-size:0.8rem; padding:0.25rem 0.5rem; width:120px;">
                          <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Processing</option>
                          <option value="shipped" ${o.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                          <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                          <option value="cancelled" ${o.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            `}
          </div>

          <!-- Tab 4: Coupons and Promo codes -->
          <div class="admin-panel-view ${activeTab === 'coupons' ? 'active' : ''}" id="adm-coupons">
            <h3>${isAr ? 'كوبونات الخصم الترويجية' : 'Coupons & Promos'}</h3>
            
            <!-- Create Coupon Inline -->
            <div class="admin-section-box" style="margin-top: 1.5rem; background:var(--bg-secondary); padding: 1.5rem; border-radius:6px;">
              <h5>${isAr ? 'توليد كوبون خصم جديد' : 'Generate New Coupon'}</h5>
              <form id="create-coupon-form" class="coupon-inline-form" style="display:grid; grid-template-columns: 2fr 1fr 1fr auto; gap:1rem; margin-top:1rem; align-items:end;">
                <div class="form-group" style="margin-bottom:0;">
                  <label>${isAr ? 'رمز الكوبون *' : 'Coupon Code *'}</label>
                  <input type="text" id="new-coup-code" class="form-control" required placeholder="SAVE30" translate="no" style="padding:0.5rem;">
                </div>
                <div class="form-group" style="margin-bottom:0;">
                  <label>${isAr ? 'قيمة الخصم *' : 'Value *'}</label>
                  <input type="text" inputmode="decimal" pattern="[0-9]*\\.?[0-9]*" id="new-coup-val" class="form-control number-input" translate="no" required style="padding:0.5rem;">
                </div>
                <div class="form-group" style="margin-bottom:0;">
                  <label>${isAr ? 'النوع *' : 'Type *'}</label>
                  <select id="new-coup-type" class="form-control" style="padding:0.5rem;">
                    <option value="percent">Percent (%)</option>
                    <option value="fixed">Fixed Price (KWD)</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary" style="height:38px;">${isAr ? 'توليد الكوبون' : 'Create'}</button>
              </form>
            </div>

            <!-- Coupons List -->
            <table class="admin-table" style="margin-top: 2rem;">
              <thead>
                <tr>
                  <th>${isAr ? 'رمز الكوبون' : 'Coupon Code'}</th>
                  <th>${isAr ? 'قيمة الخصم' : 'Discount Value'}</th>
                  <th>${isAr ? 'نوع الخصم' : 'Type'}</th>
                  <th>${isAr ? 'الإجراء' : 'Action'}</th>
                </tr>
              </thead>
              <tbody>
                ${coupons.map(c => `
                  <tr>
                    <td>🏷️ <strong>${c.code}</strong></td>
                    <td><span class="num">${c.discount}</span></td>
                    <td>${c.type === 'percent' ? '%' : 'KWD'}</td>
                    <td>
                      <!-- Cannot delete default system test coupon directly for safety -->
                      <button class="btn-text-remove remove-coupon-btn" data-code="${c.code}">${isAr ? 'حذف الكوبون' : 'Delete'}</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- Tab 5: Manage Alternating Promo Banners -->
          <div class="admin-panel-view ${activeTab === 'banners' ? 'active' : ''}" id="adm-banners">
            <h3>${isAr ? 'إدارة بنرات العروض الترويجية' : 'Manage Promo Banners'}</h3>
            <p class="section-desc">${isAr ? 'قم بتعديل صور وروابط البنرات التناوبية في الصفحة الرئيسية' : 'Update the alternating homepage banner images, titles and target categories.'}</p>
            
            <form id="update-banners-form" style="background:var(--bg-secondary); padding:2rem; border-radius:8px; border:1px solid var(--border-color); display:flex; flex-direction:column; gap:1.5rem;">
              ${State.state.bannerPairs.map((pair, pairIdx) => `
                <div class="banner-pair-box" style="border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 6px; background: var(--bg-primary);">
                  <h5 style="margin-bottom:1rem; font-weight:700;">${isAr ? `المجموعة الثنائية رقم ${pairIdx + 1}` : `Banner Pair #${pairIdx + 1}`}</h5>
                  <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem;">
                    
                    <!-- Left Banner -->
                    <div style="display:flex; flex-direction:column; gap:0.75rem;">
                      <strong style="font-size:0.9rem;">${isAr ? 'البنر الأول (يسار / أعلى)' : 'Banner 1'}</strong>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'العنوان بالعربية' : 'Title (Arabic)'}</label>
                        <input type="text" class="form-control" name="banner-${pairIdx}-0-titleAr" value="${pair[0].nameAr}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'العنوان بالإنجليزية' : 'Title (English)'}</label>
                        <input type="text" class="form-control" name="banner-${pairIdx}-0-titleEn" value="${pair[0].nameEn}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'رابط التصنيف (ID)' : 'Category ID Link'}</label>
                        <input type="text" class="form-control" name="banner-${pairIdx}-0-id" value="${pair[0].id}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted); font-weight: 700;">${isAr ? 'صورة البنر (المقاس الموصى به: 570 × 260 بكسل)' : 'Banner Image (Recommended size: 570x260 px)'}</label>
                        <div style="display: flex; gap: 0.5rem; align-items: center;">
                          <button type="button" class="btn btn-secondary btn-sm browse-banner-img-btn" data-target="banner-${pairIdx}-0-image" style="padding:0.4rem 0.8rem; font-size:0.78rem;">📁 ${isAr ? 'تصفح من الكمبيوتر' : 'Browse File'}</button>
                          <span class="file-chosen-status" id="status-banner-${pairIdx}-0-image" style="font-size:0.75rem; color:var(--text-muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">${pair[0].image ? (pair[0].image.startsWith('data:') ? 'Image uploaded' : pair[0].image.substring(pair[0].image.lastIndexOf('/') + 1)) : (isAr ? 'لم يتم اختيار ملف' : 'No file chosen')}</span>
                        </div>
                        <input type="hidden" name="banner-${pairIdx}-0-image" id="banner-${pairIdx}-0-image" value="${pair[0].image}">
                        <div style="display:none;" data-width="570" data-height="260">Hidden Banner Dimensions Info</div>
                      </div>
                    </div>

                    <!-- Right Banner -->
                    <div style="display:flex; flex-direction:column; gap:0.75rem;">
                      <strong style="font-size:0.9rem;">${isAr ? 'البنر الثاني (يمين / أسفل)' : 'Banner 2'}</strong>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'العنوان بالعربية' : 'Title (Arabic)'}</label>
                        <input type="text" class="form-control" name="banner-${pairIdx}-1-titleAr" value="${pair[1].nameAr}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'العنوان بالإنجليزية' : 'Title (English)'}</label>
                        <input type="text" class="form-control" name="banner-${pairIdx}-1-titleEn" value="${pair[1].nameEn}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'رابط التصنيف (ID)' : 'Category ID Link'}</label>
                        <input type="text" class="form-control" name="banner-${pairIdx}-1-id" value="${pair[1].id}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted); font-weight: 700;">${isAr ? 'صورة البنر (المقاس الموصى به: 570 × 260 بكسل)' : 'Banner Image (Recommended size: 570x260 px)'}</label>
                        <div style="display: flex; gap: 0.5rem; align-items: center;">
                          <button type="button" class="btn btn-secondary btn-sm browse-banner-img-btn" data-target="banner-${pairIdx}-1-image" style="padding:0.4rem 0.8rem; font-size:0.78rem;">📁 ${isAr ? 'تصفح من الكمبيوتر' : 'Browse File'}</button>
                          <span class="file-chosen-status" id="status-banner-${pairIdx}-1-image" style="font-size:0.75rem; color:var(--text-muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">${pair[1].image ? (pair[1].image.startsWith('data:') ? 'Image uploaded' : pair[1].image.substring(pair[1].image.lastIndexOf('/') + 1)) : (isAr ? 'لم يتم اختيار ملف' : 'No file chosen')}</span>
                        </div>
                        <input type="hidden" name="banner-${pairIdx}-1-image" id="banner-${pairIdx}-1-image" value="${pair[1].image}">
                        <div style="display:none;" data-width="570" data-height="260">Hidden Banner Dimensions Info</div>
                      </div>
                    </div>

                  </div>
                </div>
              `).join('')}
              <button type="submit" class="btn btn-primary" style="align-self: flex-start; padding: 0.75rem 2rem; margin-top: 1rem;">${isAr ? 'حفظ تعديلات البنرات' : 'Save Banners'}</button>
            </form>
          </div>

          <!-- Tab 6: Manage Hero Slider Slides -->
          <div class="admin-panel-view ${activeTab === 'slides' ? 'active' : ''}" id="adm-slides">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:1rem;">
              <div>
                <h3>${isAr ? 'إدارة السلايدر الرئيسي' : 'Manage Hero Slides'}</h3>
                <p class="section-desc" style="margin-bottom:0;">${isAr ? 'تعديل الصور، النصوص وأزرار التوجيه للسلايدر المعروض في الصفحة الرئيسية' : 'Modify banner image slides, captions, action links and translations for the home hero carousel.'}</p>
              </div>
              <button type="button" id="add-new-slide-btn" class="btn btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.85rem; font-weight: 700;">➕ ${isAr ? 'إضافة شريحة جديدة' : 'Add New Slide'}</button>
            </div>
            
            <form id="update-slides-form" style="background:var(--bg-secondary); padding:2rem; border-radius:8px; border:1px solid var(--border-color); display:flex; flex-direction:column; gap:1.5rem;">
              ${State.state.homeSlides.map((slide, slideIdx) => `
                <div class="banner-pair-box" style="border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 6px; background: var(--bg-primary); position:relative;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid var(--border-light); padding-bottom:0.5rem;">
                    <h5 style="margin:0; font-weight:700;">${isAr ? `الشريحة رقم ${slideIdx + 1}` : `Slide #${slideIdx + 1}`}</h5>
                    ${State.state.homeSlides.length > 1 ? `
                      <button type="button" class="btn-text-remove remove-slide-btn" data-index="${slideIdx}" style="font-size:0.8rem; font-weight:700; color:var(--error-color); cursor:pointer; background:none; border:none; display:flex; align-items:center; gap:0.25rem;">
                        🗑️ ${isAr ? 'إزالة هذه الشريحة' : 'Remove Slide'}
                      </button>
                    ` : ''}
                  </div>
                  <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem;">
                    
                    <!-- Text Translations (Arabic) -->
                    <div style="display:flex; flex-direction:column; gap:0.75rem;">
                      <strong style="font-size:0.9rem; color:var(--accent-gold);">${isAr ? 'المحتوى باللغة العربية' : 'Arabic Content'}</strong>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'العنوان الفرعي' : 'Subtitle'}</label>
                        <input type="text" class="form-control" name="slide-${slideIdx}-subtitleAr" value="${slide.subtitleAr}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'العنوان الرئيسي' : 'Main Title'}</label>
                        <input type="text" class="form-control" name="slide-${slideIdx}-titleAr" value="${slide.titleAr}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'الوصف التوضيحي' : 'Description'}</label>
                        <textarea class="form-control" rows="2" name="slide-${slideIdx}-descAr">${slide.descAr}</textarea>
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'نص زر التوجيه' : 'Button Text'}</label>
                        <input type="text" class="form-control" name="slide-${slideIdx}-btnTextAr" value="${slide.btnTextAr}">
                      </div>
                    </div>

                    <!-- Text Translations (English) & Link/Image settings -->
                    <div style="display:flex; flex-direction:column; gap:0.75rem;">
                      <strong style="font-size:0.9rem; color:var(--accent-gold);">${isAr ? 'الإعدادات والمحتوى الإنجليزي' : 'Settings & English Content'}</strong>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'العنوان الفرعي (En)' : 'Subtitle (En)'}</label>
                        <input type="text" class="form-control" name="slide-${slideIdx}-subtitleEn" value="${slide.subtitleEn}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'العنوان الرئيسي (En)' : 'Main Title (En)'}</label>
                        <input type="text" class="form-control" name="slide-${slideIdx}-titleEn" value="${slide.titleEn}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'الوصف التوضيحي (En)' : 'Description (En)'}</label>
                        <textarea class="form-control" rows="2" name="slide-${slideIdx}-descEn">${slide.descEn}</textarea>
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${isAr ? 'نص زر التوجيه (En)' : 'Button Text (En)'}</label>
                        <input type="text" class="form-control" name="slide-${slideIdx}-btnTextEn" value="${slide.btnTextEn}">
                      </div>
                    </div>

                  </div>

                  <!-- Link & Image Fields spanned -->
                  <div style="display:grid; grid-template-columns: 1fr 2fr; gap:1.5rem; margin-top:1rem; border-top:1px solid var(--border-light); padding-top:1rem;">
                    <div>
                      <label style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">${isAr ? 'رابط التوجيه عند النقر (مثال: #/category?category=bath)' : 'Action Link URL'}</label>
                      <input type="text" class="form-control" name="slide-${slideIdx}-link" value="${slide.link}">
                    </div>
                    <div>
                      <label style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">${isAr ? 'صورة الشريحة (المقاس الموصى به: 1920 × 580 بكسل)' : 'Slide Image (Recommended size: 1920x580 px)'}</label>
                      <div style="display: flex; gap: 0.5rem; align-items: center;">
                        <button type="button" class="btn btn-secondary btn-sm browse-slide-img-btn" data-target="slide-${slideIdx}-image" style="padding:0.4rem 0.8rem; font-size:0.78rem;">📁 ${isAr ? 'تصفح من الكمبيوتر' : 'Browse File'}</button>
                        <span class="file-chosen-status" id="status-slide-${slideIdx}-image" style="font-size:0.75rem; color:var(--text-muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:280px;">${slide.image ? (slide.image.startsWith('data:') ? 'Image uploaded' : slide.image.substring(slide.image.lastIndexOf('/') + 1)) : (isAr ? 'لم يتم اختيار ملف' : 'No file chosen')}</span>
                      </div>
                      <input type="hidden" name="slide-${slideIdx}-image" id="slide-${slideIdx}-image" value="${slide.image}">
                      <div style="display:none;" data-width="1920" data-height="580">Hidden Hero Slide Dimensions Info</div>
                    </div>
                  </div>

                </div>
              `).join('')}
              <button type="submit" class="btn btn-primary" style="align-self: flex-start; padding: 0.75rem 2rem;">${isAr ? 'حفظ تعديلات السلايدر' : 'Save Hero Slides'}</button>
            </form>
          </div>

        </main>
      </div>
    </div>

    <style>
      .admin-header { padding: 2rem 0; border-bottom: 1px solid var(--border-color); }
      .admin-header h1 { font-family: 'Playfair Display', serif; font-size: 2.2rem; }
      .admin-header p { color: var(--text-muted); font-size: 0.95rem; margin-top: 0.25rem; }

      .admin-section-header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
      .admin-section-box { background: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; padding: 1.8rem; margin-top: 2rem; }
      .admin-section-box h5 { font-size: 1.15rem; font-weight: 600; margin-bottom: 1.2rem; }

      /* Admin Tables custom */
      .admin-table { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem; text-align: left; }
      [dir="rtl"] .admin-table { text-align: right; }
      .admin-table th { background-color: var(--bg-secondary); font-weight: 600; padding: 0.8rem 1rem; border-bottom: 2px solid var(--border-color); }
      .admin-table td { padding: 1rem; border-bottom: 1px solid var(--border-light); color: var(--text-secondary); }
      .admin-table tr:hover td { background-color: var(--bg-secondary); }

      /* Coupon Form Grid Mobile fallback */
      @media (max-width: 768px) {
        .coupon-inline-form { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
        .coupon-inline-form button { width: 100%; }
      }

      /* High-fidelity Product Form Styles */
      .new-admin-form {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 2rem;
        margin-top: 1.5rem;
      }
      .product-type-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
        margin-bottom: 2rem;
      }
      .type-card {
        background: var(--bg-primary);
        border: 1.5px solid var(--border-color);
        border-radius: 8px;
        padding: 1.2rem;
        cursor: pointer;
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        transition: var(--transition-smooth);
        position: relative;
      }
      .type-card:hover {
        border-color: var(--accent-gold);
        transform: translateY(-2px);
      }
      .type-card.active {
        border-color: var(--accent-gold);
        background-color: var(--accent-gold-light);
        box-shadow: 0 4px 15px rgba(197, 168, 128, 0.1);
      }
      .radio-indicator {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid var(--text-muted);
        display: inline-block;
        flex-shrink: 0;
        margin-top: 2px;
        position: relative;
      }
      .type-card.active .radio-indicator {
        border-color: var(--accent-gold);
      }
      .type-card.active .radio-indicator::after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--accent-gold);
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
      }
      .type-info label {
        font-weight: 700;
        font-size: 0.95rem;
        color: var(--text-primary);
        cursor: pointer;
        display: block;
        margin-bottom: 0.3rem;
      }
      .type-info p {
        font-size: 0.75rem;
        color: var(--text-secondary);
        line-height: 1.4;
        margin: 0;
      }

      .form-row-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem;
      }
      .form-row-3 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.25rem;
      }

      .form-body-grid {
        display: grid;
        grid-template-columns: 3fr 1.1fr;
        gap: 2rem;
      }
      .form-main-col {
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
      }
      .form-sidebar-col {
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
      }
      .form-section-card {
        background: var(--bg-primary);
        border: 1px solid var(--border-light);
        border-radius: 8px;
        box-shadow: var(--card-shadow);
        padding: 1.8rem;
      }
      .form-section-card .card-header {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        border-bottom: 1px solid var(--border-light);
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
      }
      .form-section-card .card-header h5 {
        font-size: 1.05rem;
        font-weight: 700;
        margin: 0;
        color: var(--text-primary);
      }
      .form-section-card .card-header .section-icon {
        font-size: 1.25rem;
      }
      .input-subtitle {
        font-size: 0.75rem;
        color: var(--text-muted);
        margin-top: 0.25rem;
        display: block;
      }
      .section-desc {
        font-size: 0.8rem;
        color: var(--text-muted);
        margin-bottom: 1rem;
      }

      /* Categories Checklist scrollable */
      .categories-list-scroll {
        border: 1px solid var(--border-color);
        border-radius: 6px;
        max-height: 240px;
        overflow-y: auto;
        background: var(--bg-secondary);
      }
      .category-list-item {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--border-light);
      }
      .category-list-item:last-child {
        border-bottom: none;
      }
      .category-list-item input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: var(--accent-gold);
        cursor: pointer;
      }
      .category-list-item label {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex: 1;
        cursor: pointer;
        user-select: none;
      }
      .cat-thumb {
        width: 40px;
        height: 40px;
        border-radius: 4px;
        object-fit: cover;
        border: 1px solid var(--border-color);
      }
      .cat-meta {
        display: flex;
        flex-direction: column;
      }
      .cat-meta .title {
        font-size: 0.88rem;
        font-weight: 700;
        color: var(--text-primary);
      }
      .cat-meta .en {
        font-size: 0.75rem;
        color: var(--text-muted);
      }
      .subcat-pill {
        font-size: 0.7rem;
        background: var(--accent-gold-light);
        color: var(--accent-gold);
        border: 1px solid rgba(197, 168, 128, 0.2);
        padding: 0.2rem 0.6rem;
        border-radius: 12px;
        font-weight: 600;
        margin-inline-start: auto;
      }

      /* Tags widgets */
      .tags-input-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .manage-tags-link {
        font-size: 0.8rem;
        color: var(--accent-gold);
        text-decoration: none;
        font-weight: 600;
        white-space: nowrap;
      }
      .manage-tags-link:hover {
        text-decoration: underline;
      }
      .tags-pills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
      }
      .tag-pill {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        color: var(--text-secondary);
        font-size: 0.78rem;
        font-weight: 500;
        padding: 0.3rem 0.7rem;
        border-radius: 4px;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
      }
      .tag-pill .remove-tag {
        cursor: pointer;
        color: var(--error-color);
        font-weight: 700;
      }

      /* Image dropzone widget */
      .upload-dropzone {
        border: 2px dashed var(--border-color);
        background: var(--bg-secondary);
        border-radius: 8px;
        padding: 2.2rem 1.5rem;
        text-align: center;
        cursor: pointer;
        transition: var(--transition-smooth);
      }
      .upload-dropzone:hover {
        border-color: var(--accent-gold);
        background: var(--bg-primary);
      }
      .upload-dropzone.highlight {
        border-color: var(--accent-gold);
        background: var(--bg-primary);
      }
      .upload-icon {
        font-size: 2.2rem;
        margin-bottom: 0.8rem;
      }
      .upload-dropzone p {
        font-size: 0.85rem;
        font-weight: 500;
        margin-bottom: 0.2rem;
      }
      .upload-dropzone small {
        font-size: 0.75rem;
        color: var(--text-muted);
        display: block;
      }

      /* Sidebar widgets */
      .sidebar-widget {
        background: var(--bg-primary);
        border: 1px solid var(--border-light);
        border-radius: 8px;
        padding: 1.25rem;
        box-shadow: var(--card-shadow);
      }
      .sidebar-widget label {
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--text-muted);
        text-transform: uppercase;
        display: block;
        margin-bottom: 0.5rem;
      }
      .tips-box-card {
        background: #fdfaf2;
        border: 1px solid #f3e5ab;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: var(--card-shadow);
      }
      .dark-theme .tips-box-card {
        background: #252219;
        border-color: #d4af37;
      }
      .tips-box-card h6 {
        font-size: 0.92rem;
        font-weight: 700;
        color: var(--warning-color);
        margin-bottom: 0.8rem;
      }
      .tips-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }
      .tips-list li {
        font-size: 0.78rem;
        color: var(--text-secondary);
        line-height: 1.5;
        position: relative;
        padding-inline-start: 1rem;
      }
      .tips-list li::before {
        content: '•';
        color: var(--accent-gold);
        position: absolute;
        left: 0;
      }
      [dir="rtl"] .tips-list li::before {
        left: auto;
        right: 0;
      }
      .form-actions-bar {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        border-top: 1px solid var(--border-color);
        padding-top: 1.5rem;
        margin-top: 1.5rem;
      }

      @media (max-width: 992px) {
        .form-body-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .product-type-cards {
          grid-template-columns: 1fr;
          gap: 0.8rem;
        }
      }

      /* Premium Variations switcher & tags styling */
      .var-tab-btn.active {
        color: var(--accent-gold) !important;
        border-bottom-color: var(--accent-gold) !important;
      }
      .attr-tag {
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        padding: 0.25rem 0.6rem;
        font-size: 0.8rem;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        box-shadow: var(--card-shadow);
      }
      .attr-tag .remove {
        color: var(--error-color);
        cursor: pointer;
        font-weight: 700;
        font-size: 0.9rem;
      }

      /* Explicit Tab Isolation Rules */
      .admin-panel-view {
        display: none !important;
      }
      .admin-panel-view.active {
        display: block !important;
      }
    </style>
  `;
}

// Localized helper
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

AdminPage.onMount = (params, query) => {
  const isAr = State.state.lang === 'ar';
  const container = document.querySelector('.admin-page-container');
  if (!container) return;

  // Arabic digit to English digit auto-converter
  const convertArabicToEnglishDigits = (str) => {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return str.replace(/[٠-٩]/g, (w) => arabicDigits.indexOf(w));
  };

  // Compress and resize image files before converting to base64
  const compressImage = (file, callback, maxWidth = 600, maxHeight = 800) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Target dimensions for web optimization
        const MAX_WIDTH = maxWidth;
        const MAX_HEIGHT = maxHeight;
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        // Extract as compressed JPEG (0.85 quality for higher fidelity)
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.85);
        callback(compressedBase64);
      };
      img.onerror = () => {
        State.showToast(isAr ? 'عذراً، فشل قراءة ملف الصورة.' : 'Failed to read image file.', 'error');
      };
      img.src = event.target.result;
    };
    reader.onerror = () => {
      State.showToast(isAr ? 'عذراً، فشل قراءة الملف.' : 'Failed to read file.', 'error');
    };
    reader.readAsDataURL(file);
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

  // Type cards active toggler
  const typeCards = container.querySelectorAll('.type-card');
  typeCards.forEach(card => {
    card.addEventListener('click', () => {
      typeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      
      const type = card.dataset.type;
      const selectType = document.getElementById('crud-type');
      if (selectType) {
        selectType.value = (type === 'simple' || type === 'multiple') ? 'simple' : 'variable';
      }

      const pricingSection = document.getElementById('pricing-inventory-section');
      const variableSection = document.getElementById('variable-attributes-section');
      if (type === 'variable') {
        if (pricingSection) pricingSection.style.display = 'none';
        if (variableSection) variableSection.style.display = 'block';
        document.getElementById('crud-price').removeAttribute('required');
        document.getElementById('crud-stock').removeAttribute('required');
      } else {
        if (pricingSection) pricingSection.style.display = 'block';
        if (variableSection) variableSection.style.display = 'none';
        document.getElementById('crud-price').setAttribute('required', 'required');
        document.getElementById('crud-stock').setAttribute('required', 'required');
      }
    });
  });

  // Products CRUD form toggles
  const showCrudBtn = document.getElementById('show-add-product-modal');
  const crudForm = document.getElementById('product-crud-form');
  const cancelCrudBtn = document.getElementById('cancel-crud-btn');

  if (showCrudBtn && crudForm) {
    showCrudBtn.addEventListener('click', () => {
      document.getElementById('form-action-title').innerText = isAr ? 'إدخال منتج جديد' : 'New Product Details';
      crudForm.reset();
      document.getElementById('crud-prod-id').value = '';
      document.getElementById('crud-image').value = '';
      activeUploadedImages = [];
      renderImagePreviews();

      // Reset variable section UI
      const variableColors = document.getElementById('variable-colors');
      const variableSizes = document.getElementById('variable-sizes');
      if (variableColors) variableColors.value = '';
      if (variableSizes) variableSizes.value = '';
      
      addedColors = [];
      addedSizes = [];
      activeVariationsList = [];
      
      const colorList = document.getElementById('added-colors-list');
      const sizeList = document.getElementById('added-sizes-list');
      if (colorList) colorList.innerHTML = '';
      if (sizeList) sizeList.innerHTML = '';
      
      const varTableBody = document.getElementById('var-matrix-tbody');
      if (varTableBody) {
        varTableBody.innerHTML = '';
      }
      const varTableWrapper = document.getElementById('variations-table-wrapper');
      if (varTableWrapper) varTableWrapper.style.display = 'none';

      const pricingSection = document.getElementById('pricing-inventory-section');
      const variableSection = document.getElementById('variable-attributes-section');
      if (pricingSection) pricingSection.style.display = 'block';
      if (variableSection) variableSection.style.display = 'none';
      document.getElementById('crud-price').setAttribute('required', 'required');
      document.getElementById('crud-stock').setAttribute('required', 'required');
      // Uncheck all categories
      container.querySelectorAll('input[name="categories_select"]').forEach(cb => cb.checked = false);
      
      // Reset tags
      activeTags = [];
      renderTags();
      
      // Reset type cards
      typeCards.forEach(c => c.classList.remove('active'));
      const simpleCard = container.querySelector('.type-card[data-type="simple"]');
      if (simpleCard) simpleCard.classList.add('active');
      
      crudForm.style.display = 'block';
    });
  }

  if (cancelCrudBtn && crudForm) {
    cancelCrudBtn.addEventListener('click', () => {
      crudForm.reset();
      document.getElementById('crud-image').value = '';
      activeUploadedImages = [];
      renderImagePreviews();
      crudForm.style.display = 'none';
    });
  }

  // Tags logic
  const tagsInput = document.getElementById('crud-tags');
  const tagsListEl = document.getElementById('crud-tags-list');
  let activeTags = [];

  const renderTags = () => {
    if (!tagsListEl) return;
    tagsListEl.innerHTML = activeTags.map((tag, idx) => `
      <span class="tag-pill">
        ${tag}
        <span class="remove-tag" data-index="${idx}">&times;</span>
      </span>
    `).join('');
    
    tagsListEl.querySelectorAll('.remove-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        activeTags.splice(idx, 1);
        renderTags();
      });
    });
  };

  if (tagsInput) {
    tagsInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const tagVal = tagsInput.value.trim();
        if (tagVal && !activeTags.includes(tagVal)) {
          activeTags.push(tagVal);
          renderTags();
          tagsInput.value = '';
        }
      }
    });
  }

  // Premium Selected attributes arrays
  let addedColors = []; 
  let addedSizes = [];  
  let activeVariationsList = [];

  // Toggles for color / size inputs blocks
  const enableColorCb = document.getElementById('attr-enable-color');
  const enableSizeCb = document.getElementById('attr-enable-size');
  const colorInputsArea = document.getElementById('attr-color-inputs-area');
  const sizeInputsArea = document.getElementById('attr-size-inputs-area');

  if (enableColorCb && colorInputsArea) {
    enableColorCb.addEventListener('change', () => {
      colorInputsArea.style.display = enableColorCb.checked ? 'block' : 'none';
      recalcCombosCount();
    });
  }

  if (enableSizeCb && sizeInputsArea) {
    enableSizeCb.addEventListener('change', () => {
      sizeInputsArea.style.display = enableSizeCb.checked ? 'block' : 'none';
      recalcCombosCount();
    });
  }

  // Add color value btn listener
  const addColorValBtn = document.getElementById('add-color-val-btn');
  if (addColorValBtn) {
    addColorValBtn.addEventListener('click', () => {
      const colorVal = document.getElementById('attr-color-val').value.trim();
      const colorCode = document.getElementById('attr-color-picker').value;
      if (!colorVal) return;
      if (addedColors.some(c => c.value === colorVal)) {
        State.showToast(isAr ? 'تم إضافة هذا اللون بالفعل!' : 'Color already added!', 'error');
        return;
      }
      addedColors.push({ value: colorVal, code: colorCode });
      document.getElementById('attr-color-val').value = '';
      renderAddedColors();
      recalcCombosCount();
    });
  }

  const renderAddedColors = () => {
    const list = document.getElementById('added-colors-list');
    if (!list) return;
    list.innerHTML = addedColors.map((c, idx) => `
      <span class="attr-tag" style="margin: 2px;">
        <span style="width:12px; height:12px; border-radius:50%; background-color:${c.code}; display:inline-block; border:1px solid #ccc; vertical-align:middle;"></span>
        <span style="font-size:0.8rem; margin:0 4px; vertical-align:middle;">${c.value}</span>
        <span class="remove" data-index="${idx}" style="cursor:pointer; color:var(--error-color); font-weight:700; margin-inline-start:4px; vertical-align:middle;">&times;</span>
      </span>
    `).join('');

    list.querySelectorAll('.remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        addedColors.splice(idx, 1);
        renderAddedColors();
        recalcCombosCount();
      });
    });
  };

  // Add size value btn listener
  const addSizeValBtn = document.getElementById('add-size-val-btn');
  if (addSizeValBtn) {
    addSizeValBtn.addEventListener('click', () => {
      const sizeVal = document.getElementById('attr-size-val').value.trim();
      if (!sizeVal) return;
      
      const items = sizeVal.split(',').map(s => s.trim()).filter(Boolean);
      items.forEach(item => {
        if (!addedSizes.includes(item)) {
          addedSizes.push(item);
        }
      });
      document.getElementById('attr-size-val').value = '';
      renderAddedSizes();
      recalcCombosCount();
    });
  }

  const renderAddedSizes = () => {
    const list = document.getElementById('added-sizes-list');
    if (!list) return;
    list.innerHTML = addedSizes.map((s, idx) => `
      <span class="attr-tag" style="margin: 2px;">
        <span style="font-size:0.8rem; vertical-align:middle;">${s}</span>
        <span class="remove" data-index="${idx}" style="cursor:pointer; color:var(--error-color); font-weight:700; margin-inline-start:4px; vertical-align:middle;">&times;</span>
      </span>
    `).join('');

    list.querySelectorAll('.remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        addedSizes.splice(idx, 1);
        renderAddedSizes();
        recalcCombosCount();
      });
    });
  };

  const recalcCombosCount = () => {
    let count = 0;
    const colorsCount = enableColorCb && enableColorCb.checked ? addedColors.length : 0;
    const sizesCount = enableSizeCb && enableSizeCb.checked ? addedSizes.length : 0;
    
    if (colorsCount > 0 && sizesCount > 0) {
      count = colorsCount * sizesCount;
    } else if (colorsCount > 0) {
      count = colorsCount;
    } else if (sizesCount > 0) {
      count = sizesCount;
    }
    
    const countText = document.getElementById('variations-combos-count');
    if (countText) {
      countText.innerText = isAr ? `${count} تركيبة ممكنة` : `${count} possible combinations`;
    }
    const summaryHelp = document.getElementById('attribs-summary-help');
    if (summaryHelp) {
      summaryHelp.innerText = isAr ? `سيتم إنشاء ${count} شكل عند نشر المنتج.` : `${count} variations will be created when publishing.`;
    }
    return count;
  };

  // Tabs toggle inside Variable section
  const varTabBtns = container.querySelectorAll('.var-tab-btn');
  const varPanels = container.querySelectorAll('.var-panel');

  const switchVarTab = (tabName) => {
    varTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    varPanels.forEach(panel => {
      panel.style.display = panel.id === `var-panel-${tabName}` ? 'block' : 'none';
    });
  };

  varTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      if (tab === 'preview') {
        buildVariationsPreview();
      }
      switchVarTab(tab);
    });
  });

  const previewTriggerBtn = document.getElementById('var-preview-trigger-btn');
  if (previewTriggerBtn) {
    previewTriggerBtn.addEventListener('click', () => {
      buildVariationsPreview();
      switchVarTab('preview');
    });
  }

  const buildVariationsPreview = () => {
    const colors = enableColorCb && enableColorCb.checked ? addedColors : [];
    const sizes = enableSizeCb && enableSizeCb.checked ? addedSizes : [];
    const defaultStock = parseInt(document.getElementById('var-default-stock').value) || 100;
    
    if (colors.length === 0 && sizes.length === 0) {
      State.showToast(isAr ? 'يرجى إدخال وتفعيل صفة واحدة على الأقل (ألوان أو مقاسات)!' : 'Please configure and enable at least one attribute!', 'error');
      return;
    }
    
    const combos = [];
    if (colors.length > 0 && sizes.length > 0) {
      colors.forEach(c => {
        sizes.forEach(s => {
          combos.push({ color: c, size: s });
        });
      });
    } else if (colors.length > 0) {
      colors.forEach(c => {
        combos.push({ color: c, size: '' });
      });
    } else {
      sizes.forEach(s => {
        combos.push({ color: null, size: s });
      });
    }
    
    activeVariationsList = combos.map(combo => ({
      colorEn: combo.color ? combo.color.value : null,
      colorAr: combo.color ? combo.color.value : null,
      colorCode: combo.color ? combo.color.code : null,
      size: combo.size,
      price: '',
      salePrice: '',
      stock: defaultStock,
      image: '',
      sku: ''
    }));

    renderMatrixTable();
  };

  const renderMatrixTable = () => {
    const tbody = document.getElementById('var-matrix-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    const baseSku = document.getElementById('crud-sku').value.trim() || 'VAR';

    activeVariationsList.forEach((v, idx) => {
      const colorLabel = v.colorEn ? `${isAr ? 'اللون:' : 'Color:'} ${v.colorEn}` : '';
      const sizeLabel = v.size ? `${isAr ? 'المقاس:' : 'Size:'} ${v.size}` : '';
      const badgeHtml = [colorLabel, sizeLabel].filter(Boolean).map(lbl => `<span style="font-size:0.75rem; background:var(--accent-gold-light); color:var(--accent-gold); padding:0.15rem 0.4rem; border-radius:10px; font-weight:600; margin-inline-end:0.25rem;">${lbl}</span>`).join('');
      
      const vSku = `${baseSku}-${v.colorEn ? v.colorEn.toLowerCase() : ''}${v.size ? '-' + v.size.toLowerCase() : ''}`;
      v.sku = vSku;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="padding:0.5rem; vertical-align:middle;">
          <div style="display:flex; align-items:center; gap:0.2rem; flex-wrap:wrap;">
            ${badgeHtml}
          </div>
        </td>
        <td style="padding:0.5rem; vertical-align:middle;">
          <input type="text" class="form-control matrix-sku" data-index="${idx}" value="${vSku}" style="padding:0.25rem; font-size:0.8rem; width:110px;" translate="no">
        </td>
        <td style="padding:0.5rem; vertical-align:middle;">
          <div style="display:flex; align-items:center; gap:0.2rem;">
            <span>$</span>
            <input type="text" inputmode="decimal" pattern="[0-9]*\\.?[0-9]*" class="form-control matrix-price number-input" data-index="${idx}" value="${v.price}" placeholder="22.50" style="padding:0.25rem; font-size:0.8rem; width:65px;" translate="no" required>
          </div>
        </td>
        <td style="padding:0.5rem; vertical-align:middle;">
          <input type="text" inputmode="decimal" pattern="[0-9]*\\.?[0-9]*" class="form-control matrix-saleprice number-input" data-index="${idx}" value="${v.salePrice}" placeholder="19.99" style="padding:0.25rem; font-size:0.8rem; width:65px;" translate="no">
        </td>
        <td style="padding:0.5rem; vertical-align:middle;">
          <input type="text" inputmode="numeric" pattern="[0-9]*" class="form-control matrix-stock number-input" data-index="${idx}" value="${v.stock}" style="padding:0.25rem; font-size:0.8rem; width:55px;" translate="no" required>
        </td>
        <td style="padding:0.5rem; vertical-align:middle; text-align:center;">
          <div style="display:flex; align-items:center; justify-content:center; gap:0.4rem;">
            <button type="button" class="btn btn-secondary btn-sm matrix-upload-btn" data-index="${idx}" style="padding:0.25rem 0.5rem; font-size:0.75rem; font-weight:600;">
              ${isAr ? 'اختر ملف' : 'Choose file'}
            </button>
            <input type="file" class="matrix-file-input" data-index="${idx}" accept="image/*" style="display:none;">
            <div class="matrix-img-preview-box" data-index="${idx}" style="width:30px; height:35px; border-radius:3px; border:1px solid var(--border-color); overflow:hidden; display:${v.image ? 'block' : 'none'};">
              <img src="${v.image || ''}" style="width:100%; height:100%; object-fit:cover;">
            </div>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.matrix-sku').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(input.dataset.index);
        activeVariationsList[idx].sku = e.target.value;
      });
    });
    tbody.querySelectorAll('.matrix-price').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(input.dataset.index);
        activeVariationsList[idx].price = e.target.value;
        recalcPreviewMetrics();
      });
    });
    tbody.querySelectorAll('.matrix-saleprice').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(input.dataset.index);
        activeVariationsList[idx].salePrice = e.target.value;
      });
    });
    tbody.querySelectorAll('.matrix-stock').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(input.dataset.index);
        activeVariationsList[idx].stock = parseInt(e.target.value) || 0;
        recalcPreviewMetrics();
      });
    });

    tbody.querySelectorAll('.matrix-upload-btn').forEach(btn => {
      const idx = parseInt(btn.dataset.index);
      const fileInp = tbody.querySelector(`.matrix-file-input[data-index="${idx}"]`);
      btn.addEventListener('click', () => fileInp.click());
      
      fileInp.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          compressImage(file, (base64Url) => {
            activeVariationsList[idx].image = base64Url;
            const prevBox = tbody.querySelector(`.matrix-img-preview-box[data-index="${idx}"]`);
            const prevImg = prevBox.querySelector('img');
            prevImg.src = base64Url;
            prevBox.style.display = 'block';
            State.showToast(isAr ? 'تم رفع صورة هذا الشكل بنجاح!' : 'Variation image uploaded!', 'success');
          });
        }
      });
    });

    recalcPreviewMetrics();
  };

  const recalcPreviewMetrics = () => {
    const totalVariations = activeVariationsList.length;
    const totalStock = activeVariationsList.reduce((sum, v) => sum + (v.stock || 0), 0);
    
    const badge = document.getElementById('preview-tab-count-badge');
    if (badge) {
      badge.innerText = totalVariations;
      badge.style.display = totalVariations > 0 ? 'inline-block' : 'none';
    }

    const mCount = document.getElementById('preview-metric-count');
    const mSelected = document.getElementById('preview-metric-selected');
    const mStock = document.getElementById('preview-metric-stock');
    const footerText = document.getElementById('preview-summary-footer-text');
    
    if (mCount) mCount.innerText = totalVariations;
    if (mSelected) mSelected.innerText = totalVariations;
    if (mStock) mStock.innerText = totalStock;
    if (footerText) {
      footerText.innerText = isAr 
        ? `جاهز للنشر مع ${totalVariations} شكل. سيتم إنشاء الأشكال عند نشر المنتج.` 
        : `Ready to publish with ${totalVariations} variations.`;
    }
  };

  let activeUploadedImages = [];

  const renderImagePreviews = () => {
    const previewContainer = document.getElementById('image-preview-container');
    if (!previewContainer) return;
    if (activeUploadedImages.length === 0) {
      previewContainer.style.display = 'none';
      previewContainer.innerHTML = '';
      const imgInput = document.getElementById('crud-image');
      if (imgInput) imgInput.value = '';
      return;
    }
    
    previewContainer.style.display = 'flex';
    previewContainer.style.flexWrap = 'wrap';
    previewContainer.style.gap = '0.75rem';
    previewContainer.style.justifyContent = 'center';
    
    previewContainer.innerHTML = activeUploadedImages.map((img, index) => `
      <div class="thumb-preview-item" style="position: relative; width: 120px; border: 1.5px solid var(--border-color); border-radius: 6px; overflow: hidden; box-shadow: var(--card-shadow); display: flex; flex-direction: column; background: var(--bg-primary); padding: 4px;">
        <div style="width: 100%; height: 100px; position: relative;">
          <img src="${img.src}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;">
          <button type="button" class="remove-thumb-btn" data-index="${index}" style="position: absolute; top: 4px; right: 4px; background: rgba(0,0,0,0.65); color: white; border: none; border-radius: 50%; width: 22px; height: 22px; font-size: 11px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: 700; line-height: 1;">&times;</button>
        </div>
        <input type="text" class="thumb-name-input" data-index="${index}" value="${img.name || ''}" style="width: 100%; font-size: 0.75rem; padding: 0.2rem; margin-top: 4px; border: 1px solid var(--border-color); border-radius: 3px; text-align: center;" placeholder="${isAr ? 'الاسم / اللون' : 'Name / Color'}">
      </div>
    `).join('');

    previewContainer.querySelectorAll('.remove-thumb-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index);
        activeUploadedImages.splice(idx, 1);
        renderImagePreviews();
      });
    });

    previewContainer.querySelectorAll('.thumb-name-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(input.dataset.index);
        activeUploadedImages[idx].name = e.target.value.trim();
      });
    });

    const imgInput = document.getElementById('crud-image');
    if (imgInput) {
      imgInput.value = activeUploadedImages[0] ? activeUploadedImages[0].src : '';
    }
  };

  // Image preset random selector on dropzone click or local upload
  const uploadZone = document.getElementById('image-upload-zone');
  const browseBtn = document.getElementById('crud-browse-btn');
  const fileInput = document.getElementById('crud-file-input');
  
  const imagePresets = [
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
    "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&q=80",
    "https://images.unsplash.com/photo-1616627547901-52f2066fa19b?w=800&q=80"
  ];

  if (browseBtn && fileInput) {
    browseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInput.click();
    });
  
    fileInput.addEventListener('change', (e) => {
      const files = Array.from(e.target.files);
      if (files.length > 0) {
        const activeTypeCard = container.querySelector('.type-card.active');
        const isMultiple = activeTypeCard && activeTypeCard.dataset.type === 'multiple';
        
        if (!isMultiple) {
          activeUploadedImages = [];
        }

        let processedCount = 0;
        files.forEach(file => {
          const fileName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
          compressImage(file, (base64Url) => {
            const imgObj = { src: base64Url, name: fileName };
            if (!isMultiple) {
              activeUploadedImages = [imgObj];
            } else {
              activeUploadedImages.push(imgObj);
            }
            processedCount++;
            if (processedCount === files.length) {
              renderImagePreviews();
              if (uploadZone) {
                uploadZone.style.borderColor = 'var(--success-color)';
                setTimeout(() => { uploadZone.style.borderColor = ''; }, 1500);
              }
              State.showToast(isAr ? 'تم قراءة وضغط صورة/صور المنتج بنجاح!' : 'Product photo(s) compressed and uploaded successfully!', 'success');
            }
          });
        });
      }
    });
  }
 
  if (uploadZone) {
    // Prevent default behaviors for drag-and-drop
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      uploadZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
      }, false);
    });

    // Highlight drop zone when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
      uploadZone.addEventListener(eventName, () => {
        uploadZone.classList.add('highlight');
        uploadZone.style.borderColor = 'var(--accent-gold)';
        uploadZone.style.background = 'var(--bg-primary)';
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      uploadZone.addEventListener(eventName, () => {
        uploadZone.classList.remove('highlight');
        uploadZone.style.borderColor = '';
        uploadZone.style.background = '';
      }, false);
    });

    // Handle dropped files
    uploadZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = Array.from(dt.files);
      if (files.length > 0) {
        const imageFiles = files.filter(f => f.type.startsWith('image/'));
        if (imageFiles.length === 0) {
          State.showToast(isAr ? 'يرجى إسقاط ملفات الصور فقط!' : 'Please drop image files only!', 'error');
          return;
        }

        const activeTypeCard = container.querySelector('.type-card.active');
        const isMultiple = activeTypeCard && activeTypeCard.dataset.type === 'multiple';
        
        if (!isMultiple) {
          activeUploadedImages = [];
        }

        let processedCount = 0;
        imageFiles.forEach(file => {
          const fileName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
          compressImage(file, (base64Url) => {
            const imgObj = { src: base64Url, name: fileName };
            if (!isMultiple) {
              activeUploadedImages = [imgObj];
            } else {
              activeUploadedImages.push(imgObj);
            }
            processedCount++;
            if (processedCount === imageFiles.length) {
              renderImagePreviews();
              if (uploadZone) {
                uploadZone.style.borderColor = 'var(--success-color)';
                setTimeout(() => { uploadZone.style.borderColor = ''; }, 1500);
              }
              State.showToast(isAr ? 'تم قراءة وضغط صورة/صور المنتج بنجاح!' : 'Product photo(s) compressed and uploaded successfully!', 'success');
            }
          });
        });
      }
    });

    uploadZone.addEventListener('click', (e) => {
      // Don't trigger random generator if user clicked inputs or buttons or preview remove button
      if (
        e.target.id === 'crud-image' || 
        e.target.id === 'crud-browse-btn' || 
        e.target.id === 'crud-file-input' ||
        e.target.closest('#crud-browse-btn') ||
        e.target.closest('.remove-thumb-btn') ||
        e.target.closest('.thumb-name-input')
      ) {
        return;
      }
      
      const activeTypeCard = container.querySelector('.type-card.active');
      const isMultiple = activeTypeCard && activeTypeCard.dataset.type === 'multiple';
      
      const randUrl = imagePresets[Math.floor(Math.random() * imagePresets.length)];
      const presetNum = Math.floor(100 + Math.random() * 900);
      const imgObj = { src: randUrl, name: `preset-${presetNum}` };
      if (!isMultiple) {
        activeUploadedImages = [imgObj];
      } else {
        activeUploadedImages.push(imgObj);
      }
      renderImagePreviews();
      State.showToast(isAr ? 'تم توليد صورة للمفرش الفاخر بنجاح!' : 'Generated bedding image preset successfully!', 'success');
    });
  }

  if (crudForm) {
    crudForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const baseSku = document.getElementById('crud-sku').value.trim();
      const activeTypeCard = container.querySelector('.type-card.active');
      const productType = activeTypeCard ? activeTypeCard.dataset.type : 'simple';

      if (productType !== 'variable' && activeUploadedImages.length === 0) {
        State.showToast(isAr ? 'يرجى رفع أو توليد صورة للمنتج أولاً!' : 'Please upload or generate a product image first!', 'error');
        return;
      }

      const prodIdVal = document.getElementById('crud-prod-id').value;
      const titleAr = document.getElementById('crud-title-ar').value;
      
      // Auto-translate Arabic to English helper
      const titleEn = translateTitleArToEn(titleAr);
      const descAr = document.getElementById('crud-desc-ar').value;
      const descEn = translateDescArToEn(descAr);

      // Determine category from checkboxes
      const checkedCats = [];
      container.querySelectorAll('input[name="categories_select"]:checked').forEach(cb => {
        checkedCats.push(cb.value);
      });
      const categoryKey = checkedCats[0] || 'quilts'; // default quilts if empty

      if (productType === 'variable') {
        if (!activeVariationsList || activeVariationsList.length === 0) {
          State.showToast(isAr ? 'يرجى توليد جدول التنويعات أولاً!' : 'Please generate variations table first!', 'error');
          return;
        }
        
        const variations = [];
        let totalStock = 0;
        let lowestPrice = Infinity;
        
        for (let i = 0; i < activeVariationsList.length; i++) {
          const v = activeVariationsList[i];
          const pVal = parseFloat(v.price);
          const sVal = parseInt(v.stock) || 0;
          
          if (isNaN(pVal) || pVal <= 0) {
            State.showToast(isAr ? 'يرجى إدخال سعر صالح لكل خيار!' : 'Please enter a valid price for each variation!', 'error');
            return;
          }
          
          totalStock += sVal;
          if (pVal < lowestPrice) lowestPrice = pVal;
          
          const saleVal = parseFloat(v.salePrice);
          const finalPrice = !isNaN(saleVal) && saleVal > 0 && saleVal < pVal ? saleVal : pVal;
          
          variations.push({
            colorEn: v.colorEn,
            colorAr: v.colorAr || v.colorEn,
            colorCode: v.colorCode,
            size: v.size,
            price: finalPrice,
            originalPrice: pVal,
            salePrice: !isNaN(saleVal) && saleVal > 0 ? saleVal : null,
            stock: sVal,
            image: v.image || (activeUploadedImages[0] ? activeUploadedImages[0].src : ''),
            sku: v.sku
          });
        }
        
        const distinctColors = [...new Set(variations.map(v => v.colorEn).filter(Boolean))].map(c => {
          const matchedVar = variations.find(v => v.colorEn === c);
          return {
            nameEn: c,
            nameAr: matchedVar.colorAr || c,
            code: matchedVar.colorCode || '#c5a880'
          };
        });
        const distinctSizes = [...new Set(variations.filter(v => v.size).map(v => v.size))];
        const barcode = '690' + Math.floor(1000000000 + Math.random() * 9000000000);
        
        const productData = {
          titleEn,
          titleAr,
          category: categoryKey,
          categoryEn: categoryKey === 'double' ? 'Double Bedding' : categoryKey === 'single' ? 'Single Bedding' : categoryKey === 'bridal' ? 'Bridal Bedding' : categoryKey === 'kids' ? 'Kids Bedding' : categoryKey === 'toppers' ? 'Toppers & Pillows' : categoryKey === 'sheets' ? 'Bed Sheets' : categoryKey === 'strollers' ? 'Baby Strollers' : categoryKey === 'bath' ? 'Bath Essentials' : categoryKey === 'discounts' ? 'Discounts & Offers' : 'Bath Essentials',
          categoryAr: getCatNameAr(categoryKey),
          price: lowestPrice,
          originalPrice: lowestPrice,
          stock: totalStock,
          sku: baseSku,
          barcode,
          image: variations[0].image || (activeUploadedImages[0] ? activeUploadedImages[0].src : ''),
          images: variations.map(v => v.image).filter(Boolean),
          colors: distinctColors,
          sizes: distinctSizes,
          variations: variations,
          descriptionEn: descEn,
          descriptionAr: descAr,
          specsEn: { Origin: "Imported" },
          specsAr: { "المنشأ": "مستورد" },
          featuresEn: ["Luxury premium design", ...activeTags],
          featuresAr: ["تصميم فاخر وعصري", ...activeTags]
        };

        if (prodIdVal) {
          State.editProduct(parseInt(prodIdVal), productData);
        } else {
          State.addProduct(productData);
        }
      } else {
        // Pricing values
        const rawOriginalPrice = parseFloat(document.getElementById('crud-price').value); // السعر
        const rawSalePrice = parseFloat(document.getElementById('crud-old-price').value); // سعر التخفيض
        
        let price = rawOriginalPrice;
        let originalPrice = rawOriginalPrice;
        
        if (!isNaN(rawSalePrice) && rawSalePrice > 0) {
          price = rawSalePrice;
          originalPrice = rawOriginalPrice;
        }

        if (productType === 'multiple' && !prodIdVal) {
          // Multi mode (batch products generation)
          activeUploadedImages.forEach((imgObj, index) => {
            const suffix = `-${String(index + 1).padStart(2, '0')}`;
            const currentSku = `${baseSku}${suffix}`;
            const barcode = '690' + Math.floor(1000000000 + Math.random() * 9000000000);

            const itemTitleAr = imgObj.name ? `${titleAr} - ${imgObj.name}` : titleAr;
            const itemTitleEn = imgObj.name ? `${titleEn} - ${imgObj.name}` : titleEn;

            const productData = {
              titleEn: itemTitleEn,
              titleAr: itemTitleAr,
              category: categoryKey,
              categoryEn: categoryKey === 'double' ? 'Double Bedding' : categoryKey === 'single' ? 'Single Bedding' : categoryKey === 'bridal' ? 'Bridal Bedding' : categoryKey === 'kids' ? 'Kids Bedding' : categoryKey === 'toppers' ? 'Toppers & Pillows' : categoryKey === 'sheets' ? 'Bed Sheets' : categoryKey === 'strollers' ? 'Baby Strollers' : categoryKey === 'bath' ? 'Bath Essentials' : categoryKey === 'discounts' ? 'Discounts & Offers' : 'Bath Essentials',
              categoryAr: getCatNameAr(categoryKey),
              price,
              originalPrice,
              stock: parseInt(document.getElementById('crud-stock').value),
              sku: currentSku,
              barcode,
              image: imgObj.src,
              images: [imgObj.src],
              descriptionEn: descEn,
              descriptionAr: descAr,
              specsEn: { Origin: "Imported" },
              specsAr: { "المنشأ": "مستورد" },
              featuresEn: ["Luxury premium design", ...activeTags],
              featuresAr: ["تصميم فاخر وعصري", ...activeTags]
            };
            State.addProduct(productData);
          });
        } else {
          // Single product mode
          const barcode = '690' + Math.floor(1000000000 + Math.random() * 9000000000);
          const productData = {
            titleEn,
            titleAr,
            category: categoryKey,
            categoryEn: categoryKey === 'double' ? 'Double Bedding' : categoryKey === 'single' ? 'Single Bedding' : categoryKey === 'bridal' ? 'Bridal Bedding' : categoryKey === 'kids' ? 'Kids Bedding' : categoryKey === 'toppers' ? 'Toppers & Pillows' : categoryKey === 'sheets' ? 'Bed Sheets' : categoryKey === 'strollers' ? 'Baby Strollers' : categoryKey === 'bath' ? 'Bath Essentials' : categoryKey === 'discounts' ? 'Discounts & Offers' : 'Bath Essentials',
            categoryAr: getCatNameAr(categoryKey),
            price,
            originalPrice,
            stock: parseInt(document.getElementById('crud-stock').value),
            sku: baseSku,
            barcode,
            image: activeUploadedImages[0].src,
            images: [activeUploadedImages[0].src],
            descriptionEn: descEn,
            descriptionAr: descAr,
            specsEn: { Origin: "Imported" },
            specsAr: { "المنشأ": "مستورد" },
            featuresEn: ["Luxury premium design", ...activeTags],
            featuresAr: ["تصميم فاخر وعصري", ...activeTags]
          };

          if (prodIdVal) {
            State.editProduct(parseInt(prodIdVal), productData);
          } else {
            State.addProduct(productData);
          }
        }
      }

      crudForm.reset();
      crudForm.style.display = 'none';
      activeUploadedImages = [];
      renderImagePreviews();
      State.notify('state_changed');
    });
  }

  // Edit Product trigger
  container.querySelectorAll('.edit-prod-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const p = State.state.products.find(prod => prod.id === id);
      if (p && crudForm) {
        document.getElementById('form-action-title').innerText = isAr ? 'تعديل بيانات المنتج' : 'Edit Product Details';
        document.getElementById('crud-prod-id').value = p.id;
        document.getElementById('crud-title-ar').value = p.titleAr;
        document.getElementById('crud-sku').value = p.sku;
        document.getElementById('crud-stock').value = p.stock;
        
        document.getElementById('crud-image').value = p.image || '';
        activeUploadedImages = p.image ? [p.image] : [];
        renderImagePreviews();

        document.getElementById('crud-desc-ar').value = p.descriptionAr;

        // Type cards and Panels sync
        const isVar = p.variations && p.variations.length > 0;
        const targetType = isVar ? 'variable' : 'simple';
        const typeCards = container.querySelectorAll('.type-card');
        typeCards.forEach(c => c.classList.remove('active'));
        const activeCard = container.querySelector(`.type-card[data-type="${targetType}"]`);
        if (activeCard) {
          activeCard.classList.add('active');
          const radio = activeCard.querySelector('input[type="radio"]');
          if (radio) radio.checked = true;
        }
        const selectType = document.getElementById('crud-type');
        if (selectType) {
          selectType.value = targetType;
        }

        const pricingSection = document.getElementById('pricing-inventory-section');
        const variableSection = document.getElementById('variable-attributes-section');
        
        if (isVar) {
          if (pricingSection) pricingSection.style.display = 'none';
          if (variableSection) variableSection.style.display = 'block';
          document.getElementById('crud-price').removeAttribute('required');
          document.getElementById('crud-stock').removeAttribute('required');
          
          addedColors = p.colors ? p.colors.map(c => ({ value: c.nameEn || c.nameAr, code: c.code })) : [];
          addedSizes = p.sizes || [];
          activeVariationsList = p.variations.map(v => ({
            colorEn: v.colorEn,
            colorAr: v.colorAr || v.colorEn,
            colorCode: v.colorCode,
            size: v.size,
            price: v.originalPrice || v.price,
            salePrice: v.salePrice || '',
            stock: v.stock,
            image: v.image || '',
            sku: v.sku || ''
          }));
          
          const enableColorCb = document.getElementById('enable-color-cb');
          const enableSizeCb = document.getElementById('enable-size-cb');
          if (enableColorCb) enableColorCb.checked = addedColors.length > 0;
          if (enableSizeCb) enableSizeCb.checked = addedSizes.length > 0;
          
          renderAddedColors();
          renderAddedSizes();
          recalcCombosCount();
          renderMatrixTable();
          recalcPreviewMetrics();
        } else {
          if (pricingSection) pricingSection.style.display = 'block';
          if (variableSection) variableSection.style.display = 'none';
          document.getElementById('crud-price').setAttribute('required', 'required');
          document.getElementById('crud-stock').setAttribute('required', 'required');
          
          addedColors = [];
          addedSizes = [];
          activeVariationsList = [];
          
          renderAddedColors();
          renderAddedSizes();
          recalcCombosCount();
          renderMatrixTable();
          
          // Pricing sync
          if (p.originalPrice > p.price) {
            document.getElementById('crud-price').value = p.originalPrice;
            document.getElementById('crud-old-price').value = p.price;
          } else {
            document.getElementById('crud-price').value = p.price;
            document.getElementById('crud-old-price').value = '';
          }
        }

        // Category checkboxes sync
        container.querySelectorAll('input[name="categories_select"]').forEach(cb => {
          cb.checked = (cb.value === p.category);
        });

        // Tags sync
        activeTags = p.featuresAr ? p.featuresAr.filter(f => f !== 'تصميم فاخر وعصري') : [];
        renderTags();

        // Status select sync
        const statusSelect = document.getElementById('crud-status-select');
        if (statusSelect) {
          statusSelect.value = p.stock > 0 ? 'active' : 'draft';
        }

        crudForm.style.display = 'block';
        window.scrollTo({ top: 200, behavior: 'smooth' });
      }
    });
  });

  // Delete Product
  container.querySelectorAll('.delete-prod-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      if (confirm(isAr ? 'هل أنت متأكد من رغبتك في حذف هذا المنتج من الكتالوج بالكامل؟' : 'Are you sure you want to delete this product?')) {
        State.deleteProduct(id);
        State.notify('state_changed');
      }
    });
  });

  // Change Customer Order Status dropdown
  const statusSelectors = container.querySelectorAll('.admin-status-select');
  statusSelectors.forEach(select => {
    select.addEventListener('change', (e) => {
      const orderId = select.dataset.id;
      const nextStatus = e.target.value;
      State.updateOrderStatus(orderId, nextStatus);
    });
  });

  // Create Coupon
  const couponForm = document.getElementById('create-coupon-form');
  if (couponForm) {
    couponForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const code = document.getElementById('new-coup-code').value.toUpperCase().trim();
      const val = parseFloat(document.getElementById('new-coup-val').value);
      const type = document.getElementById('new-coup-type').value;

      const existing = State.state.coupons.find(c => c.code === code);
      if (existing) {
        State.showToast(isAr ? 'عذراً، هذا الكوبون موجود مسبقاً!' : 'Coupon code already exists!', 'error');
        return;
      }

      State.state.coupons.push({ code, discount: val, type });
      localStorage.setItem("sana_coupons", JSON.stringify(State.state.coupons));
      
      State.showToast(isAr ? `تم توليد الكوبون (${code}) بنجاح!` : `Coupon (${code}) generated!`, 'success');
      couponForm.reset();
      State.notify('state_changed');
    });
  }

  // Delete Coupon
  container.querySelectorAll('.remove-coupon-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.dataset.code;
      State.state.coupons = State.state.coupons.filter(c => c.code !== code);
      localStorage.setItem("sana_coupons", JSON.stringify(State.state.coupons));
      State.showToast(isAr ? 'تم إزالة الكوبون.' : 'Coupon code deleted.', 'info');
      State.notify('state_changed');
    });
  });

  // Update Alternating Promo Banners Form
  const bannersForm = document.getElementById('update-banners-form');
  if (bannersForm) {
    bannersForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const updatedPairs = State.state.bannerPairs.map((pair, pairIdx) => {
        return [
          {
            id: bannersForm.querySelector(`[name="banner-${pairIdx}-0-id"]`).value.trim(),
            nameAr: bannersForm.querySelector(`[name="banner-${pairIdx}-0-titleAr"]`).value.trim(),
            nameEn: bannersForm.querySelector(`[name="banner-${pairIdx}-0-titleEn"]`).value.trim(),
            image: bannersForm.querySelector(`[name="banner-${pairIdx}-0-image"]`).value.trim()
          },
          {
            id: bannersForm.querySelector(`[name="banner-${pairIdx}-1-id"]`).value.trim(),
            nameAr: bannersForm.querySelector(`[name="banner-${pairIdx}-1-titleAr"]`).value.trim(),
            nameEn: bannersForm.querySelector(`[name="banner-${pairIdx}-1-titleEn"]`).value.trim(),
            image: bannersForm.querySelector(`[name="banner-${pairIdx}-1-image"]`).value.trim()
          }
        ];
      });

      State.editBanners(updatedPairs);
    });
  }

  // Update Hero Slides Form
  const slidesForm = document.getElementById('update-slides-form');
  if (slidesForm) {
    slidesForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const updatedSlides = State.state.homeSlides.map((slide, idx) => {
        return {
          subtitleAr: slidesForm.querySelector(`[name="slide-${idx}-subtitleAr"]`).value.trim(),
          subtitleEn: slidesForm.querySelector(`[name="slide-${idx}-subtitleEn"]`).value.trim(),
          titleAr: slidesForm.querySelector(`[name="slide-${idx}-titleAr"]`).value.trim(),
          titleEn: slidesForm.querySelector(`[name="slide-${idx}-titleEn"]`).value.trim(),
          descAr: slidesForm.querySelector(`[name="slide-${idx}-descAr"]`).value.trim(),
          descEn: slidesForm.querySelector(`[name="slide-${idx}-descEn"]`).value.trim(),
          btnTextAr: slidesForm.querySelector(`[name="slide-${idx}-btnTextAr"]`).value.trim(),
          btnTextEn: slidesForm.querySelector(`[name="slide-${idx}-btnTextEn"]`).value.trim(),
          link: slidesForm.querySelector(`[name="slide-${idx}-link"]`).value.trim(),
          image: slidesForm.querySelector(`[name="slide-${idx}-image"]`).value.trim()
        };
      });

      State.editHomeSlides(updatedSlides);
    });
  }

  // Add Slide Button
  const addNewSlideBtn = document.getElementById('add-new-slide-btn');
  if (addNewSlideBtn) {
    addNewSlideBtn.addEventListener('click', () => {
      // Create new empty template slide
      const newSlide = {
        subtitleAr: 'مجموعة جديدة للراحة',
        subtitleEn: 'New Comfort Collection',
        titleAr: 'عناوين شريحة جديدة مخصصة',
        titleEn: 'New Custom Slide Title',
        descAr: 'اكتب وصف الشريحة هنا ليعبر عن المجموعة الترويجية بالتفصيل',
        descEn: 'Write slide description here explaining the newly added promo details.',
        btnTextAr: 'تسوق الآن',
        btnTextEn: 'Shop Now',
        link: '#/category',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1920&q=80'
      };
      
      const currentSlides = [...State.state.homeSlides, newSlide];
      State.state.homeSlides = currentSlides;
      localStorage.setItem("sana_home_slides", JSON.stringify(currentSlides));
      State.showToast(isAr ? 'تم إضافة شريحة فارغة جديدة!' : 'Added a new empty slide template!', 'success');
      State.notify('state_changed');
    });
  }

  // Remove Slide Buttons
  const removeSlideBtns = container.querySelectorAll('.remove-slide-btn');
  removeSlideBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      if (State.state.homeSlides.length <= 1) {
        State.showToast(isAr ? 'لا يمكن إزالة الشريحة الأخيرة!' : 'Cannot remove the last remaining slide!', 'error');
        return;
      }
      
      const currentSlides = [...State.state.homeSlides];
      currentSlides.splice(idx, 1);
      State.state.homeSlides = currentSlides;
      localStorage.setItem("sana_home_slides", JSON.stringify(currentSlides));
      State.showToast(isAr ? 'تمت إزالة الشريحة بنجاح' : 'Slide removed successfully!', 'info');
      State.notify('state_changed');
    });
  });

  // Dynamic file chooser trigger for Alternating Banners & Hero Slides
  const attachDynamicImageBrowser = (selector, typeName) => {
    container.querySelectorAll(selector).forEach(btn => {
      btn.addEventListener('click', () => {
        const targetInputId = btn.dataset.target;
        const statusEl = document.getElementById(`status-${targetInputId}`);
        const hiddenInput = document.getElementById(targetInputId);
        
        // Define high-fidelity limits depending on the type of banner
        const isHeroSlide = typeName === 'slide';
        const maxWidth = isHeroSlide ? 2560 : 1200;
        const maxHeight = isHeroSlide ? 1440 : 800;

        const tempFileInput = document.createElement('input');
        tempFileInput.type = 'file';
        tempFileInput.accept = 'image/*';
        tempFileInput.addEventListener('change', (event) => {
          const file = event.target.files[0];
          if (file) {
            if (statusEl) statusEl.innerText = isAr ? 'جاري الرفع والضغط...' : 'Uploading...';
            compressImage(file, (base64) => {
              if (hiddenInput) hiddenInput.value = base64;
              if (statusEl) statusEl.innerText = file.name;
              State.showToast(isAr ? 'تم تحميل وضغط الصورة بنجاح!' : 'Image uploaded & compressed!', 'success');
            }, maxWidth, maxHeight);
          }
        });
        tempFileInput.click();
      });
    });
  };

  attachDynamicImageBrowser('.browse-banner-img-btn', 'banner');
  attachDynamicImageBrowser('.browse-slide-img-btn', 'slide');
};

// Sub-helper for category names
function getCatNameAr(key) {
  const cat = findCategoryInTree(CATEGORY_TREE, key);
  return cat ? cat.titleAr : 'مستلزمات الحمام';
}

// Auto-translator utility functions for Arabic input names/descriptions
function translateTitleArToEn(titleAr) {
  const lower = titleAr.toLowerCase();
  if (lower.includes('ديباج') || lower.includes('لحاف')) return 'Luxury Dibaj Comforter Set';
  if (lower.includes('لباد')) return 'Premium Mattress Topper';
  if (lower.includes('مخد') || lower.includes('وساد')) return 'Hotel Sleeping Pillow';
  if (lower.includes('شرشف') || lower.includes('شراشف')) return 'Cotton Fitted Bedsheet';
  if (lower.includes('بطانية') || lower.includes('بطانيات')) return 'Ultra-Soft Warm Blanket';
  if (lower.includes('روب') || lower.includes('أرواب')) return 'Turkish Cotton Bathrobe';
  if (lower.includes('منشفة') || lower.includes('فوط')) return 'Luxury Bath Towel';
  return titleAr + ' Bedding Set'; // Fallback
}

function translateDescArToEn(descAr) {
  if (!descAr) return 'Experience ultimate comfort with our premium quality bedding products.';
  return 'Experience ultimate comfort with our premium quality bedding products. Crafted from high-grade natural fibers to ensure a peaceful night sleep.';
}
