
const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">

        {/* TITLE */}
        <h2 className="contact-title">Contact Information</h2>

        {/* INFO BOXES */}
        <div className="contact-info-grid">
          <div className="info-box">
            <strong>Address:</strong>
            <p>
              198 West 21th Street,<br />
              Suite 721 New York NY 10016
            </p>
          </div>

          <div className="info-box">
            <strong>Phone:</strong>
            <p>+ 1235 2355 98</p>
          </div>

          <div className="info-box">
            <strong>Email:</strong>
            <p>info@yoursite.com</p>
          </div>

          <div className="info-box">
            <strong>Website:</strong>
            <p>yoursite.com</p>
          </div>
        </div>

        {/* MAP + FORM */}
        <div className="contact-grid">

          {/* MAP */}
          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>

          {/* FORM */}
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
