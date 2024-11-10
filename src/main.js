const navLinks = document.querySelectorAll(".navLinks");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    navLinks.forEach((el) => {
      el.classList.remove("md:text-blue-500");
      el.classList.remove("bg-blue-500");
    });
    link.classList.add("md:text-blue-500");
    link.classList.add("bg-blue-500");
  });
});



window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const movingElement = document.getElementById("movingElement");
  if (scrollPosition >= 0 && scrollPosition < 100) {
    movingElement.style.bottom = '0px'
  } else {
    movingElement.style.bottom = `${scrollPosition - 90}px`;
  }
});
