import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/service2.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Services"
        btnClass="hide"
      />

      <Trip />

      <Footer />
    </>
  );
}

export default Service;
