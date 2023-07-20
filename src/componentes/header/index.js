import React from 'react';
import './style.css'


export default function Header(){
    return(
        <header className='container-header'>
            <div className='topo'>
                <div className='logo'>
                    <img src='./assets/logo_menor.png.png'></img>
                </div>
                <div className='menu'>
                    <ul className='lista'>
                        <li className='lista-item'><a href='#bebidas'>Bebidas</a></li>
                        <li className='lista-item'><a href='#sobre'>Sobre</a></li>
                        <li className='lista-item'><a href='#contato'>Contato</a></li>
                    </ul>
                </div>
            </div>
            
        </header>
    );
}