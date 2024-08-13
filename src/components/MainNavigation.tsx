type MainNavigationProps = {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
};

const MainNavigation = ({
  homeRef,
  aboutRef,
  contactRef,
}: MainNavigationProps) => {
  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="h-full hidden md:flex">
      <ul className="flex items-center text-white text-base xl:text-lg tracking-wider">
        <li className="h-full flex">
          <button
            onClick={() => handleScroll(homeRef)}
            className="h-full flex items-center px-8 hover:text-yellow transition-colors duration-300 ease-in-out"
          >
            HOME
          </button>
        </li>
        <li className="h-full flex">
          <button
            onClick={() => handleScroll(aboutRef)}
            className="h-full flex items-center px-8 hover:text-yellow transition-colors duration-300 ease-in-out"
          >
            ABOUT
          </button>
        </li>
        <li className="h-full flex">
          <button
            onClick={() => handleScroll(contactRef)}
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
