import React from 'react'
import imag1 from '../../assets/Portatil1.png';
import imag2 from '../../assets/Portatil2.png';
import imag3 from '../../assets/Portatil3.png';

const ProductsData = [
  {
    id: 1,
    img: imag1,
    title: "ROG Striker X",
    rating: 5,
    description: "Portátil gamer con procesador Intel i9, tarjeta gráfica RTX 4070 y pantalla de 240Hz. Rendimiento extremo para juegos y tareas pesadas.",
  },
  {
    id: 2,
    img: imag2,
    title: "MacBook Pro M3",
    rating: 4.9,
    description: "Diseñado para creadores. Chip M3 Pro, pantalla Liquid Retina XDR y batería de larga duración. Ideal para diseño, edición y desarrollo.",
  },
  {
    id: 3,
    img: imag3,
    title: "Dell XPS 13 Plus",
    rating: 4.8,
    description: "Ultraligero, potente y elegante. Procesador Intel Evo, pantalla 4K táctil y cuerpo de aluminio. Perfecto para productividad en movimiento.",
  }
];

const ProductosTop = () => {
  return (
    <div>
      <div className="container px-6 lg:px-20 mt-16" >
        {/* Encabezado de la sección */}
        <div className="text-center md:text-left mb-12 max-w-3xl mx-auto md:mx-0">
          <p data-aos="fade-up" className="text-sm text-[#040214] font-medium tracking-wide">
            Selección destacada para ti
          </p>
          <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            Equipos de alto rendimiento
          </h2>
          <p data-aos="fade-up" className="text-base sm:text-lg text-gray-500 mt-4 leading-relaxed">
            Encuentra las mejores torres diseñadas para llevar tu experiencia de juego o trabajo al siguiente nivel. Rendimiento, diseño y tecnología en un solo lugar.
          </p>
        </div>
      </div>
        {/* Body Sección */}
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-y-35 gap-x-8 px-4 sm:px-10 max-w-7xl mx-auto py-30">
    
    {ProductsData.map((productos) => (
        <div
        data-aos="fade-up" data-aos-delay={productos.aosDelay} key={productos.id}
        className="relative bg-white shadow-xl/20 rounded-lg 
        transition-all duration-300 hover:bg-gray-800 group pt-16"
        >
        {/* Imagen */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <img src={productos.img} alt="" className="max-w-[240px] block mx-auto transform -translate-y-10 
            group-hover:scale-125 duration-300 drop-shadow-md"/>
        </div>

        {/* Contenido debajo de la imagen */}
<div className="pt-20 pb-6 px-4 text-center">
                    <p className="text-yellow-500 mb-1">⭐ {productos.rating}</p>
                    <h3 className="text-lg font-semibold text-[#19335f] group-hover:text-white">
                    {productos.title}
                    </h3>
                    <p className="text-sm text-gray-700 mt-1 group-hover:text-gray-300">
                    {productos.description}
                    </p>
                    <button className="mt-4 bg-[#303066] hover:bg-[#505072] text-white font-semibold 
                    py-2 px-4 rounded-full transition-colors">
                    Ver mas
                    </button>
                </div>
            </div>
            ))}
        </div>
    </div>
</div> 
)
}

export default ProductosTop
