import nature from "./../assets/nature.jpg";

const About = () => {
  return (
    <>
      <section class="h-screen bg-white w-full md:h-fit">
        <div class="w-5/6 mx-auto py-14 md:py-32">
          <div class="md:flex gap-4">
            <div class="relative mb-12 max-w-xl mx-auto px-4 lg:mb-0 basis-1/2">
              <span class="absolute -top-4 left-0">
                <svg
                  width="179"
                  height="106"
                  viewBox="0 0 179 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 40C0 17.9086 17.9086 0 40 0H138.16C160.252 0 178.16 17.9086 178.16 40V105.102H40C17.9086 105.102 0 87.1934 0 65.1021V40Z"
                    fill="#018577"
                  />
                </svg>
              </span>
              <img
                src={nature}
                alt="Bumer Gendingan"
                class="relative z-10 rounded-bl-[40px] rounded-t-[40px] border-[15px] border-white object-contain object-top"
              />
              <span class="absolute -bottom-4 right-0">
                <svg
                  width="179"
                  height="106"
                  viewBox="0 0 179 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Rectangle 162"
                    d="M0.839844 40.5103C0.839844 18.4189 18.7485 0.510254 40.8398 0.510254H139C161.091 0.510254 179 18.4189 179 40.5103V105.612H40.8398C18.7485 105.612 0.839844 87.7037 0.839844 65.6123V40.5103Z"
                    fill="#018577"
                  />
                </svg>
              </span>
            </div>
            <div className=" basis-1/2">
              <h1 class="text-primary font-medium text-3xl mb-2">
                Bumi Perkemahan Gendingan Suryabakti
              </h1>
              <p class="text-lg font-medium lg:text-xl ">
                Bumi Perkemahan Gendingan Suryabakti terletak di Desa Sidorejo,
                Kendal, Ngawi, Jawa Timur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
