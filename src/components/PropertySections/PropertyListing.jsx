import img1 from "../../assets/Images/properties-1.jpg";
import img2 from "../../assets/Images/properties-2.jpg";
import img3 from "../../assets/Images/properties-3.jpg";
import img4 from "../../assets/Images/properties-4.jpg";
import img5 from "../../assets/Images/properties-5.jpg";
import img6 from "../../assets/Images/properties-6.jpg";
import img7 from "../../assets/Images/properties-1.jpg";
import img8 from "../../assets/Images/properties-2.jpg";
import img9 from "../../assets/Images/properties-3.jpg";

const PropertyListing = () => {
  const properties = [
    { id: 1, img: img1, tag: "Sale", price: "$20,000" },
    { id: 2, img: img2, tag: "Sale", price: "$20,000" },
    { id: 3, img: img3, tag: "Rent", price: "$800 / month" },
    { id: 4, img: img4, tag: "Sale", price: "$20,000" },
    { id: 5, img: img5, tag: "Sale", price: "$20,000" },
    { id: 6, img: img6, tag: "Sale", price: "$20,000" },
    { id: 7, img: img7, tag: "Rent", price: "$900 / month" },
    { id: 8, img: img8, tag: "Sale", price: "$20,000" },
    { id: 9, img: img9, tag: "Sale", price: "$20,000" },
  ];

  return (
    <section className="property-listing">
      <div className="container">

        {/* GRID */}
        <div className="property-grid">
          {properties.map((item) => (
            <div className="property-card" key={item.id}>
              <div className="property-img">
                <img src={item.img} alt="property" />
                <span className={`property-tag ${item.tag.toLowerCase()}`}>
                  {item.tag}
                </span>
              </div>

              <div className="property-info">
                <h3>North Parchmore Street</h3>
                <span className="type">Apartment</span>

                <p className="desc">
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>

                <div className="property-meta">
                  <span className="price">{item.price}</span>
                  <span>🛏 3 🛁 4</span>
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

export default PropertyListing;
