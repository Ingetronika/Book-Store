import { useState, useEffect } from 'react';
// Hook personalizado para realizar peticiones a la API de libros
const useFetchLibros = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
// Realizar la petición a la API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
            
        };
// Llamar a la función fetchData
         setTimeout(fetchData, 1000); // Retraso simulado de 1 segundo

    }, [url]);
// Devolver los datos, el estado de carga y los errores

    return { data, loading, error };
};

export default useFetchLibros;