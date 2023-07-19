import React from 'react';
import './style.css';

export default function Carrousel(){
    return(
        <div class="slideshow">
            <div class="slides-container">
                <div class="slide">
                    <img src="./assets/bebida1.jpg" alt="Imagem 1"></img>
                </div>
                <div class="slide">
                    <img src="./assets/bebida2.jpg" alt="Imagem 2"></img>
                </div>
                <div class="slide">
                    <img src="./assets/bebida3.jpg" alt="Imagem 3"></img>
                </div>
                    {/* <!-- Você pode adicionar mais imagens aqui, o layout não será quebrado --> */}
            </div>        
    <button class="prev-btn">Anterior</button>
    <button class="next-btn">Próximo</button>
  </div>
    );
}