import React from "react";
import { Link } from "react-router-dom";
import { skills } from "./data";
import QuoteRotator from "./QuoteRotator";
import Wave from "react-wavify";
import "./styles.css";

function Home() {
  return (
    <div className="home-container text-center">
      {/* Main content */}
      <div className="home-content">
        {/* Title */}
        <h1 className="display-4 fw-bold">Pick a Skill. See the Code.</h1>

        {/* Quote Rotator */}
        <div className="mt-5 fst-italic">
          <QuoteRotator />
        </div>

        {/* Skills Section */}
        <section>
          <h2 className="mt-1 mb-4 fw-semibold">Select a Language or Tool</h2>
          <p className="text-secondary mb-4">
            Click below to explore my repositories and experience with each
            technology.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {skills.map((skill) => (
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

      {/* Footer animation at the bottom */}
      <div className="home-footer">
        <Wave
          paused={false}
          style={{ width: "100%", height: "100%" }}
          fill="url(#purpleBlackGradient)"
          options={{
            height: 100,
            amplitude: 60,
            speed: 0.3,
            points: 5,
          }}
        >
          <defs>
            <linearGradient
              id="purpleBlackGradient"
              gradientTransform="rotate(90)"
            >
              <stop offset="0%" stopColor="#8e2de2" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </div>
  );
}

export default Home;
