import { useState } from 'react';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import ResumeCard from '../components/ResumeCard';
import ContactForm from '../components/forms/ContactForm';

function Home() {
  const [activeSection, setActiveSection] = useState(null); // 'about' | 'contact' | null

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      <div className="navb" style={{ marginBottom: 130 }}>
        <NavBar />
      </div>
      <div
        className="container"
        style={{
          padding: '30px',
          margin: 'auto',
        }}
      >
        <ProfileCard
          toggleAbout={() => toggleSection('about')}
          toggleContact={() => toggleSection('contact')}
        />

        <div
          style={{
            maxHeight: activeSection === 'about' ? '999px' : '0',
            opacity: activeSection === 'about' ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s ease, opacity 0.4s ease',
            boxShadow: 'none',
          }}
        >
          {activeSection === 'about' && <ResumeCard />}
        </div>

        <div
          style={{
            maxHeight: activeSection === 'contact' ? '500px' : '0',
            opacity: activeSection === 'contact' ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s ease, opacity 0.4s ease',
            marginTop: '20px',
          }}
        >
          {activeSection === 'contact' && <ContactForm />}
        </div>
      </div>
    </>
  );
}

export default Home;
