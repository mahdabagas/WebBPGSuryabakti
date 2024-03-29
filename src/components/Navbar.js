import { useState, useEffect } from "react";
import BPGSuryabakti from "./../assets/BPGSuryabakti.png";
import { FiMenu, FiX } from "react-icons/fi";

// import gambar
import logoWa from "../assets/logo_wa.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 75) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Attach the 'handleScroll' function to the 'scroll' event
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup: Remove the 'handleScroll' function from the 'scroll' event
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        id="navbar"
        class={`${
          scrolled
            ? "bg-primary md:bg-primary/80 sticky top-0 backdrop-blur-sm"
            : "bg-primary/10  absolute top-0"
        } w-full z-40 flex items-center transition-colors duration-100 `}
      >
        <div class="w-5/6 flex justify-between items-center mx-auto text-white ">
          <a className="flex items-center gap-2 cursor-pointer" href="#home">
            <div className="h-14 w-14 ">
              <img
                src={BPGSuryabakti}
                alt="logo"
                className="w-full h-full bg-cover bg-center"
              />
            </div>
            <h1 className="md:text-xl">BPG Suryabakti</h1>
          </a>
          <div className="lg:hidden">
            <button
              className={`${
                open ? "hidden" : "block"
              } text-white focus:outline-none focus:text-white`}
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              <FiMenu className="w-7 h-7" />
            </button>
            <button
              className={`${
                open ? "block" : "hidden"
              } text-white focus:outline-none focus:text-white`}
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              <FiX className="w-7 h-7" />
            </button>
          </div>
          {/* Tampilan lg */}
          <nav class="hidden gap-9 lg:flex h-full items-center p-4 text-lg  justify-end">
            <div className="hover:border-b-2 hover:text-accent border-accent duration-100 cursor-pointer">
              <a href="#about">About</a>
            </div>
            <div className="hover:border-b-2 hover:text-accent border-accent duration-100 cursor-pointer">
              <a href="#layanan">Layanan</a>
            </div>
            <div className="hover:border-b-2 hover:text-accent border-accent duration-100 cursor-pointer">
              <a href="#galeri">Galeri</a>
            </div>
            <div className="hover:border-b-2 hover:text-accent border-accent duration-100 cursor-pointer">
              <a href="#maps">Maps</a>
            </div>
            <div className="hover:border-b-2 hover:text-accent border-accent duration-100 cursor-pointer">
              <a href="#rating">Rating</a>
            </div>
            <p className="hover:border-b-2 hover:text-accent border-accent duration-100 cursor-pointer">
              <a href="#faq">FAQ</a>
            </p>
          </nav>
        </div>
        <div className={`${open ? "block" : "hidden"} lg:hidden`}>
          <div className="text-white w-1/3 h-fit absolute right-10 top-[58px] p-1 flex flex-col items-center gap-1 rounded-md">
            <a
              href="#about"
              className="block bg-primary font-medium text-center w-full h-full rounded-md p-2"
            >
              About
            </a>
            <a
              href="#layanan"
              className="block bg-primary font-medium text-center w-full h-full rounded-md p-2"
            >
              Layanan
            </a>
            <a
              href="#galeri"
              className="block bg-primary font-medium text-center w-full h-full rounded-md p-2"
            >
              Galeri
            </a>
            <a
              href="#maps"
              className="block bg-primary  font-medium  text-center w-full h-full rounded-md p-2"
            >
              Maps
            </a>
            <a
              href="#rating"
              className="block bg-primary font-medium  text-center w-full h-full rounded-md p-2"
            >
              Rating
            </a>
            <a
              href="#faq"
              className="block bg-primary font-medium  text-center w-full h-full rounded-md p-2"
            >
              FAQ
            </a>
          </div>
        </div>
      </header>
      <div className=" fixed z-50 bottom-3 right-5 bg-white w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center rounded-full p-1 md:p-2 lg:p-4 drop-shadow-lg border-2 border-primary">
        <a href="https://wa.me/62858608154719" target="_blank" rel="noreferrer">
          <img
            src={logoWa}
            alt=""
            className="object-cover object-center w-ful h-full"
          />
        </a>
      </div>
    </>
  );
};

export default Navbar;
