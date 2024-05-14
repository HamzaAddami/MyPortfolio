import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import AOS from "aos";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      " Hamza Addami",
      " a UI Developer",
      " a Frontend Developer",
      " a Backend Developer",
    ],
    loop: {},
  });
  
  useEffect(() => {
    AOS.init();
  }, []);
  const IconsStyle =
    "mx-2 text-bg1 font-bold text-4xl hover:text-hover hover:scale-125 duration-500 ";
  return (
    <header
      style={{ height: "600px" }}
      className="bg-nav xl:py-48 max-sm:pt-16 "
    >
      <div className="container flex flex-col items-center px-4 space-y-0 text-center md:px-6 md:flex-row md:space-y-0 lg:space-x-12">
        <div className="space-y-2 md:py-12">
          <h1
            className="text-3xl mt-8 font-bold tracking-tighter sm:text-4xl md:text-4xl lg:text-6xl/none text-bg1"
            id="font"
          >
            Hello, I'm
            <span className="text-hover">{text}</span>
            <Cursor cursorColor="#00ADB5" />
          </h1>
          <p className="mx-auto max-w-[700px] text- md:text-xl dark:text-gray-400">
            Web Developer / building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </p>
          <div className="pt-5 flex justify-center">
            <Link
              to="contact"
              spy={false}
              smooth={true}
              duration={500}
              id="milies"
              class="cursor-pointer flex justify-between bg-hover px-3 py-2 rounded-full text-bg1 tracking-wider shadow-xl hover:text-white hover:bg-hover hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
            >
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 animate-bounce"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="pt-8 flex flex-row justify-center items-center">
            <a
              href="https://www.linkedin.com/in/hamza-addami-977510264/"
              className={IconsStyle}
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/HamzaAddami" className={IconsStyle}>
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/snopow_89/?igsh=OXlrMGxlYmoyZHZq&utm_source=qr"
              className={IconsStyle}
            >
              <FaInstagram />
            </a>
            <a href="https://wa.me/+212637597869" className={IconsStyle}>
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="w-full max-w-sm ">
          <img
            alt="Hero"
            className="mx-auto aspect-square rounded-xl object-cover object-center overflow-hidden shad-bg-gray-200"
            height="400"
            src="public/Pictures/PPP.png"
            width="400"
          />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-10 max-sm:hidden"
        
        > 
        <path
          fill="#222831"
          fillOpacity="1"
          d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,74.7C840,64,960,64,1080,85.3C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </header>
  );
};

export default Hero;
