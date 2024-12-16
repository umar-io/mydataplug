import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import NavBrand from "../assets/3050337-200.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavState = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-[100000] flex justify-between items-center h-[70px] lg:px-[70px] px-[35px] text-[white] transition-all duration-300 ${
        isScrolled ? "bg-[#FA811C] shadow-xl" : "lg:bg-transparent bg-[#FA811C]"
      } shadow-2xl-[#fff]`}
    >
      <div className="w-[20%]">
        <img src={NavBrand} alt="" className="w-[50px]" />
      </div>
      <nav className="w-[80%] lg:flex hidden justify-end items-center gap-[40px]">
        <Link to="#">About</Link>
        <Link to="#">Blog</Link>
        <Link to="#">Contact Us</Link>
        <Link to="/login">Login</Link>
        <motion.div
          whileTap={{
            scale: 0.8,
          }}
          whileHover={{
            scale: 1.04,
          }}
          transition={{
            duration: 0.3,
          }}
          to="/register"
          className={`btn ${
            isScrolled ? "bg-black" : "bg-[#FA811C] shadow-md"
          } shadow-md px-4 py-2 rounded text-white cursor-pointer`}
        >
          Get Started
        </motion.div>
      </nav>
      <div
        className="lg:hidden flex w-[20%] justify-end"
        onClick={handleNavState}
      >
        {isOpen ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </>
        )}
      </div>
      <div
        className="lg:hidden flex flex-col gap-6 fixed top-[70px] right-0 bg-[#916750] w-full h-screen justify-start pt-8 items-center z-50 ease-in-out duration-300"
        style={{
          display: isOpen ? "flex" : "none",
          borderTop: "1px solid white",
        }}
      >
        <Link onClick={closeMobileMenu} to="#about">
          About
        </Link>
        <Link onClick={closeMobileMenu} to="#">
          Blog
        </Link>
        <Link onClick={closeMobileMenu} to="#">
          Contact Us
        </Link>

        <Link
          to="/register"
          className="btn bg-[#FA811C] shadow-md px-4 py-2 rounded text-white ease-in-out transition-all hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
