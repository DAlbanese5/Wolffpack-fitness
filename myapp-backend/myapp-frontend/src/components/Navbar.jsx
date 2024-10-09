import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <button>Product</button>
        <button>Workouts</button>
        <button>About Me</button>
        <button>Contact</button>
      </div>
      <button className="cart-button">Cart</button>{" "}
      {/* Cart button on the right */}
    </>
  );
};

export default Navbar;
