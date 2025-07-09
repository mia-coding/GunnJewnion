let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = "1";
      slide.style.zIndex = "1";
    } else {
      slide.style.opacity = "0";
      slide.style.zIndex = "0";
    }
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

slides.forEach(slide => {
  slide.style.position = "absolute";
  slide.style.top = "0";
  slide.style.left = "0";
  slide.style.width = "100%";
  slide.style.transition = "opacity 1.5s ease-in-out";
  slide.style.opacity = "0";
  slide.style.zIndex = "0";
  slide.style.borderRadius = "10px";
});

showSlide(current);
setInterval(nextSlide, 4000);
