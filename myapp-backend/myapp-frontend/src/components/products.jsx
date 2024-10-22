import React, { useState } from "react";


const Products = () => {
  // Single product data
  const products = {
    id: 1,
    name: "Protein Poppers",
    price: 9.99,
  };

  // State for the cart
  const [cart, setCart] = useState([]);

  // Function to add the product to the cart
  const addToCart = () => {
    setCart((prevCart) => [...prevCart, products]);
  };

  return (
    <div className="product-container">
      <h2>Products</h2>
      <div>
        <h3>{products.name}</h3>
        <p>Price: ${products.price.toFixed(2)}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>

      <h2>Cart</h2>
      <div>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Products;

