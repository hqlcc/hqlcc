
import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  }

  return (

    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdorp-blur-md md:justify-evenly">

      <div className="flex items-center">
        <img src="logo.png" alt="" className="h-10 w-auto" />
      </div>
      <ul className="hidden md:flex gap-10">

        <a href="#home" className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>

        <a href="#tech" className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100">
          <li>Tech</li>
        </a>

        <a href="#projects" className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>

        <a href="#contact" className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100">
          <li>Contact</li>
        </a>

      </ul>

      <ul className="hidden md:flex gap-5">

        <a href="https://www.linkedin.com/in/henrique-lecce-311a45234/" target="_blank" rel="noopener noreferrer">
          
          <li className="cursor-pointer text-xl opacity-70 
            transition-all duration-300 hover:text-blue-500
            hover:opacity-100">
            <BsLinkedin />
          </li>

        </a>

        <a href="https://github.com/hqlcc" target="_blank" rel="noopener noreferrer">
          
          <li className="cursor-pointer text-xl opacity-70 
            transition-all duration-300 hover:text-purple-500
            hover:opacity-100">
            <BsGithub />
          </li>

        </a>

        <a href="https://www.instagram.com/hq.lcc/" target="_blank" rel="noopener noreferrer">
          
          <li className="cursor-pointer text-xl opacity-70 
            transition-all duration-300 hover:text-red-500
            hover:opacity-100">
            <BsInstagram />
          </li>

        </a>

      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen}/> 
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen}/>
      )}

      {isOpen && (

        <div className={'fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpnen ? "block" : "hidden"} '}>

            <ul className="flex flex-col gap-8">

              <a href="#home" className="cursor-pointer opacity-70
              transition-all duration-300 hover:opacity-100">
                <li>Home</li>
              </a>

              <a href="#tech" className="cursor-pointer opacity-70
              transition-all duration-300 hover:opacity-100">
                <li>Tech</li>
              </a>

              <a href="#projects" className="cursor-pointer opacity-70
              transition-all duration-300 hover:opacity-100">
                <li>Projects</li>
              </a>

              <a href="#contact" className="cursor-pointer opacity-70
              transition-all duration-300 hover:opacity-100">
                <li>Contact</li>
              </a>

            </ul>

            <ul className="flex flex-wrap gap-5">

              <a href="https://www.linkedin.com/in/henrique-lecce-311a45234/" target="_blank" rel="noopener noreferrer">
                
                <li className="cursor-pointer text-xl opacity-70 
                  transition-all duration-300 hover:text-blue-500
                  hover:opacity-100">
                  <BsLinkedin />
                </li>

              </a>

              <a href="https://github.com/hqlcc" target="_blank" rel="noopener noreferrer">
                
                <li className="cursor-pointer text-xl opacity-70 
                  transition-all duration-300 hover:text-purple-500
                  hover:opacity-100">
                  <BsGithub />
                </li>

              </a>

              <a href="https://www.instagram.com/hq.lcc/" target="_blank" rel="noopener noreferrer">
                
                <li className="cursor-pointer text-xl opacity-70 
                  transition-all duration-300 hover:text-red-500
                  hover:opacity-100">
                  <BsInstagram />
                </li>

              </a>

            </ul>

        </div>

      )}
      
    </nav>

  )
  
}

export default Navbar
