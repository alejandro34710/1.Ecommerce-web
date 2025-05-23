import React from 'react';
import Slider from "react-slick";

const testimoniosData = [
  {
    id: 1,
    name: "Victor",
    text: "Excelente calidad y servicio. Lo recomendaría sin dudar.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "La experiencia de compra fue fluida, y el rendimiento del producto es impresionante.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Muy buen diseño y funcionalidad. Ideal para el uso diario profesional.",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    id: 4,
    name: "María González",
    text: "Los productos llegaron a tiempo y en perfectas condiciones. Muy confiable.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "John Carter",
    text: "Estoy muy satisfecho con el soporte técnico. Respondieron rápidamente.",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 6,
    name: "Laura Fernández",
    text: "Un producto moderno, bien diseñado y funcional. Volveré a comprar aquí.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Testimonios = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="py-16 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div data-aos="fade-up" className="text-center mb-12">
            <p className="text-base text-white font-semibold">
              Que dicen nuestros clientes
            </p>
            <h2 className="text-4xl font-bold text-white mt-2">Testimonios</h2>
            <p className="text-sm text-gray-300 mt-2 max-w-xl mx-auto">
              Nuestros clientes comparten su experiencia con nuestros productos de tecnología.
            </p>
          </div>

          {/* Slider */}
          <Slider {...settings}>
            {testimoniosData.map((testimonio) => (
              <div data-aos="zoom-in" className='my-6 px-2' key={testimonio.id}>
                <div className="flex flex-col gap-5 shadow-xl/10 
                    py-12 px-8 mx-4 rounded-xl relative bg-[#ffffff]">
                  <div className="mb-4">
                    <img
                      className='rounded-full w-20 h-20'
                      src={testimonio.img}
                      alt={testimonio.name}
                    />
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-10'>
                      <p className="text-sm text-gray-700 mb-4">"{testimonio.text}"</p>
                      <h3 className="text-lg font-semibold text-gray-800">{testimonio.name}</h3>
                    </div>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Estilos para los dots */}
      <style>
        {`
          .slick-dots li button:before {
            font-size: 10px;
            color: #ffffff;
            opacity: 0.6;
          }

          .slick-dots li.slick-active button:before {
            color: #2c2f87;
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};

export default Testimonios;
