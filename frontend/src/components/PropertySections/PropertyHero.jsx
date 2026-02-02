import heroImg from "../../assets/Images/bg_1.jpg";

const PropertyHero = () => {
  return (
    <section
      className="property-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="property-hero-overlay">
        <div className="container text-center">
          <span className="breadcrumb">HOME / PROPERTY</span>
          <h1>Property</h1>

          <button className="search-btn">
            🔍 Search Property
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyHero;
