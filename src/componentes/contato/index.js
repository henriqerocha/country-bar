import React from 'react';
import './style.css';

export default function Contato(){
    return(
        <section id='contato'>
            <div className='container-contato'>
                <h2>Contato <img src='./assets/contato-emoticon.png' className='contato-emoticon'></img></h2>
            </div>
        </section>
    );
}