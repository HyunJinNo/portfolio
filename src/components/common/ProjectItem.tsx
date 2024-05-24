"use client";

import "@/styles/ProjectItem.scss";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { FaCheck, FaCaretLeft, FaCaretRight } from "react-icons/fa";

type MyProps = {
  project: any;
};

const ProjectItem = ({ project }: MyProps) => {
  const [index, setIndex] = useState<number>(0);
  const keys = Object.keys(project).filter((key) => key !== "images");
  const length: number = project.images.length;

  const onLeft = (e: MouseEvent<SVGElement>) => {
    setIndex(Math.max(0, index - 1));
  };

  const onRight = (e: MouseEvent<SVGElement>) => {
    setIndex(Math.min(index + 1, length - 1));
  };

  return (
    <div className="ProjectItem" data-aos="slide-left">
      <h2>{project.title}</h2>
      <div className="content">
        <div className="top">
          <FaCaretLeft
            className={`leftArrow ${index <= 0 ? "disabled" : ""}`}
            size="1.5rem"
            onClick={(e) => onLeft(e)}
          />
          <div className="imageContainer">
            <Image
              className="image"
              src={project.images[index]}
              alt={""}
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <FaCaretRight
            className={`rightArrow ${index >= length - 1 ? "disabled" : ""}`}
            size="1.5rem"
            onClick={(e) => onRight(e)}
          />
        </div>
        <div className="bottom">
          <div className="info">
            {keys.map((key: string) => {
              if (key === "github") {
                return (
                  <a
                    className="body"
                    key={key}
                    href={project[key]}
                    target="_blank"
                  >
                    <div className="tag">
                      <FaCheck size={"1rem"} />
                      <h4>{`${key}`}</h4>
                    </div>
                    <div className="str">
                      <p>{project[key]}</p>
                    </div>
                  </a>
                );
              }

              return (
                <div className="body" key={key}>
                  <div className="tag">
                    <FaCheck size={"1rem"} />
                    <h4>{`${key}`}</h4>
                  </div>
                  <div className="str">
                    {Array.isArray(project[key]) ? (
                      project[key].map((str: string, index: number) => (
                        <p key={index}>{str}</p>
                      ))
                    ) : (
                      <p>{project[key]}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
