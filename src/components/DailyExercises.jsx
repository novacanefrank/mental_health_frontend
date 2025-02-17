import React, { useState } from "react";
import { FaRegClock, FaLeaf, FaEye } from "react-icons/fa";
import "../style/DailyExercises.css"; // Ensure correct path for CSS

const DailyExercises = () => {
  const [breathingText, setBreathingText] = useState("Breathe In");
  const [meditationTime, setMeditationTime] = useState(5);
  const [groundingStep, setGroundingStep] = useState("Start Grounding");

  const startBreathingExercise = () => {
    setBreathingText("Breathe In");
    setTimeout(() => setBreathingText("Hold"), 4000);
    setTimeout(() => setBreathingText("Breathe Out"), 8000);
    setTimeout(() => setBreathingText("Breathe In"), 12000);
  };

  const startMeditation = () => {
    let time = 5;
    setMeditationTime(time);
    const interval = setInterval(() => {
      time--;
      setMeditationTime(time);
      if (time === 0) clearInterval(interval);
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
    let index = 0;
    setGroundingStep(groundingSteps[index]);
    const interval = setInterval(() => {
      index++;
      if (index < groundingSteps.length) {
        setGroundingStep(groundingSteps[index]);
      } else {
        clearInterval(interval);
        setGroundingStep("Grounding Complete");
      }
    }, 3000);
  };

  return (
    <div className="daily-exercises-container">
      <h2 className="title">Daily Exercises</h2>
      
      <div className="exercise-card">
        <h3>Breathing Exercise</h3>
        <FaLeaf className="exercise-icon" />
        <p className="exercise-text">{breathingText}</p>
        <button className="exercise-button" onClick={startBreathingExercise}>Start Breathing</button>
      </div>

      <div className="exercise-card">
        <h3>Meditation Timer</h3>
        <FaRegClock className="exercise-icon" />
        <p className="exercise-text">{meditationTime > 0 ? `${meditationTime} sec` : "Done!"}</p>
        <button className="exercise-button" onClick={startMeditation}>Start Meditation</button>
      </div>

      <div className="exercise-card">
        <h3>5-4-3-2-1 Grounding</h3>
        <FaEye className="exercise-icon" />
        <p className="exercise-text">{groundingStep}</p>
        <button className="exercise-button" onClick={startGrounding}>Start Grounding</button>
      </div>
    </div>
  );
};

export default DailyExercises;
