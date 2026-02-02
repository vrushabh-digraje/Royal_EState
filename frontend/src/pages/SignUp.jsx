import { Link } from "react-router-dom";
import "./Auth.css";

const SignUp = () => {
  return (
    <section className="auth-section">
      <div className="auth-box">
        <h2>Sign Up</h2>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Create Account</button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
