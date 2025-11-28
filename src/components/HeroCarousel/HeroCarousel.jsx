import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './HeroCarousel.css';
import EmailCard from '../EmailCard/EmailCard';

/* Importando as imagens */
import img1 from '../../assets/images/carousel-1.png';
import img2 from '../../assets/images/carousel-2.png';
import img3 from '../../assets/images/carousel-3.png';

const HeroCarousel = () => {
  const slides = [img1, img2, img3];

  return (
    <div className="hero-carousel-container">
      
      {/* 1. O Carrossel (Apenas as imagens girando) */}
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} 
        stopOnHover={false}
        transitionTime={800}
        showIndicators={false}
      >
        {slides.map((image, index) => (
          <div key={index} className="slide-container">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      {/* 2. O Overlay (O Card Fixo por cima de tudo) */}
      <div className="hero-overlay">
        <EmailCard />
      </div>

    </div>
  );
};

export default HeroCarousel;