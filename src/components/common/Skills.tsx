import { IMAGES_SKILLS, IMAGES_SKILLS_KEYS } from "@/constants/IMAGES_SKILLS";
import "@/styles/Skills.scss";
import Image from "next/image";
import { FaBook } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="title" data-aos="fade-right" data-aos-offset="200">
        <FaBook size={"3vw"} />
        <h1>My Skills</h1>
      </div>
      {IMAGES_SKILLS_KEYS.map((key: string) => (
        <div key={key} className="category" data-aos="flip-down">
          <h2>{key}</h2>
          <div className="cardViewGroup">
            {IMAGES_SKILLS.get(key)?.map((value) => (
              <Image
                className="cardView"
                key={value.alt}
                src={value.src}
                alt={value.src}
                width={value.width}
                height={100}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
