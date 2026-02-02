import blogbg from "../../assets/Images/bg_1.jpg";

const BlogHero = () => {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${blogbg})` }}
    >
      <div className="page-hero-overlay">
        <span className="breadcrumb">HOME / BLOG</span>
        <h1>Blog</h1>
      </div>
    </section>
  );
};

export default BlogHero;