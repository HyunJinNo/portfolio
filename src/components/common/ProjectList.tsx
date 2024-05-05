import "@/styles/ProjectList.scss";
import { PiProjectorScreenChart } from "react-icons/pi";
import ProjectItem from "./ProjectItem";
import projects from "@/constants/projects";

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <div className="title" data-aos="fade-right" data-aos-offset="200">
        <PiProjectorScreenChart size={"3vw"} />
        <h1>Projects</h1>
      </div>
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
