import "@/styles/PersonalInfoItem.scss";

type MyProps = {
  data_aos: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  isLink?: boolean;
};

const PersonalInfoItem = ({ data_aos, icon, title, body, isLink }: MyProps) => {
  if (isLink) {
    return (
      <div>
        <a
          className="PersonalInfoItem"
          data-aos={data_aos}
          href={body}
          target="_blank"
        >
          {icon}
          <div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        </a>
      </div>
    );
  }

  return (
    <div className="PersonalInfoItem" data-aos={data_aos}>
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default PersonalInfoItem;
