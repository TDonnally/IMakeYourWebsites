window.onscroll = handleScroll;

function handleScroll() {
  const navbar = document.querySelector('.navbar');
  let scrollFromTop = window.scrollY || window.scrollY;

  // Adjust the scroll threshold as needed
  let scrollThreshold = 100;

  // Check if the user has scrolled beyond the threshold
  if (scrollFromTop > scrollThreshold) {
    // Add the class when scrolled
    navbar.classList.add('scrolled-nav');
  } else {
    // Remove the class when not scrolled
    navbar.classList.remove('scrolled-nav');
  }
}