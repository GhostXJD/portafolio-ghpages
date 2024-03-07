import React from 'react';
import fotoProfesional from "../assets/fotoProfesional.jpg";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

      <dix className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Ingeniero en informatica
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            Titulado en Ingeniería en Informática en DuocUC con sólidas habilidades para el trabajo en equipo y en solitario. Poseo una perspectiva única y capacidad analítica,
            aprendo rápidamente y me desenvuelvo bien bajo presión. Orientado a la creación de soluciones creativas, intuitivas y eficientes para el usuario.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-700 to-purple-950 cursor-pointer">
              Experiencia
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25}
                className="ml-1"/>
              </span>
            </button>
          </div>
        </div>

        <div>
          <img src={fotoProfesional} alt="" className="rounded-full mx-auto w-2/3 md:w-full scale-50" />
        </div>

      </dix>
    </div>
  )
}

export default Home
