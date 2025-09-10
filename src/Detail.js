import React from "react";
import { useParams } from "react-router-dom";
import { skills, projects } from "./data";
import ProjectReadme from "./ProjectReadme";

function SkillDetail() {
  const { skillName } = useParams();
  const skill = skills.find(
    (s) => s.name.toLowerCase() === skillName.toLowerCase()
  );

  if (!skill) return <p className="text-white">"{skillName}" not found.</p>;

  return (
    <div className="skill-detail-container">
      <h1 className="display-4 fw-bold text-center">{skill.name} Projects</h1>

      <h4 className="text-center mt-3 mb-5">{skill.description}</h4>

      {skill.projects.length === 0 && (
        <p className="text-white text-center">
          No projects for this skill yet...
        </p>
      )}

      <div className="project-grid">
        {skill.projects.map((projId) => {
          const project = projects[projId];
          if (!project) return null;

          return (
            <div key={projId} className="project-card">
              <div className="card-content">
                <h3>{project.title}</h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  View GitHub
                </a>
                <ProjectReadme repoName={project.repoName} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillDetail;
