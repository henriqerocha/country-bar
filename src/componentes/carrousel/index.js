import React from 'react';
import './style.css';

export default function Carrousel(){
    return(
        <div className='container-carrousel'>
                <div class="carousel">
                <div class="slide-container">
                    <div class="slide" id='slide1'>
                        <img src="./assets/bebida1.jpg" alt="Imagem 1"></img>
                    </div>
                    <div class="slide" id='slide2'>
                        <img src="./assets/bebida2.jpg" alt="Imagem 2"></img>
                    </div>
                    <div class="slide" id='slide3'>
                        <img src="./assets/bebida3.jpg" alt="Imagem 3"></img>
                    </div>
                </div>
                    <button class="prev-button">&#10094;</button>
                    <button class="next-button">&#10095;</button>
            </div>
        </div>
    );
}