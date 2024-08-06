import { useEffect, useState } from "react";
import LoadingProject from "./pages/LoadingProject";

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
        <div>Hello</div>
        // <>
        //   <Header />
        //   <Routes>
        //     <Route path="/" element={<HomeContent />} />
        //     <Route path="/projects" element={<ProjectsPage />} />
        //     <Route path="/projects/:id" element={<ProjectDetail />} />
        //   </Routes>
        //   <Footer />
        // </>
      )}
    </>
  );
}

export default App;
