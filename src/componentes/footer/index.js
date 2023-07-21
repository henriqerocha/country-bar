import React from 'react';
import './style.css';

export default function Footer(){
    return(
        <footer>
            <div className='container-footer'>
                <div className='left-footer'></div>
                <div className='right-footer'></div>
            </div>
            <span className='copyright'>&copy; Todos os direitos reservados: Country Bar</span>
            <span className='dev'>Desenvolvido por: HR DEV</span>
        </footer>
    );
}