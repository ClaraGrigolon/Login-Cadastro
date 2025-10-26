import React from "react";
import { Link } from "react-router-dom";
import google from './assets/google.png'
import face from './assets/face.png'
import apple from './assets/apple.png'
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="conteudo">

            <div className="inputs">
              <header>
                <h1>Login</h1>
              </header>

              <p className='log'>Usuário:</p>
              <div className='inputs-container'>
                <input type="text"/>
              </div>
              <p className='log'>Senha:</p>
              <div className='inputs-container'>
                <input type="password" />
              </div>

              <div className="conectado"> 
                <input type="checkbox" id="Manter Conectado" />
                <label htmlFor="Manter Conectado">Manter Conectado</label>
                <a href="#">Esqueceu a Senha?</a>
              </div>

                
              
              <button>Entrar</button>
              <p className='opcoes'>Entrar com</p>
              <div className='icons'>
                <img src={face} alt="" className='face' />
                <img src={google} alt="" className='google'/>
                <img src={apple} alt="" className='apple' />
              </div>
              <p className='inscrever'>Não Tem Conta? <Link to="/cadastro">Inscreva-se</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
