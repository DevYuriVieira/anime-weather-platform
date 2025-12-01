import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    let newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (/\d/.test(formData.firstName)) {
      newErrors.firstName = "Name cannot contain numbers.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (/\d/.test(formData.lastName)) {
      newErrors.lastName = "Surname cannot contain numbers.";
    }

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Message sent successfully, ${formData.firstName}! 🚀`);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.contactSubtitle}>Have questions? We'd love to hear from you.</p>
        
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            
            {/* FIRST NAME */}
            <div className={styles.inputWrap}>
              <label>First Name</label>
              <input 
                type="text" 
                name="firstName"
                placeholder="Your name" 
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? styles.inputError : ''}
              />
              {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
            </div>

            {/* LAST NAME */}
            <div className={styles.inputWrap}>
              <label>Last Name</label>
              <input 
                type="text" 
                name="lastName"
                placeholder="Your surname" 
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? styles.inputError : ''}
              />
              {errors.lastName && <span className={styles.errorText}>{errors.lastName}</span>}
            </div>
          </div>
          
          {/* EMAIL */}
          <div className={styles.inputWrap}>
            <label>Email Address</label>
            <input 
              type="email" 
              name="email"
              placeholder="name@example.com" 
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.inputError : ''}
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          {/* MESSAGE */}
          <div className={styles.inputWrap}>
            <label>Message</label>
            <textarea 
              name="message"
              rows="5" 
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? styles.inputError : ''}
            ></textarea>
            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
          </div>

          <button type="submit" className={styles.btnSend}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;