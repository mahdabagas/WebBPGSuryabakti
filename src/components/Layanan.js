import nature from "../assets/nature.jpg";

const Layanan = () => {
  return (
    <>
      <section class="h-screen bg-secondary md:h-fit">
        <div class="w-5/6 mx-auto pt-14 md:py-24">
          <h1 class="text-primary font-medium text-3xl mb-12 text-center ">
            Apa yang ada di Bumi Perkemahan Gendingan Suryabakti
          </h1>
          <div className="hidden lg:block">
            <div className="flex gap-2">
              <div className="basis-1/4 flex flex-col justify-between gap-10 ">
                <div className="bg-white p-4 h-full  mx-auto rounded-md border-b-4 border-primary drop-shadow-lg">
                  <h3 className="text-base">Kolam Renang</h3>
                  <p className="text-sm">Kolam Renang dengan segala umur</p>
                </div>
                <div className="bg-white p-4 h-full mx-auto rounded-md border-b-4 border-primary drop-shadow-lg">
                  <h3 className="text-base">Kolam Renang</h3>
                  <p className="text-sm">Kolam Renang dengan segala umur</p>
                </div>
              </div>
              <div className="basis-2/4 flex items-center p-6">
                <img
                  src={nature}
                  alt="layanan"
                  className="rounded-xl border-4 border-white"
                />
              </div>
              <div className="basis-1/4 flex flex-col justify-between gap-10 ">
                <div className="bg-white p-4 h-full  mx-auto rounded-md border-b-4 border-primary drop-shadow-lg">
                  <h3 className="text-base">Kolam Renang</h3>
                  <p className="text-sm">Kolam Renang dengan segala umur</p>
                </div>
                <div className="bg-white p-4 h-full mx-auto rounded-md border-b-4 border-primary drop-shadow-lg">
                  <h3 className="text-base">Kolam Renang</h3>
                  <p className="text-sm">Kolam Renang dengan segala umur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden ">
            <div class="text-black flex flex-col gap-4">
              <h2 class="font-medium text-lg">Kolam Renang</h2>
              <div class="max-w-lg mx-auto">
                <img
                  class="rounded-[10px] border-[6px] border-white"
                  src={nature}
                  alt="kolam_renang"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                tempora aspernatur similique asperiores cupiditate temporibus
                repellendus porro pariatur recusandae magnam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layanan;
