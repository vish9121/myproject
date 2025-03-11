import React, { useState } from "react";
import "./LogInpopup.css";
import { assets } from "../../assets/assets";

const Loginpopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup-overlay">
      <div className="login-popup-container">
        <div className="login-popup-header">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>
        <form className="login-popup-form">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
          <button className="form-button">
            {currState === "Sign Up" ? "Create Account" : "Log In"}
          </button>
          <div className="login-popup-terms">
            <input type="checkbox" required />
            <p>
              By continuing, I agree to the <a href="#terms">Terms of Use</a> &{" "}
              <a href="#privacy">Privacy Policy</a>.
            </p>
          </div>
        </form>
        <div className="login-popup-footer">
          {currState === "Login" ? (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Log In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loginpopup;
