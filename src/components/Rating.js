import { useState, useEffect, useRef } from "react";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import nature from "../assets/nature.jpg";
import nature_2 from "../assets/nature_2.jpg";
import nature_3 from "../assets/nature_3.jpg";

const Rating = () => {
  // Data Rating
  const ratings = [
    {
      nama: "Bapak Bagas",
      pekerjaan: "Kepala Desa",
      nilai: 4,
      komentar:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit non debitis, eligendi voluptates iure ad dolor aut tenetur aperiam.",
      foto: nature,
    },
    {
      nama: "Bapak Mahda Dhani",
      pekerjaan: "Kepala Desa",
      nilai: 4,
      komentar:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptas.",
      foto: nature_2,
    },
    {
      nama: "Bapak Dhani",
      pekerjaan: "Kepala Desa",
      nilai: 4,
      komentar:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptas.",
      foto: nature_3,
    },
    {
      nama: "Bapak Daniel",
      pekerjaan: "Kepala Desa",
      nilai: 4,
      komentar:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptas.",
      foto: nature,
    },
    {
      nama: "Bapak Taubatan",
      pekerjaan: "Kepala Desa",
      nilai: 4,
      komentar:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptas.",
      foto: nature_2,
    },
    {
      nama: "Bapak Muhammad",
      pekerjaan: "Kepala Desa",
      nilai: 4,
      komentar:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptas.",
      foto: nature_3,
    },
  ];

  // Component Start
  const starRating = (amount) => {
    const star = [];
    for (let x = 0; x < amount; x++) {
      star.push(
        <span class="w-4">
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
              fill="#F3AE5E"
            />
          </svg>
        </span>
      );
    }
    return (
      <>
        <div className="flex mx-auto justify-center mb-4 ">{star}</div>
      </>
    );
  };

  // Slide comment
  const [curr, setCurr] = useState(0);

  const prevSlide = () => {
    setCurr((prevIndex) =>
      prevIndex === 0 ? ratings.length - 1 : prevIndex - 1
    );
  };

  // Auto Play
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCard = ratings.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCard);
  };
  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 1000);
    return () => {
      clearInterval(autoPlay);
    };
  }, [currentIndex]);

  useEffect(() => {
    // Check if currentIndex has reached the last card, then reset to the first card
    if (currentIndex === totalCard - 3) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 500); // Delay the reset to avoid abrupt change
    }
  }, [currentIndex, totalCard]);

  return (
    <>
      <section id="rating" class=" bg-white md:h-fit">
        <div class="w-full mx-auto py-24 md:py-32 ">
          <h1 class="text-primary font-semibold tracking-wider text-3xl mb-12 text-center">
            Apa Kata Wisatawan?
          </h1>
          <div class="w-5/6 mx-auto relative flex items-center gap-2">
            <div>
              <FiChevronsLeft
                size={60}
                className="text-primary flex justify-end"
              />
            </div>

            <div className="md:w-9/12 relative -left-2 mx-auto flex overflow-x-scroll no-scrollbar md:-left-0">
              <div
                className="flex flex-nowrap gap-8 ml-5 md:ml-2 lg:md-0 md:gap-6 transition-transform duration-300 "
                style={{ transform: `translateX(-${currentIndex * 280}px)` }}
              >
                {ratings.map((value, index) => (
                  <div
                    key={index}
                    className="p-6 bg-secondary drop-shadow-md overflow-hidden min-h-72 w-[400px] lg:w-64 max-w-xs mx-auto"
                  >
                    <div className="flex gap-4 flex-col items-center ">
                      <img
                        className="w-20 h-20 rounded-full mx-auto"
                        src={value.foto}
                        alt={`foto_${index}`}
                      />
                      <div>
                        <h3 className="text-lg w-full font-medium mb-1 text-center">
                          {value.nama}
                        </h3>
                        <h4 className="text-sm font-medium text-primary mb-2 text-center">
                          {value.pekerjaan}
                        </h4>
                        {starRating(value.nilai)}
                      </div>
                    </div>
                    <p className="text-sm">{value.komentar}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <FiChevronsRight
                size={60}
                className="text-primary flex justify-end"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rating;
