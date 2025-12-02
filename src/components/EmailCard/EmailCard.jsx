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
    
    if (!inputEmail.trim() || !inputPassword.trim()) {
      setError('Please fill in all fields.');
      return;
    }

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

  const handleForgotPassword = () => {
    const email = prompt("Enter your email to reset password:");
    if (email) {
      alert(`Recovery link sent to ${email}! (Check your spam folder 🌧️)`);
    }
  };

  return (
    <div className={styles.loginCard}>
      <h2>Welcome Back!</h2>
      <p>Enter your details to access the best of Anime & Weather.</p>
      
      <form className={styles.loginForm} onSubmit={handleLogin}>
        
        {error && <div className={styles.errorMsg}>{error}</div>}

        <div className={styles.inputGroup}>
          <input 
            type="text"
            placeholder="User or Email" 
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            style={error ? { borderColor: '#ff4757' } : {}}
          />
        </div>

        <div className={styles.inputGroup}>
          <input 
            type="password" 
            placeholder="Password" 
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            style={error ? { borderColor: '#ff4757' } : {}}
          />
        </div>

        <div className={styles.optionsRow}>
          <div className={styles.checkboxGroup}>
            {/* AQUI ESTÁ A MUDANÇA PRO CHECKBOX DOURADO */}
            <label className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span className={styles.checkmark}></span> {/* O quadrado mágico */}
              Keep me signed in
            </label>
          </div>
          
          <span className={styles.forgotPass} onClick={handleForgotPassword}>
            Forgot Password?
          </span>
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