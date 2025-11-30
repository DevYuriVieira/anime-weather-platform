import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          &copy; {currentYear} <strong>Anime & Weather</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}