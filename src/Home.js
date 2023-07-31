import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Layanan from "./components/Layanan";
import Galeri from "./components/Galeri";
import Maps from "./components/Maps";
import Rating from "./components/Rating";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <div className="font-poppins w-full ">
      {!loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Layanan />
          <Galeri />
          <Maps />
          <Rating />
          <FAQ />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
