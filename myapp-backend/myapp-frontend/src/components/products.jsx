import React, { useState } from "react";
import poppers1 from "./pics/poppers.jpg";

const Products = () => {
  // Single product data
  const product = {
    id: 1,
    name: "Protein Poppers",
    price: 9.99,
    imageUrl: poppers1,
    description: "Delicious bite-sized protein snacks to fuel your workout.",
  };

  // State for the cart
  const [cart, setCart] = useState([]);

  // Function to add the product to the cart
  const addToCart = () => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate the total price
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <div className="product-page-container">
      <h2 className="page-title">Shop Our Products</h2>
      <div className="product-list">
        <div className="product-card">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-container">
        {cart.length > 0 ? (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <img
                      src={poppers1}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                  <button
                    className="remove-from-cart-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
          </>
        ) : (
          <p className="empty-cart-message">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
