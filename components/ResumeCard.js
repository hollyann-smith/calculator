import { Image } from 'react-bootstrap';

function ResumeCard() {
  return (
    <div
      className="card"
      style={{
        height: '918px', width: '818px',
      }}
    ><Image
      src="/resume.png"
      alt="resume"
      style={{
        height: 910, width: 810, borderRadius: 50,
      }}
    />
    </div>
  );
}

export default ResumeCard;
