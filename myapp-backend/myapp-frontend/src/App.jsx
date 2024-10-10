import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import AboutMe from "./components/aboutMe"; // Ensure you import the AboutMe component
import Home from "./components/home";
import Workouts from "./components/workouts";
import Products from "./components/products";
import ContactMe from "./components/contactMe";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactMe />} />
        {/* Add more routes here as needed */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
