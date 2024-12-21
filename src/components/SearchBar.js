import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate(); 

  const navigateToCar = () => {
    navigate('/carrito');  // Navegar al carrito
  };

  return (
    <Form className="d-flex">
      {/* Barra de búsqueda visible pero no funcional */}
      <FormControl
        type="search"
        placeholder="Buscar libros..."
        className="me-2"
        aria-label="Buscar"
        readOnly  // Hacer que el input sea solo lectura
      />
      
      {/* Botón de búsqueda deshabilitado */}
      <Button variant="outline-light" disabled>
        Buscar
      </Button>

      {/* Botón para navegar al carrito */}
      <Button variant="outline-light" onClick={navigateToCar}>
        Carrito
      </Button>
    </Form>
  );
};

export default SearchBar;
