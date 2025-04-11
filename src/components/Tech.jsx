import {
  BiLogoBootstrap, BiLogoCPlusPlus, BiLogoCss3, BiLogoDocker, BiLogoHtml5,
  BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql,
  BiLogoPython, BiLogoReact, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript
} from 'react-icons/bi';

import {
  SiMysql, SiMongodb, SiGit, SiKalilinux, SiNeo4J,
  SiExpress, SiDotnet, SiFigma, SiAdobephotoshop, SiR, SiGnubash,
  SiRaspberrypi, SiArduino, SiVisualstudiocode, SiCisco, SiFlask, SiApache,
  SiDocker, SiKubernetes, SiTerraform, SiPostman, SiBlender
} from 'react-icons/si';

import { DiAws } from 'react-icons/di';
import { motion } from 'framer-motion';

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const iconClass = "cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 hover:scale-125 sm:text-[100px] md:text-[120px]";

  return (
    <div id="tech" className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32'>
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      {/* Programming Languages */}
      <div className="w-full px-5">
        <h2 className="text-2xl text-white mb-5 text-center">Programming Languages</h2>
        <div className="flex flex-wrap justify-center gap-10">
        <BiLogoJava title="Java" className={`${iconClass} text-red-500`} />
          <BiLogoPython title="Python" className={`${iconClass} text-yellow-400`} />
          <BiLogoJavascript title="JavaScript" className={`${iconClass} text-yellow-300`} />
          <SiGnubash title="Bash" className={`${iconClass} text-gray-300`} />
          <BiLogoTypescript title="TypeScript" className={`${iconClass} text-blue-400`} />
          <SiR title="R" className={`${iconClass} text-blue-500`} />
          <BiLogoCPlusPlus title="C++" className={`${iconClass} text-blue-600`} />
        </div>
      </div>

      {/* Back-End */}
      <div className="w-full px-5">
        <h2 className="text-2xl text-white mb-5 text-center">Back-End</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <SiDotnet title=".NET" className={`${iconClass} text-purple-500`} />
          <BiLogoNodejs title="Node.js" className={`${iconClass} text-green-600`} />
          <BiLogoSpringBoot title="Spring Boot" className={`${iconClass} text-green-500`} />
          <SiFlask title="Flask" className={`${iconClass} text-gray-200`} />
          <SiExpress title="Express.js" className={`${iconClass} text-gray-400`} />
          <SiApache title="Apache" className={`${iconClass} text-red-500`} />
        </div>
      </div>

      {/* Databases */}
      <div className="w-full px-5">
        <h2 className="text-2xl text-white mb-5 text-center">Databases</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <SiMysql title="MySQL" className={`${iconClass} text-orange-500`} />
          <BiLogoPostgresql title="PostgreSQL" className={`${iconClass} text-blue-600`} />
          <SiNeo4J title="Neo4j" className={`${iconClass} text-blue-400`} />
          <SiMongodb title="MongoDB" className={`${iconClass} text-green-500`} />
        </div>
      </div>

      {/* DevOps / Tools */}
      <div className="w-full px-5">
        <h2 className="text-2xl text-white mb-5 text-center">DevOps / Tools</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <SiDocker title="Docker" className={`${iconClass} text-blue-500`} />     
          <SiKalilinux title="Kali Linux" className={`${iconClass} text-blue-400`} />    
          <SiKubernetes title="Kubernetes" className={`${iconClass} text-blue-600`} /> 
          <SiTerraform title="Terraform" className={`${iconClass} text-purple-500`} />
          <SiGit title="Git" className={`${iconClass} text-red-500`} />
          <DiAws title="AWS" className={`${iconClass} text-orange-600`} />
          <SiPostman title="Postman" className={`${iconClass} text-orange-500`} />
          
        </div>
      </div>

      {/* Front-End */}
      <div className="w-full px-5">
        <h2 className="text-2xl text-white mb-5 text-center">Front-End</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <BiLogoReact title="React" className={`${iconClass} text-sky-500`} />
          <BiLogoTailwindCss title="Tailwind CSS" className={`${iconClass} text-cyan-400`} />
          <BiLogoBootstrap title="Bootstrap" className={`${iconClass} text-purple-500`} />
          <BiLogoHtml5 title="HTML5" className={`${iconClass} text-orange-500`} />
          <BiLogoCss3 title="CSS3" className={`${iconClass} text-blue-500`} />
        </div>
      </div>

      {/* Design */}
      <div className="w-full px-5">
        <h2 className="text-2xl text-white mb-5 text-center">UX/UI | Design</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <SiFigma title="Figma" className={`${iconClass} text-pink-400`} />
          <SiAdobephotoshop title="Photoshop" className={`${iconClass} text-blue-400`} />
          <SiBlender title="Blender" className={`${iconClass} text-orange-500`} />
        </div>
      </div>

      {/* Infra / Hardware */}
      <div className="w-full px-5">
        <h2 className="text-2xl text-white mb-5 text-center">Infra / Hardware</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <SiArduino title="Arduino" className={`${iconClass} text-cyan-400`} />
          <SiRaspberrypi title="Raspberry Pi" className={`${iconClass} text-red-500`} />
          <SiCisco title="Cisco" className={`${iconClass} text-blue-700`} />
        </div>
      </div>
    </div>
  );
};

export default Tech;
