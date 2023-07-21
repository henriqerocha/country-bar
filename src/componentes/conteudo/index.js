import React from 'react';
import './style.css';
import Bebidas from '../bebidas';
import Carrousel from '../carrousel';
import Sobre from '../sobre';
import Contato from '../contato';

export default function Conteudo(){
    return(
        <main>
            <Carrousel/>
            <Bebidas/>
            <Sobre/>
            <Contato/>
        </main>
    );
}