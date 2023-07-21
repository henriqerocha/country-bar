import React from 'react';
import './style.css';


export default function Sobre(){
    return(
        <section id='sobre'>
            <div className='container-sobre'>
                <div className='titulo-sobre'>
                    <h2>Sobre <img src='./assets/sobre-emoticon-amarelo.png' className='emoticon-sobre'></img></h2>
                </div>
                <div className='box-sobre'>
                    <div className='img-sobre'>
                        <img src='./assets/foto-perfil.png' className='img-perfil'></img>
                    </div>
                    <div className='descricao-sobre'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac velit vitae lacinia. In id quam non sapien varius vestibulum. Nullam condimentum dui ac eros suscipit, eget volutpat nunc fermentum. Mauris ultrices vel nulla ac volutpat. Sed efficitur nibh ut nisi ultrices, non ultrices magna fermentum."</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}