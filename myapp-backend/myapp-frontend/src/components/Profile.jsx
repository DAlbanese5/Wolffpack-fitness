import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

function Profile({ user }) {
  const [workoutSchedule, setWorkoutSchedule] = useState([]);
  const [message, setMessage] = useState("");
  const [trainerResponse, setTrainerResponse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if user is not logged in
      return;
    }

    // Fetch user's workout schedule from the API
    const fetchWorkoutSchedule = async () => {
      try {
        const response = await axios.get(`/api/workouts/user/${user.id}`);
        setWorkoutSchedule(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching workout schedule:", error);
      }
    };

    fetchWorkoutSchedule();
  }, [user, navigate]);

  const handleMarkCompleted = async (workoutId) => {
    try {
      await axios.post(`/api/workouts/mark-completed`, {
        userId: user.id,
        workoutId: workoutId,
      });
      // Update the local state to reflect the change
      setWorkoutSchedule((prev) =>
        prev.map((workout) =>
          workout.id === workoutId ? { ...workout, completed: true } : workout
        )
      );
    } catch (error) {
      console.error("Error marking workout as completed:", error);
    }
  };

  const handleSendMessage = async () => {
    try {
      await axios.post("/api/messages/send", {
        fromUserId: user.id,
        toUserId: 1, // Assuming the trainer has a user ID of 1
        content: message,
      });
      setTrainerResponse("Message sent successfully!");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="profile">
      <h2>{user.username}'s Profile</h2>
      <div className="profile-info">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <p>{user.bio}</p>
      </div>

      <div className="workout-schedule">
        <h3>Your Workout Schedule for the Week</h3>
        {Array.isArray(workoutSchedule) && workoutSchedule.length > 0 ? (
          <ul>
            {workoutSchedule.map((workout) => (
              <li key={workout.id}>
                {workout.name} - {workout.difficulty}
                {workout.completed ? (
                  <span className="completed">Completed</span>
                ) : (
                  <button onClick={() => handleMarkCompleted(workout.id)}>
                    Mark as Completed
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No workouts scheduled for this week.</p>
        )}
      </div>

      <div className="message-trainer">
        <h3>Send a Message to Your Trainer</h3>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
        ></textarea>
        <button onClick={handleSendMessage}>Send Message</button>
        {trainerResponse && <p>{trainerResponse}</p>}
      </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

export default Profile;
