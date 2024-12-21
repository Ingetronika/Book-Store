import React, { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';  // Importamos el ícono de tarjeta de crédito
import { useNavigate } from 'react-router-dom';  // Importamos useNavigate para redirigir

const Pago = () => {
  const { carrito } = useCarrito();  // Acceder al carrito
  const [showSuccess, setShowSuccess] = useState(false);  // Controlar la ventana de éxito
  const navigate = useNavigate();  // Hook para navegar

  // Función para calcular el precio total
  const calcularTotal = () => {
    return carrito.reduce((total, libro) => total + libro.price, 0).toFixed(2);
  };

  // Función para manejar el pago
  const navegarPago = () => {
    setShowSuccess(true);
  };

  // Función para redirigir al inicio
  const regresarInicio = () => {
    navigate('/');  // Redirige a la página principal (puedes cambiar la ruta si es necesario)
  };

  if (carrito.length === 0) {
    return <div>No hay productos en el carrito.</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Resumen de la Compra</h1>

      {/* Resumen de los productos en el carrito */}
      <div className="row">
        {carrito.map((libro, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <img
                src={libro.image}
                alt={libro.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{libro.title}</h5>
                <p className="card-text"><strong>Autor:</strong> {libro.author}</p>
                <p className="card-text"><strong>Precio:</strong> ${libro.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Muestra el total */}
      <div className="d-flex justify-content-end">
        <h3>Total: ${calcularTotal()}</h3>
      </div>

      {/* Botón para proceder con el pago */}
      <div className="text-center my-4">
        <button className="btn btn-success" onClick={navegarPago}>
          <FontAwesomeIcon icon={faCreditCard} /> Pagar
        </button>
      </div>

      {/* Ventana emergente de pago exitoso */}
      {showSuccess && (
        <div className="modal show" style={{ display: 'block' }} id="successModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">¡Pago Exitoso!</h5>
                <button type="button" className="close" onClick={() => setShowSuccess(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Gracias por tu compra. ¡Tu pago ha sido procesado correctamente!</p>
              </div>
              <div className="modal-footer">
                {/* Botón para regresar al inicio */}
                <button type="button" className="btn btn-primary" onClick={regresarInicio}>
                  Regresar al Inicio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pago;
