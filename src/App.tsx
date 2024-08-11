import { useEffect, useState } from "react";
import LoadingProject from "./sections/LoadingProject";
import HomeContent from "./pages/HomeContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import ParticlesBackground from "./components/particles/ParticlesBackground";

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
          <Header />
          <Routes>
            <Route path="/" element={<HomeContent />} />
            {/* <Route path="/projects" element={<ProjectsPage />} /> */}
            <Route path="/:projectId" element={<ProjectPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
