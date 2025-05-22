import React from 'react';
import imag1 from '../../assets/Mouse1.jpg';
import imag2 from '../../assets/Mouse2.jpg';
import imag3 from '../../assets/Mouse3.jpg';
import imag4 from '../../assets/Mouse4.jpg';

const ProductosData = [
  {
    id: 1,
    img: imag1,
    title: "Mouse Furia Roja",
    category: "Gaming",
    description: "Precisión avanzada y diseño ergonómico para sesiones largas de juego.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: imag2,
    title: "Mouse Sombra Pro",
    category: "Trabajo",
    description: "Ideal para trabajo y gaming, con sensor óptico de alto rendimiento.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: imag3,
    title: "Mouse Blue Storm",
    category: "Diseño",
    description: "Retroiluminación azul, agarre cómodo y desplazamiento fluido.",
    aosDelay: "400",
  },
  {
    id: 4,
    img: imag4,
    title: "Mouse Cyber Titan",
    category: "Competitivo",
    description: "Diseño futurista y respuesta ultra rápida para jugadores competitivos.",
    aosDelay: "600",
  },
];

const Productos2 = () => {
  return (
    <>
      <section className="py-16 bg-[#1122402d]">
        <div className="max-w-7xl mx-auto px-4 ">
          {/* Título */}
          <div className="text-center mb-12 ">
            <p  data-aos="fade-up" className="text-base text-gray-800 font-semibold">
              Últimos productos y novedades
            </p>
            <h2  data-aos="fade-up" className="text-4xl font-bold text-gray-800 mt-2">Artículos recientes</h2>
            <p  data-aos="fade-up" className="text-sm text-gray-700 mt-2 max-w-xl mx-auto">
              Explora lo nuevo en periféricos de alto rendimiento y diseño innovador.
            </p>
          </div>

          {/* Grid de tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ProductosData.map((producto) => (
              <div
                data-aos="fade-up" 
                key={producto.id}
                data-aos-delay={producto.aosDelay}
                className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-105 duration-300"
              >
                <img
                
                  src={producto.img}
                  alt={producto.title}
                  className="w-full h-48 object-cover " 
                />

                <div className="p-5">
                  <p className="text-xs text-gray-500 mb-1">{producto.category}</p>
                  <h3 className="text-lg font-semibold text-gray-800">{producto.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{producto.description}</p>
                  <button className="mt-4 text-sm font-medium text-indigo-600 hover:underline flex items-center gap-1">
                    Leer más →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Productos2;
