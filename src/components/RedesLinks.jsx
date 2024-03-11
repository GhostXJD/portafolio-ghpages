import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { GrDocumentText } from "react-icons/gr";

function RedesLinks() {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/javierdiaziturra/",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/GhostXJD",
    },
    {
      id: 3,
      child: (
        <>
          Gmail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:javierjditurra@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          CV <GrDocumentText size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/12mY7jZkR8ql_BB9LsMwqoPsT7ZOnaMaP/view?usp=sharing",
    },
  ];

  return (
    <>
      {/* Barra de redes sociales para pantallas grandes */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({id, child, href, download}) => (
            <li key={id} className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-purple-900">
              <a href={href} className="flex justify-between items-center w-full text-white" download={download} target='_blank' rel="noreferrer">
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Barra de redes sociales para pantallas pequeñas */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-purple-900">
        <ul className="flex justify-around p-4">
          {links.map(({id, child, href, download}) => (
            <li key={id} className="mx-2">
              <a href={href} className="text-white" download={download} target='_blank' rel="noreferrer">
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default RedesLinks;
