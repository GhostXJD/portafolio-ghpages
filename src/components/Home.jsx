import React from 'react';
import { Link } from 'react-scroll';
import fotoProfesional from "../assets/fotoProfesional.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div name="Inicio" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white">
            Ingeniero en Informática
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-justify">
          Cuento con la capacidad para colaborar tanto en equipos como de manera independiente. Estoy comprometido a crear soluciones innovadoras, intuitivas y eficaces para los usuarios. Siempre estoy en búsqueda de nuevas tecnologías y oportunidades para continuar mi aprendizaje. Creo que soy curioso al ver cuando sale una nueva tecnología y me gusta saber todo o casi todo de ella.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-700 to-purple-950 cursor-pointer">
              <Link to={'Experiencia'} smooth duration={500}>Experiencia</Link>
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={fotoProfesional} alt="" className="rounded-full mx-auto w-2/3 md:w-full h-auto md:scale-75 lg:scale-50" />
        </div>
      </div>
    </div>
  )
}

export default Home
