import { Link } from "react-router-dom";
import "./Auth.css";

const SignIn = () => {
  return (
    <section className="auth-section">
      <div className="auth-box">
        <h2>Sign In</h2>

        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>

        <p className="auth-switch">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
