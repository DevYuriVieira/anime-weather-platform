import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaUsers, FaEnvelope } from "react-icons/fa";
import styles from "./Navbar.module.css"; 
import logoImg from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTop = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setIsOpen(false);
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        
        <a href="/" className={styles.navbarLogo} onClick={handleScrollTop}>
          <img 
            src={logoImg} 
            alt="Anime & Weather" 
            style={{ height: '90px', width: 'auto' }}
          />
        </a>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <span className={styles.icon}>{isOpen ? "✕" : "☰"}</span>
        </div>

        <ul className={isOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>

          <li className={styles.navItem}>
            <a href="/" className={styles.navLinks} onClick={handleScrollTop}>
              <FaHome className={styles.navIcon} /> Home
            </a>
          </li>

          <li className={styles.navItem}>
            <a 
              href="#about" 
              className={styles.navLinks} 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              <FaUsers className={styles.navIcon} /> About Us
            </a>
          </li>

          <li className={styles.navItem}>
            <a 
              href="#contact" 
              className={styles.navLinksBtn}
              onClick={handleScrollToContact}
            >
              <FaEnvelope className={styles.navIcon} /> Contact Us
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;