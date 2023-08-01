import React, { useState } from 'react';
import './style.css';

import { Link, animateScroll as scroll } from 'react-scroll';

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
                        <li className='lista-item'>
                            <Link activeClass="active"
                                to="bebidas"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={1000}>Drinks
                            </Link> 
                        </li>                            
                        <li className='lista-item'>
                        <Link activeClass="active"
                                to="sobre"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={1000}>Sobre
                            </Link>
                        </li>
                        <li className='lista-item'>
                        <Link activeClass="active"
                                to="contato"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={1000}>Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}