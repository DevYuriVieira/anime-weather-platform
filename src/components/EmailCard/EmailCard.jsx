import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EmailCard.module.css';

const EmailCard = () => {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      (inputEmail === 'admin' && inputPassword === 'admin') || 
      (inputEmail === 'usuario' && inputPassword === '123456')
    ) {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials! Try "admin" & "admin"');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.loginCard}>
      <h2>Welcome Back!</h2>
      <p>Enter your details to access the best of Anime & Weather.</p>
      
      <form className={styles.loginForm} onSubmit={handleLogin}>
        
        {/* MENSAGEM DE ERRO */}
        {error && (
          <div className={styles.errorMsg}>
            {error}
          </div>
        )}

        {/* Campo de Login/Email */}
        <div className={styles.inputGroup}>
          <input 
            type="text"
            placeholder="User or Email" 
            required 
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>

        {/* Campo de Senha */}
        <div className={styles.inputGroup}>
          <input 
            type="password" 
            placeholder="Password" 
            required 
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </div>

        <div className={styles.checkboxGroup}>
          <label>
            <input type="checkbox" /> Keep me signed in
          </label>
        </div>

        <button type="submit" className={styles.btnLogin}>
          Login
        </button>

        <div className={styles.divider}>or</div>

        <button type="button" className={styles.btnSignup} onClick={handleSignUp}>
          Sign Up
        </button>

      </form>
    </div>
  );
};

export default EmailCard;