import { FaWindowClose } from "react-icons/fa";

import { Link } from "react-router-dom";

interface BurgerMenuProps {
  handleClick: () => void;
  menuIsOpen: boolean;
}

const BurgerMenu = ({ handleClick, menuIsOpen }: BurgerMenuProps) => {
  return (
    <div
      className={`absolute md:hidden top-0 left-0 w-full h-screen z-50 bg-customBlue flex justify-center items-center transition-transform duration-300 ease-in-out ${
        menuIsOpen ? "left-0" : "left-full"
      }`}
    >
      <span
        onClick={handleClick}
        className="absolute top-6 right-6 text-white text-4xl p-1 cursor-pointer hover:text-yellow transition-colors duration-300 ease-in-out"
      >
        <FaWindowClose />
      </span>

      <ul className="text-white text-3xl flex flex-col items-center gap-12">
        <li>
          <Link
            to="/"
            className="hover:text-yellow transition-colors duration-300 ease-in-out py-5"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-yellow transition-colors duration-300 ease-in-out py-5"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-yellow transition-colors duration-300 ease-in-out py-5"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
