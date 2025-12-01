import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        {/* Linha do Copyright */}
        <p className={styles.copyright}>
          &copy; {currentYear} <strong>Anime & Weather</strong>. All rights reserved.
        </p>

        {/* Linha dos Desenvolvedores */}
        <div className={styles.developers}>
          <span>Developed by:</span>
          
          {/* Link Yuri */}
          <a 
            href="https://github.com/DevYuriVieira" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles['dev-link']}
          >
            <FaGithub /> Yuri Vieira
          </a>

          <span>&</span>

          {/* Link Micaela */}
          <a 
            href="https://github.com/MicaelaDinizP" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles['dev-link']}
          >
            <FaGithub /> Micaela Paes
          </a>
        </div>
      </div>
    </footer>
  );
}