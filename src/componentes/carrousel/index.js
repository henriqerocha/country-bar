import React, { useEffect, useState } from 'react';
import './style.css';

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const slideContainer = document.querySelector(".slides-container");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-button");
    const nextBtn = document.querySelector(".next-button");

    const showSlide = (slideIndex) => {
      slideContainer.style.transition = "transform 0.5s ease-in-out";
      slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
      setCurrentSlide(slideIndex);
    };

    const showPrevSlide = () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
        if (currentSlide > 0) {
          showSlide(currentSlide - 1);
        } else {
          showSlide(slides.length - 1);
        }
      }
    };

    const showNextSlide = () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
        if (currentSlide < slides.length - 1) {
          showSlide(currentSlide + 1);
        } else {
          showSlide(0);
        }
      }
    };

    const interval = setInterval(showNextSlide, 8000); // Alterna os slides a cada 8 segundos

    prevBtn.addEventListener("click", showPrevSlide);
    nextBtn.addEventListener("click", showNextSlide);

    // Limpa o intervalo do temporizador ao desmontar o componente
    return () => {
      clearInterval(interval);
      prevBtn.removeEventListener("click", showPrevSlide);
      nextBtn.removeEventListener("click", showNextSlide);
    };
  }, [currentSlide, isTransitioning]);

  return (
    <section className='container-slideshow'>
      <div className="slideshow">
        <div className="slides-container">
          <div className="slide">
            <img src="./assets/bebida1.webp" alt="slide um"></img>
          </div>
          <div className="slide">
            <img src="./assets/bebida2.webp" alt="slide dois"></img>
          </div>
          <div className="slide">
            <img src="./assets/bebida3.webp" alt="slide tres"></img>
          </div>
          <div className="slide">
            <img src="./assets/bebida4.webp" alt="slide quatro"></img>
          </div>
          {/* <!-- Você pode adicionar mais imagens aqui, o layout não será quebrado --> */}
        </div>
        <button className="prev-button" disabled={isTransitioning}>&#10094;</button>
        <button className="next-button" disabled={isTransitioning}>&#10095;</button>
      </div>
    </section>
  );
}

export default Carrousel;