
import { Link } from "react-router-dom"
import image from "/public/image.jpg"
import { motion } from "framer-motion"

const Hero = () => {

  return (

    <div id="home" className='px-16 flex min-h-screen w-full items-center justify-center py-28'>

      <div className='flex flex-col xl:flex-row items-center justify-center gap-10 text-white'>

        {/* Texto e Botões */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex max-w-[600px] flex-col items-center xl:items-start justify-center gap-3 text-center'
        >
          <h1 className="bg-gradient-to-r from-green-500 to-blue-500 
            bg-clip-text text-transparent text-5xl font-light md:text-7xl">Henrique Lecce</h1>
          <h3 className="bg-gradient-to-r from-indigo-500 to-red-500 
            bg-clip-text text-transparent text-2xl md:text-3xl">Developer</h3>
          <p className='md:text-base text-pretty text-sm text-gray-400'>I'm a passionate tech professional with a broad skill set in front-end and back-end development, data analysis, cybersecurity, and hardware prototyping. My work is driven by curiosity, science, and a desire to bridge technology with meaningful, real-world applications.</p>
          
          {/* Botões */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 mt-4"
          >
            <a href="/about" className="bg-gradient-to-r from-red-500 to-orange-500 hover:bg-gradient-to-r from-red-700 to-orange-700 hover:translate-y-3 text-white px-6 py-2 rounded-full transition-all duration-300">
              More About Me
            </a>
            <a href="public/henriqueLecceCV.pdf" download className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:bg-gradient-to-r from-orange-700 to-yellow-700 hover:translate-y-3 text-white px-6 py-2 rounded-full transition-all duration-300">
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

    </div>

  )
  
}

export default Hero
