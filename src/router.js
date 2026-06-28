/* Client-Side Hash Router */
import { State } from './store/state.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { CartDrawer } from './components/CartDrawer.js';
import { WhatsAppButton } from './components/WhatsAppButton.js';

// Page imports
import { HomePage } from './pages/Home.js';
import { CategoryPage } from './pages/Category.js';
import { ProductPage } from './pages/Product.js';
import { CartPage } from './pages/Cart.js';
import { CheckoutPage } from './pages/Checkout.js';
import { UserDashboardPage } from './pages/UserDashboard.js';
import { AdminPage } from './pages/Admin.js';
import { StaticPagesRouter } from './pages/StaticPages.js';

class Router {
  constructor() {
    this.routes = {
      '/': HomePage,
      '/category': CategoryPage,
      '/product/:id': ProductPage,
      '/cart': CartPage,
      '/checkout': CheckoutPage,
      '/dashboard': UserDashboardPage,
      '/admin': AdminPage,
      '/about': (params) => StaticPagesRouter('about', params),
      '/contact': (params) => StaticPagesRouter('contact', params),
      '/faq': (params) => StaticPagesRouter('faq', params),
      '/shipping-policy': (params) => StaticPagesRouter('shipping', params),
      '/return-policy': (params) => StaticPagesRouter('return', params),
      '/privacy-policy': (params) => StaticPagesRouter('privacy', params),
      '/terms': (params) => StaticPagesRouter('terms', params),
      '/offers': (params) => StaticPagesRouter('offers', params),
      '/blog': (params) => StaticPagesRouter('blog', params)
    };

    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());

    // Listen to state changes to re-render structural components and current target page
    State.subscribe('state_changed', () => this.handleRoute(true));
    State.subscribe('lang_changed', () => this.handleRoute());
  }

  // Parse hash and match routes
  getRouteInfo() {
    const hash = window.location.hash.slice(1) || '/';
    
    // Extract query or params if any
    const [path, queryString] = hash.split('?');
    const query = {};
    if (queryString) {
      queryString.split('&').forEach(pair => {
        const [key, value] = pair.split('=');
        query[decodeURIComponent(key)] = decodeURIComponent(value || '');
      });
    }

    // Match route parameters
    for (const routePattern in this.routes) {
      const patternParts = routePattern.split('/');
      const pathParts = path.split('/');

      if (patternParts.length === pathParts.length) {
        const params = {};
        let isMatch = true;

        for (let i = 0; i < patternParts.length; i++) {
          if (patternParts[i].startsWith(':')) {
            const paramName = patternParts[i].slice(1);
            params[paramName] = pathParts[i];
          } else if (patternParts[i] !== pathParts[i]) {
            isMatch = false;
            break;
          }
        }

        if (isMatch) {
          return {
            handler: this.routes[routePattern],
            params,
            query
          };
        }
      }
    }

    // Fallback to Home
    return {
      handler: HomePage,
      params: {},
      query: {}
    };
  }

  handleRoute(preserveScroll = false) {
    let scrollPos = 0;
    if (preserveScroll) {
      scrollPos = window.scrollY;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    const { handler, params, query } = this.getRouteInfo();
    
    // Compile global shell if it is not already built
    this.renderShell();
    
    // Render target page content in <main>
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.innerHTML = '';
      const content = handler(params, query);
      if (content instanceof HTMLElement) {
        mainContainer.appendChild(content);
      } else if (typeof content === 'string') {
        mainContainer.innerHTML = content;
      }
      
      // Execute page lifecycle script hooks if defined
      if (handler.onMount) {
        handler.onMount(params, query);
      }

      if (preserveScroll) {
        window.scrollTo(0, scrollPos);
      }
    }
  }

  renderShell() {
    const app = document.getElementById('app');
    if (!app) return;

    // Check if structural elements exist
    let headerEl = document.querySelector('header');
    let mainEl = document.querySelector('main');
    let footerEl = document.querySelector('footer');
    let cartDrawerEl = document.querySelector('.cart-drawer-container');
    let whatsappEl = document.querySelector('.whatsapp-container');

    if (!headerEl) {
      headerEl = document.createElement('header');
      app.appendChild(headerEl);
    }
    headerEl.innerHTML = Header();
    if (Header.onMount) Header.onMount();

    if (!mainEl) {
      mainEl = document.createElement('main');
      app.appendChild(mainEl);
    }

    if (!footerEl) {
      footerEl = document.createElement('footer');
      app.appendChild(footerEl);
    }
    footerEl.innerHTML = Footer();
    if (Footer.onMount) Footer.onMount();

    if (!cartDrawerEl) {
      cartDrawerEl = document.createElement('div');
      cartDrawerEl.className = 'cart-drawer-container';
      app.appendChild(cartDrawerEl);
    }
    
    // Check if drawer is currently open before re-rendering to prevent it closing
    const oldBackdrop = document.getElementById('cart-drawer-backdrop');
    const wasDrawerActive = oldBackdrop && oldBackdrop.classList.contains('active');

    cartDrawerEl.innerHTML = CartDrawer();
    if (CartDrawer.onMount) CartDrawer.onMount();

    if (wasDrawerActive) {
      const newBackdrop = document.getElementById('cart-drawer-backdrop');
      if (newBackdrop) {
        newBackdrop.classList.add('active');
        const panel = newBackdrop.querySelector('.drawer-panel');
        if (panel) panel.style.transform = 'translateX(0)';
      }
    }

    if (!whatsappEl) {
      whatsappEl = document.createElement('div');
      whatsappEl.className = 'whatsapp-container';
      app.appendChild(whatsappEl);
    }
    whatsappEl.innerHTML = WhatsAppButton();
    if (WhatsAppButton.onMount) WhatsAppButton.onMount();
  }

  // Helper method to update hash programmatically
  navigateTo(path, query = {}) {
    let hash = path;
    const queryKeys = Object.keys(query);
    if (queryKeys.length > 0) {
      const queryString = queryKeys.map(k => `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`).join('&');
      hash += `?${queryString}`;
    }
    window.location.hash = hash;
  }
}

export const AppRouter = new Router();
