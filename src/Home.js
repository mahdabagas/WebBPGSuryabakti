import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Layanan from "./components/Layanan";
import Galeri from "./components/Galeri";
import Maps from "./components/Maps";
import Rating from "./components/Rating";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="font-poppins ">
      <Navbar />
      <Hero />
      <About />
      <Layanan />
      <Galeri />
      <Maps />
      <Rating />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
