import bgImage from "../../assets/Images/bg_1.jpg";
import Counter from "./Counter";

const FunFacts = () => {
  return (
    <section
      className="fun-facts"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="fun-overlay">
        <div className="container">
          <h2 className="fun-title">Some fun facts</h2>

          <div className="fun-grid">
            <div className="fun-item">
              <Counter end={9000} />
              <span>Happy Customers</span>
            </div>

            <div className="fun-item">
              <Counter end={10000} />
              <span>Properties</span>
            </div>

            <div className="fun-item">
              <Counter end={1000} />
              <span>Agents</span>
            </div>

            <div className="fun-item">
              <Counter end={100} />
              <span>Awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default FunFacts;
