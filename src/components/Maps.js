import nature from "../assets/nature.jpg"
const Maps = () => {
  return (
    <>
      <section class="h-screen bg-secondary md:h-fit ">
        <div class="w-5/6 mx-auto pt-14 md:py-32">
          <h1 class="text-primary font-medium text-3xl mb-12 text-center">
            Temukan Destinasi Bumi Perkemahan Gendingan Suryabakti
          </h1>
          <div class="max-w-xl w-5/6 mx-auto relative">
            <svg
              class="relative -bottom-4 -left-4"
              viewBox="0 0 316 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.353027"
                width="315.852"
                height="209.647"
                rx="10"
                fill="#018577"
              />
            </svg>
            <img
              class="rounded-[10px] border-5 border-primary h-full absolute top-1/2 -translate-y-1/2"
              src={nature}
              alt="maps"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Maps;
