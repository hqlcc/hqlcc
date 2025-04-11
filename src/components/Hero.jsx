import { motion } from "framer-motion";
import icon from "/public/icon.png"; // sua imagem

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex min-h-screen w-full items-center justify-start px-6 md:px-16 text-white"
    >
      <div className="flex flex-col items-start justify-center text-left gap-8 max-w-4xl z-10">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-6xl font-semibold md:text-8xl"
        >
          Henrique Lecce
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent text-2xl md:text-4xl"
        >
          Tech Generalist | Lifelong Learner
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          I’m a passionate developer with a wide range of skills including front-end and
          back-end development, data analysis, cybersecurity, and hardware prototyping. I
          love integrating tech with different sciences, people, and real-world solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-start gap-6 mt-8"
        >
          <a
            href="/about"
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
          >
            More About Me
          </a>
          <a
            href="public/henriqueLecceCV.pdf"
            download
            className="bg-gradient-to-r from-red-500 to-yellow-600 hover:from-red-600 hover:to-yellow-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Imagem decorativa */}
      <motion.img
        src={icon}
        alt="Tech Illustration"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.25, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute hidden lg:block right-10 top-1/2 transform -translate-y-1/2 w-[28rem] pointer-events-none select-none"
      />
    </div>
  );
};

export default Hero;
