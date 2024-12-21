
import React, { createContext, useState, useContext } from 'react';

// Crear el contexto del carrito
const CarritoContext = createContext();

// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);


// Función para agregar un libro al carrito
  const agregarAlCarrito = (libro) => {
    setCarrito((prevCarrito) => [...prevCarrito, libro]);
  };
// Función para eliminar un libro del carrito
  const eliminarDelCarrito = (libroId) => {
    setCarrito((prevCarrito) => prevCarrito.filter((libro) => libro.id !== libroId));
  };
// Pasar el estado y las funciones a los componentes hijos
  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

// Hook para consumir el contexto
export const useCarrito = () => {
  return useContext(CarritoContext);
};
