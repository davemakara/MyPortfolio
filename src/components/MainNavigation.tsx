type MainNavigationProps = {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  handleNavigation: (
    path: string,
    ref: React.RefObject<HTMLDivElement>
  ) => void;
};

const MainNavigation = ({
  homeRef,
  aboutRef,
  contactRef,
  handleNavigation,
}: MainNavigationProps) => {
  return (
    <nav className="h-full hidden lg:flex">
      <ul className="flex items-center text-white text-base xl:text-lg tracking-wider">
        <li className="h-full flex">
          <button
            onClick={() => handleNavigation("/", homeRef)}
            className="h-full flex items-center px-8 hover:text-yellow transition-colors duration-300 ease-in-out"
          >
            HOME
          </button>
        </li>
        <li className="h-full flex">
          <button
            onClick={() => handleNavigation("/", aboutRef)}
            className="h-full flex items-center px-8 hover:text-yellow transition-colors duration-300 ease-in-out"
          >
            ABOUT
          </button>
        </li>
        <li className="h-full flex">
          <button
            onClick={() => handleNavigation("/", contactRef)}
            className="h-full flex items-center px-8 hover:text-yellow transition-colors duration-300 ease-in-out"
          >
            CONTACT
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
