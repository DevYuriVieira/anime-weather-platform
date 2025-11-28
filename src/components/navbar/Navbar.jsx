import React, { useState } from "react";
// Adicione useLocation e useNavigate
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaUsers, FaEnvelope } from "react-icons/fa";
import "./navbar.css";
import logoImg from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Hooks para navegação
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTop = (e) => {
    e.preventDefault();
    // Se não estiver na home, vai pra home
    if (location.pathname !== "/") {
      navigate("/");
      // O scroll pro topo acontece nativamente ao carregar a página
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // --- NOVA FUNÇÃO PARA O CONTACT US ---
  const handleScrollToContact = (e) => {
    e.preventDefault();
    setIsOpen(false); // Fecha o menu mobile

    // Se já estamos na página principal (Home)
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se estivermos em outra página (ex: Dashboard), vai para a Home
      // O setTimeout dá um tempinho pra página carregar antes de rolar
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <a href="/" className="navbar-logo" onClick={handleScrollTop}>
          <img 
            src={logoImg} 
            alt="Anime & Weather" 
            style={{ height: '90px', width: 'auto' }} 
          />
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          <span className="icon">{isOpen ? "✕" : "☰"}</span>
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={handleScrollTop}>
              <FaHome className="nav-icon" /> Home
            </a>
          </li>
          
          <li className="nav-item">
            {/* O About Us também pode usar a mesma lógica se quiser rolar até ele */}
            <a href="#about" className="nav-links" onClick={(e) => {
               e.preventDefault();
               document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
               setIsOpen(false);
            }}>
              <FaUsers className="nav-icon" /> About Us
            </a>
          </li>

          <li className="nav-item">
            {/* AQUI ESTÁ A MUDANÇA NO CONTACT US */}
            <a href="#contact" className="nav-links-btn" onClick={handleScrollToContact}>
              <FaEnvelope className="nav-icon" /> Contact Us
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;