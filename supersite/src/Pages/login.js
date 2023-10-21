import React, { useState } from 'react';
import axios from 'axios';

function LoginCliente() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/cliente/registro/', formData)
      .then((response) => {
        console.log('Login bem-sucedido:', response.data);
        setIsLoggedIn(true);
        // Aqui você pode redirecionar o usuário para a página após o login ou realizar outras ações após o login bem-sucedido.
      })
      .catch((error) => {
        console.error('Erro no login:', error);
        // Lide com erros de login, como exibir mensagens de erro ao usuário.
      });
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Login bem-sucedido!</h2>
          <p>Redirecionar o usuário ou mostrar uma mensagem de sucesso.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login de Cliente</h2>
          <div>
            <label htmlFor="username">Nome de Usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      )}
    </div>
  );
}

export default LoginCliente;
