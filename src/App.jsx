import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Productos from './components/Productos/Productos';
import ProductosTop from './components/ProductosTop/ProductosTop';
import Banner from './components/Banner/Banner';
import AOS from "aos";
import "aos/dist/aos.css";
import Suscripción from './components/Suscripción/Suscripción';
import Productos2 from './components/Productos2/Productos2';
import Testimonios from './components/Testimonios/Testimonios';
import Footer from './components/Footer/Footer';




const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      easing: "ease-in-sine",
      delay:100,
    });
 
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Productos />
      
      
      
    </div>
  )
}

export default App