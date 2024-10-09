import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import AboutMe from "./components/aboutMe"; // Ensure you import the AboutMe component
import "./App.css";
import Home from "./components/home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        {/* Add more routes here as needed */}
        <Route path="/" element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App;




