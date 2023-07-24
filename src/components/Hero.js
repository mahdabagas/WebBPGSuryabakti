import nature from "../assets/nature.jpg";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`h-screen bg-[url(http://localhost:3000/nature.jpg)] bg-cover bg-center flex justify-center w-full items-center  `}
      >
        <div className="w-5/6 md:text-center">
          <h1 class="text-white text-4xl leading-normal font-semibold mb-4 lg:text-5xl">
            Bumi Perkemahan Gendingan Suryabakti
          </h1>
          <button class="bg-accent font-poppins rounded-[10px] p-2 text-white">
            Selengkapnya
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
