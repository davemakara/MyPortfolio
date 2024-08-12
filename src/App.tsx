import { useEffect, useState } from "react";
import LoadingProject from "./components/loading-project/LoadingProject";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import LandingPage from "./pages/LandingPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  const [isMounted, setIsMounted] = useState(false);

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
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/:projectId" element={<ProjectPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
