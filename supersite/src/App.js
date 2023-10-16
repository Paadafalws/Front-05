import React, { useState } from 'react';
import axios from 'axios';


function Login() {
  const [nome, setnome] = useState('');
  const [senha, setsenha] = useState('');

  const handleLogin = () => {


    axios
    .post('http://127.0.0.1:8000/Login/', {
      nome: nome,
      senha: senha,
    })
    .then(response => {
      if (response.data.loginSucedido) {
        alert('Login bem-sucedido!');
        // Você pode redirecionar o usuário para a página desejada aqui
      } else {
        alert('Login falhou. Verifique suas credenciais.');
      }
    })
    .catch(error => {
      alert('Erro ao fazer login:', error);
    });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">nome:</label>
          <input
            type="nome"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(e) => setnome(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="senha" className="form-label">Senha:</label>
          <input
            type="passwo"
            className="form-control"
            id="senha"
            value={senha}
            onChange={(e) => setsenha(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
