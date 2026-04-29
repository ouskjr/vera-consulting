(function () {
  'use strict';

  // Intersection Observer — fade-in on scroll
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
  });

  // Contact form — inline success message
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          form.innerHTML =
            '<div class="form-success">' +
            '<p>Thank you. We\'ll be in touch within 24 hours.</p>' +
            '</div>';
        } else {
          btn.textContent = originalText;
          btn.disabled = false;
          alert('Something went wrong. Please try again or message us on WhatsApp.');
        }
      } catch (_) {
        btn.textContent = originalText;
        btn.disabled = false;
        alert('Something went wrong. Please try again or message us on WhatsApp.');
      }
    });
  }
})();
