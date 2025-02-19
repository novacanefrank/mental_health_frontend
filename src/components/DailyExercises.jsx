import React, { useState } from "react";
import { FaRegClock, FaLeaf, FaEye, FaPlus } from "react-icons/fa";
import "../style/DailyExercises.css"; // Ensure correct path for CSS

const DailyExercises = () => {
  const [breathingText, setBreathingText] = useState("Breathe In");
  const [meditationTime, setMeditationTime] = useState(5);
  const [customTime, setCustomTime] = useState(5);
  const [groundingStep, setGroundingStep] = useState("Start Grounding");
  const [customExercises, setCustomExercises] = useState([]);
  const [newExercise, setNewExercise] = useState("");
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [isMeditationActive, setIsMeditationActive] = useState(false);
  const [isGroundingActive, setIsGroundingActive] = useState(false);
  const [activeCustomExercises, setActiveCustomExercises] = useState({});

  let breathingInterval, meditationInterval, groundingInterval;

  const startBreathingExercise = () => {
    if (isBreathingActive) {
      clearTimeout(breathingInterval);
      setBreathingText("Breathe In");
      setIsBreathingActive(false);
      return;
    }
    setIsBreathingActive(true);
    setBreathingText("Breathe In");
    breathingInterval = setTimeout(() => setBreathingText("Hold"), 4000);
    setTimeout(() => setBreathingText("Breathe Out"), 8000);
    setTimeout(() => setBreathingText("Breathe In"), 12000);
  };

  const startMeditation = () => {
    if (isMeditationActive) {
      clearInterval(meditationInterval);
      setMeditationTime(customTime);
      setIsMeditationActive(false);
      return;
    }
    setIsMeditationActive(true);
    let time = customTime;
    setMeditationTime(time);
    meditationInterval = setInterval(() => {
      time--;
      setMeditationTime(time);
      if (time === 0) {
        clearInterval(meditationInterval);
        setIsMeditationActive(false);
      }
    }, 1000);
  };

  const groundingSteps = [
    "5 Things You Can See",
    "4 Things You Can Touch",
    "3 Things You Can Hear",
    "2 Things You Can Smell",
    "1 Thing You Can Taste",
  ];

  const startGrounding = () => {
    if (isGroundingActive) {
      clearInterval(groundingInterval);
      setGroundingStep("Start Grounding");
      setIsGroundingActive(false);
      return;
    }
    setIsGroundingActive(true);
    let index = 0;
    setGroundingStep(groundingSteps[index]);
    groundingInterval = setInterval(() => {
      index++;
      if (index < groundingSteps.length) {
        setGroundingStep(groundingSteps[index]);
      } else {
        clearInterval(groundingInterval);
        setGroundingStep("Grounding Complete");
        setIsGroundingActive(false);
      }
    }, 3000);
  };

  const addCustomExercise = () => {
    if (newExercise.trim()) {
      setCustomExercises([...customExercises, newExercise]);
      setActiveCustomExercises((prev) => ({ ...prev, [newExercise]: false }));
      setNewExercise("");
    }
  };

  const toggleCustomExercise = (exercise) => {
    setActiveCustomExercises((prev) => ({
      ...prev,
      [exercise]: !prev[exercise],
    }));
  };

  return (
    <div className="daily-exercises-container">
      <h2 className="title">Daily Exercises</h2>
      
      <div className="exercise-card">
        <h3>Breathing Exercise</h3>
        <FaLeaf className="exercise-icon" />
        <p className="exercise-text">{breathingText}</p>
        <button className="exercise-button" onClick={startBreathingExercise}>
          {isBreathingActive ? "Stop Breathing" : "Start Breathing"}
        </button>
      </div>

      <div className="exercise-card">
        <h3>Meditation Timer</h3>
        <FaRegClock className="exercise-icon" />
        <p className="exercise-text">
          {meditationTime > 0 ? `${meditationTime} sec` : "Done!"}
        </p>
        <input
          type="number"
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          className="exercise-input"
        />
        <button className="exercise-button" onClick={startMeditation}>
          {isMeditationActive ? "Stop Meditation" : "Start Meditation"}
        </button>
      </div>

      <div className="exercise-card">
        <h3>5-4-3-2-1 Grounding</h3>
        <FaEye className="exercise-icon" />
        <p className="exercise-text">{groundingStep}</p>
        <button className="exercise-button" onClick={startGrounding}>
          {isGroundingActive ? "Stop Grounding" : "Start Grounding"}
        </button>
      </div>

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

      {customExercises.map((exercise, index) => (
        <div key={index} className="exercise-card">
          <h3>{exercise}</h3>
          <p className="exercise-text">Custom Exercise</p>
          <button className="exercise-button" onClick={() => toggleCustomExercise(exercise)}>
            {activeCustomExercises[exercise] ? "Stop Exercise" : "Start Exercise"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DailyExercises;

