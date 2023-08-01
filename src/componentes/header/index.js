import React, { useState } from 'react';
import './style.css'

import logo from '../../assets/logo-menor-png.webp';


export default function Header(){

    const menuMobile = document.querySelector('.btn-mobile')

    function toggleMenu(){
    const nav = document.querySelector('.menu');
    nav.classList.toggle('active')
    }


    return(
        <header className='container-header'>
            <div className='topo'>
                <div className='logo'>
                    <img src={logo} alt='logo country bar'></img>
                </div>
                <nav className='menu'>
                    <button className='btn-mobile' onClick={toggleMenu}>
                        <span className='hamburger'></span>
                    </button>
                    <ul className='lista'>
                        <li className='lista-item'><a href='#bebidas'>Bebidas</a></li>
                        <li className='lista-item'><a href='#sobre'>Sobre</a></li>
                        <li className='lista-item'><a href='#contato'>Contato</a></li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}