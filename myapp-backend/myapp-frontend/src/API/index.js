const API_URL = "http://localhost:3000/api";

// Register a new user
export async function createNewUser(username, email, password) {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const json = await response.json();
    if (response.ok) {
      localStorage.setItem("token", json.token); // Store the token
      return json;
    } else {
      console.error("Registration failed:", json.message);
      return { error: json.message };
    }
  } catch (err) {
    console.error("Oops, something went wrong during registration!", err);
    throw err;
  }
}
