import React from 'react';
import './style.css';
import Bebidas from '../bebidas';
import Sobre from '../sobre';
import Contato from '../contato';

export default function Conteudo(){
    return(
        <main>
            <Bebidas/>
            <Sobre/>
            <Contato/>
        </main>
    );
}