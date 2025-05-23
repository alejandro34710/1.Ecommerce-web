import React from 'react'
import BannerImg from '../../assets/gamingimage.jpg';

const Banner = () => {
  return (
    <div className='min-h-[550px]  flex justify-center items-center py-12 sm:py-0 bg-[#112240] '>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
         {/* Imagen sección */}
          <div data-aos="fade-up" className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 
          w-[300px] sm:w-[450px] md:w-[450px] lg:w-[550px] ml-10 sm:ml-[60px]">
            <img 
              src={BannerImg}
              alt=""
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* texto sección */}
           <div data-aos="fade-up" className='ml-[30px]'>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 ">
              🔧 Upgrade Tecnológico hasta un 50% OFF
            </h1>
            <p className="text-sm text-gray-300 tracking-wide leading-5 mb-6 max-w-lg">
              Descubre lo último en innovación digital. Equipos de alto rendimiento, 
              gadgets inteligentes y soluciones pensadas para transformar tu día a día.
            </p>

            {/* Lista de beneficios */}
            <ul className="space-y-5 ">
              {/* Calidad */}
              <li className="flex items-center gap-4 ">
                <div className="w-10 h-10 rounded-full bg-violet-300 flex items-center justify-center">
                  <span className="text-black text-lg">🔒</span>
                </div>
                <span className="text-white text-sm">Productos de Alta Calidad</span>
              </li>

              {/* Envío rápido */}
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-300 flex items-center justify-center">
                  <span className="text-black text-lg">🚚</span>
                </div>
                <span className="text-white text-sm">Envío Rápido</span>
              </li>

              {/* Métodos de pago */}
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-300 flex items-center justify-center">
                  <span className="text-black text-lg">💳</span>
                </div>
                <span className="text-white text-sm">Métodos de Pago Seguros</span>
              </li>

              {/* Ofertas */}
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center">
                  <span className="text-black text-lg">🎁</span>
                </div>
                <span className="text-white text-sm">Ofertas Exclusivas</span>
              </li>
            </ul>
            </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
