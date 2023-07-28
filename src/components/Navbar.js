import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
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
        class={`${
          scrolled ? "bg-primary md:bg-primary/80" : "bg-primary/20"
        } fixed z-50 w-full h-12 md:h-14 flex items-center transition-colors duration-100`}
      >
        <div class="w-5/6 flex justify-between items-center mx-auto text-white relative">
          <h1 className="text-2xl"><a href="#">GENDINGAN</a></h1>
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
          <nav class="hidden gap-9 lg:flex h-full items-center p-4 text-lg w-full justify-end">
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
    </>
  );
};

export default Navbar;
