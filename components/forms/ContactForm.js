import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_x5qzx7s', // Replace with your EmailJS service ID
        'template_2x3k9zr', // Replace with your EmailJS template ID
        contactData,
        'CctFRGvcZuHhe4bZf', // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.warn('SUCCESS!', response.status, response.text);
          alert('Message sent!');
          setContactData({
            name: '', email: '', subject: '', message: '',
          });
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <div className="form-card1">
      <div className="form-card2">
        <form className="form" onSubmit={handleSubmit}>
          <p className="form-heading">Get In Touch</p>

          <div className="form-field">
            <input
              required
              placeholder="Name"
              className="input-field"
              type="text"
              name="name"
              value={contactData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <input
              required
              placeholder="Email"
              className="input-field"
              type="email"
              name="email"
              value={contactData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <input
              required
              placeholder="Subject"
              className="input-field"
              type="text"
              name="subject"
              value={contactData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <textarea
              required
              placeholder="Message"
              cols="30"
              rows="3"
              className="input-field"
              name="message"
              value={contactData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="sendMessage-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
