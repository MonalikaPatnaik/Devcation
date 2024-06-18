
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/hero';
import Features from '../components/Features';
import About from '../components/About'
import Footer from '../components/Footer/Footer';
import FloatBtn from '../components/FloatBtn/FloatBtn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
        <Navbar/> 
        <HeroSection />
        <About/>
        <Features /> 
        <Footer />
        <FloatBtn />
    </>
  )
}

export default Home;
