import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Layout from "./component/Layout";
import Footer from "./component/Footer";
import About from "./component/About";
import Address from "./component/Address";
import Projects from "./component/Projects";
import NotFound from "./component/NotFound";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Layout />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Address />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
