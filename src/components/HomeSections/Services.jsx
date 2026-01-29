import { FaMapMarkedAlt, FaUserTie, FaHome, FaWallet } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Find Places Anywhere In The World",
      desc: "A small river named Duden flows by their place and supplies.",
    },
    {
      icon: <FaUserTie />,
      title: "We Have Agents With Experience",
      desc: "A small river named Duden flows by their place and supplies.",
    },
    {
      icon: <FaHome />,
      title: "Buy & Rent Modern Properties",
      desc: "A small river named Duden flows by their place and supplies.",
    },
    {
      icon: <FaWallet />,
      title: "Making Money",
      desc: "A small river named Duden flows by their place and supplies.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
