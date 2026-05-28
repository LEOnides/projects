(() => {
  document.documentElement.classList.add('js');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú de navegación');
      menu.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    };

    const openMenu = () => {
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Cerrar menú de navegación');
      menu.classList.add('is-open');
      document.body.classList.add('nav-open');
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMenu(); else openMenu();
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if (prefersReduced || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-visible'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      );
      reveals.forEach((el) => io.observe(el));
    }
  }

  const form = document.querySelector('.cf');
  if (form) {
    const status = form.querySelector('.cf-status');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) {
          status.textContent = 'Revisa los campos marcados antes de enviar.';
          status.dataset.state = 'error';
          status.hidden = false;
        }
        return;
      }

      if (status) {
        status.textContent = 'Recibimos tu solicitud. Un ejecutivo TRF te contactará en menos de 24 horas.';
        status.dataset.state = 'ok';
        status.hidden = false;
      }
      form.reset();
    });

    form.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('invalid', () => {
        field.setAttribute('aria-invalid', 'true');
      });
      field.addEventListener('input', () => {
        if (field.validity.valid) field.removeAttribute('aria-invalid');
      });
    });
  }
})();
