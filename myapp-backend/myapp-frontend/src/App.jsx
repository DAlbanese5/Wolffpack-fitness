import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import AboutMe from "./components/aboutMe";
import Home from "./components/home";
import Workouts from "./components/workouts";
import Products from "./components/products";
import ContactMe from "./components/contactMe";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/register";
import Profile from "./components/Profile";

import "./App.css";

function App() {
  // Define user and setUser state
  const [user, setUser] = useState(null);

  // Log user state to verify it updates after login
  console.log("User state in App:", user);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        {/* Pass `user` and `setUser` as props to Profile */}
        <Route
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />

        {/* Add more routes here as needed */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
