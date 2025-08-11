import React from 'react';
import { Link } from 'react-router-dom';
import { skills } from './data';
import QuoteRotator from './QuoteRotator';

function Home() {
  return (
    <div className="text-center">
      <h1>Welcome to my Project Showcase</h1>
      <p className="lead mb-4">Explore my skills and projects</p>

      {/* Quote rotator */}
      <QuoteRotator />

      {/* Skills Section */}
      <section>
        <h2>Skills</h2>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {skills.map(skill => (
            <Link
              key={skill.name}
              to={`/skills/${skill.name.toLowerCase()}`}
              className="btn btn-outline-primary"
              style={{ minWidth: '120px', textAlign: 'center' }}
              title={skill.description}
            >
              {skill.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;