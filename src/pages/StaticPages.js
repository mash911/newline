import { State } from '../store/state.js';

export function StaticPagesRouter(pageKey, params) {
  const isAr = State.state.lang === 'ar';
  
  if (pageKey === 'about') return AboutView(isAr);
  if (pageKey === 'contact') return ContactView(isAr);
  if (pageKey === 'faq') return FAQView(isAr);
  if (pageKey === 'shipping') return PolicyView('shipping', isAr);
  if (pageKey === 'return') return PolicyView('return', isAr);
  if (pageKey === 'privacy') return PolicyView('privacy', isAr);
  if (pageKey === 'terms') return PolicyView('terms', isAr);
  if (pageKey === 'offers') return OffersView(isAr);
  if (pageKey === 'blog') return BlogView(isAr, params);

  return `<div class="container" style="padding:6rem 0;"><h2>404</h2></div>`;
}

// 1. About Us
function AboutView(isAr) {
  return `
    <div class="static-page container animate-fade-in">
      <div class="about-hero" style="background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80');">
        <h1>${isAr ? 'قصتنا وهويتنا' : 'Our Story & Identity'}</h1>
      </div>
      <div class="about-content">
        <div class="column">
          <h3>${isAr ? 'التميز والراحة منذ عام 2018' : 'Excellence & Comfort Since 2018'}</h3>
          <p>${isAr ? 'تأسست نيو لاين بريميوم في قلب الكويت لتكون الوجهة الأولى للفخامة والراحة في عالم المنسوجات المنزلية ومستلزمات النوم. نؤمن بأن كل ليلة نوم يجب أن تكون تجربة فندقية فاخرة تمنحك النشاط والحيوية.' : 'New Line Premium was founded in the heart of Kuwait to represent the peak of comfort in home textiles and sleep systems. We believe every night should feel like a five-star hotel escape.'}</p>
          <p>${isAr ? 'نعمل جنباً إلى جنب مع أرقى مصانع النسيج العالمية لنقدم لكم أطقم ديباج قطنية 100%، ولباد غيمة طبيعي بسماكات مختلفة، ومخدات ريش أوز طبيعي معالجة ضد الحساسية لتلبية أعلى معايير الجودة.' : 'We work closely with global textile leaders to offer 100% long-staple cotton comforter sets, cooling mattress toppers, and hypoallergenic goose down pillows meeting international standards.'}</p>
        </div>
        <div class="column">
          <h3>${isAr ? 'رسالتنا وقيمنا' : 'Our Mission & Values'}</h3>
          <p>🌟 <strong>${isAr ? 'راحة تدوم:' : 'Enduring Comfort:'}</strong> ${isAr ? 'نصمم منتجاتنا لتوفر الدعم المثالي للظهر والرقبة والنعومة الفائقة.' : 'We design bedding that supports spinal alignment and wraps you in softness.'}</p>
          <p>🤝 <strong>${isAr ? 'التفوق في الخدمة:' : 'Premium Service:'}</strong> ${isAr ? 'التوصيل السريع داخل الكويت، وتوفير خيارات دفع مرنة وتسهيل الاستبدال.' : 'Enjoy super-fast delivery in Kuwait, flexible payments, and easy returns.'}</p>
          <p>🌿 <strong>${isAr ? 'الأمان والصحة:' : 'Certified Health Standards:'}</strong> ${isAr ? 'جميع منسوجاتنا معتمدة بشهادة OEKO-TEX العالمية وخالية من المواد الكيميائية الضارة.' : 'All our textiles are OEKO-TEX certified and free from harsh chemicals.'}</p>
        </div>
      </div>
    </div>

    <style>
      .about-hero { height: 320px; background-size:cover; background-position:center; border-radius:8px; display:flex; align-items:center; justify-content:center; color:white; margin-bottom: 3rem; }
      .about-hero h1 { font-family: 'Playfair Display', serif; font-size: 2.5rem; text-shadow: 0 2px 10px rgba(0,0,0,0.4); }
      .about-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; line-height: 1.7; color: var(--text-secondary); }
      .about-content h3 { font-family: 'Playfair Display', serif; color: var(--text-primary); margin-bottom: 1.2rem; font-size: 1.6rem; }
      .about-content p { margin-bottom: 1.2rem; }
      @media (max-width: 768px) { .about-content { grid-template-columns: 1fr; gap: 2rem; } }
    </style>
  `;
}

