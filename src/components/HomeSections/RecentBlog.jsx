import b1 from "../../assets/Images/image_1.jpg";
import b2 from "../../assets/Images/image_2.jpg";
import b3 from "../../assets/Images/image_3.jpg";
import b4 from "../../assets/Images/image_4.jpg";

const RecentBlog = () => {
  const blogs = [
    { img: b1 },
    { img: b2 },
    { img: b3 },
    { img: b4 },
  ];

  return (
    <section className="recent-blog">
      <div className="container">

        {/* SECTION TITLE (same global style) */}
        <div className="section-title">
          <span>Read Articles</span>
          <h2>Recent Blog</h2>
        </div>

        <div className="blog-grid">
          {blogs.map((item, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-img">
                <img src={item.img} alt="blog" />
              </div>

              <div className="blog-content">
                <h3>
                  Even the all-powerful Pointing has no control about the blind texts
                </h3>

                <div className="blog-meta">
                  <span>Dec 6, 2018</span>
                  <span>Admin</span>
                  <span>💬 3</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentBlog;
