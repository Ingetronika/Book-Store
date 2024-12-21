// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import SearchBar from './SearchBar'; // Si tienes un componente SearchBar

const Header = () => {
  const navigate = useNavigate(); // Hook para la navegación

  // Manejadores de navegación
  const navigateToHome = () => {
    navigate('/'); // Redirige al home
  };

  const navigateToBooks = () => {
    navigate('/books'); // Redirige a la página de libros
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Usar un h1 con clase text-primary para hacerlo azul */}
        <Navbar.Brand onClick={navigateToHome} style={{ cursor: 'pointer' }}>
          <h1 className="text-primary">Book Store </h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* Links de navegación */}
          <Nav.Link onClick={navigateToHome}>Inicio</Nav.Link>
          <Nav.Link onClick={navigateToBooks}>Libros</Nav.Link>
          <Nav.Link onClick={() => navigate('/contact')}>Contacto</Nav.Link>
          
        </Nav>
        {/* Asegúrate de que el componente SearchBar exista */}
        <SearchBar />
      </Container>
    </Navbar>
  );
};

export default Header;
