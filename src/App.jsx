import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* --- COMPONENTES GERAIS --- */
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

/* --- COMPONENTES DA HOME --- */
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import AboutUs from './components/HomeSections/AboutUs';
import ContactUs from './components/HomeSections/ContactUs';

/* --- COMPONENTES FLUTUANTES --- */
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import GeminiChat from './components/GeminiChat/GeminiChat';

/* --- PÁGINAS --- */
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard/Dashboard';

import './App.module.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          {/* HOME */}
          <Route path="/" element={
            <>
              <Navbar />
              <HeroCarousel />
              <AboutUs />
              <ContactUs />

              <MusicPlayer />
              <GeminiChat />
              <Footer />
            </>
          } />

          {/* SIGNUP */}
          <Route path="/signup" element={<Signup />} />

          {/* DASHBOARD */}
          <Route path="/dashboard" element={
            <>
              <Navbar />
              <Dashboard />
              <MusicPlayer />
              <GeminiChat />
              <Footer />
            </>
          } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;