document.addEventListener("DOMContentLoaded", () => {
  console.log("Fashion Hub Home Page Loaded");

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      if (target.startsWith("#")) {
        document.querySelector(target).scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = target;
      }
    });
  });

  // Hero image hover effect
  document.querySelectorAll(".hero-img").forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.1)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
  });
});
