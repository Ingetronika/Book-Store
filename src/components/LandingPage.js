import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ onRedirect = () => {} }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige después de 5 segundos y ejecuta onRedirect
    const timer = setTimeout(() => {
      navigate('/main');
      onRedirect(); // Indica que ya ha ocurrido la redirección
    }, 5000);

    // Limpieza del temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, [navigate, onRedirect]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-primary text-white text-center">
      <h1>Bienvenido a Relatos de Papel</h1>
      <p>Estamos cargando la aplicación...</p>
      {/* Agregar un spinner con animación de carga */}
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
};

export default LandingPage;
