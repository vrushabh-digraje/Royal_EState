import img_1 from "../../assets/Images/image_1.jpg"
import img_2 from "../../assets/Images/image_2.jpg"
import img_3 from "../../assets/Images/image_3.jpg"
import img_4 from "../../assets/Images/image_4.jpg"
import img_5 from "../../assets/Images/image_5.jpg"
import img_6 from "../../assets/Images/image_6.jpg"
import img_7 from "../../assets/Images/image_7.jpg"
import img_8 from "../../assets/Images/image_8.jpg"


const blogs = [
  { id: 1, img: img_1 },
  { id: 2, img: img_2 },
  { id: 3, img: img_3 },
  { id: 4, img: img_4 },
  { id: 5, img: img_5 },
  { id: 6, img: img_6 },
  { id: 7, img: img_7 },
  { id: 8, img: img_8 }
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
