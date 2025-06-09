  // #######################      GESTION BOUTON BURGER  ##################################
function setupBurgerMenu(btnSelector, menuSelector) {
  const btn = document.querySelector(btnSelector);
  const menu = document.querySelector(menuSelector);

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open'); // toggle menu visible
    btn.classList.toggle('active', isOpen);       // toggle anim barres en croix
    btn.setAttribute('aria-expanded', isOpen);
  });
}

// Appliquer au seul bouton existant
setupBurgerMenu('.burger__btn', '#menu-desktop');

// ############################    ANIMATIONS TITRES ET ICONES AU SCROLL      #####################

function revealOnScroll(selector, animationClass) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    el.classList.add('fade-hidden'); // caché de base
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass); // animation déclenchée
        entry.target.classList.remove('fade-hidden'); // on retire le caché
        obs.unobserve(entry.target); // on arrête d'observer (pas de re-animation)
      }
    });
  }, {
    threshold: 0.3 // commence l'animation quand 30% est visible
  });

  elements.forEach(el => observer.observe(el));
}

// Appelle la fonction pour les éléments suivants
revealOnScroll('h2', 'fade-zoom-in');
revealOnScroll('.cv__icon', 'fade-zoom-in');
revealOnScroll('h1', 'fade-zoom-in');
revealOnScroll('.hero-desktop__img', 'fade-zoom-in');
