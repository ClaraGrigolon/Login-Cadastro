import React from "react";
import "./App.css";
import { Link } from "react-router";
import google from './assets/google.png'
import face from './assets/face.png'
import apple from './assets/apple.png'

function Cadastro() {
  return (
    <>
      <div className="container">
        <div className="conteudo">
          <div className="inputs">
              <header>
                <h1>Cadastro</h1>
              </header>
            <p className="log">Nome:</p>
            <div className='inputs-container'>
              <input type="text" />
            </div>
            <p className="log">Usuário:</p>
            <div className='inputs-container'>
              <input type="text" />
            </div>
            <p className="log">Email:</p>
            <div className="inputs-container">
              <input type="email" />
            </div>
            <p className="log">Senha:</p>
            <div className="inputs-container">
              <input type="password" />
            </div>
            
            <button>Cadastrar</button>
             <p className='opcoes'>Logar com</p>
            <div className='icons'>
              <img src={face} alt="" className='face' />
              <img src={google} alt="" className='google'/>
              <img src={apple} alt="" className='apple' />
            </div>

            <div className="inscrever">
            <p>Já tem uma conta? <br />
             <Link to="/">Faça Login</Link></p>
            </div>
          </div>
        
        </div> 
        
      </div>
    </>
  );
}

export default Cadastro;
