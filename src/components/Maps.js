import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Maps = () => {
  // Init AOS
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <section id="maps" class="bg-secondary h-fit ">
        <div class="w-5/6 mx-auto py-24 md:py-32 ">
          <h1 class="text-primary font-semibold tracking-wider text-3xl mb-12 text-center">
            Temukan Destinasi Bumi Perkemahan Gendingan Suryabakti
          </h1>
          <div class="w-full relative md:w-9/12 h-48 md:h-64 lg:h-96 group cursor-pointer mx-2 md:mx-auto">
            <div className="bg-primary w-full h-full rounded-[10px] absolute translate-y-2 -translate-x-2 md:-translate-x-4 md:translate-y-4 md:group-hover:translate-y-6 md:group-hover:-translate-x-6 duration-300"></div>
            <div
              className="w-full h-full relative z-10 pr-2"
              data-aos="fade-left"
            >
              <iframe
                title="Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15820.060020519395!2d111.2603008!3d-7.5733422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79f378243ffcbb%3A0x5df23940c4cba7e7!2sBumi%20perkemahan%20Gendingan!5e0!3m2!1sid!2sid!4v1690531899570!5m2!1sid!2sid"
                className="w-full h-full"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Maps;
