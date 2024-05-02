import "@/styles/Title.scss";

const Title = () => {
  return (
    <div className="Title">
      <div className="position" data-aos="fade-in">
        <h2>{"Front-end"}</h2>
        <h2>{"Developer"}</h2>
      </div>
      <div className="titleGroup" data-aos="fade-in">
        <div className="titleText">
          <h1>{"노현진's"}</h1>
          <h1>{"Portfolio"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
