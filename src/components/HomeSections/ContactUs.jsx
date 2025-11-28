import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-subtitle">Have questions? We'd love to hear from you.</p>
        
        <form className="contact-form">
          <div className="form-row">
            <div className="input-wrap">
              <label>First Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="input-wrap">
              <label>Last Name</label>
              <input type="text" placeholder="Your surname" />
            </div>
          </div>
          
          <div className="input-wrap">
            <label>Email Address</label>
            <input type="email" placeholder="name@example.com" />
          </div>

          <div className="input-wrap">
            <label>Message</label>
            <textarea rows="5" placeholder="How can we help?"></textarea>
          </div>

          <button type="submit" className="btn-send">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;