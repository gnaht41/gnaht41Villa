import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Footer from "./components/Footer/Footer";
import './App.css';
import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
