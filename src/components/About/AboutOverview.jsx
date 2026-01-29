import overviewImg from "../../assets/Images/about.jpg";

const AboutOverview = () => {
  return (
    <section className="about-overview">
      <div className="container overview-grid">

        {/* LEFT IMAGE + PLAY */}
        <div className="overview-image">
          <img src={overviewImg} alt="Company Overview" />
          <button className="play-btn">
            ▶
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="overview-content">
          <span className="overview-subtitle">Company Overview</span>
          <h2>Learned about the Law</h2>

          <p>
            On her way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word "and" and
            the Little Blind Text should turn around and return to its own, safe
            country. But nothing the copy said could convince her and so it didn’t
            take long until a few insidious Copy Writers ambushed her, made her
            drunk with Longe and Parole and dragged her into their agency, where
            they abused her for their.
          </p>

          <p>
            When she reached the first hills of the Italic Mountains, she had a
            last view back on the skyline of her hometown Bookmarksgrove, the
            headline of Alphabet Village and the subline of her own road, the Line
            Lane. Pitiful a rhetoric question ran over her cheek, then she
            continued her way.
          </p>

          <a href="#" className="learn-more">
            Learn More →
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutOverview;
