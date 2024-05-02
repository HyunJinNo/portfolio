import AboutMe from "@/components/common/AboutMe";
import Title from "@/components/common/Title";
import Wallpaper from "@/components/common/Wallpaper";

export default function Home() {
  return (
    <Wallpaper>
      <Title />
      <AboutMe />
    </Wallpaper>
  );
}
