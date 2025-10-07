
'use client';
import { useState } from 'react';
import styles from './Clients.module.css';

// Importar Google Fonts
import 'font-awesome/css/font-awesome.min.css'; // Para los iconos, si los quieres mantener

// Datos de clientes ficticios con un "unicode" de fondo y color de texto agregado
const clientsList = [
  { 
    name: "TechCorp", 
    unicode: "🌐", 
    slogan: "Innovating", 
    nameFont: "Roboto", 
    sloganFont: "Lora", 
    nameFontSize: '24px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Roboto', 
    sloganFontFamily: 'Arial Black', 
    unicodeTop: '20px', 
    unicodeLeft: '50%', 
    nameTop: '132px', 
    nameLeft: '50%', 
    sloganTop: '160px', 
    sloganLeft: '50%',
    nameTextColor: '#000', // Color de texto para el nombre
    sloganTextColor: '#0000FF', // Color de texto para el slogan
    unicodeTextColor: '#FF0000', // Color de texto para el unicode
  },
  { 
    name: "DataSolutions", 
    unicode: "⽥", 
    slogan: "Driven Success", 
    nameFont: "Roboto", 
    sloganFont: "Merriweather", 
    nameFontSize: '18px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Fira Sans', 
    sloganFontFamily: 'Arial', 
    unicodeTop: '15%', 
    unicodeLeft: '50%', 
    nameTop: '62%', 
    nameLeft: '50%', 
    sloganTop: '70%', 
    sloganLeft: '50%',
    nameTextColor: '#4caf50', // Color de texto para el nombre
    sloganTextColor: '#4caf50', // Color de texto para el slogan
    unicodeTextColor: '#4caf50', // Color de texto para el unicode
  },
  { 
    name: "FusionTech", 
    unicode: "◠", 
    slogan: "Creativity at Work", 
    nameFont: "Verdana ", 
    sloganFont: "Raleway", 
    nameFontSize: '20px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Verdana', 
    sloganFontFamily: 'Raleway', 
    unicodeTop: '18%', 
    unicodeLeft: '50%', 
    nameTop: '55%', 
    nameLeft: '50%', 
    sloganTop: '68%', 
    sloganLeft: '50%',
    nameTextColor: '#009688', // Color de texto para el nombre
    sloganTextColor: '#009688', // Color de texto para el slogan
    unicodeTextColor: '#009688', // Color de texto para el unicode
  },
  { 
    name: "GreenTech", 
    unicode: "◢", 
    slogan: "Sustainability", 
    nameFont: "Comic Sans MS", 
    sloganFont: "Playfair Display", 
    nameFontSize: '20px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Comic Sans MS', 
    sloganFontFamily: 'Playfair Display', 
    unicodeTop: '10%', 
    unicodeLeft: '50%', 
    nameTop: '55%', 
    nameLeft: '50%', 
    sloganTop: '65%', 
    sloganLeft: '50%',
    nameTextColor: '#006400', // Color de texto para el nombre
    sloganTextColor: '#808000', // Color de texto para el slogan
    unicodeTextColor: '#7CFC00', // Color de texto para el unicode
  },
  { 
    name: "FinServe", 
    unicode: "◧", 
    slogan: "Finances", 
    nameFont: "Lucida Console", 
    sloganFont: "Quicksand", 
    nameFontSize: '17px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Lucida Console', 
    sloganFontFamily: 'Courier New', 
    unicodeTop: '10%', 
    unicodeLeft: '50%', 
    nameTop: '56%', 
    nameLeft: '50%', 
    sloganTop: '65%', 
    sloganLeft: '50%',
    nameTextColor: '#f44336', // Color de texto para el nombre
    sloganTextColor: '#f44336', // Color de texto para el slogan
    unicodeTextColor: '#f44336', // Color de texto para el unicode
  },
  { 
    name: "DataSphere", 
    unicode: "〇", 
    slogan: "Your Cloud", 
    nameFont: "Helvetica", 
    sloganFont: "PT Serif", 
    nameFontSize: '20px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Helvetica', 
    sloganFontFamily: 'Trebuchet MS', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '50%', 
    nameLeft: '50%', 
    sloganTop: '130px', 
    sloganLeft: '50%',
    nameTextColor: '#673ab7', // Color de texto para el nombre
    sloganTextColor: '#673ab7', // Color de texto para el slogan
    unicodeTextColor: '#673ab7', // Color de texto para el unicode
  },
  { 
    name: "SmartSystems", 
    unicode: "☑", 
    slogan: "Solutions", 
    nameFont: "Century Gothic", 
    sloganFont: "Bitter", 
    nameFontSize: '17px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Century Gothic', 
    sloganFontFamily: 'Arial Narrow', 
    unicodeTop: '10%', 
    unicodeLeft: '50%', 
    nameTop: '60%', 
    nameLeft: '50%', 
    sloganTop: '70%', 
    sloganLeft: '50%',
    nameTextColor: '#3f51b5', // Color de texto para el nombre
    sloganTextColor: '#3f51b5', // Color de texto para el slogan
    unicodeTextColor: '#3f51b5', // Color de texto para el unicode
  },
  { 
    name: "NextGen Solutions", 
    unicode: "〢", 
    slogan: "Shaping World", 
    nameFont: "Consolas", 
    sloganFont: "Droid Serif", 
    nameFontSize: '24px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Consolas', 
    sloganFontFamily: 'Raleway', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '100px', 
    nameLeft: '50%', 
    sloganTop: '160px', 
    sloganLeft: '50%',
    nameTextColor: '#ff5722', // Color de texto para el nombre
    sloganTextColor: '#ff5722', // Color de texto para el slogan
    unicodeTextColor: '#ff5722', // Color de texto para el unicode
  },
  { 
    name: "GlobalTech", 
    unicode: "🗺", 
    slogan: "Technology", 
    nameFont: "Courier", 
    sloganFont: "Fira Sans", 
    nameFontSize: '20px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Courier', 
    sloganFontFamily: 'Courier', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '140px', 
    sloganLeft: '50%',
    nameTextColor: '#607d8b', // Color de texto para el nombre
    sloganTextColor: '#607d8b', // Color de texto para el slogan
    unicodeTextColor: '#607d8b', // Color de texto para el unicode
  },
  
  { 
    name: "TechWave", 
    unicode: "〤", 
    slogan: "Innovation at Speed", 
    nameFont: "Arial", 
    sloganFont: "Verdana", 
    nameFontSize: '22px', 
    sloganFontSize: '6px',
    nameFontFamily: 'Arial', 
    sloganFontFamily: 'Verdana', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '65%', 
    sloganLeft: '50%',
    nameTextColor: '#1e88e5', 
    sloganTextColor: '#1e88e5', 
    unicodeTextColor: '#1e88e5',
  },
  { 
    name: "QuantumPlus", 
    unicode: "⿺", 
    slogan: "Exploring solutions", 
    nameFont: "Times New Roman", 
    sloganFont: "Courier New", 
    nameFontSize: '18px', 
    sloganFontSize: '6px',
    nameFontFamily: 'Times New Roman', 
    sloganFontFamily: 'Courier New', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '145px', 
    sloganLeft: '50%',
    nameTextColor: '#9c27b0', 
    sloganTextColor: '#9c27b0', 
    unicodeTextColor: '#9c27b0',
  },
  { 
    name: "CyberSpark", 
    unicode: "✇", 
    slogan: "Lighting the Path", 
    nameFont: "Georgia", 
    sloganFont: "Trebuchet MS", 
    nameFontSize: '22px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Georgia', 
    sloganFontFamily: 'Trebuchet MS', 
    unicodeTop: '8%', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '150px', 
    sloganLeft: '50%',
    nameTextColor: '#ff5722', 
    sloganTextColor: '#ff5722', 
    unicodeTextColor: '#ff5722',
  },
  { 
    name: "Next", 
    unicode: "〦", 
    slogan: "Revolutionizing Tomorrow", 
    nameFont: "Courier New", 
    sloganFont: "Lucida Console", 
    nameFontSize: '21px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Courier New', 
    sloganFontFamily: 'Lucida Console', 
    unicodeTop: '10%', 
    unicodeLeft: '50%', 
    nameTop: '52%', 
    nameLeft: '50%', 
    sloganTop: '145px', 
    sloganLeft: '50%',
    nameTextColor: '#009688', 
    sloganTextColor: '#009688', 
    unicodeTextColor: '#009688',
  },
  { 
    name: "FusionCore", 
    unicode: "⟲", 
    slogan: "Pushing Boundaries", 
    nameFont: "Tahoma", 
    sloganFont: "Helvetica", 
    nameFontSize: '20px', 
    sloganFontSize: '12px',
    nameFontFamily: 'Tahoma', 
    sloganFontFamily: 'Helvetica', 
    unicodeTop: '5%', 
    unicodeLeft: '50%', 
    nameTop: '51%', 
    nameLeft: '50%', 
    sloganTop: '140px', 
    sloganLeft: '50%',
    nameTextColor: '#00bcd4', 
    sloganTextColor: '#00bcd4', 
    unicodeTextColor: '#00bcd4',
  },
  { 
    name: "NeuroLink", 
    unicode: "ꄍ", 
    slogan: "Mind Meets Machine", 
    nameFont: "Impact", 
    sloganFont: "Comic Sans MS", 
    nameFontSize: '28px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Impact', 
    sloganFontFamily: 'Comic Sans MS', 
    unicodeTop: '10%', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '150px', 
    sloganLeft: '50%',
    nameTextColor: '#3f51b5', 
    sloganTextColor: '#3f51b5', 
    unicodeTextColor: '#3f51b5',
  },
  { 
    name: "ByteWave", 
    unicode: "⧉", 
    slogan: "The Future of Data", 
    nameFont: "Lucida Sans Unicode", 
    sloganFont: "Segoe UI", 
    nameFontSize: '24px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Lucida Sans Unicode', 
    sloganFontFamily: 'Segoe UI', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '150px', 
    sloganLeft: '50%',
    nameTextColor: '#8bc34a', 
    sloganTextColor: '#8bc34a', 
    unicodeTextColor: '#8bc34a',
  },
  { 
    name: "MetaFlow", 
    unicode: "Ⲱ", 
    slogan: "Flowing to the Future", 
    nameFont: "Palatino Linotype", 
    sloganFont: "Book Antiqua", 
    nameFontSize: '22px', 
    sloganFontSize: '12px',
    nameFontFamily: 'Palatino Linotype', 
    sloganFontFamily: 'Book Antiqua', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '68%', 
    sloganLeft: '50%',
    nameTextColor: '#e91e63', 
    sloganTextColor: '#e91e63', 
    unicodeTextColor: '#e91e63',
  },
  { 
    name: "HyperNova", 
    unicode: "⩥", 
    slogan: "Redefining Space", 
    nameFont: "Century Gothic", 
    sloganFont: "Frank Ruhl Libre", 
    nameFontSize: '23px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Century Gothic', 
    sloganFontFamily: 'Frank Ruhl Libre', 
    unicodeTop: '5%', 
    unicodeLeft: '50%', 
    nameTop: '52%', 
    nameLeft: '50%', 
    sloganTop: '150px', 
    sloganLeft: '50%',
    nameTextColor: '#f44336', 
    sloganTextColor: '#f44336', 
    unicodeTextColor: '#f44336',
  }
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica de navegación
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? clientsList.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === clientsList.length - 1 ? 0 : prevIndex + 1));
  };

  // Calcular el desplazamiento en píxeles basado en un ancho fijo
  const getTranslateXInPixels = () => {
    const minWidth = 157; // El ancho mínimo de cada elemento
    return currentIndex * minWidth; // Mueve la lista por 163px cada vez
  };

  return (
    <div className={styles['carousel-container']}>
      <div className={styles['main-tittle']}>
        <h3>Clients</h3>
      </div>

      <div className={styles['carousel-wrapper']}>
        <i
          className={`${styles['arrow-left']} fa fa-chevron-left`}
          onClick={handlePrev}
        ></i>

        <div className={styles['clients-list-container']}>
          <div
            className={styles['clients-list']}
            style={{
              transform: `translateX(-${getTranslateXInPixels()}px)`,
              transition: 'transform 0.5s ease',
            }}
          >
            {clientsList.map((client, index) => (
              <div className={styles['client-card']} key={index} style={{
                background: '#f3f3f3',  // Fondo general de la tarjeta
                padding: '20px', // Relleno interno para mejorar la visibilidad
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                position: 'relative', // Para poder usar top/left
                overflow: 'hidden', // Para evitar que los elementos sobresalgan
              }}>
                {/* Unicode de fondo */}
                <div className={styles['unicode-background']} style={{
                  fontSize: '80px', // Tamaño grande para el unicode
                  textAlign: 'center',
                  position: 'absolute',
                  top: client.unicodeTop, // Posición top personalizada
                  left: client.unicodeLeft, // Posición left personalizada
                  transform: 'translateX(-50%)',
                  color: client.unicodeTextColor, // Usar el color del unicode
                }}>
                  {client.unicode}
                </div>
                {/* Nombre con tipografía personalizada */}
                <h3 className={styles['client-name']} style={{
                  fontFamily: client.nameFontFamily,  // Fuente personalizada para el nombre
                  fontSize: client.nameFontSize,  // Tamaño personalizado para el nombre
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: client.nameTextColor, // Usar el color del nombre
                  marginBottom: '10px',
                  position: 'absolute',
                  top: client.nameTop, // Posición top personalizada
                  left: client.nameLeft, // Posición left personalizada
                  transform: 'translateX(-50%)',
                }}>
                  {client.name}
                </h3>
                {/* Slogan con una fuente diferente */}
                <p className={styles['client-slogan']} style={{
                  fontFamily: client.sloganFontFamily,  // Fuente personalizada para el slogan
                  fontSize: client.sloganFontSize,  // Tamaño personalizado para el slogan
                  textAlign: 'center',
                  color: client.sloganTextColor, // Usar el color del slogan
                  // fontStyle: 'italic',
                  position: 'absolute',
                  top: client.sloganTop, // Posición top personalizada
                  left: client.sloganLeft, // Posición left personalizada
                  transform: 'translateX(-50%)',
                }}>
                  {client.slogan}
                </p>
              </div>
            ))}
          </div>
        </div>

        <i
          className={`${styles['arrow-right']} fa fa-chevron-right`}
          onClick={handleNext}
        ></i>
      </div>
    </div>
  );
};

export default Clients;
