import React, { useState,} from 'react';
import { useCarrito } from '../context/CarritoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; // Importamos el ícono de carrito
import useFetchLibros from '../Hooks/useFetchLibros'; // Importamos el hook personalizado

const BookList = () => {
  const [librosAgregados, setLibrosAgregados] = useState([]); // Estado para almacenar los libros agregados al carrito
  const { agregarAlCarrito } = useCarrito();// Usamos el hook personalizado useCarrito para obtener los libros

  

  const { data: libros, loading, error } = useFetchLibros('/libros.json'); // Usamos el hook useFetchLibro  personalizado para obtener los libros

  const agregarLibroAlCarrito = (libro) => {
    agregarAlCarrito(libro);
    // Añadimos el libro a la lista de libros agregados previamente y actualizamos el estado con el nuevo libro
    setLibrosAgregados((prevLibros) => [...prevLibros, libro.id]);
    
    // Remover el libro de la lista después de 2 segundos
    setTimeout(() => {
      setLibrosAgregados((prevLibros) => prevLibros.filter(id => id !== libro.id));
    }, 2000);
  };

  if (loading) {
    return <div>Cargando libros...</div>;
  }

  if (error) {
    return <div>Error al cargar los libros: {error.message}</div>;
  }
// Mostramos la lista de libros
  return (
    
    <div className="container my-4">
      <div className="row">
        {libros.map((libro) => (
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
              //
              <div className="card-body">
                <h5 className="card-title">{libro.title}</h5>
                <p className="card-text"><strong>Autor:</strong> {libro.author}</p>
                <button
                  className={`btn ${librosAgregados.includes(libro.id) ? 'btn-success' : 'btn-outline-primary'}`} 
                  onClick={() => agregarLibroAlCarrito(libro)}
                  disabled={librosAgregados.includes(libro.id)} // Desactivar el botón si ya fue agregado
                >
                  {librosAgregados.includes(libro.id) ? 'Agregado' : <FontAwesomeIcon icon={faCartPlus} />}
                </button>
                {librosAgregados.includes(libro.id) && (
                  <small className="text-success d-block mt-2">¡Libro agregado al carrito!</small>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
