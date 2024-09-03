import React, { useEffect, useState } from 'react';
import './Quotes.css'; // Asegúrate de tener el archivo CSS para los estilos

const quotes = [
  "La decoración es el arte de hacer sentir bien a las personas en su espacio.",
  "Nuestros clientes disfrutan de ambientes únicos gracias a nuestra dedicación y estilo.",
  "Transformamos hogares en lugares llenos de vida y personalidad.",
  "La satisfacción de nuestros clientes es nuestra mayor recompensa."
];

function Quotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="quotes">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className={`quote ${index === currentQuoteIndex ? 'active' : ''}`}
        >
          "{quote}"
        </div>
      ))}
    </div>
  );
}

export default Quotes;