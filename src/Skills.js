import React from 'react';

function Skills() {
  const skills = ['JavaScript', 'React', 'Bootstrap', 'HTML', 'CSS', 'Git', 'Data Analysis'];

  return (
    <section>
      <h2>Skills</h2>
      <ul className="list-group">
        {skills.map(skill => (
          <li key={skill} className="list-group-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;