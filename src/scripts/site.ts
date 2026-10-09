import { initEnquiryForm } from './enquiry';
import { initGallery } from './gallery';

const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const header = document.querySelector<HTMLElement>('.site-header');
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('#main-navigation');
const desktopNav = window.matchMedia('(min-width: 1101px)');

/* ---------- Loading: start the hero entrance on the first frame (never waits on images) ---------- */
requestAnimationFrame(() => root.classList.add('is-loaded'));

/* ---------- Navigation ---------- */
function setMenu(open: boolean): void {
  nav?.classList.toggle('mobile-open', open);
  root.classList.toggle('menu-open', open);
  menuToggle?.setAttribute('aria-expanded', String(open));
  menuToggle?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  if (open) header?.classList.remove('is-hidden');
}
function closeDropdowns(except?: Element | null): void {
  document.querySelectorAll('.nav-group').forEach(group => {
    if (group === except) return;
    group.classList.remove('open');
    group.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
  });
}
menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
document.querySelectorAll<HTMLButtonElement>('.dropdown-toggle').forEach(button => {
  const group = button.closest('.nav-group');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    closeDropdowns(group);
    group?.classList.toggle('open', open);
    group?.classList.toggle('suppressed', !open);
    button.setAttribute('aria-expanded', String(open));
  });
  group?.addEventListener('mouseleave', () => group.classList.remove('suppressed'));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', e => {
  if (!(e.target instanceof Node) || header?.contains(e.target)) return;
  closeDropdowns();
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const openGroup = document.querySelector('.nav-group.open');
  if (openGroup) {
    closeDropdowns();
    openGroup.classList.add('suppressed');
    openGroup.querySelector<HTMLButtonElement>('.dropdown-toggle')?.focus();
  } else if (nav?.classList.contains('mobile-open')) {
    setMenu(false);
    menuToggle?.focus();
  }
});
desktopNav.addEventListener('change', () => { setMenu(false); closeDropdowns(); });

/* ---------- Scroll-driven: header state, hide-on-scroll, parallax ---------- */
const parallax = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
let lastY = window.scrollY;
let ticking = false;
function onScroll(): void {
  const y = window.scrollY;
  header?.classList.toggle('scrolled', y > 24);
  const menuOpen = nav?.classList.contains('mobile-open');
  const focusInHeader = header?.contains(document.activeElement);
  header?.classList.toggle('is-hidden', y > 480 && y > lastY + 4 && !menuOpen && !focusInHeader);
  if (y < lastY - 4 || y < 480) header?.classList.remove('is-hidden');
  lastY = y;
  if (!reducedMotion.matches && window.innerWidth > 760) {
    for (const el of parallax) {
      const box = el.parentElement?.getBoundingClientRect();
      if (!box || box.bottom < 0 || box.top > window.innerHeight) continue;
      const progress = (box.top + box.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.transform = `translate3d(0, ${(progress * -40).toFixed(1)}px, 0)`;
    }
  } else {
    parallax.forEach(el => el.style.removeProperty('transform'));
  }
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
}, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
onScroll();

/* ---------- Reveal on view (content stays visible if this never runs) ---------- */
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const revealer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('revealed');
      revealer.unobserve(entry.target);
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.classList.add('reveal-ready');
    revealer.observe(el);
  });
  reducedMotion.addEventListener('change', () => {
    document.querySelectorAll('.reveal-ready').forEach(el => el.classList.add('revealed'));
    revealer.disconnect();
  });
}

/* ---------- Sticky storytelling ---------- */
const story = document.querySelector<HTMLElement>('[data-story]');
if (story && 'IntersectionObserver' in window) {
  const steps = [...story.querySelectorAll<HTMLElement>('[data-step]')];
  const frames = [...story.querySelectorAll<HTMLElement>('[data-frame]')];
  const count = story.querySelector<HTMLElement>('[data-story-count]');
  const bar = story.querySelector<HTMLElement>('[data-story-bar]');
  const activate = (index: number): void => {
    steps.forEach((s, i) => s.classList.toggle('is-active', i === index));
    frames.forEach((f, i) => f.classList.toggle('is-active', i === index));
    if (count) count.textContent = String(index + 1).padStart(2, '0');
    if (bar) bar.style.width = `${((index + 1) / steps.length) * 100}%`;
  };
  const watcher = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) activate(steps.indexOf(entry.target as HTMLElement));
    }
  }, { rootMargin: '-45% 0px -45% 0px' });
  steps.forEach(s => watcher.observe(s));
  activate(0);
}

/* ---------- Horizontal photo strips ---------- */
document.querySelectorAll<HTMLElement>('[data-strip]').forEach(section => {
  const track = section.querySelector<HTMLElement>('[data-gallery-track]');
  const prev = section.querySelector<HTMLButtonElement>('[data-strip-prev]');
  const next = section.querySelector<HTMLButtonElement>('[data-strip-next]');
  if (!track || !prev || !next) return;
  const step = (): number => Math.max(track.clientWidth * 0.7, 260);
  const behavior = (): ScrollBehavior => (reducedMotion.matches ? 'auto' : 'smooth');
  const sync = (): void => {
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  };
  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: behavior() }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: behavior() }));
  track.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync, { passive: true });
  sync();
});

initGallery();
initEnquiryForm(reducedMotion);
