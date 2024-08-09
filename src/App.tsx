import { useEffect, useState } from "react";
import LoadingProject from "./sections/LoadingProject";
import HomeContent from "./pages/HomeContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

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
          <Header />
          <Routes>
            <Route path="/" element={<HomeContent />} />
            {/* <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} /> */}
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
