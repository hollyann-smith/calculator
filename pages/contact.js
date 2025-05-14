import ContactForm from '../components/forms/ContactForm';
import NavBar from '../components/NavBar';

const ContactSection = () => (
  <>
    <NavBar />
    <div className="container" style={{ marginTop: 140 }}>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  </>
);

export default ContactSection;
