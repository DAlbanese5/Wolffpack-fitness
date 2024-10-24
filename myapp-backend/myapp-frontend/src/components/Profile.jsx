import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState(null); // Store user data
  const navigate = useNavigate(); // Use useNavigate instead of useHistory for redirection

  // Load user data from localStorage when the component mounts
  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      // If user data exists, parse and set it to state
      setProfileInfo(JSON.parse(userData));
    } else {
      // If no user data, redirect to login page
      navigate("/login");
    }
  }, [navigate]);

  // Handle cases where profileInfo is not yet loaded
  if (!profileInfo) {
    return <div>Loading...</div>; // Or a spinner can be added here for a better UX
  }

  return (
    <div className="profile-container">
      <h1>WELCOME TO YOUR PROFILE</h1>

      {/* Account Information Section */}
      <section className="profile-section">
        <h2>Account Information</h2>
        <p>
          <strong>Name:</strong> {profileInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {profileInfo.email}
        </p>
      </section>

      {/* Items Purchased Section */}
      <section className="profile-section">
        <h2>Items Purchased</h2>
        <ul>
          <li>
            <strong>Product:</strong> Laptop <br />
            <strong>Date Purchased:</strong> March 15, 2024
          </li>
          <li>
            <strong>Product:</strong> Wireless Headphones <br />
            <strong>Date Purchased:</strong> April 10, 2024
          </li>
          <li>
            <strong>Product:</strong> Phone Case <br />
            <strong>Date Purchased:</strong> May 5, 2024
          </li>
        </ul>
      </section>

      {/* Payment Methods Section */}
      <section className="profile-section">
        <h2>Payment Methods</h2>
        <p>
          <strong>Card:</strong> {profileInfo.paymentMethod}
        </p>
      </section>

      {/* Address Section */}
      <section className="profile-section">
        <h2>Shipping Address</h2>
        <p>
          <strong>Address:</strong> {profileInfo.address}
        </p>
      </section>
    </div>
  );
};

export default Profile;
