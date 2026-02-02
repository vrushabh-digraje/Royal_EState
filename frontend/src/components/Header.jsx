import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`navbar navbar-expand-lg main-navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <NavLink className="navbar-brand logo" to="/" onClick={closeMenu}>
          ROYAL<span>ESTATE</span>
        </NavLink>

        {/* HAMBURGER BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav mx-auto">
            {["/", "/property", "/agents", "/about", "/blog", "/contact"].map(
              (path, i) => (
                <li className="nav-item" key={i}>
                  <NavLink
                    className="nav-link"
                    to={path}
                    onClick={closeMenu}
                  >
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
            <button
              className="btn btn-signin"
              onClick={() => {
                closeMenu();
                navigate("/signin");
              }}
            >
              <FaUser /> Sign-In
            </button>

            <button
              className="btn btn-signup"
              onClick={() => {
                closeMenu();
                navigate("/signup");
              }}
            >
              Sign-Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
