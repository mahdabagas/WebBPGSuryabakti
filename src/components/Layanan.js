import { useEffect, useState } from "react";
import Media from "react-media";
import Aos from "aos";
import "aos/dist/aos.css";

// Gambar
import nature from "../assets/nature.jpg";
import nature_2 from "../assets/nature_2.jpg";
import nature_3 from "../assets/nature_3.jpg";
import nature_4 from "../assets/nature_4.jpg";

const Layanan = () => {
  // Memebuat Animasi bergerak
  const [curr, setCurr] = useState(1);

  const getRandomNumber = () => {
    const random = Math.floor(Math.random() * 4);
    setCurr(random);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getRandomNumber();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getImageUrl = () => {
    if (curr === 0) {
      return nature;
    } else if (curr === 1) {
      return nature_2;
    } else if (curr === 2) {
      return nature_3;
    } else if (curr === 3) {
      return nature_4;
    }
    return nature;
  };

  // Data Layanan Bumer Gendingan Suryabakti
  const layanan = [
    {
      judul: "Kolam Renang",
      deskripsi:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem facilis incidunt.",
      gambar: nature,
    },
    {
      judul: "Penyewaan lahan Bumi Perkemahan",
      deskripsi:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem facilis incidunt.",
      gambar: nature_2,
    },
    {
      judul: "Penyewaan tenda",
      deskripsi:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem facilis incidunt.",
      gambar: nature_3,
    },
    {
      judul: "Kolam Ikan",
      deskripsi:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem facilis incidunt.",
      gambar: nature_4,
    },
  ];

  // Style Css
  const card =
    "bg-white p-4 h-full mx-auto rounded-2xl border-primary drop-shadow-lg duration-200 cursor-pointer hover:scale-110";

  // Init AOS
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <section id="layanan" class=" bg-secondary md:h-fit">
        <div class="w-5/6 mx-auto py-24 md:py-32">
          <h1 class="text-primary font-semibold tracking-wider text-3xl mb-12 text-center">
            Apa yang ada di Bumi Perkemahan Gendingan Suryabakti
          </h1>
          <Media query="(min-width: 1024px)">
            {(matches) => {
              return matches ? (
                <div className="flex gap-2 justify-center items-strecth">
                  <div
                    className="basis-1/4 flex flex-col justify-between gap-10 "
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-anchor-placement="center-bottom"
                  >
                    {layanan.map((value, index) => {
                      if (index < 2) {
                        return (
                          <>
                            <div
                              key={index}
                              onClick={() => setCurr(index)}
                              className={`${
                                curr === index && "border-b-4"
                              } ${card}`}
                            >
                              <h3 className="font-medium mb-2">
                                {value.judul}
                              </h3>
                              <p>{value.deskripsi}</p>
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                  <div
                    className="basis-2/4 flex items-center p-6 h-96 "
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    <img
                      src={getImageUrl()}
                      alt="layanan"
                      className="rounded-xl border-4 border-white object-cover w-full h-full object-center duration-300 "
                    />
                  </div>
                  <div
                    className="basis-1/4 flex flex-col justify-between gap-10 "
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-anchor-placement="center-bottom"
                  >
                    {layanan.map((value, index) => {
                      if (index >= 2) {
                        return (
                          <>
                            <div
                              key={index}
                              onClick={() => setCurr(index)}
                              className={`${
                                curr === index && "border-b-4"
                              } ${card}`}
                            >
                              <h3 className="font-medium mb-2">
                                {value.judul}
                              </h3>
                              <p>{value.deskripsi}</p>
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                </div>
              ) : (
                <div class="text-black flex flex-col gap-8">
                  {layanan.map((value, index) => {
                    return (
                      <>
                        <div key={index} data-aos="fade-left">
                          <h2 class="font-medium text-lg">{value.judul}</h2>
                          <div class=" max-w-md mx-auto rounded-[10px] border-[6px] border-white overflow-hidden">
                            <img
                              class=" w-full h-full object-cover object-center"
                              src={value.gambar}
                              alt="kolam_renang"
                            />
                          </div>
                          <p>{value.deskripsi}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              );
            }}
          </Media>
        </div>
      </section>
    </>
  );
};

export default Layanan;
