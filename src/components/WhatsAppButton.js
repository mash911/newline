import { State } from '../store/state.js';

export function WhatsAppButton() {
  const isAr = State.state.lang === 'ar';

  return `
    <div class="whatsapp-widget-wrapper">
      <!-- Chat Balloon (Hidden by default) -->
      <div id="wa-chat-balloon" class="wa-chat-balloon">
        <div class="chat-header">
          <div class="chat-avatar">✨</div>
          <div class="chat-info">
            <span class="chat-name">Sana Boutique Support</span>
            <span class="chat-status">${isAr ? 'متصل حالياً' : 'Online'}</span>
          </div>
          <button id="wa-close-btn" class="chat-close-btn">&times;</button>
        </div>
        
        <div class="chat-body" id="wa-chat-body">
          <div class="chat-message bot">
            <p>${isAr ? 'أهلاً بك في بوتيك سناء! كيف يمكننا مساعدتك اليوم؟' : 'Hello and welcome to Sana Boutique! How can we help you today?'}</p>
            <span class="time">Just now</span>
          </div>
        </div>

        <div class="chat-quick-replies">
          <button class="quick-reply-btn" data-type="track">${isAr ? '📦 تتبع طلبي' : '📦 Track Order'}</button>
          <button class="quick-reply-btn" data-type="coupon">${isAr ? '🏷️ كود خصم ترحيبي' : '🏷️ Welcome Coupon'}</button>
        </div>

        <div class="chat-footer">
          <input type="text" id="wa-chat-input" placeholder="${isAr ? 'اكتب رسالتك هنا...' : 'Type message...'}" class="form-control">
          <button id="wa-send-btn" class="send-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>

      <!-- Main Floating Trigger Button -->
      <button id="wa-trigger-btn" class="wa-trigger-btn" title="Contact WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span class="pulse-indicator"></span>
      </button>
    </div>

    <style>
      .whatsapp-widget-wrapper {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 1000;
      }
      [dir="rtl"] .whatsapp-widget-wrapper {
        right: auto;
        left: 2rem;
      }
      
      /* Trigger Button */
      .wa-trigger-btn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #25d366;
        color: white;
        border: none;
        box-shadow: 0 5px 25px rgba(37, 211, 102, 0.4);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: var(--transition-smooth);
      }
      .wa-trigger-btn:hover {
        transform: scale(1.08) rotate(5deg);
        box-shadow: 0 8px 30px rgba(37, 211, 102, 0.55);
      }
      
      .pulse-indicator {
        position: absolute;
        top: 0;
        right: 0;
        width: 14px;
        height: 14px;
        background-color: var(--accent-gold);
        border: 2px solid white;
        border-radius: 50%;
        animation: pulseEffect 2s infinite;
      }
      @keyframes pulseEffect {
        0% { transform: scale(0.9); opacity: 1; }
        50% { transform: scale(1.3); opacity: 0.5; }
        100% { transform: scale(0.9); opacity: 1; }
      }

      /* Chat Balloon panel */
      .wa-chat-balloon {
        position: absolute;
        bottom: 75px;
        right: 0;
        width: 320px;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        box-shadow: var(--modal-shadow);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        opacity: 0;
        transform: translateY(20px) scale(0.95);
        visibility: hidden;
        transition: var(--transition-smooth);
      }
      [dir="rtl"] .wa-chat-balloon {
        right: auto;
        left: 0;
      }
      .wa-chat-balloon.active {
        opacity: 1;
        transform: translateY(0) scale(1);
        visibility: visible;
      }

      .chat-header {
        background-color: #25d366;
        color: white;
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        position: relative;
      }
      .chat-avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
      }
      .chat-info {
        display: flex;
        flex-direction: column;
      }
      .chat-name {
        font-size: 0.85rem;
        font-weight: 600;
      }
      .chat-status {
        font-size: 0.7rem;
        opacity: 0.9;
      }
      .chat-close-btn {
        position: absolute;
        top: 0.8rem;
        right: 0.8rem;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        line-height: 1;
      }
      [dir="rtl"] .chat-close-btn {
        right: auto;
        left: 0.8rem;
      }

      .chat-body {
        padding: 1rem;
        max-height: 200px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        background-color: var(--bg-secondary);
      }
      .chat-message {
        max-width: 85%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        font-size: 0.8rem;
        line-height: 1.4;
      }
      .chat-message.bot {
        background-color: var(--bg-primary);
        color: var(--text-primary);
        align-self: flex-start;
        border-top-left-radius: 0;
      }
      [dir="rtl"] .chat-message.bot {
        border-top-left-radius: 8px;
        border-top-right-radius: 0;
      }
      .chat-message.user {
        background-color: #dcf8c6;
        color: #151515;
        align-self: flex-end;
        border-top-right-radius: 0;
      }
      [dir="rtl"] .chat-message.user {
        border-top-right-radius: 8px;
        border-top-left-radius: 0;
      }
      .chat-message .time {
        display: block;
        font-size: 0.65rem;
        color: var(--text-muted);
        text-align: right;
        margin-top: 0.25rem;
      }

      /* Quick replies */
      .chat-quick-replies {
        display: flex;
        gap: 0.4rem;
        padding: 0.5rem 1rem;
        background-color: var(--bg-secondary);
        border-top: 1px solid var(--border-light);
        flex-wrap: wrap;
      }
      .quick-reply-btn {
        font-size: 0.75rem;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        padding: 0.3rem 0.6rem;
        border-radius: 12px;
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .quick-reply-btn:hover {
        background-color: var(--accent-gold-light);
        border-color: var(--accent-gold);
      }

      /* Footer */
      .chat-footer {
        padding: 0.6rem 1rem;
        border-top: 1px solid var(--border-color);
        display: flex;
        gap: 0.5rem;
      }
      .chat-footer input {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
      }
      .send-btn {
        background-color: #25d366;
        color: white;
        border: none;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .send-btn:hover {
        transform: scale(1.05);
      }
    </style>
  `;
}

