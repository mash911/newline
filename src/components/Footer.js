import { State } from '../store/state.js';

export function Footer() {
  const isAr = State.state.lang === 'ar';
  
  return `
    <div class="footer-wrapper">
      <!-- Upper Section: Newsletter & Socials -->
      <div class="footer-top">
        <div class="container top-grid">
          <div class="newsletter-area">
            <h4>${isAr ? 'اشترك في النشرة البريدية' : 'Subscribe to our Newsletter'}</h4>
            <p>${isAr ? 'كن أول من يعرف عن العروض الحصرية وتشكيلاتنا الجديدة' : 'Be the first to receive updates on exclusive offers and new collections.'}</p>
            <form id="newsletter-form" class="newsletter-form">
              <input type="email" id="newsletter-email" class="form-control" placeholder="${isAr ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}" required>
              <button type="submit" class="btn btn-primary">${isAr ? 'اشترك الآن' : 'Subscribe'}</button>
            </form>
          </div>
          <div class="socials-area">
            <h4>${isAr ? 'تابعنا على مواقع التواصل' : 'Follow Us'}</h4>
            <div class="social-icons">
              <a href="#" class="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Snapchat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2C7.03 2 3 6.03 3 11c0 2.21.8 4.23 2.12 5.8L3.25 21h17.5l-1.87-4.2C20.2 15.23 21 13.21 21 11c0-4.97-4.03-9-9-9z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Center Section: Site Map Columns -->
      <div class="footer-center">
        <div class="container center-grid">
          <!-- Column 1: Info -->
          <div class="footer-col">
            <h5 class="logo" style="display: flex; align-items: center; max-height: 48px; margin-bottom: 1rem;">
              <img src="/feather_logo.png" alt="Feather Home Textile" style="height: 42px; width: auto; object-fit: contain;">
            </h5>
            <p class="about-desc">
              ${isAr ? 'وجهتكم الأولى في الكويت لتسوق أطقم الديباج الفاخرة، شراشف السرير المطاطية، اللباد الفندقي والمخاد والمناشف ذات الجودة العالية التي تمنحكم نوماً هنيئاً.' : 'Your premiere destination in Kuwait for luxury bedding comforters, mattress toppers, hotel pillows, and premium bath linens designed to elevate your sleep.'}
            </p>
            <div class="contact-details">
              <p>📞 +965 99887766</p>
              <p>✉️ service@newlinekuwait.com</p>
              <p>📍 ${isAr ? 'الكويت، الفروانية، الضجيج (مقابل سلطان سنتر)' : 'Kuwait, Farwaniya, Al-Dajeej (Opposite Sultan Center)'}</p>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="footer-col">
            <h5>${isAr ? 'تصنيفات المتجر' : 'Product Categories'}</h5>
            <ul class="footer-links">
              <li><a href="#/category">${isAr ? 'كل المنتجات' : 'All Products'}</a></li>
              <li><a href="#/category?category=quilts">${isAr ? 'أطقم ديباج ولحاف' : 'Quilts & Comforters'}</a></li>
              <li><a href="#/category?category=toppers">${isAr ? 'لباد ومخدات فندقية' : 'Toppers & Pillows'}</a></li>
              <li><a href="#/category?category=sheets">${isAr ? 'شراشف سرير' : 'Bed Sheets'}</a></li>
              <li><a href="#/category?category=blankets">${isAr ? 'بطانيات ناعمة' : 'Blankets'}</a></li>
            </ul>
          </div>

          <!-- Column 3: Customer Care -->
          <div class="footer-col">
            <h5>${isAr ? 'خدمة العملاء' : 'Customer Care'}</h5>
            <ul class="footer-links">
              <li><a href="#/dashboard">${isAr ? 'حسابي' : 'My Account'}</a></li>
              <li><a href="#/dashboard?tab=orders">${isAr ? 'تتبع الطلبات' : 'Track Order'}</a></li>
              <li><a href="#/dashboard?tab=wishlist">${isAr ? 'المفضلة' : 'Wishlist'}</a></li>
              <li><a href="#/faq">${isAr ? 'الأسئلة الشائعة' : 'FAQs'}</a></li>
              <li><a href="#/contact">${isAr ? 'تواصل معنا' : 'Contact Us'}</a></li>
            </ul>
          </div>

          <!-- Column 4: Policies -->
          <div class="footer-col">
            <h5>${isAr ? 'السياسات والقوانين' : 'Policies & Terms'}</h5>
            <ul class="footer-links">
              <li><a href="#/shipping-policy">${isAr ? 'سياسة الشحن والتوصيل' : 'Shipping Policy'}</a></li>
              <li><a href="#/return-policy">${isAr ? 'سياسة الإرجاع والاستبدال' : 'Return & Refund Policy'}</a></li>
              <li><a href="#/privacy-policy">${isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</a></li>
              <li><a href="#/terms">${isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Section: Legal & Payments -->
      <div class="footer-bottom">
        <div class="container bottom-flex">
          <p class="copyright">&copy; 2026 Feather Home Textile. ${isAr ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}</p>
          
          <!-- Payment Icons -->
          <div class="payment-methods">
            <span class="payment-badge knet" title="KNET">KNET</span>
            <span class="payment-badge visa" title="Visa">VISA</span>
            <span class="payment-badge mastercard" title="Mastercard">MC</span>
            <span class="payment-badge cod" title="Cash on Delivery">${isAr ? 'الدفع عند الاستلام' : 'COD'}</span>
          </div>
        </div>
      </div>
    </div>

    <style>
      .footer-wrapper {
        background-color: var(--bg-secondary);
        border-top: 1px solid var(--border-color);
        margin-top: 4rem;
        color: var(--text-primary);
        font-size: 0.9rem;
      }
      
      .footer-top {
        padding: 3rem 0;
        border-bottom: 1px solid var(--border-color);
      }
      .top-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 3rem;
        align-items: center;
      }
      .newsletter-area h4, .socials-area h4 {
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      .newsletter-area p {
        color: var(--text-secondary);
        font-size: 0.85rem;
        margin-bottom: 1rem;
      }
      .newsletter-form {
        display: flex;
        gap: 0.5rem;
        max-width: 500px;
      }
      .social-icons {
        display: flex;
        gap: 0.8rem;
        margin-top: 1rem;
      }
      .social-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary);
        transition: var(--transition-fast);
      }
      .social-icon:hover {
        background-color: var(--text-primary);
        color: var(--bg-primary);
        border-color: var(--text-primary);
        transform: translateY(-3px);
      }

      /* Center Grid */
      .footer-center {
        padding: 4rem 0;
        border-bottom: 1px solid var(--border-color);
      }
      .center-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 1fr;
        gap: 2.5rem;
      }
      .footer-col h5 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: var(--text-primary);
      }
      .about-desc {
        color: var(--text-secondary);
        font-size: 0.85rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }
      .contact-details p {
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
        color: var(--text-secondary);
      }
      .footer-links {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
      .footer-links a {
        text-decoration: none;
        color: var(--text-secondary);
        transition: var(--transition-fast);
        font-size: 0.85rem;
      }
      .footer-links a:hover {
        color: var(--accent-gold);
        padding-inline-start: 4px;
      }

      /* Bottom bar */
      .footer-bottom {
        padding: 1.5rem 0;
        background-color: var(--bg-tertiary);
      }
      .bottom-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .copyright {
        font-size: 0.8rem;
        color: var(--text-muted);
      }
      .payment-methods {
        display: flex;
        gap: 0.5rem;
      }
      .payment-badge {
        font-size: 0.7rem;
        font-weight: 700;
        padding: 0.3rem 0.6rem;
        border-radius: 4px;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        color: var(--text-secondary);
      }
      .payment-badge.knet {
        border-color: #007a3d;
        color: #007a3d;
      }
      .payment-badge.visa {
        border-color: #1a1f71;
        color: #1a1f71;
      }

      @media (max-width: 768px) {
        .top-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .center-grid {
          grid-template-columns: 1fr 1fr;
        }
        .bottom-flex {
          flex-direction: column;
          text-align: center;
        }
      }
      @media (max-width: 480px) {
        .center-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
  `;
}

Footer.onMount = () => {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      const isAr = State.state.lang === 'ar';
      
      State.showToast(
        isAr 
          ? `شكراً للاشتراك! سنرسل العروض إلى ${email}` 
          : `Thanks for subscribing! Offers will be sent to ${email}`, 
        'success'
      );
      
      form.reset();
    });
  }
};
