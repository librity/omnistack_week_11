import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoSvg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

const Login = () => {
  const [id, setId] = useState('');

  const history = useHistory();

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ngoId', id);
      localStorage.setItem('ngoName', response.data.name);

      history.push('/profile')
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  };

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoSvg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input
            type="text"
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Sua ID"
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="nav-link" to="/signup">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default Login;
