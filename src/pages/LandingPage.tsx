import { useIsVisible } from "../hooks/useVisible";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import HomeSection from "../sections/HomeSection";

import ReactGA from "react-ga4";

type LandingPageProps = {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
};

const LandingPage = ({ homeRef, aboutRef, contactRef }: LandingPageProps) => {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "home",
  });

  const homeIsVisible = useIsVisible(homeRef);
  const aboutIsVisible = useIsVisible(aboutRef);
  const contactIsVisible = useIsVisible(contactRef);

  return (
    <>
      <div
        ref={homeRef}
        className={`transition-opacity ease-in duration-1000 ${
          homeIsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <HomeSection />
      </div>
      <div
        ref={aboutRef}
        className={`transition-opacity ease-in duration-1000 ${
          aboutIsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <AboutSection />
      </div>
      <div
        ref={contactRef}
        className={`transition-opacity ease-in duration-1000 ${
          contactIsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ContactSection />
      </div>
    </>
  );
};

export default LandingPage;
