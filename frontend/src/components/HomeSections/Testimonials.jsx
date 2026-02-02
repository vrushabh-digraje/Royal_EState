import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import user1 from "../../assets/Images/person_1.jpg";
import user2 from "../../assets/Images/person_2.jpg";
import user3 from "../../assets/Images/person_3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      img: user1,
      name: "Roger Scott",
      role: "CLIENT",
      text:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematical country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      img: user2,
      name: "John Doe",
      role: "CLIENT",
      text:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      img: user3,
      name: "Sarah Smith",
      role: "CLIENT",
      text:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <div className="testimonial-img">
                  <img src={item.img} alt={item.name} />
                  <span className="quote-icon">❝</span>
                </div>

                <p className="testimonial-text">{item.text}</p>

                <h3>{item.name}</h3>
                <span className="role">{item.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
