import React from 'react';
import imag1 from '../../assets/Producto1.png';
import imag2 from '../../assets/Producto2.png';
import imag3 from '../../assets/Producto3.png';
import imag4 from '../../assets/Producto4.png';
import imag5 from '../../assets/Producto5.png';

const ProductosData = [
  {
    id: 1,
    img: imag1,
    title: "Furia Roja",
    rating: 5.0,
    description: "Diseño agresivo con ventiladores LED rojos y alto rendimiento para gamers extremos.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: imag2,
    title: "Sombra Pro",
    rating: 4.8,
    description: "Torre profesional con sistema de refrigeración eficiente y estilo minimalista.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: imag3,
    title: "Blue Storm",
    rating: 4.9,
    description: "Iluminación LED azul y gran capacidad de expansión para componentes de alto nivel.",
    aosDelay: "400",
  },
  {
    id: 4,
    img: imag4,
    title: "Cyber Titan",
    rating: 5.0,
    description: "Diseño futurista con paneles angulados y gran flujo de aire para sesiones intensas.",
    aosDelay: "600",
  },
  {
    id: 5,
    img: imag5,
    title: "Black Core",
    rating: 4.7,
    description: "Potencia y elegancia en una torre de alto desempeño ideal para gaming y creación.",
    aosDelay: "700",
  },
];

const Productos = () => {
  return (
    <>

      {/* Sección Productos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <p data-aos="fade-up" className="text-base text-[#111041] font-semibold">
              Top productos vendidos para ti
            </p>
            <h2  data-aos="fade-up" className="text-4xl font-bold text-gray-800 mt-2">Productos</h2>
            <p data-aos="fade-up" className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
              Explora nuestra selección de torres de alto rendimiento para gamers y profesionales.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {ProductosData.map((producto) => (
              <div
                data-aos="fade-up"
                data-aos-delay={producto.aosDelay}
                key={producto.id}
                className="bg-[#ffffff] shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={producto.img}
                  alt={producto.title}
                  className="w-full h-[250px] object-contain mx-auto"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#19335f]">{producto.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{producto.description}</p>
                  <p className="text-sm text-yellow-500 mt-2">⭐ {producto.rating}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Botón centrado debajo */}
         <div className="flex justify-center mt-10 order-3 w-full" data-aos="fade-up">
       <button className="bg-sky-900 hover:bg-blue-900 
       text-white text-sm px-10 py-1 rounded-lg shadow-xl hover:scale-105 
       hover:shadow-lg transition-all duration-300 min-h-[36px]">
        Ver más
      </button>

        </div>
        </div>
      </section>
    </>
  );
};

export default Productos;
