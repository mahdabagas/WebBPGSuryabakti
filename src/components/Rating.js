import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";

import pp from "../assets/pp.png";

const Rating = () => {
  // Data Rating
  const ratings = [
    {
      nama: "Bapak Paryoko",
      pekerjaan: "Pengunjung Lokal",
      nilai: 5,
      komentar:
        "Nyaman, sejuk lingkungan dan kolam renangnya, air jernih melimpah Tempat rehat  ada gazebo² walau msih proses pengembangan sudah terlihat kedepannya pasti woow...",
      foto: pp,
    },
    {
      nama: "Bapak Pe We",
      pekerjaan: "Pengunjung Lokal",
      nilai: 5,
      komentar:
        "Kini disulap menjadi destinasi wisata yang menarik dan eksotik. Area piknik, Ada kolam renang Tempat duingin dan suwejuk",
      foto: pp,
    },
    {
      nama: "Ibu Ita Anduwi S",
      pekerjaan: "Pengunjung Lokal",
      nilai: 5,
      komentar:
        "Tempat nya nyaman Sejuk.cocok banget klo yg suka berkemah.kolam ikan nya juga ikan nya besar2.kolam renang nya lumayan.toilet nya banyak.",
      foto: pp,
    },
    {
      nama: "Dani Ifallah ",
      pekerjaan: "Pengunjung Lokal",
      nilai: 4,
      komentar:
        "Pemandangan pagi yang sangat indah dan cocok banget buat camp kegiatan organizer, sekolah, ataupun bersama teman atau keluarga",
      foto: pp,
    },
    {
      nama: "Nur Rosyid",
      pekerjaan: "Pengunjung Lokal",
      nilai: 5,
      komentar:
        "Sudah tertata bagus,, fasilitas lumayan,, nyaman untuk perkemahan, sekaligus asyik untuk melepas penat",
      foto: pp,
    },
    {
      nama: "Gufron Ansori",
      pekerjaan: "Pengunjung Lokal",
      nilai: 4,
      komentar:
        "Bumi perkemahan sekarang di lengkapi dengan banyak gasibo dan 3 kolam renang",
      foto: pp,
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

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FiChevronsLeft className="text-primary w-10 h-10 relative -left-10" />
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FiChevronsRight className="text-primary w-10 h-10 relative -right-6" />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 1500,
  };

  return (
    <>
      <section id="rating" class=" bg-white md:h-fit">
        <div class="w-full mx-auto py-24 md:py-32 ">
          <h1 class="text-primary font-semibold tracking-wider text-3xl mb-12 text-center">
            Apa Kata Wisatawan?
          </h1>
          <div class="w-5/6 mx-auto ">
            <div className="w-4/6 mx-auto">
              <Slider {...settings}>
                {ratings.map((value, index) => (
                  <div
                    key={index}
                    className="px-6 py-8 bg-secondary rounded-xl min-h-80 mx-auto border-2 border-primary"
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
                    <p className="text-sm text-center">{value.komentar}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rating;
