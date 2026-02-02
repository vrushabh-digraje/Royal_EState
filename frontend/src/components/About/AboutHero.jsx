import aboutBg from "../../assets/Images/bg_1.jpg";

const AboutHero = () => {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="page-hero-overlay">
        <span className="breadcrumb">HOME / ABOUT</span>
        <h1>About</h1>
      </div>
    </section>
  );
};

export default AboutHero;
