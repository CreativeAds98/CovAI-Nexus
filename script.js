
// Preloader: Show for at least 5 seconds
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  // Always wait 5 seconds minimum, even if page loads faster
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); // after fade
  }, 1000); // 1 second hold
});


// Smooth Scrolling for Navbar Links

      window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
    



    // Feature Section Toggle
  // This code toggles the visibility of feature content based on the clicked icon box

      const boxes = document.querySelectorAll(".icon-box");
  const contents = document.querySelectorAll(".feature-content");

  boxes.forEach(box => {
    box.addEventListener("click", () => {
      // Remove active from all
      boxes.forEach(b => b.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // Add active to clicked
      box.classList.add("active");
      const targetId = box.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });



