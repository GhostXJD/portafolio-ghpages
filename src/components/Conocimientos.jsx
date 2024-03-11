import React from 'react'
import html from '../assets/Conocimientos/HTML.png';
import javascript from '../assets/Conocimientos/Javascript.png';
import css from '../assets/Conocimientos/CSS.png';
import github from '../assets/Conocimientos/GitHub.png';
import react from '../assets/Conocimientos/React.png';
import mongo from '../assets/Conocimientos/MongoDB.png';
import node from '../assets/Conocimientos/Nodejs.png';
import material from '../assets/Conocimientos/material-ui.png';
import next from '../assets/Conocimientos/next-js.png';
import mysql from '../assets/Conocimientos/MySQL.png';
import tailwind from '../assets/Conocimientos/Tailwind.png';
import python from '../assets/Conocimientos/Python.png';
import bootstrap from '../assets/Conocimientos/bootstrap.png';
import java from '../assets/Conocimientos/java.png';


function Conocimientos() {

    const tecnologias = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 5,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            src: mongo,
            title: 'Mongo DB',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            src: node,
            title: 'Node JS',
            style: 'shadow-green-400'
        },
        {
            id: 8,
            src: material,
            title: 'Material UI',
            style: 'shadow-blue-700'
        },
        {
            id: 9,
            src: next,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 10,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-yellow-500'
        },
        {
            id: 11,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 12,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-300'
        },
        {
            id: 13,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 14,
            src: java,
            title: 'Java',
            style: 'shadow-orange-400'
        },
    ]
    return (
        <div name="Conocimientos" className="bg-gradient-to-b from-gray-800 to-black w-full text-white">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Conocimientos</p>
                    <p className="py-6">Estas son las tecnologías que conozco</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0">
                    {tecnologias.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-16 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Conocimientos

