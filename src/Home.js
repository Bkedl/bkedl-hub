import React from 'react';
import { Link } from 'react-router-dom';
import { skills } from './data';
import QuoteRotator from './QuoteRotator';
import './styles.css';

function Home() {
  return (
    <div className="home-container text-center">
      <div className="home-content">
        <h1 className="display-4 fw-bold">Pick a Skill. See the Code.</h1>
        <p className="lead mb-4 text-muted">
          Dive into my projects and experience for each technology I’ve worked with — straight from GitHub.
        </p>

        {/* Skills Section */}
        <section>
          <h2 className="mt-5 mb-4 fw-semibold">Select a Language or Tool</h2>
          <p className="text-secondary mb-4">
            Click below to explore my repositories and experience with each technology.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {skills.map(skill => (
              <Link
                key={skill.name}
                to={`/skills/${skill.name.toLowerCase()}`}
                className="btn btn-outline-primary skill-button"
                title={skill.description}
              >
                {skill.name}
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Quote rotator at the very bottom */}
      <div className="home-footer">
        <QuoteRotator />
      </div>
    </div>
  );
}

export default Home;