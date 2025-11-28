import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Ícones brancos
import './MusicPlayer.css';

// Importe o som
import rainSound from '../../assets/music/rain.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Tenta dar Autoplay assim que carrega
  useEffect(() => {
    if (audioRef.current) {
      // O volume começa baixinho pra não assustar (0.3 = 30%)
      audioRef.current.volume = 0.3; 
      
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Se o navegador deixar, toca e muda o ícone
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay bloqueado pelo navegador (normal). O usuário precisa clicar.");
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-container">
      {/* O elemento de áudio fica invisível, loop = repete pra sempre */}
      <audio ref={audioRef} src={rainSound} loop />

      {/* O Botão Amarelo */}
      <button className="player-btn" onClick={togglePlay} title="Rain Sounds">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default MusicPlayer;