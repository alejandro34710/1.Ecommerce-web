import React from 'react'
import image1 from '../../assets/imagencomputador1op.jpg';
import image2 from '../../assets/imagencomputador2op.jpg';
import image3 from '../../assets/imagencomputador3op.jpg';
import Slider from "react-slick";

const Imagenlista =[
{
    id:1,
    img:image1,
    title:"Potencia sin límites",
    description: "Descubre laptops con el mejor rendimiento para trabajo y juego."
},
{
    id:2,
    img:image2,
    title:"Tecnología en tu bolsillo",
    description: "Últimos modelos de smartphones al mejor precio del mercado."
},
{
    id:3,
    img:image3,
    title:"Domina el juego",
    description: "Equipos gamer con alto desempeño y estilo brutal."
},
]

const Hero = () => {

  var settings = {
    dots:false,
    arrows: false,
    infinite: true,
    speed: 800,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }


  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]
     bg-[#0b172b] flex justify-center items-center duration-200">
      
      {/* fondo decorativo girado */}
      <div className="hidden lg:block h-[700px] w-[700px] bg-[#112240] 
      absolute top-[-350px] right-[-20px] rounded-3xl rotate-45 z-0"></div>

      {/* Contenido del Hero */}
      <div className="container px-4 sm:px-6 lg:px-8 pb-8 sm:pb-0 z-10">
        <Slider {...settings}>
          {Imagenlista.map((data, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center
              gap-4 sm:gap-8 min-h-[550px] sm:min-h-[650px]">

                {/* Texto */}
                <div className="flex flex-col justify-center gap-5
                 px-4 sm:px-6 lg:px-8 text-center sm:text-center 
                 lg:text-left order-2 sm:order-1 lg:order-1 -mt-15 sm:mt-0">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    {data.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white">
                    {data.description}
                  </p>
                  <div className="lg:justify-start justify-center flex">
                    <button className="bg-gradient-to-r from-blue-500 to-indigo-600
                     text-white px-10 py-2 rounded-lg shadow-md hover:scale-105 
                     hover:shadow-lg transition-all duration-300">
                      Comprar ya
                    </button>
                  </div>
                </div>

                {/* Imagen */}
                <div className="order-1 sm:order-2 lg:order-2 flex justify-center">
                  <img
                    loading="lazy"
                    src={data.img}
                    alt="Producto"
                    className="w-[390px] h-[280px] sm:w-[800px] sm:h-[400px] 
                    object-cover rounded-2xl shadow-xl border border-gray-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


export default Hero
