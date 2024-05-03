import "@/styles/ProjectList.scss";
import { PiProjectorScreenChart } from "react-icons/pi";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <div className="title" data-aos="fade-right" data-aos-offset="200">
        <PiProjectorScreenChart size={"3vw"} />
        <h1>Projects</h1>
      </div>
      <ProjectItem title="Friendly Keyboard" body="body" />
    </div>
  );
};

export default ProjectList;
