import React, { useState } from 'react';
import axios from 'axios';

function CadastroCliente() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/cliente/registro/', formData)
      .then((response) => {
        console.log('Usuário registrado com sucesso:', response.data);
        setIsRegistered(true);
        // Aqui você pode redirecionar o usuário para a página de login ou realizar outras ações após o registro bem-sucedido.
      })
      .catch((error) => {
        console.error('Erro no registro do usuário:', error);
        // Lide com erros de registro, como exibir mensagens de erro ao usuário.
      });
  };

  return (
    <div>
      {isRegistered ? (
        <div>
          <h2>Registro bem-sucedido!</h2>
          <p>Redirecionar o usuário ou mostrar uma mensagem de sucesso.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Cadastro de Cliente</h2>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
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
          <button type="submit">Registrar</button>
          <button type='goto login.js'></button>
        </form>
        
      )}
    </div>
  );
}

export default CadastroCliente;
