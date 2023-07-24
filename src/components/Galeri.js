import { useState } from "react";
import nature from "../assets/nature.jpg";

const images = [nature, nature, nature];

const Galeri = () => {
  const [curr, setCurr] = useState(0);

  const prevSlide = () => {
    setCurr((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSledi = () => {
    setCurr((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section class="h-screen bg-white md:h-fit">
        <div class="w-5/6 mx-auto pt-14 md:py-24">
          <h1 class="text-primary font-medium text-3xl mb-12 text-center">
            Potret Pesona Bumi Perkemahan Gendingan Suryabakti
          </h1>
          {/* Untuk screen lg atau laptop */}
          <div className="hidden lg:block px-12">
            <div className="grid grid-cols-5 grid-rows-2 gap-4 justify-items-strecth">
              <div className="col-span-2 max-h-56">
                <img
                  className="h-full w-full object-cover object-center border-2 border-primary rounded-xl"
                  src={nature}
                  alt=""
                />
              </div>
              <div className="col-span-2 max-h-56">
                <img
                  className="h-full w-full object-cover object-center border-2 border-primary rounded-xl"
                  src={nature}
                  alt=""
                />
              </div>
              <div className="col-span-1 max-h-56">
                <img
                  className="h-full w-full object-cover object-center border-2 border-primary rounded-xl"
                  src={nature}
                  alt=""
                />
              </div>
              <div className="col-span-1 max-h-56">
                <img
                  className="h-full w-full object-cover object-center border-2 border-primary rounded-xl"
                  src={nature}
                  alt=""
                />
              </div>
              <div className="col-span-2 max-h-56">
                <img
                  className="h-full w-full object-cover object-center border-2 border-primary rounded-xl"
                  src={nature}
                  alt=""
                />
              </div>
              <div className="col-span-2 max-h-56">
                <img
                  className="h-full w-full object-cover object-center border-2 border-primary rounded-xl"
                  src={nature}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Untuk screen sm dan md atau hp dan tablet */}
          <div className="mx-auto lg:hidden">
            <div class="max-w-lg mx-auto relative px-4">
              <button class="absolute -left-5 top-1/2 -translate-y-1/2 md:-left-8" onClick={prevSlide}>
                <svg
                  width="48"
                  height="80"
                  viewBox="0 0 48 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.8238 38.6206L17.8867 26.5516L27.8238 14.4827"
                    stroke="#018577"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    transform="scale(1.3)"
                  />
                </svg>
              </button>
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {images.map((image, index) => {
                  <img
                    class="rounded-2xl border-4 border-white"
                    src={image}
                    alt="galeri"
                  />;
                })}
              </div>
              <img
                class="rounded-2xl border-4 border-white"
                src={nature}
                alt="galeri"
              />
              <span class="absolute -right-5 top-1/2 -translate-y-1/2 scale-x-[-1] md:-right-8">
                <svg
                  width="48"
                  height="80"
                  viewBox="0 0 48 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.8238 38.6206L17.8867 26.5516L27.8238 14.4827"
                    stroke="#018577"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    transform="scale(1.3)"
                  />
                </svg>
              </span>
            </div>
            <div class="max-w-lg mx-auto px-4">
              <svg
                viewBox="0 0 328 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="328"
                  height="97"
                  rx="20"
                  fill="url(#paint0_linear_55_807)"
                  fill-opacity="0.3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_55_807"
                    x1="164"
                    y1="0"
                    x2="164"
                    y2="97"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#018577" />
                    <stop
                      offset="0.623475"
                      stop-color="#018577"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Galeri;
