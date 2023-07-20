import React from 'react';
import './style.css';

export default function Bebidas(){
    return(
        <section id='bebidas'>
            <div className='container-bebidas'>
                <div className='titulo-section'>
                    <h2>Bebidas <img src='./assets/bebidas-emoticon.png'></img></h2>
                    <p>Nós temos as melhores e mais emocionantes bebidas para sua festa, veja algumas das nossas principais bebidas abaixo. Ah, e tem muito mais!!!</p>
                    <p>Solicite já nosso orçamento para seu evento.</p>
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
                                <li>Cachaça 51</li>
                                <li>Açucar</li>
                                <li>Gelo</li>
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
                                <li>Cachaça 51</li>
                                <li>Açucar</li>
                                <li>Gelo</li>
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
                                <li>Cachaça 51</li>
                                <li>Açucar</li>
                                <li>Gelo</li>
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
                                <li>Cachaça 51</li>
                                <li>Açucar</li>
                                <li>Gelo</li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
}