const WHATSAPP_NUMBER = '919116991219';

/** Prepares a WhatsApp enquiry from the contact form. Nothing is sent or stored by the website. */
export function initEnquiryForm(reducedMotion: MediaQueryList): void {
  const form = document.querySelector<HTMLFormElement>('#enquiry-form');
  if (!form) return;
  form.querySelector<HTMLButtonElement>('button[type=submit]')?.removeAttribute('disabled');

  const dateInput = form.querySelector<HTMLInputElement>('#date');
  if (dateInput) {
    const today = new Date();
    dateInput.min = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0'), String(today.getDate()).padStart(2, '0')].join('-');
  }

  // Pre-select the experience when arriving from a service page (?service=...).
  const preset = new URLSearchParams(window.location.search).get('service');
  const select = form.querySelector<HTMLSelectElement>('#service');
  if (preset && select && [...select.options].some(o => o.value === preset)) select.value = preset;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    if (values.get('website')) return;
    const value = (name: string): string => String(values.get(name) || '').trim();
    const date = value('date');
    const message = [
      'Hello Pushkar Desert Safari, I would like to enquire about a visit.',
      `Name: ${value('name')}`, `Phone: ${value('phone')}`, `Email: ${value('email')}`, `Interested in: ${value('service')}`,
      ...(date ? [`Preferred date: ${date} (please confirm availability)`] : []),
      ...(value('guests') ? [`Guests: ${value('guests')}`] : []),
      `Message: ${value('message')}`, 'Please share the current details and availability. Thank you.',
    ].join('\n');
    const status = document.querySelector<HTMLElement>('#form-status');
    if (!status) return;
    status.replaceChildren();
    const text = document.createElement('span');
    text.textContent = 'Your enquiry is ready. Open WhatsApp, review the message and send it to us. Nothing has been sent yet. ';
    const link = document.createElement('a');
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Open enquiry in WhatsApp (new tab) →';
    status.append(text, link);
    status.classList.add('is-ready');
    status.scrollIntoView({ block: 'nearest', behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    link.focus();
  });
}