WhatsAppButton.onMount = () => {
  const trigger = document.getElementById('wa-trigger-btn');
  const balloon = document.getElementById('wa-chat-balloon');
  const close = document.getElementById('wa-close-btn');
  const input = document.getElementById('wa-chat-input');
  const send = document.getElementById('wa-send-btn');
  const chatBody = document.getElementById('wa-chat-body');

  const isAr = State.state.lang === 'ar';

  if (trigger && balloon) {
    trigger.addEventListener('click', () => {
      balloon.classList.toggle('active');
    });
  }

  if (close && balloon) {
    close.addEventListener('click', () => {
      balloon.classList.remove('active');
    });
  }

  // Handle message sending & bot replies
  const appendMessage = (text, sender) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const msg = document.createElement('div');
    msg.className = `chat-message ${sender}`;
    msg.innerHTML = `<p>${text}</p><span class="time">${time}</span>`;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const handleSend = () => {
    const val = input.value.trim();
    if (!val) return;

    appendMessage(val, 'user');
    input.value = '';

    // Mock chatbot response
    setTimeout(() => {
      let reply = '';
      if (val.toLowerCase().includes('order') || val.includes('طلب')) {
        reply = isAr 
          ? 'لتتبع طلبك، يرجى الانتقال إلى صفحة لوحة التحكم ومن ثم اختيار "تتبع الطلبات" أو إدخال رقم الطلب هنا.' 
          : 'To track your order, please navigate to the Account Dashboard and select "Track Order" or send the Order ID here.';
      } else if (val.toLowerCase().includes('discount') || val.includes('خصم') || val.toLowerCase().includes('coupon')) {
        reply = isAr
          ? 'يمكنك استخدام الكوبون الترحيبي (WELCOME) للحصول على خصم 15% على إجمالي عربة التسوق الخاصة بك!'
          : 'You can use the welcome coupon (SAVE10) for 10% off or (SAVE20) for 20% off your next purchase!';
      } else {
        reply = isAr
          ? 'تم استلام استفسارك! يمكنك أيضاً النقر للدردشة المباشرة مع وكلائنا عبر الواتساب على +96599887766.'
          : 'Your inquiry has been received! You can also click to chat directly with our agents on WhatsApp at +96599887766.';
      }
      appendMessage(reply, 'bot');
    }, 1000);
  };

  if (send) send.addEventListener('click', handleSend);
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  // Quick replies click handlers
  balloon.querySelectorAll('.quick-reply-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      if (type === 'track') {
        appendMessage(isAr ? 'أريد تتبع طلبي' : 'I want to track my order', 'user');
        setTimeout(() => {
          appendMessage(
            isAr 
              ? 'تفضل بزيارة صفحة حسابي > تتبع الطلبات أو أرسل رقم طلبك (مثال: ORD-123456) لمعرفة مكانه.' 
              : 'Visit My Account > Order History or provide your Order ID (e.g. ORD-123456) for status updates.', 
            'bot'
          );
        }, 1000);
      } else if (type === 'coupon') {
        appendMessage(isAr ? 'ما هي الكوبونات المتاحة؟' : 'What coupons are available?', 'user');
        setTimeout(() => {
          appendMessage(
            isAr
              ? 'استخدم الكوبون الكود SAVE20 للحصول على خصم 20%!'
              : 'Try applying coupon code SAVE20 for a 20% flat discount on your cart!', 
            'bot'
          );
        }, 1000);
      }
    });
  });
};
