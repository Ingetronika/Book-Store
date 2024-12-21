import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CarritoProvider } from './context/CarritoContext';  // Importar el proveedor del carrito
// Importar el proveedor del carrito
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);
// Envolver la aplicación en el proveedor del carrito
reportWebVitals();
