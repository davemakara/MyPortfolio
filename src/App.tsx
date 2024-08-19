import { useEffect, useState, useRef } from "react";
import LoadingProject from "./components/loading-project/LoadingProject";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import LandingPage from "./pages/LandingPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

import ReactGA from "react-ga4";

ReactGA.initialize("G-GZQKF0XJCN");

function App() {
  const [isMounted, setIsMounted] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 3000);
  });

  return (
    <>
      {!isMounted ? (
        <LoadingProject />
      ) : (
        <>
          <ParticlesBackground />
          <ScrollToTop />
          <Header
            homeRef={homeRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
          />
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  homeRef={homeRef}
                  aboutRef={aboutRef}
                  contactRef={contactRef}
                />
              }
            />
            <Route path="/:projectId" element={<ProjectPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
