import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import HomeMenu from "./menu/HomeMenu";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <HomeMenu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
