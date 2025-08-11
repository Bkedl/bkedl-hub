import React, { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/bkedl/repos')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching repositories:', error));
  }, []);

  return (
    <section className="mt-5">
      <h2>Projects</h2>
      <div className="list-group">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.html_url}
            className="list-group-item list-group-item-action"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>{project.name}</h5>
            <p>{project.description || 'No description provided'}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;