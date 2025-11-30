import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.contactSubtitle}>Have questions? We'd love to hear from you.</p>
        
        <form className={styles.contactForm}>
          <div className={styles.formRow}>
            <div className={styles.inputWrap}>
              <label>First Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className={styles.inputWrap}>
              <label>Last Name</label>
              <input type="text" placeholder="Your surname" />
            </div>
          </div>
          
          <div className={styles.inputWrap}>
            <label>Email Address</label>
            <input type="email" placeholder="name@example.com" />
          </div>

          <div className={styles.inputWrap}>
            <label>Message</label>
            <textarea rows="5" placeholder="How can we help?"></textarea>
          </div>

          <button type="submit" className={styles.btnSend}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;