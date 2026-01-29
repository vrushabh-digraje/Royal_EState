import heroImg from "../../assets/Images/bg_1.jpg";

const AgentsHero = () => {
  return (
    <section
      className="agents-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="agents-hero-overlay">
        <div className="container text-center">
          <span className="breadcrumb">HOME / AGENTS</span>
          <h1>Agents</h1>
        </div>
      </div>
    </section>
  );
};

export default AgentsHero;
