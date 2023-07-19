    const slideContainer = document.querySelector(".slides-container");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    let currentSlide = 0;
  
    function showSlide(slideIndex) {
      slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
      currentSlide = slideIndex;
    }
  
    function showNextSlide() {
      if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
      } else {
        showSlide(0); // Volta para o primeiro slide
      }
    }
  
    function showPrevSlide() {
      if (currentSlide > 0) {
        showSlide(currentSlide - 1);
      } else {
        showSlide(slides.length - 1); // Vai para o último slide
      }
    }
  
    prevBtn.addEventListener("click", showPrevSlide);
    nextBtn.addEventListener("click", showNextSlide);
  