// 2. Contact Us
function ContactView(isAr) {
  return `
    <div class="static-page container animate-fade-in">
      <h1 class="page-title">${isAr ? 'اتصل بنا' : 'Contact Us'}</h1>
      
      <div class="contact-grid">
        <!-- Contact Form -->
        <div class="contact-form-box">
          <h5>${isAr ? 'أرسل لنا رسالة مباشرة' : 'Send Us a Message'}</h5>
          <form id="contact-us-form" style="margin-top:1.5rem;">
            <div class="form-group">
              <label>${isAr ? 'الاسم بالكامل *' : 'Full Name *'}</label>
              <input type="text" class="form-control" required>
            </div>
            <div class="form-group">
              <label>${isAr ? 'البريد الإلكتروني *' : 'Email Address *'}</label>
              <input type="email" class="form-control" required>
            </div>
            <div class="form-group">
              <label>${isAr ? 'الموضوع *' : 'Subject *'}</label>
              <input type="text" class="form-control" required>
            </div>
            <div class="form-group">
              <label>${isAr ? 'الرسالة *' : 'Message *'}</label>
              <textarea class="form-control" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top:1rem;">${isAr ? 'إرسال الرسالة' : 'Send Message'}</button>
          </form>
        </div>

        <!-- Details & Mock Map -->
        <div class="contact-details-box">
          <div class="details-text" style="margin-bottom: 2rem;">
            <h5>${isAr ? 'معلومات الاتصال' : 'Contact Details'}</h5>
            <p>📞 +965 99887766</p>
            <p>✉️ service@newlinekuwait.com</p>
            <p>📍 ${isAr ? 'الكويت، الفروانية، الضجيج (مقابل سلطان سنتر)' : 'Kuwait, Farwaniya, Al-Dajeej (Opposite Sultan Center)'}</p>
          </div>
          
          <!-- Mock Interactive Map -->
          <div class="mock-map-wrapper">
            <div class="map-overlay">
              <span>📍 New Line Showroom (Al-Dajeej)</span>
              <small>${isAr ? 'انقر لتكبير تفاصيل الخريطة' : 'Click to view full map details'}</small>
            </div>
            <div class="map-background"></div>
          </div>
        </div>
      </div>
    </div>

    <style>
      .contact-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; }
      @media (max-width: 992px) { .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
      
      .mock-map-wrapper { height: 280px; border-radius: 6px; overflow:hidden; border: 1px solid var(--border-color); position:relative; }
      .map-overlay { position:absolute; bottom:15px; left:15px; background:rgba(0,0,0,0.85); color:white; padding:0.8rem 1.2rem; border-radius:4px; font-size:0.8rem; display:flex; flex-direction:column; z-index:2; }
      [dir="rtl"] .map-overlay { left:auto; right:15px; }
      .map-background { width:100%; height:100%; background: radial-gradient(circle, #eee 40%, #ccc 80%); background-size: 20px 20px; background-image: radial-gradient(#d4af37 2px, transparent 0); background-size: 24px 24px; opacity:0.85; }
    </style>
  `;
}

