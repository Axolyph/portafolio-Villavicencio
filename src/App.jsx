import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Proyectos from './components/Proyectos/Proyectos';
import Contactos from './components/Contactos/Contactos';
import Servicios from './components/Servicios/Servicios';
import Certificados from './components/Certificados/Certificados';
import Footer from './components/Footer/Footer';
import './App.css'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Perfil />
      <Habilidades />
      <Proyectos />
      <Servicios />
      <Certificados />
      <Contactos />
      <Footer />
    </>
  )
}

export default App
