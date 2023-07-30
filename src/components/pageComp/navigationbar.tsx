import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/svg/logo3.svg";
import "../../index.css";
import * as bi from "react-icons/bi";
import Images from "../../assets";

const Navigationbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavExpand, setIsNavExpand] = useState(false);
  const toggleNav = () => {
    setIsNavExpand(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Add or remove the 'scrolled' state based on the scroll position
      if (scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the 'scroll' event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`z-50 flex phone:flex-col phone:px-5 laptop:flex-row laptop:px-36 justify-between laptop:items-center gap-3 py-5 bg-white w-full fixed transition-shadow font-semibold ${
        isScrolled && "shadow-md"
      }`}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <div className="w-[50px]" onClick={goTop}>
          <img src={Images.sav} alt="" />
        </div>
        <div className="laptop:hidden">
          <bi.BiMenuAltRight
            className="text-4xl hover:text-purple-500"
            onClick={() => setIsNavExpand(!isNavExpand)}
          />
        </div>
      </div>
      <div
        className={`flex transition-all duration-300 ease-in-out  phone:flex-col  phone:gap-3 laptop:flex-row  laptop:gap-10 items-center ${
          isNavExpand
            ? "max-h-screen phone:py-5"
            : "max-h-0 overflow-hidden laptop:overflow-visible"
        }`}
      >
        <Link
          className="cursor-pointer flex items-center gap-1"
          smooth={true}
          spy={true}
          to="home"
          onClick={toggleNav}
        >
          Home
        </Link>
        <Link
          className="cursor-pointer flex items-center gap-1"
          smooth={true}
          spy={true}
          to="about"
          onClick={toggleNav}
        >
          About
        </Link>
        <Link
          className="cursor-pointer flex items-center gap-1"
          smooth={true}
          spy={true}
          to="skill"
          onClick={toggleNav}
        >
          Skills
        </Link>
        <Link
          className="cursor-pointer flex items-center gap-1"
          smooth={true}
          spy={true}
          to="project"
          onClick={toggleNav}
        >
          Project
        </Link>
        <Link
          className="cursor-pointer flex items-center gap-1"
          smooth={true}
          spy={true}
          to="contact"
          onClick={toggleNav}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navigationbar;
