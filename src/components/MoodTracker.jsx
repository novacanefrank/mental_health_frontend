import React, { useState, useEffect } from "react";
import "../style/MoodTracker.css";

const MoodTracker = () => {
    const moods = ["😊", "😢", "😡", "😴", "😐", "😁", "😔"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const [selectedMood, setSelectedMood] = useState(null);
    const [weekMoods, setWeekMoods] = useState(() => {
        const storedMoods = JSON.parse(localStorage.getItem("weekMoods")) || {};
        return storedMoods;
    });

    const today = new Date().getDay(); // 0 = Sunday, 6 = Saturday

    useEffect(() => {
        localStorage.setItem("weekMoods", JSON.stringify(weekMoods));
    }, [weekMoods]);

    const saveMood = () => {
        if (selectedMood) {
            setWeekMoods({ ...weekMoods, [today]: selectedMood });
            alert("Mood saved! 😊");
            setSelectedMood(null);
        } else {
            alert("Please select a mood first!");
        }
    };

    return (
        <div className="mood-tracker-container">
            <h2 className="mood-title">🌦️ Mood Tracker</h2>
            
            <div className="emoji-selection">
                {moods.map((mood, index) => (
                    <button
                        key={index}
                        className={`mood-button ${selectedMood === mood ? "selected" : ""}`}
                        onClick={() => setSelectedMood(mood)}
                    >
                        {mood}
                    </button>
                ))}
            </div>

            <button className="save-btn" onClick={saveMood}>💾 Save Mood</button>

            <h3 className="week-title">📅 This Week's Mood</h3>
            <div className="week-moods">
                {daysOfWeek.map((day, index) => (
                    <div key={index} className={`day-mood ${index === today ? "today" : ""}`}>
                        <span className="day-name">{day}</span>
                        <span className="mood-emoji">{weekMoods[index] || "❔"}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoodTracker;
