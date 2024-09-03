import React, { useState, useEffect } from 'react';
import acolchados from '../../assets/images/PRODUCTOS/acolchados.png';
import almohadas from '../../assets/images/PRODUCTOS/almohadas.png';
import Barrales_de_maderas from '../../assets/images/PRODUCTOS/Barrales_de_maderas.png';
import Barrales_de_metal from '../../assets/images/PRODUCTOS/Barrales_de_metal.png';
import cortinas_de_cocina from '../../assets/images/PRODUCTOS/cortinas_de_cocina.png';
import Cortinas_de_gasas from '../../assets/images/PRODUCTOS/Cortinas_de_gasas.png';
import Cortinas_de_telas from '../../assets/images/PRODUCTOS/Cortinas_de_telas.png';
import cortinas_infantiles from '../../assets/images/PRODUCTOS/cortinas_infantiles.png';
import Cortinas_romanas from '../../assets/images/PRODUCTOS/Cortinas_romanas.png';
import Repuestos_de_roller from '../../assets/images/PRODUCTOS/Repuestos_de_roller.png';
import Roller_black_out from '../../assets/images/PRODUCTOS/Roller_black_out.png';
import Roller_screem from '../../assets/images/PRODUCTOS/Roller_screem.png';

import './ProductGallery.css';

const ProductGallery = () => {
  const items = [
    { src: acolchados, title: 'Acolchados' },
    { src: almohadas, title: 'Almohadas' },
    { src: Barrales_de_maderas, title: 'Barrales de Maderas' },
    { src: Barrales_de_metal, title: 'Barrales de Metal' },
    { src: cortinas_de_cocina, title: 'Cortinas de Cocina' },
    { src: Cortinas_de_gasas, title: 'Cortinas de Gasas' },
    { src: Cortinas_de_telas, title: 'Cortinas de Telas' },
    { src: cortinas_infantiles, title: 'Cortinas Infantiles' },
    { src: Cortinas_romanas, title: 'Cortinas Romanas' },
    { src: Repuestos_de_roller, title: 'Repuestos de Roller' },
    { src: Roller_black_out, title: 'Roller Black Out' },
    { src: Roller_screem, title: 'Roller Screem' }
  ];

  const [visibleItems, setVisibleItems] = useState(items.slice(0, Math.ceil(items.length / 2)));

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleItems(prevItems => {
        // Mueve el primer elemento al final del array para que aparezca el siguiente en la lista
        const newItems = [...prevItems.slice(1), prevItems[0]];
        return newItems;
      });
    }, 6000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div>
    <h1 id="productos"> Productos</h1>
    <div className="galeriaProducto">
      {visibleItems.map((item, index) => (
        <img key={index} src={item.src} alt={item.title} />
      ))}
    </div>
    
    </div>
  );
};
/// galeriaProducto
export default ProductGallery;