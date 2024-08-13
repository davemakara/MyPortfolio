import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import HomeSection from "../sections/HomeSection";

type LandingPageProps = {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
};

const LandingPage = ({ homeRef, aboutRef, contactRef }: LandingPageProps) => {
  return (
    <>
      <div ref={homeRef}>
        <HomeSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </>
  );
};

export default LandingPage;
