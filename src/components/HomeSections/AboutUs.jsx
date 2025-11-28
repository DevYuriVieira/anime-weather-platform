import './AboutUs.css';
import aboutImage from '../../assets/images/about-concept.png'; 

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">Who We Are</h2>
        
        <div className="about-content">
          {/* --- COLUNA DA ESQUERDA: TEXTO --- */}
          <div className="about-text-area">
             <div className="about-text">
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
              
              <div className="about-stats">
                <div className="stat-item">
                  <h4>10k+</h4>
                  <p>Animes Indexed</p>
                </div>
                <div className="stat-item">
                  <h4>100%</h4>
                  <p>Real-Time Accuracy</p>
                </div>
                <div className="stat-item">
                  <h4>24/7</h4>
                  <p>Global Updates</p>
                </div>
              </div>
          </div>

          {/* --- COLUNA DA DIREITA: IMAGEM ILUSTRATIVA --- */}
          <div className="about-image-area">
            <img src={aboutImage} alt="Merging real weather with anime worlds" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;