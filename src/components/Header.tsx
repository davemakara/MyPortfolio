import { useState } from "react";

import profilePic from "../assets/pic.jpg";
import BurgerMenu from "./BurgerMenu";
import MainNavigation from "./MainNavigation";

import { LuMenuSquare } from "react-icons/lu";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClick = () => {
    setMenuIsOpen((prev) => !prev);
  };

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
      <span
        onClick={handleClick}
        className="block md:hidden text-white text-3xl p-1 cursor-pointer hover:text-yellow transition-colors duration-300 ease-in-out"
      >
        <LuMenuSquare />
      </span>
      <div className="hidden md:flex md:items-center">
        <MainNavigation />
        <button className="w-20 h-10 rounded-lg bg-[#dc2f2f] text-white text-lg ml-6 lg:ml-10 tracking-wider shadow-lg shadow-black">
          Resume
        </button>
      </div>

      {menuIsOpen && (
        <BurgerMenu handleClick={handleClick} menuIsOpen={menuIsOpen} />
      )}
    </header>
  );
};

export default Header;
