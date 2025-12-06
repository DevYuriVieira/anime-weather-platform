import { useTheme } from '../../contexts/ThemeContext';
import styles from './AboutUs.module.css';
import aboutImage from '../../assets/images/about-concept.png'; 

const AboutUs = () => {
  const { isMoonlight } = useTheme();
  return (
    <section id="about" className={`${styles.aboutSection} ${isMoonlight ? styles.moonlight : ''}`}> 
      <div className={styles.aboutContainer}>
        <h2 className={styles.sectionTitle}>Who We Are</h2>
        
        <div className={styles.aboutContent}>

          {/* --- COLUNA DA ESQUERDA: TEXTO --- */}
          <div className={styles.aboutTextArea}>
            
            <div className={styles.aboutText}>
              <h3>Bridging Atmosphere & Animation</h3>
              <p>
                Anime & Weather isn't just a platform; it's an experience. 
                We combine precise real-time meteorological data with curated anime recommendations, 
                ensuring your entertainment always matches the mood outside your window.
              </p>
              <p>
                Whether it's a rainy day perfect for a drama or a sunny afternoon made for adventure, 
                our algorithms find the perfect match for you.
              </p>
            </div>
              
            <div className={styles.aboutStats}>
              <div className={styles.statItem}>
                <h4>10k+</h4>
                <p>Animes Indexed</p>
              </div>
              <div className={styles.statItem}>
                <h4>100%</h4>
                <p>Real-Time Accuracy</p>
              </div>
              <div className={styles.statItem}>
                <h4>24/7</h4>
                <p>Global Updates</p>
              </div>
            </div>

          </div>

          {/* --- COLUNA DA DIREITA: IMAGEM ILUSTRATIVA --- */}
          <div className={styles.aboutImageArea}>
            <img src={aboutImage} alt="Merging real weather with anime worlds" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;