import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoSvg from '../../assets/logo.svg';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const history = useHistory();

  const handleSignUp = async e => {
    e.preventDefault();

    const data = { name, email, whatsapp, city, state };

    try {
      const response = await api.post('ngos', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/')
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  };

  return (
    <div className="signup-container">
      <div className="content">
        <section>
          <img src={logoSvg} alt="Be The Hero" />

          <h1>Cadastro</h1>

          <p>
            Faça seu cadastro entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className="nav-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o login
          </Link>
        </section>

        <form onSubmit={handleSignUp}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome da ONG"
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            type="text"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="WhatsApp"
          />

          <div className="location-input">
            <input
              type="text"
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade"
            />
            <input
              type="text"
              value={state}
              onChange={e => setState(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
