import react, { useEffect } from 'react';
import './style.css';

const MeuComponente = () => {
    useEffect(() => {
    const slideContainer = document.querySelector(".slides-container");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-button");
    const nextBtn = document.querySelector(".next-button");
  
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
        currentSlide = slideIndex;
      };

    function showPrevSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
          } else {
            showSlide(slides.length - 1); // Vai para o último slide
          }
      }
  
    function showNextSlide() {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        } else {
            showSlide(0); // Volta para o primeiro slide
            }
      }
  
    prevBtn.addEventListener("click", showPrevSlide);
    nextBtn.addEventListener("click", showNextSlide);
  
      // Importante: Remover o evento de clique ao desmontar o componente
      return () => {
        prevBtn.removeEventListener("click", showPrevSlide);
        nextBtn.removeEventListener("click", showNextSlide);
      };
    }, []); // O array vazio assegura que o efeito é executado apenas uma vez, equivalente a componentDidMount
    
    return(
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
                    <button className="prev-button">&#10094;</button>
                    <button className="next-button">&#10095;</button>
            </div>
        </section>
    );
}

export default MeuComponente;