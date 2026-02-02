import Footer from "../components/HomeSections/Footer";
import Newsletter from "../components/HomeSections/Newsletter";
import PropertyHero from "../components/PropertySections/PropertyHero";
import PropertyListing from "../components/PropertySections/PropertyListing";
import PropertySearch from "../components/PropertySections/PropertySearch";

const Property = () => {
  return (
    <>
      <PropertyHero/>
      <PropertySearch/>
      <PropertyListing/>
      <Newsletter/>
      <Footer/>
    </>
  )
};

export default Property;
