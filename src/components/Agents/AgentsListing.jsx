import a1 from "../../assets/Images/person_1.jpg";
import a2 from "../../assets/Images/person_2.jpg";
import a3 from "../../assets/Images/person_3.jpg";
import a4 from "../../assets/Images/person_1.jpg";
import a5 from "../../assets/Images/person_2.jpg";
import a6 from "../../assets/Images/person_3.jpg";
import a7 from "../../assets/Images/person_1.jpg";
import a8 from "../../assets/Images/person_2.jpg";

import { FaTwitter, FaFacebookF, FaGoogle } from "react-icons/fa";

const AgentsListing = () => {
  const agents = [
    { id: 1, img: a1 },
    { id: 2, img: a2 },
    { id: 3, img: a3 },
    { id: 4, img: a4 },
    { id: 5, img: a5 },
    { id: 6, img: a6 },
    { id: 7, img: a7 },
    { id: 8, img: a8 },
  ];

  return (
    <section className="agents-listing">
      <div className="container">

        <div className="agents-grid">
          {agents.map((item) => (
            <div className="agent-card" key={item.id}>
              <img src={item.img} alt="agent" />

              <div className="agent-info">
                <h3>Edward Howard</h3>
                <span>4 Listing</span>

                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>

                <div className="agent-social">
                  <FaTwitter />
                  <FaFacebookF />
                  <FaGoogle />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="pagination">
          <span>‹</span>
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>›</span>
        </div>

      </div>
    </section>
  );
};

export default AgentsListing;
