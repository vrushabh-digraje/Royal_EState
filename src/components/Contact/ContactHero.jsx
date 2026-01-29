import blogbg from "../../assets/Images/bg_1.jpg";

const ContactHero = () => {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${blogbg})` }}
    >
      <div className="page-hero-overlay">
        <span className="breadcrumb">HOME / CONTCAT</span>
        <h1>Contact</h1>
      </div>
    </section>
  );
};

export default ContactHero;