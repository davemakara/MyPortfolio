import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className="h-full hidden md:flex">
      <ul className="flex items-center text-white text-base xl:text-lg tracking-wider">
        <li className="h-full flex">
          <Link
            to="/"
            className="h-full flex items-center px-8 hover:text-yellow transition-colors duration-300 ease-in-out"
          >
            HOME
          </Link>
        </li>
        <li className="h-full flex">
          <Link
            to="/"
            className="h-full flex items-center px-8 hover:text-yellow transition-colors duration-300 ease-in-out"
          >
            ABOUT
          </Link>
        </li>
        <li className="h-full flex">
          <Link
            to="/"
            className="h-full flex items-center px-8 hover:text-yellow transition-colors duration-300 ease-in-out"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
