import { Image } from 'react-bootstrap';

function ResumeCard() {
  return (
    <div
      className="card"
      style={{
        height: '618px', width: '518px',
      }}
    ><Image
      src="/resume.png"
      alt="resume"
      style={{
        height: 610, width: 510, borderRadius: 50,
      }}
    />
    </div>
  );
}

export default ResumeCard;
