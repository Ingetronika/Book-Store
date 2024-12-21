// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <h5 className="mb-3">Relatos de Papel</h5>
        <p className="lead mb-2">Tu librería favorita para descubrir y disfrutar de los mejores relatos.</p>
        <p className="mb-0">© 2024 Relatos de Papel. Todos los derechos reservados.</p>
        <div className="mt-3">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
