import { useEffect, useState } from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-gray-light hover:bg-gray inline-flex items-center rounded-md p-3 text-black shadow-sm transition-all`}
      >
        <RiArrowUpDoubleFill className="w-8 md:w-10 h-6 md:h-8" />
      </button>
    </div>
  );
};

export default ScrollToTop;
