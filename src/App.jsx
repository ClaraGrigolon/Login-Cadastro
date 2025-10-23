import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='principal'>
        <header>
          <h1>Login</h1>
        </header>

        <main>
          <div className='inputs'>
            <p>Usuário</p>
            <input type="text" />
            <p>Senha</p>
            <input type="password" />
          </div>

          <a href="#">Esqueceu a senha?</a>
          <input type="checkbox" name="" id="conectado" />
          <button>ENTRAR</button>

          <p>Logar com</p>
          <div class="login-opcoes">
            <div class="bt-login" id="bt-face" ></div>
            <div class="bt-login" id="bt-google" ></div>
            <div class="bt-login" id="bt-apple" ></div>
          </div>

          <small>Não tem conta?
            <Link to="/cadastro">Ir para o Cadastro</Link>
          </small>
        </main>

      </div>
    </>
  )
}

export default App
