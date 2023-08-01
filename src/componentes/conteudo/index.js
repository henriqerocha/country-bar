import React from 'react';
import './style.css';
import Bebidas from '../bebidas';
import Carrousel from '../carrousel';
import Sobre from '../sobre';
import Contato from '../contato';

import iconewpp from '../../assets/wpp-icon.webp';

export default function Conteudo(){
    return(
        
        <main>
            <aside className='icone-contato'>

                <a href='https://wa.link/q8kd44' target='_blank'><img src={iconewpp}></img></a>


            </aside>
            <Carrousel/>
            <Bebidas/>
            <Sobre/>
            <Contato/>
        </main>
    );
}