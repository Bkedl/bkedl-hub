import React from "react";
import { useParams } from "react-router-dom";
import { skills, projects } from "./data";
import ProjectReadme from "./ProjectReadme";

function SkillDetail() {
  const { skillName } = useParams();
  const skill = skills.find(
    (s) => s.name.toLowerCase() === skillName.toLowerCase()
  );

  if (!skill) {
    return <p className="text-white"> "{skillName}" not found.</p>;
  }

  return (
    <div>
      <h2>{skill.name} Projects</h2>
      <p>{skill.description}</p>

      {skill.projects.length === 0 && (
        <p className="text-white">No projects for this skill yet...</p>
      )}

      {skill.projects.map((projId) => {
        const project = projects[projId];
        if (!project) return null;

        return (
          <div key={projId} className="card mb-4 bg-black text-white shadow-lg">
            <div className="card-body">
              <h3>{project.title}</h3>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-light mb-3"
              >
                View GitHub Repo
              </a>
              <ProjectReadme repoName={project.repoName} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillDetail;
