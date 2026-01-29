import Footer from "../components/HomeSections/Footer";
import FunFacts from "../components/HomeSections/FunFacts";
import Hero from "../components/HomeSections/Hero";
import Newsletter from "../components/HomeSections/Newsletter";
import RecentBlog from "../components/HomeSections/RecentBlog";
import RecentProperties from "../components/HomeSections/RecentProperties";
import RecommendedProperties from "../components/HomeSections/RecommendedProperties";
import SearchSection from "../components/HomeSections/SearchSection";
import Services from "../components/HomeSections/Services";
import Testimonials from "../components/HomeSections/Testimonials";

const Home = () => {
  return (
    <>
    <Hero/>
    <SearchSection/>
    <Services/>
    <RecentProperties/>
    <RecommendedProperties/>
    <FunFacts/>
    <Testimonials/>
    <RecentBlog/>
    <Newsletter/>
    <Footer/>

    </>
  );
};

export default Home;
