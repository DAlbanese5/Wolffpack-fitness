import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData && userData !== "undefined") {
      try {
        const parsedData = JSON.parse(userData);
        setProfileInfo(parsedData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        localStorage.removeItem("user");
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!profileInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>WELCOME TO YOUR PROFILE</h1>
      {/* Additional profile data can be rendered here */}
    </div>
  );
};

export default Profile;
