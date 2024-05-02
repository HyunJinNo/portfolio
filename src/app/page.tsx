import AboutMe from "@/components/common/AboutMe";
import PersonalInfo from "@/components/common/PersonalInfo";
import Projects from "@/components/common/Projects";
import Skills from "@/components/common/Skills";
import Title from "@/components/common/Title";
import Wallpaper from "@/components/common/Wallpaper";

export default function Home() {
  return (
    <Wallpaper>
      <Title />
      <AboutMe />
      <PersonalInfo />
      <Skills />
      <Projects />
    </Wallpaper>
  );
}
