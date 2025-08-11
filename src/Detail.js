import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { skills, projects } from './data';
import ReactMarkdown from 'react-markdown';

function SkillDetail() {
  const { skillName } = useParams();

  // Find skill object by lowercase match to make this easier for adding more?
  const skill = skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());

  if (!skill) {
    return <p>Skill "{skillName}" not found.</p>; 
  // Catching the option if not foundd
  }

  return (
    <div>
      <h2>{skill.name} Projects</h2>
      <p>{skill.description}</p>

      {skill.projects.length === 0 && <p>No projects for this skill yet...</p>}

      {skill.projects.map(projId => {
        const project = projects[projId];
        if (!project) return null;

        return (
          <div key={projId} className="card mb-4">
            <div className="card-body">
              <h3>{project.title}</h3>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary mb-3">
                View GitHub Repo
              </a>
              <p>{project.overview}</p>
              <div className="border-top pt-3">
                <ReactMarkdown>{project.writeup}</ReactMarkdown>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillDetail;