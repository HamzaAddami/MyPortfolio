import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Img from '../assets/Pictures/profile-img.png';
import { animate, motion} from "framer-motion";
 
const textVariante = {
  initial: {
    x:-500,
    opacity:0,
  },
  animate: {
    x:0,
    opacity:1,
    transition: {
      duration:1.1,
      staggerChildren:0.1,
    }
  }
}
const ImgVariante = {
  initial: {
    y:-600,
    opacity:0,
  },
  animate: {
    y:0,
    opacity:1,
    transition: {
      duration:1.1,
      staggerChildren:0.1,
    }
  }
}




const Hero = () => {
  return (
    <div className="max-w-full bg-bg1  flex flex-col md:flex-row ">
      <motion.div className="w-full md:w-1/2 md:text-left p-6 pt-24  lg:p-10 text-center  lg:text-left" variants={textVariante} initial="initial" animate="animate" >
        <h1 id="font" className="text-black font-semibold text-4xl md:text-6xl leading-normal lg:pt-24 lg:relative lg:left-20 lg:leading-normal "  >
          Hi, <br />I'm <span className="font-bold text-blue-900">Hamza</span><br />
          FullStack Developer
        </h1>
        <button className="text-white bg-blue-600 lg:ml-20 mt-6 border border-blue-400 rounded-lg px-20 p-2 hover:bg-blue-400 hover:font-bold text-center cursor-pointer transition-[0.4s]  
        rounded-[9px] border-[none] hover:shadow-[4px_4px_50px_-20px_#1E90FF] active:shadow-[4px_4px_80px_-10px_#1E90FF] active:scale-[0.5]" id="font1" >Contact</button>
        <div className="flex justifey-center ml-20 md:justify-start  gap-4 m-auto mt-7 m-auto text-black" >
          <FaLinkedinIn className="cursor-pointer hover:text-blue-500 text-4xl " />
          <FaGithub className="cursor-pointer hover:text-gray-400 text-4xl " />
          <FaInstagram className="cursor-pointer hover:text-red-400 text-4xl" />
          <FaWhatsapp className="cursor-pointer hover:text-green-500 text-4xl " />
        </div>
      </motion.div>
      <div className="w-full md:w-1/2" >
        <motion.img src={Img} className="md:pt-14" alt="Profile" variants={ImgVariante} animate='animate' initial='initial'/>
      </div>
    </div>
  );
};

export default Hero;
