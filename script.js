/* ==========================================================================
   MJ WEB CRAFT — site script
   Organized in clearly separated modules so each part can be edited or
   removed independently (icons, data, header, projects, stats, form).
   ========================================================================== */

/* -----------------------------------------------------------------------
   1. ICONS — small inline line-icon set (no external icon library)
   ----------------------------------------------------------------------- */
const ICONS = {
  code: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 6L3 12l6 6M15 6l6 6-6 6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  layout: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke-width="1.8"/><path d="M3 9h18M9 9v11" stroke-width="1.8"/></svg>`,
  wp: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke-width="1.8"/><path d="M6 9l3.5 9L12 11l2.5 7L18 9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 4h2l2.2 11.4A2 2 0 0 0 9.16 17H18a2 2 0 0 0 1.94-1.5L21.5 9H6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="20.5" r="1.3"/><circle cx="17.5" cy="20.5" r="1.3"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 21V7l8-4 8 4v14" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 21v-6h6v6M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3.2" stroke-width="1.8"/><path d="M12 3v2.6M12 18.4V21M4.9 6.2l1.9 1.7M17.2 16.1l1.9 1.7M3 12h2.6M18.4 12H21M4.9 17.8l1.9-1.7M17.2 7.9l1.9-1.7" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke-width="1.8"/><circle cx="12" cy="12" r="4.5" stroke-width="1.8"/><circle cx="12" cy="12" r="1" stroke-width="1.8"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 13.6-5.7M20 12a8 8 0 0 1-13.6 5.7" stroke-width="1.8" stroke-linecap="round"/><path d="M17 3v4h-4M7 21v-4h4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  gauge: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 15a8 8 0 1 1 16 0" stroke-width="1.8" stroke-linecap="round"/><path d="M12 15l4-5" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  strategy: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 17l5-5 4 4 8-8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 8h5v5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  device: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="12" height="9" rx="1.5" stroke-width="1.8"/><rect x="17" y="9" width="4" height="9" rx="1" stroke-width="1.8"/><path d="M7 17h4" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none"><path d="M13 3L5 14h6l-1 7 9-11h-6l1-7z" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke-width="1.8"/><path d="M20 20l-4.6-4.6" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  support: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke-width="1.8"/><circle cx="12" cy="12" r="3" stroke-width="1.8"/><path d="M6 6l3 3M18 6l-3 3M6 18l3-3M18 18l-3-3" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none"><path d="M20 12a8 8 0 1 1-3.2-6.4M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 0 1 12 4" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 10c0 3 2 5 5 5" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke-width="1.8"/><path d="M4 7l8 6 8-6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

(function injectIcons(){
  const PLACEHOLDER = /{{ICON:(\w+)}}/g;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const targets = [];
  let node;
  while ((node = walker.nextNode())) {
    if (PLACEHOLDER.test(node.nodeValue)) targets.push(node);
    PLACEHOLDER.lastIndex = 0;
  }

  targets.forEach((textNode) => {
    const text = textNode.nodeValue;
    const frag = document.createDocumentFragment();
    let lastIndex = 0;

    text.replace(/{{ICON:(\w+)}}/g, (match, name, offset) => {
      if (offset > lastIndex) frag.appendChild(document.createTextNode(text.slice(lastIndex, offset)));
      const wrapper = document.createElement('span');
      wrapper.innerHTML = ICONS[name] || '';
      if (wrapper.firstElementChild) frag.appendChild(wrapper.firstElementChild);
      lastIndex = offset + match.length;
      return match;
    });

    if (lastIndex < text.length) frag.appendChild(document.createTextNode(text.slice(lastIndex)));
    textNode.parentNode.replaceChild(frag, textNode);
  });
})();

/* -----------------------------------------------------------------------
   2. DATA — projects & testimonials
   Edit these arrays to add, remove or update content. Nothing else in
   the file needs to change when content changes.
   ----------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: 'rent-a-car',
    name: 'Rent-A-Car Website & Online Booking Portal',
    industry: 'Travel / Transportation',
    cats: ['custom', 'business'],
    status: 'private',
    description: 'A complete rent-a-car website with an integrated booking portal for exploring vehicles and submitting rental requests online.',
    services: ['Web Development', 'Custom Portal'],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    challenge: 'The business needed customers to browse available vehicles and submit booking requests online instead of relying on phone calls, without adding operational complexity.',
    solution: 'Built a modern responsive website with a vehicle listing system and an online booking flow, plus admin functionality to manage incoming requests.',
    features: ['Vehicle & rental listings', 'Online booking system with booking forms', 'Customer booking flow', 'Booking management & admin functionality', 'Fully mobile responsive'],
  },
  {
    id: 'language-center',
    name: 'English Language Center — Website & Management System',
    industry: 'Education / Learning Management',
    cats: ['custom', 'business'],
    status: 'private',
    description: 'A digital platform combining a public institute website with online admission, testing, fees and student management.',
    services: ['Web Development', 'Management System'],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    challenge: 'The center needed one platform to handle its public presence and the day-to-day admin of admissions, testing, fees and student records.',
    solution: 'Delivered a professional institute website alongside a management system covering admissions, testing, fees and a student portal, run from a single admin dashboard.',
    features: ['Online admission & online test', 'Online fee system', 'Student portal & student management', 'Application management & admin dashboard', 'Notices, documents & course management'],
  },
  {
    id: 'pet-hospital',
    name: 'Pet Hospital Website & Online Store',
    industry: 'Healthcare / E-commerce',
    cats: ['ecommerce', 'custom', 'business'],
    status: 'private',
    description: 'A pet hospital website combined with an online store for pet-related products, covering both information and e-commerce.',
    services: ['Web Development', 'E-commerce'],
    tech: ['HTML', 'CSS', 'JavaScript', 'WooCommerce'],
    challenge: 'The hospital needed to present its services and pet care information clearly, while also opening a simple online shopping channel for pet products.',
    solution: 'Built a professional hospital website with services and pet care content, integrated with an online store with full product listing and management.',
    features: ['Services & pet care information', 'Online store with product listings', 'Product management', 'Shopping experience & checkout flow', 'Fully responsive design'],
  },
  {
    id: 'ecom-seller-ease',
    name: 'Ecom Seller Ease',
    industry: 'E-commerce',
    cats: ['ecommerce', 'wordpress', 'design'],
    status: 'live',
    url: 'https://ecomsellerease.com/',
    description: 'Full-featured WooCommerce platform with custom product pages, streamlined checkout and seller management tools built for conversion.',
    services: ['WordPress', 'WooCommerce', 'UI/UX'],
    tech: ['WordPress', 'WooCommerce', 'Elementor Pro'],
    challenge: 'The client needed an e-commerce storefront that felt trustworthy to shoppers while giving the seller side simple tools to manage products.',
    solution: 'Built a custom WooCommerce store with tailored product pages, a streamlined checkout and dedicated seller management tools.',
    features: ['Custom product pages', 'Streamlined checkout', 'Seller management tools', 'Conversion-focused layout'],
  },
  {
    id: 'authors-byline',
    name: 'Authors Byline Publishing',
    industry: 'Publishing',
    cats: ['wordpress', 'business', 'design'],
    status: 'live',
    url: 'https://authorsbylinepublishing.com/',
    description: 'Professional book publishing services website with service packages, testimonials and lead capture funnels built to convert.',
    services: ['WordPress', 'Web Design'],
    tech: ['WordPress', 'Elementor Pro'],
    challenge: 'A US-based publishing service needed a credible, conversion-oriented site to turn visiting authors into leads.',
    solution: 'Designed clear service packages, testimonials and lead capture funnels around the author\u2019s decision journey.',
    features: ['Service package pages', 'Author testimonials', 'Lead capture funnels'],
  },
  {
    id: 'rod-travel',
    name: 'ROD Travel & Tours',
    industry: 'Travel & Tourism',
    cats: ['wordpress', 'custom', 'business'],
    status: 'live',
    url: 'https://rodtravelandtours.pk',
    description: 'Travel agency website with tour packages, booking forms and destination galleries on a fully responsive layout.',
    services: ['WordPress', 'Booking System'],
    tech: ['WordPress', 'Elementor Pro'],
    challenge: 'The agency needed to showcase tour packages and destinations while giving visitors a simple way to request bookings.',
    solution: 'Built custom Elementor layouts for tour packages and destination galleries with integrated booking forms.',
    features: ['Tour package pages', 'Booking forms', 'Destination galleries'],
  },
  {
    id: 'complete-medical',
    name: 'Complete Medical PK',
    industry: 'Healthcare',
    cats: ['wordpress', 'business', 'custom'],
    status: 'live',
    url: 'https://completemedical.pk',
    description: 'Healthcare services website with doctor profiles, service pages and appointment booking integration.',
    services: ['WordPress', 'Custom Theme'],
    tech: ['WordPress', 'Custom Theme'],
    challenge: 'The clinic needed a professional presence with clear doctor information and a way for patients to request appointments.',
    solution: 'Built a custom WordPress theme with doctor profiles, service pages and an appointment booking integration.',
    features: ['Doctor profiles', 'Service pages', 'Appointment booking integration'],
  },
];

const TESTIMONIALS = [
  { name: 'Sana R.', business: 'Boutique Retail Brand', quote: 'Our new site finally looks like the business we actually run. Inquiries picked up within the first two weeks.', rating: 5 },
  { name: 'David H.', business: 'Consulting Firm (US)', quote: 'Communication was clear at every step and the final site loads fast and looks genuinely premium.', rating: 5 },
  { name: 'Ayesha K.', business: 'Education Center', quote: 'The admission and testing system saved our front desk hours of manual work every week.', rating: 5 },
  { name: 'Marcus T.', business: 'E-commerce Store', quote: 'Checkout is smoother and returns are down. Exactly what we needed from the redesign.', rating: 4 },
];

/* -----------------------------------------------------------------------
   3. HEADER — mobile nav toggle + close on link click
   ----------------------------------------------------------------------- */
const navToggleEl = document.getElementById('navToggle');
const mainNavEl = document.getElementById('mainNav');

navToggleEl?.addEventListener('click', () => {
  const isOpen = mainNavEl.classList.toggle('is-open');
  navToggleEl.classList.toggle('is-open', isOpen);
  navToggleEl.setAttribute('aria-expanded', String(isOpen));
});

mainNavEl?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNavEl.classList.remove('is-open');
    navToggleEl?.classList.remove('is-open');
    navToggleEl?.setAttribute('aria-expanded', 'false');
  });
});

/* -----------------------------------------------------------------------
   4. PROJECTS — render cards, filter, and case-study modal
   ----------------------------------------------------------------------- */
const projectGridEl = document.getElementById('projectGrid');

function projectCardHTML(p){
  const statusTag = p.status === 'live'
    ? `<span class="project-status-tag status-live">Live Website</span>`
    : `<span class="project-status-tag status-private">Private Client Project</span>`;
  const cta = p.status === 'live'
    ? `<button type="button" class="js-open-case" data-id="${p.id}">View Case Study <span aria-hidden="true">›</span></button>`
    : `<button type="button" class="js-open-case" data-id="${p.id}">View Case Study <span aria-hidden="true">›</span></button>`;

  return `
  <article class="project-card" data-cats="${p.cats.join(' ')}">
    <div class="project-media">
      ${statusTag}
      <span>${p.name.split(' ').slice(0,3).join(' ')}</span>
    </div>
    <div class="project-body">
      <span class="project-industry">${p.industry}</span>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="project-services">${p.services.map(s => `<span>${s}</span>`).join('')}</div>
      <div class="project-cta">${cta}</div>
    </div>
  </article>`;
}

if (projectGridEl) {
  projectGridEl.innerHTML = PROJECTS.map(projectCardHTML).join('');
}

/* Filtering */
const filterBarEl = document.getElementById('filterBar');
filterBarEl?.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  filterBarEl.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('is-active', b === btn);
    b.setAttribute('aria-selected', String(b === btn));
  });
  const filter = btn.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card => {
    const cats = card.dataset.cats.split(' ');
    const show = filter === 'all' || cats.includes(filter);
    card.classList.toggle('is-hidden', !show);
  });
});

/* Case-study modal */
const modalOverlayEl = document.getElementById('modalOverlay');
const modalBodyEl = document.getElementById('modalBody');
const modalCloseEl = document.getElementById('modalClose');

function openCaseStudy(id){
  const p = PROJECTS.find(proj => proj.id === id);
  if (!p) return;

  const statusBlock = p.status === 'live'
    ? `<span class="modal-status status-live">Live Website</span>
       <div class="modal-visit"><a class="btn btn-ghost btn-sm" href="${p.url}" target="_blank" rel="noopener">Visit Website ↗</a></div>`
    : `<span class="modal-status status-private">Private Client Project — Demo Available On Request</span>`;

  modalBodyEl.innerHTML = `
    <span class="modal-industry">${p.industry}</span>
    <h3 id="modalTitle">${p.name}</h3>

    <div class="modal-section">
      <h4>Overview</h4>
      <p>${p.description}</p>
    </div>
    <div class="modal-section">
      <h4>Business Challenge</h4>
      <p>${p.challenge}</p>
    </div>
    <div class="modal-section">
      <h4>Our Solution</h4>
      <p>${p.solution}</p>
    </div>
    <div class="modal-section">
      <h4>Key Features</h4>
      <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>Technology</h4>
      <div class="modal-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
    </div>
    ${statusBlock}
  `;

  modalOverlayEl.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeCaseStudy(){
  modalOverlayEl.hidden = true;
  document.body.style.overflow = '';
}

projectGridEl?.addEventListener('click', (e) => {
  const btn = e.target.closest('.js-open-case');
  if (!btn) return;
  openCaseStudy(btn.dataset.id);
});

modalCloseEl?.addEventListener('click', closeCaseStudy);
modalOverlayEl?.addEventListener('click', (e) => {
  if (e.target === modalOverlayEl) closeCaseStudy();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlayEl && !modalOverlayEl.hidden) closeCaseStudy();
});

/* -----------------------------------------------------------------------
   5. TESTIMONIALS — render cards
   ----------------------------------------------------------------------- */
const testimonialGridEl = document.getElementById('testimonialGrid');
if (testimonialGridEl) {
  testimonialGridEl.innerHTML = TESTIMONIALS.map(t => `
    <article class="testimonial-card">
      <span class="testimonial-stars" aria-label="${t.rating} out of 5 stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</span>
      <p class="testimonial-quote">&ldquo;${t.quote}&rdquo;</p>
      <div class="testimonial-author">
        <strong>${t.name}</strong>
        <span>${t.business}</span>
      </div>
    </article>
  `).join('');
}

/* -----------------------------------------------------------------------
   6. STATS — animate counters once when scrolled into view
   ----------------------------------------------------------------------- */
const statNums = document.querySelectorAll('.stat-num');

function animateCount(el){
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 900;
  const start = performance.now();

  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.round(progress * target);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

if ('IntersectionObserver' in window && statNums.length) {
  const statObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statObserver.observe(el));
} else {
  statNums.forEach(el => { el.textContent = el.dataset.count + (el.dataset.suffix || ''); });
}

/* -----------------------------------------------------------------------
   7. CONTACT FORM
   Frontend-only for the GitHub Pages version: on submit, this opens a
   pre-filled WhatsApp chat with the project details (since WhatsApp is
   the primary contact channel for this brand) and shows a status message.

   WORDPRESS MIGRATION NOTE:
   Replace the body of handleSubmit() with a fetch() call to a PHP
   endpoint (e.g. admin-post.php with wp_mail) or a form service such as
   Formspree / Getform. Keep the field names as-is so the markup does
   not need to change.
   ----------------------------------------------------------------------- */
const contactFormEl = document.getElementById('contactForm');
const formStatusEl = document.getElementById('formStatus');

function handleSubmit(e){
  e.preventDefault();
  const data = new FormData(contactFormEl);
  const summary =
`New project inquiry — MJ WEB CRAFT
Name: ${data.get('name')}
Email: ${data.get('email')}
Phone: ${data.get('phone')}
Business: ${data.get('business') || '—'}
Service: ${data.get('service')}
Budget: ${data.get('budget')}
Details: ${data.get('details')}`;

  const whatsappUrl = `https://wa.me/923118963122?text=${encodeURIComponent(summary)}`;
  window.open(whatsappUrl, '_blank', 'noopener');

  formStatusEl.textContent = "Thanks! We've opened WhatsApp with your project details — send the message to reach us directly.";
  contactFormEl.reset();
}

contactFormEl?.addEventListener('submit', handleSubmit);

/* -----------------------------------------------------------------------
   8. HEADER SHADOW ON SCROLL (subtle, not scroll-triggered reveal spam)
   ----------------------------------------------------------------------- */
const siteHeaderEl = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  siteHeaderEl?.classList.toggle('is-scrolled', window.scrollY > 8);
}, { passive: true });
