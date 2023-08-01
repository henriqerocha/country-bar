import React, { useState } from "react";
import './style.css';
import emailjs from '@emailjs/browser';

import emoticoncontato from '../../assets/contato-emoticon.webp';

export default function Contato(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [duvida, setDuvida] = useState("");


    function sendEmail(e){
        e.preventDefault();

        const templateParams = {
            from_name: nome,
            message: duvida,
            telefone: telefone
        }
        emailjs.send("service_vgc72b3", "template_nkdr5pq", templateParams, "Uf0zwecCiDJTp3D1o")
        .then((response) =>{
            if(response.status === 200){
                alert("Email enviado enviado com Sucesso!")
            } else{
                alert("Ops, ocorreu algum erro, envie a mensagem para countrybar@gmail.com")
            }
            console.log("EMAIL ENVIADO", response.status, response.text)
            setNome('')
            setDuvida('')
            setTelefone('')

        }, (err) =>{
            console.log("Erro: ",err)
        })
    }
//  
    return(
        <section id='contato'>
            <div className='container-contato'>
                <div className='titulo-contato'>
                    <h2>Contato <img src={emoticoncontato} className='contato-emoticon' alt="emoticon-email"></img></h2>
                </div>

                <div className='form-container'>
                    <form className='form-contato' onSubmit={sendEmail}>
                        <div className='box-input'>
                            <label className="input-label" htmlFor="nome">Nome:</label>
                            <input className="input-button" type="text" id="nome" placeholder="Ex: Fulano Rocha" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </div>

                        <div className='box-input'>
                            <label className="input-label" htmlFor="telefone">Telefone:</label>
                             <input className="input-button" type="tel" id="telefone" pattern="[0-9]*" maxLength={11} placeholder="Ex: 61999999999" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                        </div>

                        <div className='box-input'>
                            <textarea id="duvida" placeholder="Mensagem" value={duvida} onChange={(e) => setDuvida(e.target.value)} required></textarea>
                        </div>

                        <button type='submit' className='button-enviar'>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}