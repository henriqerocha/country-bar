import React from 'react';
import './style.css';

export default function Bebidas(){
    return(
        <section id='bebidas'>
            <div className='container-bebidas'>
                <div className='titulo-section'>
                    <h2>Drinks <img src='./assets/bebidas-emoticon.webp'></img></h2>
                    <p>Nós temos os melhores e mais saborosos drinks para seu evento, veja alguns de nossos principais drinks abaixo. Ah, e tem muito mais!!!</p>
                    <p>Solicite já nosso orçamento para seu evento.</p>
                    <div className='button'>
                        <a href='https://wa.link/q8kd44' target='_blank' className='btn-orcamento'>Solicitar orçamento</a>
                    </div>
                </div>
                    
                <div className='content-cards'>
                    <div className='card-bebidas'>
                        <div className='img-bebida'>
                            <img src='./assets/bebida-1.webp'></img>  
                        </div>
                        <div className='descricao-bebida'>
                            <h3>Pina Colada</h3>
                            <ul>
                                <li>Rum</li>
                                <li>Gelo</li>
                                <li>Suco de abacaxi</li>
                                <li>Leite de coco</li>
                                <li>Leite condensado</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className='card-bebidas row-reverse'>
                        <div className='img-bebida'>
                            <img src='./assets/bebida-2.webp'></img>  
                        </div>
                        <div className='descricao-bebida'>
                            <h3>Fresh Green</h3>
                            <ul>
                                <li>Vodka</li>
                                <li>Gelo</li>
                                <li>Licor de menta</li>
                                <li>Limão</li>
                                <li>Schweppes</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className='card-bebidas'>
                        <div className='img-bebida'>
                            <img src='./assets/bebida-3.webp'></img>  
                        </div>
                        <div className='descricao-bebida'>
                            <h3>Mojito</h3>
                            <ul>
                                <li>Rum</li>
                                <li>Gelo</li>
                                <li>Hortelã</li>
                                <li>Limão</li>
                                <li>Açúcar refinado</li>
                                <li>Água com gás</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className='card-bebidas row-reverse'>
                        <div className='img-bebida'>
                            <img src='./assets/bebida-4.webp'></img>  
                        </div>
                        <div className='descricao-bebida'>
                            <h3>Atlântico</h3>
                            <ul>
                                <li>Vodka</li>
                                <li>Gelo</li>
                                <li>Suco de Limão</li>
                                <li>Curaçau blue</li>
                                <li>Refrigerante de Limão</li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
}