import { useEffect, useState } from "react";
import hero1 from "../../assets/Images/bg_1.jpg";
import hero2 from "../../assets/Images/bg_2.jpg";

const slides = [
  {
    image: hero1,
    title: "FLORIDA 5, PINECREST, FL",
    location: "Melbourne, Vic 3004",
    desc:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    price: "$28,000",
  },
  {
    image: hero2,
    title: "3015 GRAND AVENUE, COCOWALK",
    location: "Melbourne, Vic 3004",
    desc:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    price: "$28,000",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    // Hero.jsx (only the structure part)

<section
  className="hero-slider"
  style={{ backgroundImage: `url(${slides[index].image})` }}
>
  <div className="hero-overlay">
    <div className="container-1 hero-wrapper">

      {/* VIEW BUTTON – OUTSIDE CARD */}
      <button className="view-btn-outside">
        VIEW DETAILS +
      </button>

      {/* INFO CARD */}
      <div className="hero-card">
        <h2>{slides[index].title}</h2>
        <p className="location">📍 {slides[index].location}</p>
        <p className="desc">{slides[index].desc}</p>
        <p className="price">{slides[index].price}</p>
      </div>

    </div>

    <button className="search-btn">
      🔍 Search Property
    </button>
  </div>
</section>

  );
};

export default Hero;
