import React from 'react';
import './style.css';
import Bebidas from '../bebidas';
import Carrousel from '../carrousel';
import Sobre from '../sobre';
import Contato from '../contato';

export default function Conteudo(){
    return(
        
        <main>
            <aside className='icone-contato'>

                <a href='https://wa.link/q8kd44' target='_blank'><img src='./assets/wpp-icon.png'></img></a>


            </aside>
            <Carrousel/>
            <Bebidas/>
            <Sobre/>
            <Contato/>
        </main>
    );
}