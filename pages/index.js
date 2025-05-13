import { useState } from 'react';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import ResumeCard from '../components/ResumeCard';

function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <NavBar />
      <div
        className="container"
        style={{
          padding: '30px',
          margin: 'auto',
        }}
      >
        <ProfileCard toggleAbout={() => setShowAbout((prev) => !prev)} />
        <div style={{
          maxHeigh: showAbout ? '500px' : '0',
          opacity: showAbout ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height o.4s ease, opacity 0.4s ease',
        }}
        >
          {showAbout && <ResumeCard />}
        </div>
      </div>

    </>
  );
}

export default Home;
