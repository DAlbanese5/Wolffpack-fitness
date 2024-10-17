import React, { useState } from "react";

const ContactMe = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can process the form data, such as sending it to an API
    console.log("Form submitted:", formData);
    // Optionally, clear the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Coach</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactMe;
