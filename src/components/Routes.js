import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import Contact from './Contact';
import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import LandingPage from './LandingPage';
import Carrito from './Carrito';
import Pago from './Pago'; // Importar la vista de pago

const AppRoutes = () => {
  const [isRedirected, setIsRedirected] = useState(false);

  return (
    <Router>
      <Header /> 
      {/* Mostrar la página de inicio o redirigir a las rutas */}
      {!isRedirected ? ( 
        <LandingPage onRedirect={() => setIsRedirected(true)} />
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pago" element={<Pago />} />  {/* Ruta de la vista de pago */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      <Footer />
    </Router>
  );
};

export default AppRoutes;
