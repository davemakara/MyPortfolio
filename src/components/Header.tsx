import profilePic from "../assets/pic.jpg";
import MainNavigation from "./MainNavigation";

const Header = () => {
  return (
    <header className="absolute top-0 w-full h-[70px] sm:h-[80px] xxl:h-[90px] flex justify-between items-center px-5 sm:px-10 md:px-16">
      <span className="flex items-center gap-4">
        <div className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] overflow-hidden rounded-full border-2 border-white">
          <img
            src={profilePic}
            alt="profile picture"
            className="w-full h-full object-fill center"
          />
        </div>
        <p className="text-base xl:text-lg text-white uppercase tracking-wider">
          DAVID MAKAROV
        </p>
      </span>

      <MainNavigation />
    </header>
  );
};

export default Header;
