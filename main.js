// Set the _next redirect URL dynamically so FormSubmit knows where to send the user
(function () {
  var nextInput = document.getElementById('formNext');
  if (nextInput) {
    nextInput.value = new URL('thank-you.html', window.location.href).href;
  }
})();

(function () {
  var navLinks = Array.from(document.querySelectorAll('.site-nav .nav-link'));
  var sections = Array.from(document.querySelectorAll('section[id]'));

  if (!navLinks.length || !sections.length) {
    return;
  }

  function setActive(sectionId) {
    navLinks.forEach(function (link) {
      var isMatch = link.getAttribute('href') === '#' + sectionId;
      link.classList.toggle('is-active', isMatch);

      if (isMatch) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0.01
    }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();

(function () {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  document.getElementById('profile-photo').addEventListener('click', function () {
    lightboxImg.src = 'Images/hero.jpg';
    lightboxImg.alt = 'William Houston';
    lightbox.classList.add('is-open');
  });
  document.getElementById('lightbox-close').addEventListener('click', function () {
    lightbox.classList.remove('is-open');
  });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) lightbox.classList.remove('is-open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') lightbox.classList.remove('is-open');
  });
})();
