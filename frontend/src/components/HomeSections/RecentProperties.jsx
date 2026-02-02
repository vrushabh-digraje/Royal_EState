import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import p1 from "../../assets/Images/properties-1.jpg";
import p2 from "../../assets/Images/properties-2.jpg";
import p3 from "../../assets/Images/properties-3.jpg";
import p4 from "../../assets/Images/properties-4.jpg";
import p5 from "../../assets/Images/properties-5.jpg";
import p6 from "../../assets/Images/properties-6.jpg";

const properties = [
  { img: p1, tag: "Sale", price: "$20,000" },
  { img: p2, tag: "Rent", price: "$900", period: "/ month" },
  { img: p3, tag: "Sale", price: "$20,000" },
  { img: p4, tag: "Rent", price: "$2,000", period: "/ month" },
  { img: p5, tag: "Sale", price: "$18,000" },
  { img: p6, tag: "Sale", price: "$22,000" },
];

const RecentProperties = () => {
  return (
    <section className="recent-properties">
      <div className="container">
        <div className="section-title text-center">
          <span>Recent Posts</span>
          <h2>Recent Properties</h2>
          <div className="title-line"></div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            577: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {properties.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="property-card">
                <div className="property-img">
                  <img src={item.img} alt="property" />
                  <span
                    className={`property-tag ${
                      item.tag === "Rent" ? "rent" : "sale"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="property-info">
                  <h3>North Parchmore Street</h3>
                  <div className="property-meta">
                    <span>Apartment</span>
                    <span className="price">
                      {item.price}
                      <small>{item.period}</small>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentProperties;
