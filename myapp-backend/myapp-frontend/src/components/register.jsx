import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import createNewUser from "../API";

const Register = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors

    try {
      const result = await createNewUser(username, email, password);
      console.log(result); // Log the result to debug the API response

      if (result && !result.error) {
        const userData = { username, email };
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData); // Update user state

        navigate("/profile"); // Redirect to the profile page
      } else {
        setError(result.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      setError("Oops, something went wrong during registration!");
    }
  };

  return (
    <div className="login">
      <br />
      <h2>Register New Account</h2>
      {error && <p className="error-message">{error}</p>}
      <div>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="login-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Define prop-types for validation
Register.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Register;
