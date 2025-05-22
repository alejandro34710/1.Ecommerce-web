import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMapPin } from 'react-icons/fi';
import Logo from '../../assets/LogoPrincipal2.png';

const Footerlinks = [
  { title: "Inicio", link: "/#" },
  { title: "Nosotros", link: "/#nosotros" },
  { title: "Contacto", link: "/contacto" },
  { title: "Blog", link: "/blog" },
];

const Footer = () => {
  return (
    <footer className="relative text-white bg-gradient-to-t from-black  bg-gray-900 py-16">
      {/* Contenido del footer */}
      <div data-aos="zoom-in" className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo y descripción */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="Logo Nexora" className="w-8 h-8" />
            <h1 className="text-xl font-bold">Nexora</h1>
          </div>
          <p className="text-sm text-gray-300">
            Conectamos innovación y tecnología para transformar ideas en soluciones digitales que impulsan el crecimiento de nuestros clientes.
          </p>
        </div>

        {/* Links importantes */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links Adicionales</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {Footerlinks.map((item, idx) => (
              <li key={idx}>
                <a href={item.link} className="hover:text-white transition">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Otra categoría */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {Footerlinks.map((item, idx) => (
              <li key={idx}>
                <a href={item.link} className="hover:text-white transition">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes y contacto */}
        <div className="space-y-4">
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <FiMapPin /> Bogotá - Colombia
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <FiPhone /> +57 31158948795
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
