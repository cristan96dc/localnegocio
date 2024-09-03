// Importamos todas las imágenes de la carpeta especificada
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  // Usamos require.context para importar todas las imágenes desde la carpeta 'fotos_local'
  // El patrón '.jpg' especifica que solo se deben importar archivos con extensión .jpg
  const images = importAll(require.context('../assets/images/fotos_local', false, /\.jpg$/));
  
  // Exporta las imágenes para usarlas en otros componentes
  export default Object.values(images)