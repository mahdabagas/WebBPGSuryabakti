import { FiMapPin, FiPhone } from "react-icons/fi";

// Gambar
import logoIg from "../assets/logo_ig.png";
import logoFb from "../assets/logo_fb.png";

const Footer = () => {
  return (
    <>
      <footer class="w-full bg-white pt-8 relative h-fit">
        <span class="bg-primary w-full h-3 rounded-md absolute -top-2 left-1/2 -translate-x-1/2"></span>
        <div class="w-5/6 mx-auto lg:flex justify-between lg:gap-6 pb-24 ">
          <div id="kontak" class="mb-6">
            <h3 class="text-2xl font-medium text-primary text-center mb-2">
              Kontak
            </h3>
            <div class="flex pr-6 pl-4 py-2 border-2 border-primary rounded-xl w-fit gap-3 mb-2 mx-auto items-center">
              <FiPhone className="w-6 h-6 flex-2" />
              <p class="text-lg lg:text-xl flex-1">0858608154719</p>
            </div>
          </div>
          <div id="alamat" class="mb-6">
            <h3 class="text-2xl font-medium text-primary mb-2 text-center">
              Alamat
            </h3>
            <div class="flex justify-center gap-2 items-center ">
              <FiMapPin className="w-6 h-6 " />
              <p class=" md:text-lg lg:text-xl text-center">
                Dusun Tanon RT 07 RW 03, Desa Sidorejo, Kendal, Ngawi Jawa Timur
              </p>
            </div>
          </div>
          <div id="social_media">
            <h3 class="text-2xl font-medium text-primary mb-2 text-center">
              Social Media
            </h3>
            <div class="flex gap-5 justify-center">
              <a
                href="http://instagram.com/bpg.suryabakti"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={logoIg}
                  alt="logo_instagram"
                  className="w-12 h-12 cursor-pointer"
                />
              </a>
              <a
                href="http://www.facebook.com/bpg.suryabakti"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={logoFb}
                  alt="logo_facebook"
                  className="w-12 h-12 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="relative">
          <span class="absolute z-10  w-2/3 -bottom-0 bg-primary left-1/2 -translate-x-1/2 py-2 md:px-8 rounded-t-[40px]">
            <p class="font-medium text-white text-center text-sm md:text-base">
              2023 © MMD UB. All rights reserved by Kelompok 876 Desa Sidorejo.
            </p>
          </span>
          <span class="bg-accent absolute w-full h-2 rounded-t-[10px] -bottom-0 left-1/2 -translate-x-1/2"></span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
