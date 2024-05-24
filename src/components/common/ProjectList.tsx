"use client";

import "@/styles/ProjectList.scss";
import { AiOutlineProject } from "react-icons/ai";
import ProjectItem from "./ProjectItem";
import projects from "@/constants/projects";
import { MouseEvent, TouchEvent, useRef, useState } from "react";

const ProjectList = () => {
  const listRef = useRef<HTMLDivElement>(null);

  // element를 드래그하고 있는지 여부 확인
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // 드래그 시작 시점의 스크롤 포지션이 포함된 X축 좌표값
  const [totalX, setTotalX] = useState<number>(0);

  const onDragStart = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);

    const x = e.clientX;
    if (listRef.current && "scrollLeft" in listRef.current) {
      setTotalX(x + listRef.current.scrollLeft);
    }
  };

  const onDragMove = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      return;
    }

    const scrollLeft = totalX - e.clientX;
    if (listRef.current && "scrollLeft" in listRef.current) {
      // 스크롤 발생
      listRef.current.scrollLeft = scrollLeft;
    }
  };

  const onDragEnd = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      return;
    }

    if (!listRef.current) {
      return;
    }

    setIsDragging(false);
  };

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);

    const x = e.touches[0].pageX;
    if (listRef.current && "scrollLeft" in listRef.current) {
      setTotalX(x + listRef.current.scrollLeft);
    }
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isDragging) {
      return;
    }

    const scrollLeft = totalX - e.touches[0].pageX;
    if (listRef.current && "scrollLeft" in listRef.current) {
      // 스크롤 발생
      listRef.current.scrollLeft = scrollLeft;
    }
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isDragging) {
      return;
    }

    if (!listRef.current) {
      return;
    }

    setIsDragging(false);
  };

  return (
    <div className="ProjectList">
      <div className="title" data-aos="flip-right" data-aos-offset="200">
        <AiOutlineProject size={"4vw"} />
        <h1>Projects</h1>
      </div>
      <div
        className="list"
        ref={listRef}
        onMouseDown={(e) => onDragStart(e)}
        onMouseMove={(e) => onDragMove(e)}
        onMouseUp={(e) => onDragEnd(e)}
        onMouseLeave={(e) => onDragEnd(e)}
        onTouchStart={(e) => onTouchStart(e)}
        onTouchMove={(e) => onTouchMove(e)}
        onTouchEnd={(e) => onTouchEnd(e)}
      >
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
