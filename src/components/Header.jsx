import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaPinterestP,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`navbar navbar-expand-lg main-navbar ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container">
          <NavLink className="navbar-brand logo" to="/">
            ROYAL<span>ESTATE</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav mx-auto">
              {["/", "/property", "/agents", "/about", "/blog", "/contact"].map(
                (path, i) => (
                  <li className="nav-item" key={i}>
                    <NavLink className="nav-link" to={path}>
                      {path === "/"
                        ? "Home"
                        : path.replace("/", "").charAt(0).toUpperCase() +
                          path.slice(2)}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            <div className="auth-buttons">
              <button className="btn btn-signin" onClick={() => navigate("/signin")}>
                <FaUser /> Sign-In
              </button>
              <button className="btn btn-signup"  onClick={() => navigate("/signup")}>Sign-Up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
