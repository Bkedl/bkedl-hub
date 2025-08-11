import React from 'react';
import { Link } from 'react-router-dom';
import { skills } from './data';

// NB: take this out and put on mainpage as I do not want this as a seprate section

function SkillsList() {
  return (
    <div>
      <h2 className="mb-4">Skills</h2>
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
    </div>
  );
}

export default SkillsList;