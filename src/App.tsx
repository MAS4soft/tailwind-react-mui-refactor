// src\App.tsx

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Services from "./Pages/Services/Index";
import Projects from "./Pages/Projects/Index";
import About from "./Pages/About/Index";
import ContactUs from "./Pages/ContactUs/Index";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import ScrollToTop from "./Components/ScrollToTop";
import './index.css'


const App = () => {
  return (
  <>
      <ResponsiveAppBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
  </>
  );
};

export default App;
