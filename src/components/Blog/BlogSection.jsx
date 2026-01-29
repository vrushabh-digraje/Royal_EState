
const blogs = [
  { id: 1, img: "/src/assets/Images/image_1.jpg" },
  { id: 2, img: "/src/assets/Images/image_2.jpg" },
  { id: 3, img: "/src/assets/Images/image_3.jpg" },
  { id: 4, img: "/src/assets/Images/image_4.jpg" },
  { id: 5, img: "/src/assets/Images/image_5.jpg" },
  { id: 6, img: "/src/assets/Images/image_6.jpg" },
  { id: 7, img: "/src/assets/Images/image_7.jpg" },
  { id: 8, img: "/src/assets/Images/image_8.jpg" }
];

export default function BlogSection() {
  return (
    <section className="recent-blog">
      <div className="container">
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-img">
                <img src={blog.img} alt="blog" />
              </div>

              <div className="blog-content">
                <h3>
                  Even the all-powerful Pointing has no control about the blind
                  texts
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

        {/* Pagination */}
        <div className="blog-pagination">
          <button>‹</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>›</button>
        </div>
      </div>
    </section>
  );
}
