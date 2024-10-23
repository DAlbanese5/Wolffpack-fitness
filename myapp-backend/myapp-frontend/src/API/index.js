const API_URL = "http://localhost:5000/api";

const createNewUser = async (username, email, password) => {
  try {
    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error.message };
  }
};
export default createNewUser;
