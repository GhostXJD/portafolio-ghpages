import React, { useState } from 'react';
import Caf from '../assets/Experiencia/Caf.png';
import Susuerte from '../assets/Experiencia/Susuerte.png';

function Experiencia() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);

    const openModal = (experience) => {
        setSelectedExperience(experience);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedExperience(null);
        setModalOpen(false);
    };

    const experiencias = [
        {
            id: 1,
            src: Caf,
            href: "https://caf.ivaras.cl",
            nombre: "CAF Sede Antonio Varas",
            desc: "Trabajé en un proyecto de desarrollo web de fitness utilizando MongoDB, Express.js, React y Node.js. Esto trataba de reserva, horarios, tipos de usuario, entrenamientos, ejercicios. Además de la utilización de tokens para las contraseñas. Utilicé GitHub para el versionamiento del código y SSH para gestionar el servidor de forma remota."
        },
        {
            id: 2,
            src: Susuerte,
            href: "No tiene link",
            nombre: "Susuerte",
            desc: "Desarrollé una aplicación tipo lotería en PHP que incluía una plataforma web front-end. Esta aplicación permitía generar boletos con un diseño específico y luego exportarlos a formato PDF. Para lograr esto, utilicé la biblioteca TCPDF para la creación de archivos PDF, lo que nos permitió aplicar diseños personalizados a las boletas de lotería."
        },
    ];

    return (
        <div name='Experiencia' className="w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-purple-900">
                        Experiencia
                    </p>
                    <p className="py-6">
                        Mira mi experiencia en proyectos aquí
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {experiencias.map(({ id, src, href, nombre, desc }) => (
                        <div key={id} className="shadow-md shadow-purple-600 rounded-lg">
                            <img src={src} alt='' className="rounded-md w-full h-40 object-cover duration-200 hover:scale-105" />
                            <div className="flex items-center justify-center">
                                {href !== "No tiene link" ? (
                                    <a href={href} target='_blank' rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        <button className='w-full h-full'>
                                            Link
                                        </button>
                                    </a>
                                ) : (
                                    <p className="w-1/2 m-4 duration-200 hover:scale-105 text-white cursor-not-allowed flex items-center justify-center">
                                        No tiene link
                                    </p>
                                )}
                                <button
                                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                                    onClick={() => openModal({ nombre, desc })}>
                                    Descripción
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


                {modalOpen && selectedExperience && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-gradient-to-b from-black to bg-gray-900 p-8 max-w-lg rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">{selectedExperience.nombre}</h2>
                            <p>{selectedExperience.desc}</p>
                            <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-md" onClick={closeModal}>Cerrar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Experiencia;
