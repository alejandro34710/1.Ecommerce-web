import React, { useState } from 'react';
import Logo from '../../assets/LogoPrincipal2.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown, FaBars } from 'react-icons/fa6';
const Menu = [
{
    id:1,
    name: "Inicio",
    link: "/#",
},
{
    id:2,
    name: "Más valorados",
    link: "/#",
},
{
    id:3,
    name: "Portátiles y PCs",
    link: "/#",
},
{
    id:4,
    name: "Celulares",
    link: "/#",
},
{
    id:5,
    name: "Gaming",
    link: "/#",
},
{
    id:6,
    name: "Accesorios",
    link: "/#",
},
]

const DropdownLinks = [
{
  id:1,
  name: "Logitech",
  link: "/#",
},
{
  id:2,
  name: "Asus",
  link: "/#",
},
{
  id:3,
  name: "Lenovo",
  link: "/#",
},
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-md bg-[#090527] text-white duration-200 relative z-40">
      
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          
        {/* Logo */}
        <div className="pl-4 sm:pl-8">
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
          <img src={Logo} alt="Logo" className="w-10 object-contain" />
          </a>
        </div>

          {/* Buscar y Botón */}
          <div className="flex items-center gap-2">

            {/* Campo de búsqueda */}
            <div className="relative group block">
              <input
                type="text"
                placeholder="Buscar"
                className="w-[150px] group-hover:w-[250px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none bg-white text-black"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Botón Orden */}
            <button
              onClick={() => alert("orden no valida")}
              className="group bg-gradient-to-r from-blue-700
                 to-blue-500 hover:from-blue-800
                 hover:to-blue-600 transition-all 
                duration-200 text-white py-1 px-4 
                rounded-full flex items-center gap-2"
            >
              <span className="hidden group-hover:inline">Orden</span>
              <FaCartShopping className='text-xl drop-shadow-sm cursor-pointer' />
            </button>
               {/* Botón menu */}
      <div className="sm:hidden flex justify-end px-4 ">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className={`text-2xl ${menuOpen ? 'text-blue-500' : 'text-white'} transition-colors duration-200`} />

        </button>
      </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className={`bg-[#0a081d] py-2 ${menuOpen ? 'block' : 'hidden'} sm:block`}>
        <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 text-sm font-medium items-center">
          {Menu.map((data) => (
            <li key={data.name}>
              <a href={data.link} className="hover:text-sky-200 transition-colors duration-200">
                {data.name}
              </a>
            </li>
          ))}

          {/* Lista desplegable */}
          <li className="relative group">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-sky-300 transition-colors duration-200"
            >
              Marcas
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>

            {/* Contenedor del dropdown */}
           <div className="absolute top-full left-0 bg-[#090425] dark:bg-gray-800 text-gray-800 shadow-md rounded-md py-2 w-40 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
            <ul className="text-sm">
             {DropdownLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="block px-4 py-2 hover:bg-[#101027] text-white hover:text-sky-200 transition-colors"
                >
                {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
