import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from './data';

function Home() {
  return (
    <div className="text-center">
      <h1>Welcome to my Project Showcase</h1>
      <p className="lead mb-4">Explore my skills and projects...?</p>

{/* Unsure how to implement part below, will keep as placeholder for now */}
      <h2>Most recent projects</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {Object.entries(projects).map(([key, project]) => (
          <Link key={key} to={`/skills/javascript`} className="btn btn-primary m-2" style={{ minWidth: '180px' }}>
            {project.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;