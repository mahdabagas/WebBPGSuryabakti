import { FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer class="w-full bg-white pt-8 relative h-fit">
        <span class="bg-primary w-full h-3 rounded-md absolute -top-2 left-1/2 -translate-x-1/2"></span>
        <div class="w-5/6 mx-auto lg:flex justify-between gap-2 pb-20 ">
          <div id="kontak" class="mb-6">
            <h3 class="text-2xl font-medium text-primary text-center mb-2">
              Kontak
            </h3>
            <div class="flex pr-6 pl-4 py-2 border-2 border-primary rounded-xl w-fit gap-3 mb-2 mx-auto items-center">
              <FiPhone size={18}/>
              <p class="text-xl">085866162237</p>
            </div>
            <div class="flex pr-6 pl-4 py-2 border-2 border-primary rounded-xl w-fit gap-3 mb-2 mx-auto items-center">
              <FiPhone size={18}/>
              <p class="text-xl">085866162237</p>
            </div>
          </div>
          <div id="alamat" class="mb-6">
            <h3 class="text-2xl font-medium text-primary mb-2 text-center">
              Alamat
            </h3>
            <div class="flex justify-center gap-2 items-center">
              <FiMapPin size={18}/>
              <p class="text-xl">Sidorejo, Kendal, Ngawi</p>
            </div>
          </div>
          <div id="social_media">
            <h3 class="text-2xl font-medium text-primary mb-2 text-center">
              Social Media
            </h3>
            <div class="flex gap-2 justify-center">
              <div class="w-12 h-12 bg-primary rounded-md"></div>
              <div class="w-12 h-12 bg-primary rounded-md"></div>
              <div class="w-12 h-12 bg-primary rounded-md"></div>
            </div>
          </div>
        </div>
        <div class="relative">
          <span class="absolute z-10 -bottom-0 bg-primary left-1/2 -translate-x-1/2 py-2 px-4 rounded-t-[40px]">
            <p class="font-medium text-white text-center text-sm md:text-md">
              MMD 876 UNIVERSITAS BRAWIJAYA
            </p>
          </span>
          <span class="bg-accent absolute w-full h-2 rounded-t-[10px] -bottom-0 left-1/2 -translate-x-1/2"></span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
