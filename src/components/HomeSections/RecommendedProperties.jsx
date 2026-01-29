import p1 from "../../assets/Images/properties-1.jpg";
import p2 from "../../assets/Images/properties-2.jpg";
import p3 from "../../assets/Images/properties-3.jpg";
import p4 from "../../assets/Images/properties-4.jpg";

const RecommendedProperties = () => {
  const data = [
    {
      img: p1,
      tag: "Sale",
      price: "$20,000",
    },
    {
      img: p2,
      tag: "Sale",
      price: "$20,000",
    },
    {
      img: p3,
      tag: "Rent",
      price: "$800",
      period: "/ month",
    },
    {
      img: p4,
      tag: "Sale",
      price: "$20,000",
    },
  ];

  return (
    <section className="recommended-properties">
      <div className="container">

        {/* SECTION TITLE (same styling as before) */}
        <div className="section-title">
          <span>Special Offers</span>
          <h2>Most Recommended Properties</h2>
        </div>

        <div className="recommended-grid">
          {data.map((item, index) => (
            <div className="recommended-card" key={index}>

              <div className="recommended-img">
                <img src={item.img} alt="property" />
                <span
                  className={`tag ${
                    item.tag === "Rent" ? "rent" : "sale"
                  }`}
                >
                  {item.tag}
                </span>
              </div>

              <div className="recommended-info">
                <div className="title-price">
                  <h3>North Parchmore Street</h3>
                  <span className="price">
                    {item.price}
                    <small>{item.period}</small>
                  </span>
                </div>

                <span className="type">Apartment</span>

                <p>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>

                <div className="recommended-footer">
                  <span>250sqft</span>
                  <span>🛏 3 &nbsp; 🛁 4</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProperties;
