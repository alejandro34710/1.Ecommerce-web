import React from 'react';
import Banner from '../../assets/Fondoblanco.jpg';

const BannerImg = {
   backgroundImage: `url(${Banner})`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "1500px ", 
  width: "100%",
};

const Suscripción = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-0 bg-gray-100 text-[#111041] py-5"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-16 px-4">
        <div className="space-y-6 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#111041]">
            Últimas novedades en tecnología
          </h1>

          <form className="flex flex-col sm:flex-row items-center gap-5 mt-5">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Ingresa tu Email"
              className="w-full sm:flex-1 p-2 rounded-full bg-white shadow-xl 
              focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full 
              font-medium hover:bg-indigo-700 transition"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Suscripción;
