import React, { useState, useEffect } from "react";
import { FaRegClock, FaLeaf, FaEye, FaPlus } from "react-icons/fa";
import "../style/DailyExercises.css"; 
import { getExercises, createExercise, updateExercise, deleteExercise } from "../apis/api"; // API Import

const DailyExercises = () => {
  const [customExercises, setCustomExercises] = useState([]);
  const [newExercise, setNewExercise] = useState("");
  const [activeCustomExercises, setActiveCustomExercises] = useState({});
  const userId = Number(localStorage.getItem("userId")); // Get userId dynamically

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const response = await getExercises();  // Fetch exercises for the current user
      const userExercises = response.data.filter(exercise => exercise.userId === userId); // Filter exercises based on userId
      setCustomExercises(userExercises);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  };

  const addCustomExercise = async () => {
    if (!newExercise.trim()) return;
    try {
      const response = await createExercise({ title: newExercise, userId });
      setCustomExercises([...customExercises, response.data]);
      setActiveCustomExercises((prev) => ({
        ...prev,
        [response.data.id]: false,
      }));
      setNewExercise("");
    } catch (error) {
      console.error("Error adding exercise:", error);
    }
  };

  const toggleCustomExercise = async (exercise) => {
    const isActive = !activeCustomExercises[exercise.id];
    try {
      await updateExercise(exercise.id, { title: exercise.title, userId, isActive });
      setActiveCustomExercises((prev) => ({
        ...prev,
        [exercise.id]: isActive,
      }));
    } catch (error) {
      console.error("Error updating exercise:", error);
    }
  };

  const removeExercise = async (id) => {
    try {
      await deleteExercise(id);
      setCustomExercises(customExercises.filter((exercise) => exercise.id !== id));
      setActiveCustomExercises((prev) => {
        const updatedExercises = { ...prev };
        delete updatedExercises[id];
        return updatedExercises;
      });
    } catch (error) {
      console.error("Error deleting exercise:", error);
    }
  };

  return (
    <div className="daily-exercises-container">
      <h2 className="title">Daily Exercises</h2>

      <div className="exercise-card">
        <h3>Add Your Own Exercise</h3>
        <FaPlus className="exercise-icon" />
        <input
          type="text"
          value={newExercise}
          onChange={(e) => setNewExercise(e.target.value)}
          className="exercise-input"
          placeholder="Enter exercise name"
        />
        <button className="exercise-button" onClick={addCustomExercise}>
          Add Exercise
        </button>
      </div>

      {customExercises.map((exercise) => (
        <div key={exercise.id} className="exercise-card">
          <h3>{exercise.title}</h3> {/* Adjusted to 'title' field */}
          <p className="exercise-text">Custom Exercise</p>
          <button className="exercise-button" onClick={() => toggleCustomExercise(exercise)}>
            {activeCustomExercises[exercise.id] ? "Stop Exercise" : "Start Exercise"}
          </button>
          <button className="delete-button" onClick={() => removeExercise(exercise.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DailyExercises;
