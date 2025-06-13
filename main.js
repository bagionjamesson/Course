// Content for main.js
document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarMenu = document.querySelector('.navbar-menu');

  if (navbarToggler && navbarMenu) {
    navbarToggler.addEventListener('click', () => {
      // Toggle the .active class on the menu to show/hide it
      navbarMenu.classList.toggle('active');
      
      // Toggle the .active class on the toggler for icon animation (e.g., hamburger to X)
      navbarToggler.classList.toggle('active');
      
      // Update aria-expanded attribute for accessibility
      const isExpanded = navbarMenu.classList.contains('active');
      navbarToggler.setAttribute('aria-expanded', isExpanded.toString());
    });
  } else {
    console.warn('Navbar toggler or menu not found. Responsive menu will not work.');
  }
});