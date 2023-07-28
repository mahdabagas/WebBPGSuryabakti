import nature from "./../assets/nature.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <section id="about" class="bg-white w-full h-fit">
        <div class="w-5/6 mx-auto py-24 md:py-32">
          <div class="lg:flex gap-6">
            <div
              class="relative mb-12 max-w-xl mx-auto lg:mb-0 basis-1/2 flex-1 px-2"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="bg-primary w-1/2 h-1/2 rounded-tl-[40px] lg:rounded-tl-[120px] rounded-bl-[40px] rounded-tr-[40px] absolute -translate-x-2 -translate-y-2 lg:-translate-y-4 lg:-translate-x-5 "></div>
              <div className="relative z-10 w-full h-full rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden border-[6px] lg:border-[15px] border-white lg:rounded-t-[120px] lg:rounded-bl-[120px]">
                <img
                  src={nature}
                  alt="Bumer Gendingan"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="bg-primary w-1/2 h-1/2 absolute right-0 bottom-0 rounded-bl-[40px] rounded-tr-[40px] translate-x-1 translate-y-3  lg:translate-x-3 lg:translate-y-5  "></div>
            </div>
            <div
              className=" basis-1/2 lg:py-4"
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="center-bottom"
            >
              <h1 class="text-primary font-semibold text-3xl md:text-[32px] mb-4 tracking-wider">
                Bumi Perkemahan Gendingan Suryabakti
              </h1>
              <p class="text-base lg:text-xl ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus odio, delectus atque voluptatibus ad eius, eum, harum
                quae tempora nesciunt at perferendis. Quos, harum, unde, at
                earum voluptatibus repellendus quo dignissimos dolore maiores
                dolorem debitis veniam perferendis optio consequatur dolores?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
