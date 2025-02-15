import { useState } from "react";

import profilePic from "../assets/pic.jpg";
import BurgerMenu from "./BurgerMenu";
import MainNavigation from "./MainNavigation";

import { LuMenuSquare } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
// import ResumeButton from "./UI/ResumeButton";

type HeaderProps = {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
};

const Header = ({ homeRef, aboutRef, contactRef }: HeaderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const handleNavigation = (
    path: string,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    navigate(path); // Navigate to the specified path
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Delay to ensure navigation is complete
  };

  return (
    <header className="absolute top-0 w-full h-[70px] sm:h-[80px] xxl:h-[90px] flex justify-between items-center px-5 sm:px-10 md:px-16">
      <span className="lg:w-[350px] flex items-center gap-4">
        <div className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] overflow-hidden rounded-full border-2 border-white">
          <img
            src={profilePic}
            alt="profile picture"
            className="w-full h-full object-fill center"
          />
        </div>
        <p className="text-base xl:text-lg xxxl:text-3xl text-white uppercase tracking-wider">
          DAVIT MAKAROVI
        </p>
      </span>
      <span
        onClick={handleClick}
        className="block lg:hidden text-white text-4xl p-1 cursor-pointer"
      >
        <LuMenuSquare />
      </span>
      <MainNavigation
        handleNavigation={handleNavigation}
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      {/* <div className="hidden lg:flex lg:items-center lg:justify-end lg:w-[250px] xxl:w-[250px]">
        <ResumeButton>My Resume</ResumeButton>
      </div> */}

      {menuIsOpen && (
        <BurgerMenu
          handleClick={handleClick}
          handleNavigation={handleNavigation}
          homeRef={homeRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
      )}
    </header>
  );
};

export default Header;
