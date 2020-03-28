import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoSvg from '../../assets/logo.svg';

const NewIncident = () => {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoSvg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>

          <p>
            Descreva o caso detalhadamente para encontrar um herói que podera
            ajudar resolve-lo.
          </p>

          <Link className="nav-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
