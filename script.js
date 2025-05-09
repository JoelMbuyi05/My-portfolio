document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
      });
  }, observerOptions);

  // Observe all animate elements
  document.querySelectorAll('.animate-down, .animate-up').forEach((el) => {
      observer.observe(el);
  });

  const hamburger = document.querySelector(".hamburger");
  const navbarLinks = document.querySelector(".navbar-links");
  const navItems = document.querySelectorAll(".navbar-links li a");

  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navbarLinks.classList.toggle("active");
  })

  navItems.forEach(link => {
    link.addEventListener("click", () =>{
      hamburger.classList.remove("active");
      navbarLinks.classList.remove("active");
    });
  });
});
