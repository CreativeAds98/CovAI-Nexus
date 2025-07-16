


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