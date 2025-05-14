import { Image } from 'react-bootstrap';

export default function ProjectCards() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4" style={{ margin: 18 }}>
      <div className="col">
        <div className="card" style={{ height: 670, width: 300 }}>
          <Image
            src="/sparklogo.png"
            class="card-Image-top"
            alt="..."
            style={{
              height: 236, width: 236, borderRadius: 50, marginTop: 18,
            }}
          />
          <div className="card-body">
            <h5 className="card-title">SparkLab</h5>
            <p className="card-text">A creative activity-sharing platform for parents of young kids. Users can create, save, and explore hands-on ideas based on the supplies they already have.</p>
            <ul>
              {['React', 'Next.js', 'Firebase Auth', 'PostgreSQL', 'CSS', 'Heroku'].map((tech) => (
                <li>
                  {tech}
                </li>
              ))}
            </ul>
            <div className="btn-group">
              <a href="https://sparklab.netlify.app" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-dark" type="button" style={{ marginRight: 18 }}>
                  View Live
                </button>
              </a>
              <a href="https://github.com/hollyann-smith/SparkLab-client" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-dark" type="button">
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ height: 670, width: 300 }}>
          <Image
            src="/gonefishin.png"
            class="card-Image-top"
            alt="..."
            style={{
              height: 236, width: 236, borderRadius: 50, marginTop: 18,
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Gone Fishin’</h5>
            <p className="card-text">A catch-tracking and sharing app for anglers. Users can log fish with photos, leave emoji reactions and comments, and review their catch history.</p>
            <ul>
              {['Ruby on Rails', 'PostgreSQL', 'Ruby', 'Devise', 'CSS', 'Bootstrap'].map((tech) => (
                <li>
                  {tech}
                </li>
              ))}
            </ul>
            <div className="btn-group">
              <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-dark" type="button" style={{ marginRight: 8 }}>
                  View Details
                </button>
              </a>
              <a href="https://github.com/hollyann-smith/fish" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-dark" type="button">
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ height: 670, width: 300 }}>
          <Image
            src="/happyhomehand.png"
            class="card-Image-top"
            alt="..."
            style={{
              height: 236, width: 236, borderRadius: 50, marginTop: 18,
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Happy Home</h5>
            <p className="card-text">A home and habit tracker for busy families. Create recurring chores, assign tasks, and track household progress in a clean and user-friendly interface.</p>
            <ul>
              {['Next.js', 'Firebase', 'React', 'Tailwind CSS', 'Firebase Auth', 'Netlify'].map((tech) => (
                <li>
                  {tech}
                </li>
              ))}
            </ul>
            <div className="btn-group">
              <a
                href="https://happyhomecapstone.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-dark" type="button" style={{ marginRight: 8 }}>
                  View Live
                </button>
              </a>
              <a href="https://github.com/hollyann-smith/HappyHomeCapstone" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-dark" type="button">
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
