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
<<<<<<< HEAD
                <a href='https://wa.link/q8kd44' target='_blank'><img src='./assets/wpp-icon.png'></img></a>
=======
                <a href='https://api.whatsapp.com/send?phone=5561991380680&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Open%20Bar%20%F0%9F%8D%B9%20Meu%20evento%20%C3%A9%20dia%20:%20Quantidade%20de%20convidados%20:%20%20Local:%20%20Hor%C3%A1rio:%20Tipo%20de%20evento%20:%20Obs:' target='_blank'><img src='./assets/wpp-icon.webp' alt='icone whatsapp'></img></a>
>>>>>>> aa7c8fbfe0966736aa5a99577e1c42a6e340defa
            </aside>
            <Carrousel/>
            <Bebidas/>
            <Sobre/>
            <Contato/>
        </main>
    );
}