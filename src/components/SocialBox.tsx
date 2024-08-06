import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const SocialBox = () => {
  return (
    <div className="absolute z-10 hidden top-1/2 left-0 p-[5px] bg-white rounded-r-md shadow-md shadow-black -translate-y-1/2 lg:block">
      <ul className="block">
        <li>
          <a
            href="https://www.linkedin.com/in/davidmakarov/"
            target="_blank"
            className="w-full block p-[10px] rounded-sm transition-colors duration-500 ease-out hover:bg-gray-light"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/davemakara"
            target="_blank"
            className="w-full block p-[10px] rounded-sm transition-all duration-500 ease-out hover:bg-gray-light"
          >
            <FaGithub className="text-xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/davemakaraa/"
            target="_blank"
            className="w-full block p-[10px] rounded-sm transition-all duration-500 ease-out hover:bg-gray-light"
          >
            <FaInstagramSquare className="text-xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/DavidMakarovv"
            target="_blank"
            className="w-full block p-[10px] rounded-sm transition-all duration-500 ease-out hover:bg-gray-light"
          >
            <FaFacebookSquare className="text-xl" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBox;
