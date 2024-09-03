import React, { useState } from 'react';
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

import './AllProducts.css'; // Asegúrate de crear este archivo de CSS para el estilo de la galería

const AllProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const showNextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const showPrevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div>
      <h1 id="all-products-title">Todos los Productos</h1>
      <button onClick={openModal} className="btn-show-products">Mostrar Productos</button>

      {isModalOpen && (
        <div className="product-modal">
          <div className="product-modal-content">
            <span className="btn-close-modal" onClick={closeModal}>×</span>
            
            <div className="product-navigation">
              <button onClick={showPrevProduct} className="btn-nav">←</button>
              
              <div className="product-display">
                <img src={items[currentIndex].src} alt={items[currentIndex].title} />
                <p>{items[currentIndex].title}</p>
              </div>
              
              <button onClick={showNextProduct} className="btn-nav">→</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;