import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("relative");
  const [navItime, setnavItem] = useState("text-white");
  const [icon, setIcon] = useState("white");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window) {
      let windowHeight = window.scrollY;
      windowHeight > 10
        ? setStickyClass("bg-bg1 bg-opacity-90 text-nav drop-shadow-2xl") &
          setnavItem("text-nav") &
          setIcon("black")
        : setStickyClass("relative") &
          setnavItem("text-white") &
          setIcon("white");
    }
  };

  const [menu, SetMenu] = useState(false);
  const handelchange = () => {
    SetMenu(!menu);
  };
  const CloseMenu = () => {
    SetMenu(false);
  };
  const NavbarItem = `cursor-pointer text-hover font-smbold hover:text-hover hover:scale-125 duration-500 `;
  return (
    <nav className="fixed w-full z-30 lg:p-0 lg:px-0 lg:pt-0 md:pt-0 X">
      <div
        className={`flex flex-row justify-between p-5 px-5   
             ${stickyClass}  `}
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className={NavbarItem}
        >
          <div className="cursor-pointer pl-6 text-xl" id="milies">
            <span className={`${navItime}`}>HAMZA </span>ADDAMI
          </div>
        </Link>
        <nav className="hidden md:flex flex-row items-center font-sm-bold text-xl  gap-10">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className={NavbarItem}
            id="milies"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={NavbarItem}
            id="milies"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className={NavbarItem}
            id="milies"
          >
            Skills
          </Link>
          <Link
            to=""
            spy={true}
            smooth={true}
            duration={500}
            className={NavbarItem}
            id="milies"
          >
            Work
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={NavbarItem}
            id="milies"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden flex items-center cursor-pointer">
          {menu ? (
            <AiOutlineClose size={25} onClick={handelchange} color={icon} />
          ) : (
            <AiOutlineMenuUnfold
              size={25}
              onClick={handelchange}
              color={icon}
            />
          )}
        </div>
      </div>
      <div
        id="font"
        className={` ${
          menu ? "translate-x-0 " : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-nav text-white left-0 top-12 font-semibold text-2xl 
          text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={CloseMenu}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={CloseMenu}
        >
          About
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={CloseMenu}
        >
          Skills
        </Link>
        <Link
          to=""
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={CloseMenu}
        >
          Work
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className=" cursor-pointer"
          onClick={CloseMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
