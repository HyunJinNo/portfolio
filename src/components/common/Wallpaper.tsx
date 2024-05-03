import "@/styles/Wallpaper.scss";
import Image from "next/image";

const Wallpaper = () => {
  return (
    <Image
      className="Wallpaper"
      src="/space_wallpaper.jpg"
      alt="wallpaper"
      fill={true}
      objectFit="cover"
      objectPosition="center"
    />
  );
};

export default Wallpaper;
