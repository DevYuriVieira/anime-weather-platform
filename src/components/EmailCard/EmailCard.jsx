import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EmailCard.module.css';

const EmailCard = () => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  
  // ESTADOS DO MODAL
  const [showModal, setShowModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validação simples
    if (!inputEmail.trim() || !inputPassword.trim()) {
      setError('Please fill in all fields.'); // Define a mensagem
      return;
    }

    // Login Simulado
    if (
      (inputEmail === 'admin' && inputPassword === 'admin') || 
      (inputEmail === 'usuario' && inputPassword === '123456')
    ) {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials!');
    }
  };

  // Funções do Modal
  const openForgotModal = () => {
    setShowModal(true);
    setResetEmail('');
  };

  const sendRecoveryLink = () => {
    if (!resetEmail.trim()) {
      alert("Please enter an email address."); // Esse alert simples pode ficar no modal
      return;
    }
    alert(`Recovery link sent to ${resetEmail}!`);
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.loginCard}>
        <h2>Welcome Back!</h2>
        <p>Enter your details to access the best of Anime & Weather.</p>
        
        <form className={styles.loginForm} onSubmit={handleLogin}>
          
          {/* MENSAGEM DE ERRO NOVA */}
          {error && <div className={styles.errorMsg}>{error}</div>}

          <div className={styles.inputGroup}>
            <input 
              type="text"
              placeholder="User or Email" 
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              // Se tiver erro, a borda fica vermelha
              style={error ? { borderColor: '#ff3333' } : {}}
            />
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="password" 
              placeholder="Password" 
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              style={error ? { borderColor: '#ff3333' } : {}}
            />
          </div>

          <div className={styles.optionsRow}>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
                Keep me signed in
              </label>
            </div>
            
            {/* Clicar aqui abre a JANELA NOVA */}
            <span className={styles.forgotPass} onClick={openForgotModal}>
              Forgot Password?
            </span>
          </div>

          <button type="submit" className={styles.btnLogin}>
            Login
          </button>

          <div className={styles.divider}>or</div>

          <button type="button" className={styles.btnSignup} onClick={() => navigate('/signup')}>
            Sign Up
          </button>

        </form>
      </div>

      {/* --- O MODAL CUSTOMIZADO BONITÃO --- */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <h3>Reset Password</h3>
            <p>Don't worry! Enter your email below and we'll send you a recovery link.</p>
            
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className={styles.modalInput}
            />
            
            <div className={styles.modalActions}>
              <button className={styles.btnCancel} onClick={() => setShowModal(false)}>Cancel</button>
              <button className={styles.btnConfirm} onClick={sendRecoveryLink}>Send Link</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailCard;