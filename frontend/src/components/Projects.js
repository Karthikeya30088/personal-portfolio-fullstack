import { useEffect, useState } from "react";

import axios from "axios";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/projects")

      .then((response) => {

        setProjects(response.data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (

    <section id="projects" className="card">

      <h2>Projects</h2>

      <div className="project-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <br />

            <small>
              {project.technology}
            </small>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Projects;