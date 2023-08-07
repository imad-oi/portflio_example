'use client';

import { useEffect, useState } from "react";
import { Project } from "@models/project";
import ProjectCard from "./ProjectCard";


const Projects: React.FunctionComponent = () => {

  const [projects, setProjects] = useState<Project[]>([])

  const getProjects = async () => {
    const res = await fetch('api/project');
    const data = await res.json();
    console.log(data);
    setProjects(data);
  }

  useEffect(() => {
    getProjects();
  }, [])

  return (
    <section id="projects" >
      <div className="space-y-7">
        <h3 className='blue_gradient head_text'>Projects</h3>
        <div className="grid grid-cols-1 gap-x-5 lg:gap-x-7 gap-y-8 lg:gap-y-24  sm:grid-cols-2 lg:grid-cols-3">
          {
            projects.map((projet, index) => (
              <ProjectCard key={index} project={projet} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects