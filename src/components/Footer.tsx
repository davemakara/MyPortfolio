import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="block w-full bg-black text-white py-10 md:py-16 xl:px-10">
      <div className="flex flex-col-reverse mx-auto w-4/5 border-b border-b-[#444] sm:flex-row sm:justify-between pb-10">
        <div className="max-w-full sm:max-w-[240px] md:max-w-[400px] lg:max-w-[500px]">
          <h4 className="text-white text-xl xl:text-2xl mb-4 tracking-widest">
            DAVID MAKAROV
          </h4>
          <p className="text-white text-base xl:text-lg tracking-wide">
            Motivated and detail-oriented Quality Assurance Specialist with a
            strong foundation in front-end development
          </p>
        </div>
        <div>
          <h4 className="text-white text-xl xl:text-2xl mb-4 tracking-widest">
            SOCIAL
          </h4>
          <ul className="flex gap-2 mb-10 sm:mb-0">
            <li>
              <a
                href="https://www.linkedin.com/in/davidmakarov"
                target="_blank"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </li>
            <li>
              <a href="https://github.com/davemakara" target="_blank">
                <FaGithub className="text-3xl" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/davemakaraa/" target="_blank">
                <FaInstagramSquare className="text-3xl" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/DavidMakarovv" target="_blank">
                <FaFacebookSquare className="text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs sm:text-sm md:text-base mt-8 xxl:mt-10 font-serif font-semibold">
        © Copyright 2024. Made by David Makarov
      </p>
    </footer>
  );
};

export default Footer;
