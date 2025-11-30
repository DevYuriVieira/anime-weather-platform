import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import logoImg from "../assets/images/logo.png";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    country: "",
    favoriteWeather: "",
  });

  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    const {
      email,
      confirmEmail,
      password,
      confirmPassword,
      country,
      favoriteWeather,
    } = formData;

    if (!email || !confirmEmail || !password || !confirmPassword || !country || !favoriteWeather) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMessage({ type: "error", text: "Invalid Email format." });
      return;
    }

    if (email !== confirmEmail) {
      setMessage({ type: "error", text: "Emails do not match." });
      return;
    }

    if (password.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters." });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    setMessage({ type: "success", text: "Registered Successfully! Welcome to the guild." });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupCard}>
        
        <div className={styles.cardHeader}>
          <img src={logoImg} alt="Anime & Weather" className={styles.signupLogo} />
          <h2>Create Account</h2>
          <p>Join the adventure!</p>
        </div>

        {message.text && (
          <div
            className={`${styles.messageBox} ${
              styles[message.type] || ""
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.signupForm}>
          
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="email"
              name="confirmEmail"
              placeholder="Confirm Email"
              value={formData.confirmEmail}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select your Country
              </option>
              <option value="Brazil">Brazil</option>
              <option value="USA">USA</option>
              <option value="Japan">Japan</option>
              <option value="Other">Other</option>
            </select>

            <select
              name="favoriteWeather"
              value={formData.favoriteWeather}
              onChange={handleChange}
            >
              <option value="" disabled>
                Favorite Weather?
              </option>
              <option value="Sunny">Sunny ☀️</option>
              <option value="Rainy">Rainy 🌧️</option>
              <option value="Stormy">Stormy ⛈️</option>
              <option value="Snowy">Snowy ❄️</option>
              <option value="Cloudy">Cloudy ☁️</option>
            </select>
          </div>

          <button type="submit" className={styles.btnRegister}>
            Register Now
          </button>

          <p className={styles.loginLink}>
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>Login here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;