import IMAGES_SKILLS from "@/constants/IMAGES_SKILLS";
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
      <div className="category" data-aos="flip-down">
        <h2>Front-end</h2>
        <div className="cardViewGroup">
          {IMAGES_SKILLS.frontend.map((value) => (
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
      <div className="category" data-aos="flip-down">
        <h2>Back-end</h2>
        <div className="cardViewGroup">
          {IMAGES_SKILLS.backend.map((value) => (
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
      <div className="category" data-aos="flip-down">
        <h2>Mobile</h2>
        <div className="cardViewGroup">
          {IMAGES_SKILLS.mobile.map((value) => (
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
      <div className="category" data-aos="flip-down">
        <h2>Deployment</h2>
        <div className="cardViewGroup">
          {IMAGES_SKILLS.deployment.map((value) => (
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
      <div className="category" data-aos="flip-down">
        <h2>Version Control</h2>
        <div className="cardViewGroup">
          {IMAGES_SKILLS.versionControl.map((value) => (
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
    </div>
  );
};

export default Skills;
