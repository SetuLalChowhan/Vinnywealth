const hamburger = document.getElementById("toogle_button");
const hamburger1 = document.getElementById("toogle_button1");
const navLinks = document.querySelector(".mobile-nav");

// Toggle the 'active' class when the hamburger is clicked
hamburger.addEventListener("click", (event) => {
  navLinks.classList.toggle("active");
  // Prevent the click event from propagating to the document
  event.stopPropagation();

  hamburger1.style.display = "flex";
});
hamburger1.addEventListener("click", (event) => {
  navLinks.classList.toggle("active");
  // Prevent the click event from propagating to the document
  event.stopPropagation();

  hamburger1.style.display = "none";

  hamburger.style.display = "flex";
});

// Close the navbar when clicking anywhere outside the navbar
document.addEventListener("click", (event) => {
  // If the clicked target is outside the navLinks and hamburger, close the menu
  if (!navLinks.contains(event.target) && event.target !== hamburger) {
    navLinks.classList.remove("active");

    // Check if the screen width is between 320px and 1200px
    if (window.innerWidth >= 320 && window.innerWidth <= 1200) {
      hamburger.style.display = "flex"; // Show hamburger on small screens
      hamburger1.style.display = "none"; // Hide the close button
    }
  }
});
// Select all navigation links
const navLinks1 = document.querySelectorAll('.nav-link');

// Add click event listener to each link
navLinks1.forEach(link => {
  link.addEventListener('click', function () {
    // Remove active class from all links
    navLinks1.forEach(nav => nav.classList.remove('active'));
    // Add active class to the clicked link
    navLinks.classList.toggle("active");
  });
});


const marqueeContainers = document.querySelectorAll(".marquee-content");

marqueeContainers.forEach((container) => {
  const childNodes = Array.from(container.children);
  const containerWidth = container.parentElement.offsetWidth;

  // Calculate total width of the content
  let contentWidth = container.scrollWidth;

  // Duplicate content until it’s large enough to fill the container twice
  while (contentWidth < containerWidth * 2) {
    childNodes.forEach((node) => {
      const clone = node.cloneNode(true);
      container.appendChild(clone);
    });
    contentWidth = container.scrollWidth;
  }

  // Adjust animation duration based on content width (optional)
  const animationDuration = contentWidth / 100; // Adjust factor for smoothness
  container.style.animationDuration = `${animationDuration}s`;
});

$(".owl-carousel").owlCarousel({
  loop: true, // Enable infinite loop
  margin: 10, // Set margin between items
  dots: true, // Enable dots navigation
  nav: false, // Disable navigation arrows
  center: true, // Center the active item
  autoplay: true, // Enable autoplay
  responsive: {
    0: {
      items: 1, // 1 item displayed on small screens
    },
    600: {
      items: 1, // 3 items displayed on medium screens
    },
    1000: {
      items: 3, // 3 items displayed on large screens
    },
  },
});
