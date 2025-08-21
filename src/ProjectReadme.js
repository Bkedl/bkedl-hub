import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function ProjectReadme({ repoName }) {
  const [content, setContent] = useState("Loading README...");

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/bkedl/${repoName}/main/README.md`)
      .then((res) => {
        if (!res.ok) throw new Error("README not found");
        return res.text();
      })
      .then(setContent)
      .catch(() => setContent("No README available for this project."));
  }, [repoName]);

  return (
    <div className="overview-box">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default ProjectReadme;
