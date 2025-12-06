import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from '../../contexts/ThemeContext';
import styles from "./Footer.module.css";

export default function Footer() {
  const { isMoonlight } = useTheme();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`${styles.footer} ${isMoonlight ? styles.moonlight : ''}`}> 
      <div className={styles['footer-content']}>
        {/* Linha do Copyright */}
        <p className={styles.copyright}>
          &copy; {currentYear} <strong>Anime & Weather</strong>. All rights reserved.
        </p>

        {/* Linha dos Desenvolvedores */}
        <div className={styles.developers}>
          <span>Developed by:</span>
          
          {/* --- GRUPO YURI --- */}
          <div className={styles.devGroup}>
            {/* GitHub Yuri */}
            <a 
              href="https://github.com/DevYuriVieira" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles['dev-link']}
            >
              <FaGithub /> Yuri Vieira
            </a>
            {/* LinkedIn Yuri (Apenas ícone para ficar clean) */}
            <a 
              href="https://www.linkedin.com/in/yuri-vieira-615131188/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles['dev-link']} ${styles['icon-only']}`}
              title="LinkedIn Yuri"
            >
              <FaLinkedin />
            </a>
          </div>

          <span className={styles.divider}>&</span>

          {/* --- GRUPO MICAELA --- */}
          <div className={styles.devGroup}>
            {/* GitHub Micaela */}
            <a 
              href="https://github.com/MicaelaDinizP" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles['dev-link']}
            >
              <FaGithub /> Micaela Paes
            </a>
            {/* LinkedIn Micaela */}
            <a 
              href="https://www.linkedin.com/in/micaela-paes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles['dev-link']} ${styles['icon-only']}`}
              title="LinkedIn Micaela"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}