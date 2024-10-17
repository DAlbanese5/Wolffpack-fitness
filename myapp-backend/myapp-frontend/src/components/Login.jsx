// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import { loginUser } from "../API"; 

// const Login = ({ setUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await loginUser(email, password);
//       if (response && response.token) {

//         localStorage.setItem("token", response.token);
//         localStorage.setItem("user", JSON.stringify(response.user));

//         setUser(response.user); 

//         navigate("/profile"); 
//       } else {
//         setError("Invalid login credentials");
//       }
//     } catch (err) {
//       console.error("Login failed: ", err);
//       setError("Something went wrong, please try again.");
//     }
//   };

//   return (
//     <div className="login">
//       <br />
//       <h2>Login</h2>
//       {error && <p>{error}</p>}
//       <form className="register-form" onSubmit={handleSubmit}>
//         <label>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button className="login-button" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom"; // Import Link here
// // import { loginUser } from "../API"; 

// const Login = ({ setUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await loginUser(email, password);
//       if (response && response.token) {
//         localStorage.setItem("token", response.token);
//         localStorage.setItem("user", JSON.stringify(response.user));

//         setUser(response.user); 

//         navigate("/profile"); 
//       } else {
//         setError("Invalid login credentials");
//       }
//     } catch (err) {
//       console.error("Login failed: ", err);
//       setError("Something went wrong, please try again.");
//     }
//   };

//   return (
//     <div className="login">
//       <br />
//       <h2>Login</h2>
//       {error && <p>{error}</p>}
//       <form className="register-form" onSubmit={handleSubmit}>
//         <label>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button className="submit-button" type="submit">
//           Submit
//         </button>
//       </form>
//       <p className="register-link">
//         Not a member? <Link to="/register">Register here</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link here
// import { loginUser } from "../API"; 

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);
      if (response && response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));

        setUser(response.user); 

        navigate("/profile"); 
      } else {
        setError("Invalid login credentials");
      }
    } catch (err) {
      console.error("Login failed: ", err);
      setError("Something went wrong, please try again.");
    }
  };

  return (
    <div className="login">
      <br />
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      <p className="register-link">
        Not a part of the Pak? <Link to="/register">Register here</Link>
      </p>
    </div>
   
  );
};

export default Login;

