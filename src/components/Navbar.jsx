import React, { useState , useEffect} from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window) {
      let windowHeight = window.scrollY;
      windowHeight > 10 ? setStickyClass('bg-white text-nav   border-b-[1px] border-black ') : setStickyClass('relative');
    }
  };

  const [menu, SetMenu] = useState(false);
  const handelchange = () => {
    SetMenu(!menu);
  };
  const CloseMenu = () => {
    SetMenu(false);
  };

  return (
    <div className="fixed w-full z-30 lg:p-0 lg:px-0 lg:pt-0 md:pt-0">
      <div
        className={`flex flex-row justify-between p-5 px-5 font-bold
             ${stickyClass}  `}
      >
        <Link
          to=""
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-600"
        >
          <div className="cursor-pointer pl-6" id="font1">
            HAMZA ADDAMI
          </div>
        </Link>
        <nav className="hidden md:flex flex-row items-center  gap-10">
          <Link
            to=""
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
            id="font1"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
            id="font1"
          >
            About
          </Link>
          <Link
            to=""
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
            id="font1"
          >
            Skills
          </Link>
          <Link
            to=""
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
            id="font1"
          >
            Work
          </Link>
          <Link
            to=""
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
            id="font1"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden flex items-center cursor-pointer">
          {menu ? (
            <AiOutlineClose size={25} onClick={handelchange} color="black" />
          ) : (
            <AiOutlineMenuUnfold
              size={25}
              onClick={handelchange}
              color="black"
            />
          )}
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0 " : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-black text-white left-0 top-30 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to=""
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={CloseMenu}
        >
          Home
        </Link>
        <Link
          to=""
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={CloseMenu}
        >
          About
        </Link>
        <Link
          to=""
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
          to=""
          spy={true}
          smooth={true}
          duration={500}
          className=" cursor-pointer"
          onClick={CloseMenu}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
