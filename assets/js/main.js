AOS.init({
  duration: 500,    
  offset: 100,      
  easing: 'ease-in-out', 
  once: false          
});

document.addEventListener('scroll', function() {
  var scrollBtn = document.getElementById('scrollUpBtn');
  if (window.scrollY > 800) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});
document.getElementById('scrollUpBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.header__toggle');
    const sidebar = document.querySelector('.header__top-nav');
    const overlay = document.querySelector('.header__top-overlay');
    const navLinks = document.querySelectorAll('.header__top-link');
    function closeSidebar() {
      toggleButton.classList.remove('active');
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    }
    toggleButton.addEventListener('click', function () {
      toggleButton.classList.toggle('active');
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    });
    document.addEventListener('click', function(event) {
      if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        closeSidebar();
      }
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
      }
    });
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function() {
        closeSidebar();
      });
    });
});
