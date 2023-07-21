import React from 'react';
import './style.css';

export default function Contato(){
    return(
        <section id='contato'>
            <div className='container-contato'>
                <div className='titulo-contato'>
                    <h2>Contato <img src='./assets/contato-emoticon.png' className='contato-emoticon'></img></h2>
                </div>

                <div className='form-container'>
                    <form className='form-contato' method='POST' action=''>
                        <div className='box-input'>
                            <input type='text' className='input-button'></input>
                            <label className='input-label'>Nome:</label>
                        </div>

                        <div className='box-input'>
                            <input type='text' className='input-button'></input>
                            <label className='input-label'>E-mail:</label>
                        </div>

                        <div className='box-input'>
                            <textarea placeholder='Mensagem'></textarea>
                        </div>

                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}