/** Lightbox for every [data-gallery-src] button, plus category filters on the gallery page. */
export function initGallery(): void {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-gallery-src]')];
  const dialog = document.querySelector<HTMLDialogElement>('#lightbox');
  const image = document.querySelector<HTMLImageElement>('#lightbox-image');
  const caption = document.querySelector<HTMLElement>('#lightbox-caption');
  if (!dialog || !image || !caption) return;

  let current = 0;
  let group: HTMLButtonElement[] = [];
  let returnFocus: HTMLButtonElement | null = null;
  const visibleIn = (button: HTMLButtonElement): HTMLButtonElement[] => {
    const container = button.closest('.gallery');
    return buttons.filter(b => !b.hidden && b.closest('.gallery') === container);
  };

  const render = (index: number): void => {
    if (!group.length) return;
    current = (index + group.length) % group.length;
    const button = group[current];
    image.src = button.dataset.gallerySrc || '';
    image.alt = button.dataset.caption || '';
    caption.textContent = `${current + 1} / ${group.length} — ${button.dataset.caption || ''}`;
  };

  buttons.forEach(button => button.addEventListener('click', () => {
    returnFocus = button;
    group = visibleIn(button);
    render(group.indexOf(button));
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    dialog.querySelector<HTMLButtonElement>('.lightbox-close')?.focus();
  }));
  dialog.querySelector('.lightbox-close')?.addEventListener('click', () => dialog.close());
  dialog.querySelector('.lightbox-prev')?.addEventListener('click', () => render(current - 1));
  dialog.querySelector('.lightbox-next')?.addEventListener('click', () => render(current + 1));
  dialog.addEventListener('click', e => { if (e.target === dialog || (e.target as HTMLElement).classList.contains('lightbox-image-wrap')) dialog.close(); });
  dialog.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); render(current + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); render(current - 1); }
  });
  dialog.addEventListener('close', () => {
    document.body.style.removeProperty('overflow');
    returnFocus?.focus();
  });

  // Swipe support for touch screens.
  let touchX: number | null = null;
  dialog.addEventListener('touchstart', e => { touchX = e.touches[0]?.clientX ?? null; }, { passive: true });
  dialog.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? touchX) - touchX;
    if (Math.abs(dx) > 50) render(current + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  const counter = document.querySelector('#gallery-count');
  document.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(filter => filter.addEventListener('click', () => {
    const value = filter.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === filter)));
    buttons.forEach(photo => { photo.hidden = value !== 'All' && photo.dataset.category !== value; });
    const shown = buttons.filter(b => !b.hidden).length;
    if (counter) counter.textContent = `${shown} photograph${shown === 1 ? '' : 's'} · ${value === 'All' ? 'All moments' : value}`;
  }));
}
