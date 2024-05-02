import "@/styles/Wallpaper.scss";

type MyProps = {
  children?: React.ReactNode;
};

const Wallpaper = ({ children }: MyProps) => {
  return (
    <div className="Wallpaper">
      <div>{children}</div>
    </div>
  );
};

export default Wallpaper;
