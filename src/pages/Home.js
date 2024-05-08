import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Specials from "../components/Specials/Specials";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default Home;
