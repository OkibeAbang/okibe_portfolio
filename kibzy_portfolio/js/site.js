(function () {
  var root = document.documentElement;

  function applyIcons() {
    var isDark = root.classList.contains('dark');
    document.querySelectorAll('[data-icon="sun"]').forEach(function (el) {
      el.classList.toggle('hidden', !isDark);
    });
    document.querySelectorAll('[data-icon="moon"]').forEach(function (el) {
      el.classList.toggle('hidden', isDark);
    });
  }
  applyIcons();

  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
      applyIcons();
    });
  });

  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var hamburgerIcon = document.getElementById('hamburger-icon');
  var closeIcon = document.getElementById('close-icon');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });
  }
})();
