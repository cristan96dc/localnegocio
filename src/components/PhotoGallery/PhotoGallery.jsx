import React from 'react';
import imagen1 from '../../assets/images/fotos_local/1.jpg';
import imagen2 from '../../assets/images/fotos_local/2.jpg';
import imagen3 from '../../assets/images/fotos_local/3.jpg';
import imagen4 from '../../assets/images/fotos_local/4.jpg';
import imagen5 from '../../assets/images/fotos_local/5.jpg';
import imagen6 from '../../assets/images/fotos_local/6.jpg';
import imagen7 from '../../assets/images/fotos_local/7.jpg';
import imagen8 from '../../assets/images/fotos_local/8.jpg';
import imagen9 from '../../assets/images/fotos_local/9.jpg';
import './PhotoGallery.css'; // Asegúrate de que el archivo CSS esté importado

const PhotoGallery = () => {
  return (
    <div >
      <h1 id="gallery">Nuestros trabajos</h1>

    <div className="gallery">
      <img src={imagen1} alt="Imagen 1" />
      <img src={imagen2} alt="Imagen 2" />
      <img src={imagen3} alt="Imagen 3" />
      <img src={imagen4} alt="Imagen 4" />
      <img src={imagen5} alt="Imagen 5" />
      <img src={imagen6} alt="Imagen 6" />
      <img src={imagen7} alt="Imagen 7" />
      <img src={imagen8} alt="Imagen 8" />
      <img src={imagen9} alt="Imagen 9" />
    </div>
        </div>

  );
};

export default PhotoGallery;