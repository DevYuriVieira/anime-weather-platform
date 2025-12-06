import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './MusicPlayer.module.css';

// Som
import rainSound from '../../assets/music/rain.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            console.log("Autoplay bloqueado pelo navegador.");
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

  const { isMoonlight } = useTheme();
  const moonColor = '#b8a8ff';
  const moonIconText = '#2d1b3d';
  return (
    <div className={styles.musicPlayerContainer}>
      <audio ref={audioRef} src={rainSound} loop />
      <button
        className={`${styles.playerBtn} ${isMoonlight ? styles.moon : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <FaPause color={isMoonlight ? moonIconText : undefined} /> : <FaPlay color={isMoonlight ? moonIconText : undefined} />}
      </button>
    </div>
  );
};

export default MusicPlayer;