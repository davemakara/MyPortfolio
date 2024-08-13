import { FaWindowClose } from "react-icons/fa";

interface BurgerMenuProps {
  handleClick: () => void;
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  handleNavigation: (
    path: string,
    ref: React.RefObject<HTMLDivElement>
  ) => void;
}

const BurgerMenu = ({
  handleClick,
  homeRef,
  aboutRef,
  contactRef,
  handleNavigation,
}: BurgerMenuProps) => {
  const handleScroll = (path: string, ref: React.RefObject<HTMLDivElement>) => {
    handleNavigation(path, ref); // Navigate to the path and scroll
    handleClick();
  };

  return (
    <div className="absolute md:hidden top-0 left-0 w-full h-screen z-50 bg-customBlue flex justify-center items-center transition-all duration-1000 ease-in-out translate-x-0">
      <span
        onClick={handleClick}
        className="absolute top-6 right-6 text-white text-4xl p-1 cursor-pointer hover:text-yellow transition-colors duration-300 ease-in-out"
      >
        <FaWindowClose />
      </span>

      <ul className="text-white text-3xl flex flex-col items-center gap-12">
        <li>
          <button
            onClick={() => handleScroll("/", homeRef)}
            className="hover:text-yellow transition-colors duration-300 ease-in-out py-5"
          >
            HOME
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("/", aboutRef)}
            className="hover:text-yellow transition-colors duration-300 ease-in-out py-5"
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("/", contactRef)}
            className="hover:text-yellow transition-colors duration-300 ease-in-out py-5"
          >
            CONTACT
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
