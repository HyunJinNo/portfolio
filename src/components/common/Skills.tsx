import badges from "@/constants/badges";
import "@/styles/Skills.scss";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="Skills">
      <h2 data-aos="fade-right" data-aos-offset="200">
        My Skills
      </h2>
      {badges.map((badge) => (
        <Image
          key={badge.src}
          src={badge.src}
          alt={badge.alt}
          width={badge.width}
          height={28}
        />
      ))}
    </div>
  );
};

export default Skills;
