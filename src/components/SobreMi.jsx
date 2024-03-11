import React from 'react'

function SobreMi() {
  return (
    <div name="Sobre mi" className="w-full h-creen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Sobre mi</p>
        </div>

        <p className='text-xl mt-10 text-justify'>
          ¡Hola! Para hablar un poco de mi, desde que era solo un niño la tecnología siempre me llamo la atencion,
          Recuerdo que siempre queria saber como funcionaba, se creaban programas o páginas web. A medida que crecía, mi interés por la tecnología fue en aumento.
          Estuve un tiempo en jóvenes programadores, donde descubrí que la programación es lo que mas me gusta hacer.
        </p>
        <p className='text-xl mt-10 text-justify'>
          Lo que realmente me motiva en el campo de la informática es la oportunidad de enfrentar desafíos creativos y encontrar soluciones innovadoras.
          Me encanta pensar fuera de la caja y desarrollar programas que no solo
          funcionen, sino que también sean eficaces. Creo firmemente que la combinación de creatividad y habilidades técnicas es lo que impulsa él progreso de este campo
          en constante evolución.
        </p>

        <p className='text-xl mt-10 text-justify'>
          Me atrae seguir explorando las infinitas posibilidades que ofrece el mundo de la informática, mi objetivo es seguir desarrollando soluciones innovadoras,
          que marquen la diferencia y contribuyan al avance de la tecnología. Estoy comprometido a seguir aprendiendo, creciendo y enfrentando nuevos desafíos.
        </p>
      </div>
    </div>
  )
}

export default SobreMi
