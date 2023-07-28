import { FiChevronsDown } from "react-icons/fi";

import nature from "../assets/nature.jpg";

const Hero = () => {
  return (
    <>
      <section className="h-screen w-full relative ">
        <div className="absolute top-1/2 -translate-y-1/2 z-20 w-full ">
          <div className="relative -top-4 w-5/6 mx-auto ">
            <h2 class="animate-fade animate-duration-[2000ms] text-white text-3xl font-semibold mb-2 lg:text-6xl text-center drop-shadow-xl  ">
              Selamat Datang
            </h2>
            <h2 class="animate-fade animate-duration-[2000ms] text-white text-3xl font-semibold md:mb-12 lg:text-5xl text-center ">
              Bumi Perkemahan Gendingan Suryabakti
            </h2>
          </div>
          <div className="relative -bottom-12 ">
            <h3 className="animate-fade-down animate-delay-500 text-accent text-xl mb-2 text-center">
              Jelajahi Kami...
            </h3>
            <div className="animate-fade-down animate-delay-700">
              <FiChevronsDown className=" text-accent w-10 h-10 animate-bounce mx-auto" />
            </div>
          </div>
        </div>
        <div
          className="h-full w-fulll bg-cover bg-center brightness-50 "
          style={{ backgroundImage: `url(${nature})` }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