// 3. FAQ
function FAQView(isAr) {
  const faqs = [
    {
      qEn: "How long does shipping inside Kuwait take?",
      qAr: "كم يستغرق شحن وتوصيل الطلبات داخل الكويت؟",
      aEn: "Orders placed before 2 PM are delivered the same day! Otherwise, standard delivery takes 24 hours.",
      aAr: "الطلبات المقدمة قبل الساعة 2 ظهراً يتم توصيلها في نفس اليوم! خلاف ذلك، يستغرق التوصيل العادي 24 ساعة فقط لجميع مناطق الكويت."
    },
    {
      qEn: "Do you offer international shipping?",
      qAr: "هل توفرون الشحن لدول الخليج؟",
      aEn: "Yes, we ship to all GCC countries (Saudi Arabia, UAE, Qatar, Bahrain, Oman) via DHL Express within 2-4 days.",
      aAr: "نعم، نشحن لجميع دول الخليج العربي (المملكة العربية السعودية، الإمارات، قطر، البحرين، عمان) عبر دي إتش إل خلال 2-4 أيام عمل."
    },
    {
      qEn: "How do I care for my natural down pillows and comforters?",
      qAr: "كيف يمكنني العناية بمخاد الريش الطبيعي والديباج؟",
      aEn: "We recommend professional dry clean for down items. For cotton covers and bedsheets, they are safe to machine wash at 40°C on a gentle cycle.",
      aAr: "نوصي بالتنظيف الجاف الاحترافي لمخاد ولحاف الريش الطبيعي. أما أغطية القطن والشراشف، فيمكن غسلها بالغسالة المنزلية عند 40 درجة مئوية بدورة غسيل لطيفة."
    },
    {
      qEn: "What is the warranty policy on Mattress Toppers?",
      qAr: "ما هي سياسة الضمان على لباد السرير؟",
      aEn: "All our luxury mattress toppers come with a 1-Year Guarantee against filling lumpiness or collapse under normal domestic use.",
      aAr: "تأتي جميع أنواع اللباد الفاخرة لدينا بضمان لمدة سنة كاملة ضد هبوط الحشوة أو تكتلها في ظل الاستخدام المنزلي العادي."
    }
  ];

  return `
    <div class="static-page container animate-fade-in" style="max-width:800px;">
      <h1 class="page-title" style="text-align:center;">${isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h1>
      
      <div class="faq-accordion-group" style="margin-top:3rem; display:flex; flex-direction:column; gap:1.2rem;">
        ${faqs.map((faq, i) => `
          <div class="faq-item-card">
            <div class="faq-question-trigger">
              <span>❓ ${isAr ? faq.qAr : faq.qEn}</span>
              <span class="chevron">▼</span>
            </div>
            <div class="faq-answer-panel">
              <p>${isAr ? faq.aAr : faq.aEn}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <style>
      .faq-item-card { background-color: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; overflow:hidden; }
      .faq-question-trigger { display:flex; justify-content:space-between; align-items:center; padding:1.2rem; cursor:pointer; font-weight:600; font-size:0.95rem; user-select:none; }
      .faq-question-trigger:hover { background-color: var(--bg-tertiary); }
      .faq-question-trigger .chevron { font-size: 0.75rem; color: var(--text-muted); transition: transform 0.3s; }
      .faq-item-card.expanded .chevron { transform: rotate(180deg); }
      
      .faq-answer-panel { display:none; padding:1.2rem; border-top: 1px solid var(--border-color); background-color: var(--bg-primary); line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary); }
      .faq-item-card.expanded .faq-answer-panel { display:block; }
    </style>
  `;
}

// 4. Policy sheets renderer
function PolicyView(policyType, isAr) {
  const titles = {
    shipping: isAr ? 'سياسة الشحن والتوصيل' : 'Shipping & Delivery Policy',
    return: isAr ? 'سياسة الإرجاع والاستبدال' : 'Return & Refund Policy',
    privacy: isAr ? 'سياسة الخصوصية' : 'Privacy Policy',
    terms: isAr ? 'الشروط والأحكام' : 'Terms & Conditions'
  };

  return `
    <div class="static-page container animate-fade-in" style="max-width:800px; line-height:1.8;">
      <h1 class="page-title">${titles[policyType]}</h1>
      <div style="margin-top:2rem; color:var(--text-secondary); font-size:0.95rem;">
        <p><strong>1. ${isAr ? 'نظرة عامة والتمهيد' : 'Overview & Acceptance'}</strong></p>
        <p>${isAr ? 'تنطبق هذه السياسة على جميع المشتريات والزيارات التي تتم عبر متجر نيو لاين بريميوم الإلكتروني. يرجى قراءة الشروط بعناية قبل إتمام الطلب.' : 'This policy applies to all checkouts and interactions on New Line Premium store. Please read carefully before ordering.'}</p>
        
        <p style="margin-top:1.5rem;"><strong>2. ${isAr ? 'البنود والتفاصيل والضوابط' : 'Clauses & Scope'}</strong></p>
        <p>${isAr ? 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت لتلائم مقتضيات السوق والقوانين المعمول بها بدولة الكويت.' : 'We reserve the right to modify these terms at any time to adhere to retail regulations of Kuwait.'}</p>
        
        <p style="margin-top:1.5rem;"><strong>3. ${isAr ? 'التزامات العميل ومسؤوليته' : 'Client Obligations'}</strong></p>
        <p>${isAr ? 'العميل مسؤول عن تقديم تفاصيل عنوان شحن صحيحة ودقيقة (المنطقة، القطعة، الشارع، رقم المنزل) لتفادي أي تأخير أو رسوم إضافية قد تفرضها شركات التوصيل.' : 'Clients must provide correct shipping details (Area, Block, Street, House number) to avoid delivery delays.'}</p>
      </div>
    </div>
  `;
}

// 5. Active Offers Page
function OffersView(isAr) {
  const saleProducts = State.state.products.filter(p => p.originalPrice > p.price);

  return `
    <div class="static-page container animate-fade-in">
      <h1 class="page-title">${isAr ? 'العروض الحالية والتخفيضات' : 'Special Offers'}</h1>
      <p style="color:var(--text-muted); margin-bottom:3rem;">
        ${isAr ? 'اكتشف أفضل صفقاتنا وكوبونات الخصم المتاحة لتوفير المزيد عند تسوقك.' : 'Browse our active bargains, sale items, and coupon codes for your shopping cart.'}
      </p>

      <!-- Coupon list grid -->
      <div style="background:var(--bg-secondary); padding:2rem; border-radius:6px; border:1px solid var(--border-light); margin-bottom:3rem;">
        <h5 style="margin-bottom:1.5rem; font-weight:600;">🏷️ ${isAr ? 'كوبونات الخصم النشطة' : 'Active Coupon Codes'}</h5>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1.5rem;">
          ${State.state.coupons.map(c => `
            <div class="coupon-box-card" style="background:var(--bg-primary); border:1px dashed var(--accent-gold); padding:1rem; border-radius:4px; text-align:center; position:relative;">
              <span style="font-weight:700; font-size:1.1rem; color:var(--text-primary); display:block;">${c.code}</span>
              <span style="font-size:0.8rem; color:var(--accent-gold); font-weight:600; margin-top:0.25rem; display:block;">
                ${c.type === 'percent' ? `خصم ${c.discount}%` : `خصم ${c.discount.toFixed(3)} KWD`}
              </span>
              <button class="btn btn-secondary btn-sm copy-coupon-offer-btn" data-code="${c.code}" style="width:100%; margin-top:0.8rem; padding:0.25rem;">
                ${isAr ? 'نسخ الكود' : 'Copy Code'}
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Sale Products -->
      <div>
        <h4 style="font-family:\'Playfair Display\', serif; margin-bottom:1.5rem;">🔥 ${isAr ? 'منتجات مخفضة' : 'Bargain Items On Sale'}</h4>
        <div class="products-grid">
          ${saleProducts.map(p => `
            <div class="product-card">
              <div class="img-wrapper">
                <img src="${p.image}" alt="${p.titleEn}">
                <span class="badge badge-sale">${isAr ? 'تخفيض' : 'Sale'}</span>
              </div>
              <div class="content">
                <span class="category">${isAr ? p.categoryAr : p.categoryEn}</span>
                <a href="#/product/${p.id}" class="title">${isAr ? p.titleAr : p.titleEn}</a>
                <div class="price-wrapper">
                  <span class="price">${p.price.toFixed(3)} KWD</span>
                  <span class="old-price">${p.originalPrice.toFixed(3)} KWD</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// 6. Blog View (List & Details)
function BlogView(isAr, params) {
  const blogs = [
    {
      id: 1,
      titleEn: "How to choose the perfect mattress topper height (8cm vs 14cm)",
      titleAr: "كيفية اختيار سمك اللباد المناسب لسريرك (8 سم ضد 14 سم)",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
      date: "2026-06-15",
      bodyEn: "Selecting the right topper thickness transforms your sleep. An 8cm memory foam topper offers balanced lumbar support, ideal for contouring and correcting firm beds. A 14cm micro-feather topper gives you the ultimate sinking fluffy hotel feel.",
      bodyAr: "اختيار سمك اللباد المثالي يغير جودة نومك بالكامل. لباد الميموري فوم بسمك 8 سم يوفر دعماً متوازناً للعمود الفقري ومثالي للمراتب الصلبة. أما لباد الغيمة السميك 14 سم المصنوع من المايكروفايبر، فيمنحك شعوراً غائراً ومنفوشاً يشابه أسرة الفنادق الفاخرة."
    },
    {
      id: 2,
      titleEn: "Tips to clean and maintain your cotton comforters",
      titleAr: "نصائح لغسيل وحماية أطقم اللحاف والديباج القطني",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      date: "2026-06-20",
      bodyEn: "Premium cotton bedding deserves gentle care. Wash fitted sheets and pillowcases weekly at 40 degrees. For bulky comforters, wash on a delicate cycle using mild detergent, and dry thoroughly on low heat to keep the microfiber filling fluffy.",
      bodyAr: "تستحق أغطية السرير القطنية عناية لطيفة لتدوم طويلاً. اغسل الشراشف وأغطية الوسائد أسبوعياً عند 40 درجة مئوية. أما الديباج واللحاف الضخم، فاغسله بدورة الغسيل اللطيفة بالصابون السائل، وجففه تماماً بالهواء الساخن الخفيف لمنع تكتل الحشوة."
    }
  ];

  return `
    <div class="static-page container animate-fade-in" style="max-width:900px;">
      <h1 class="page-title">${isAr ? 'مدونة الأناقة والجمال' : 'Style Blog'}</h1>
      <p style="color:var(--text-muted); margin-bottom:3rem;">${isAr ? 'مقالات ونصائح تهمك للحفاظ على منسوجاتك المنزلية وجودة نومك الفاخرة.' : 'Articles and style guidelines to maintain your high-end bedding and textiles.'}</p>
      
      <div style="display:grid; grid-template-columns:1fr; gap:3rem;">
        ${blogs.map(blog => `
          <div class="blog-card" style="display:grid; grid-template-columns: 260px 1fr; gap:2rem; background:var(--bg-secondary); border-radius:6px; overflow:hidden; border:1px solid var(--border-light);">
            <img src="${blog.image}" alt="${blog.titleEn}" style="width:100%; height:200px; object-fit:cover;">
            <div style="padding:1.5rem; display:flex; flex-direction:column; justify-content:center;">
              <span style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem;">📅 ${blog.date}</span>
              <h4 style="font-family:'Playfair Display', serif; font-size:1.3rem; margin-bottom:0.8rem;">${isAr ? blog.titleAr : blog.titleEn}</h4>
              <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5; margin-bottom:1.2rem;">${isAr ? blog.bodyAr : blog.bodyEn}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Attach mount event hooks
StaticPagesRouter.onMount = (pageKey) => {
  const isAr = State.state.lang === 'ar';
  
  // 1. FAQ Accordions toggle
  if (pageKey === 'faq') {
    const faqItems = document.querySelectorAll('.faq-item-card');
    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-question-trigger');
      trigger.addEventListener('click', () => {
        const isExp = item.classList.contains('expanded');
        faqItems.forEach(i => i.classList.remove('expanded'));
        if (!isExp) item.classList.add('expanded');
      });
    });
  }

  // 2. Contact form submit mock
  if (pageKey === 'contact') {
    const form = document.getElementById('contact-us-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        State.showToast(isAr ? 'شكراً لتواصلك معنا! سنرد عليك خلال 24 ساعة.' : 'Message received! We will contact you under 24 hours.', 'success');
        form.reset();
      });
    }
  }

  // 3. Offers page copy coupon
  if (pageKey === 'offers') {
    const copyBtns = document.querySelectorAll('.copy-coupon-offer-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.dataset.code;
        navigator.clipboard.writeText(code).then(() => {
          State.showToast(isAr ? `تم نسخ الكوبون (${code}) للحافظة!` : `Coupon (${code}) copied to clipboard!`, 'success');
        });
      });
    });
  }
};
