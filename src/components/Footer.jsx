import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const IconStyle =
    "cursor-pointer hover:scale-125 duration-500 text-hover font-bold text-6xl items-center mr-2 p-3";
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg my-1 mb-2 text-gray-700">
              Find me on any of these platforms.
            </h5>
            <div className="mt-6 flex">
              <a href="https://www.linkedin.com/in/hamza-addami-977510264/">
                <FaLinkedinIn className={IconStyle} />
              </a>
              <a href="https://github.com/HamzaAddami">
                <FaGithub className={IconStyle} />
              </a>
              <a href="https://www.instagram.com/snopow_89/?igsh=OXlrMGxlYmoyZHZq&utm_source=qr">
                <FaInstagram className={IconStyle} />
              </a>
              <a href="https://wa.me/+212637597869">
                <FaWhatsapp className={IconStyle} />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled ">
                  <li>
                    <Link
                      className="cursor-pointer hover:scale-y-125 duration-300 text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      to="about"
                      smooth={true}
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="cursor-pointer hover:scale-y-125 duration-300 text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      to="skills"
                      smooth={true}
                    >
                      My Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="cursor-pointer hover:scale-y-125 duration-300 text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      to="work"
                      smooth={true}
                    >
                      Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="cursor-pointer hover:scale-y-125 duration-300 text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      to="contact"
                      smooth={true}
                    >
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Realised by Hamza Addami.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
