import "@/styles/ProjectItem.scss";
import { FaCheck } from "react-icons/fa";

type MyProps = {
  project: any;
};

const ProjectItem = ({ project }: MyProps) => {
  const keys = Object.keys(project);

  return (
    <div className="ProjectItem" data-aos="slide-left">
      <h2>{project.title}</h2>
      <div className="content">
        <div className="image">Image</div>
        <div className="infos">
          <div className="info">
            {keys.map((key: string) => (
              <div className="body" key={key}>
                <div className="tag">
                  <FaCheck size={"1vw"} />
                  <h4>{`${key}`}</h4>
                </div>
                <p>{project[key]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
