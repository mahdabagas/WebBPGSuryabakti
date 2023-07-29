import { useState, useEffect } from "react";
import Media from "react-media";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// Gambar
import galeri_1 from "../assets/galeri_1.jpg";
import galeri_2 from "../assets/galeri_2.jpg";
import galeri_3 from "../assets/galeri_3.jpg";
import galeri_4 from "../assets/galeri_4.jpg";
import galeri_5 from "../assets/galeri_5.jpg";
import galeri_6 from "../assets/galeri_6.jpg";

const images = [galeri_4, galeri_6, galeri_1, galeri_2, galeri_5, galeri_3];

const Galeri = () => {
  const [curr, setCurr] = useState(0);

  const prevSlide = () => {
    setCurr((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurr((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Init AOS
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <section id="galeri" class=" bg-white md:h-fit">
        <div class="w-5/6 mx-auto py-24 md:py-24">
          <h1 class="text-primary font-semibold tracking-wider text-3xl mb-12 text-center">
            Potret Pesona Bumi Perkemahan Gendingan Suryabakti
          </h1>
          <Media query="(min-width: 1024px)">
            {(matches) => {
              return matches ? (
                <div className="grid grid-cols-5 grid-rows-2 gap-4 justify-items-strecth">
                  {images.map((value, index) => {
                    return (
                      <>
                        <div
                          className={`${
                            index === 2 || index === 3
                              ? "col-span-1"
                              : "col-span-2"
                          } max-h-56 hover:drop-shadow-lg duration-150`}
                          data-aos={index < 3 ? "flip-left" : "flip-right"}
                          data-aos-easing="ease"
                          data-aos-duration="1500"
                          data-aos-anchor-placement="bottom-bottom"
                        >
                          <img
                            className="h-full w-full object-cover hover:scale-105 duration-300 object-center border-2 border-primary rounded-xl"
                            src={value}
                            alt={`galeri_${index}`}
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              ) : (
                <div className="mx-auto">
                  <div class="max-w-xl mx-auto relative md:px-4 ">
                    <button
                      class="absolute -left-5 top-1/2 -translate-y-1/2 md:-left-8 z-20"
                      onClick={prevSlide}
                    >
                      <FiChevronLeft size={60} className="text-primary" />
                    </button>
                    <div className="relative  mx-auto overflow-hidden">
                      <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${curr * 100}%)` }}
                      >
                        {images.map((image, index) => {
                          return (
                            <>
                              <img
                                key={index}
                                class=" rounded-2xl border-4 border-white inline-block"
                                src={image}
                                alt="galeri"
                              />
                            </>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      class="absolute -right-5 top-1/2 -translate-y-1/2  md:-right-8"
                      onClick={nextSlide}
                    >
                      <FiChevronRight size={60} className="text-primary" />
                    </button>
                  </div>
                </div>
              );
            }}
          </Media>
        </div>
      </section>
    </>
  );
};

export default Galeri;
