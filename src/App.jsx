import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";
import Visualizations from "./pages/Visualizations";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cases" element={<Cases />} />
          <Route path="/Cases/:id" element={<CaseDetail />} />
          <Route path="/Visualizations" element={<Visualizations />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
