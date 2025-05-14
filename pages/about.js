import AboutCard from '../components/AboutCard';
import NavBar from '../components/NavBar';

function AboutMe() {
  return (
    <>
      <NavBar />
      <div
        className="container"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '300px',
          margin: 'auto',
        }}
      >
        <AboutCard />
      </div>
    </>
  );
}

export default AboutMe;
