import AboutHero from "../components/About/AboutHero";
import AboutOverview from "../components/About/AboutOverview";
import Footer from "../components/HomeSections/Footer";
import FunFacts from "../components/HomeSections/FunFacts";
import Newsletter from "../components/HomeSections/Newsletter";
import Testimonials from "../components/HomeSections/Testimonials";

const About = () => {
  return (
    <>
       <AboutHero/>
       <AboutOverview/>
       <FunFacts/>
       <Testimonials/>
       <Newsletter/>
       <Footer/>

    </>
  );
};

export default About;
