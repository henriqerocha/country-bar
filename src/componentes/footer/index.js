import React from 'react';
import './style.css';

import iconewppamarelo from '../../assets/icone-wpp-amarelo.webp';
import iconeinstaamarelo from '../../assets/icone-insta-amarelo.webp';
import iconeemailamarelo from '../../assets/icone-email-amarelo.webp';

export default function Footer(){
    return(
        <footer>
            <div className='container-footer'>
                <div className='left-footer'>
                    <span>@countrybardrinkss</span>
                </div>
                <div className='right-footer'>
                    <div className='wpp'>
                    <a href='https://wa.link/q8kd44' target='_blank'><img src={iconewppamarelo} alt='icone whatsapp amarelo'></img></a>
                    </div>
                    <div className='insta'>
                    <a href='https://www.instagram.com/countrybardrinkss' target='_blank'><img src={iconeinstaamarelo} alt='icone instagram amarelo'></img></a>
                    </div>
                    <div className='email'>
                    <a href='mailto: countrybardrinks@gmail.com' target='_blank'><img src={iconeemailamarelo} alt='icone email amarelo'></img></a>
                    </div>
                </div>
            </div>
            <span className='copyright'>&copy; Todos os direitos reservados: <strong>Country Bar Drinks</strong></span>
            <span className='dev'>Desenvolvido por: <strong>HR DEV</strong></span>
        </footer>
    );
}