import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
  const { carrito, eliminarDelCarrito } = useCarrito();
  const navigate = useNavigate();

  // Calcular el total de la compra se iterando sobre el carrito y sumando los precios
  const total = carrito.reduce((acumulador, libro) => acumulador + libro.price, 0);
// Función para manejar el checkout redirigiendo al usuario a la página de pago
  const handleCheckout = () => {
    
    navigate('/pago');
  };
  // si el carrito está vacío, mostrar un mensaje
  if (carrito.length === 0) {
    return <div>El carrito está vacío.</div>;
  }
//renderizar la lista de libros en el carrito
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Carrito de Compras</h1>
      <div className="row">
        {carrito.map((libro) => (
          <div key={libro.id} className="col-sm-12 col-md-4 mb-4">
            <div className="card">
              <img
                src={libro.image}
                alt={libro.title}
                className="card-img-top"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{libro.title}</h5>
                <p className="card-text"><strong>Autor:</strong> {libro.author}</p>
                <p className="card-text"><strong>Precio:</strong> ${libro.price}</p>
                <button 
                  className="btn btn-danger" 
                  onClick={() => eliminarDelCarrito(libro.id)}  // Llamamos a la función para eliminar el libro
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mostrar total de la compra */}
      <div className="d-flex justify-content-between mt-4">
        <h3>Total: ${total}</h3>
        <button className="btn btn-primary" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Carrito;
