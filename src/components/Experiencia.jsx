import React from 'react'
import Caf from '../assets/Experiencia/Caf.png';

function Experiencia() {

    const experiencias = [
        {
            id: 1,
            src: Caf,
            href: "https://caf.ivaras.cl",
        },

    ]

    return (
        <div name='Experiencia' className="w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Experiencia
                    </p>
                    <p className="py-6">
                        Mira mi experiencia en proyectos aquí
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {experiencias.map(({ id, src, href }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt='' className="rounded-md duration-200 hover:scale-105" />
                            <div className="flex items-center justify-center">
                                <a href={href} target='_blank' rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <button className='w-full h-full'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiencia
