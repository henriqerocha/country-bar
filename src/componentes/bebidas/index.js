import React from 'react';
import './style.css';

export default function Bebidas(){
    return(
        <section id='bebidas'>
            <div className='container-bebidas'>
                <div className='titulo-section'>
                    <h2>Bebidas</h2>
                    <p>Nós temos as melhores bebidas e mais emocionantes para sua festa, entre em contato agora mesmo e faça seu orçamento.</p>
                    <div className='button'>
                        <a href='https://www.google.com.br' className='btn-orcamento'>Solicitar orçamento</a>
                    </div>
                </div>
                    
                <div className='content-cards'>
                    <div className='card-bebidas'>
                        <div className='img-bebida'>
                            <img src='./assets/bebida1.jpg'></img>  
                        </div>
                        <div className='descricao-bebida'>
                            <h3>Caipirinha</h3>
                            <ul>
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className='card-bebidas row-reverse'>
                        <div className='img-bebida'>
                            <img src='./assets/bebida2.jpg'></img>  
                        </div>
                        <div className='descricao-bebida'>
                            <h3>Caipirinha</h3>
                            <ul>
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className='card-bebidas'>
                        <div className='img-bebida'>
                            <img src='./assets/bebida3.jpg'></img>  
                        </div>
                        <div className='descricao-bebida'>
                            <h3>Caipirinha</h3>
                            <ul>
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className='card-bebidas row-reverse'>
                        <div className='img-bebida'>
                            <img src='./assets/bebida4.jpg'></img>  
                        </div>
                        <div className='descricao-bebida'>
                            <h3>Caipirinha</h3>
                            <ul>
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
            
        </section>
    );
}