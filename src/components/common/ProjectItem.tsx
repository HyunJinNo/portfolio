import "@/styles/ProjectItem.scss";

type MyProps = {
  title: string;
  body: string;
};

const ProjectItem = ({ title, body }: MyProps) => {
  return (
    <div className="ProjectItem">
      <h2>{title}</h2>
      <div className="content">
        <div>Image</div>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
