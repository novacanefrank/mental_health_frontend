import React, { useState } from 'react';
import '../style/SetGoals.css';

const SetGoals = () => {
    const [goals, setGoals] = useState([{ text: '', completed: false }]);
    const [notes, setNotes] = useState('');

    const handleGoalChange = (index, value) => {
        const newGoals = [...goals];
        newGoals[index].text = value;
        setGoals(newGoals);
    };

    const handleGoalComplete = (index) => {
        const newGoals = [...goals];
        newGoals[index].completed = !newGoals[index].completed; // Toggle completion
        setGoals(newGoals);
    };

    const deleteGoal = (index) => {
        const newGoals = goals.filter((_, i) => i !== index); // Remove selected goal
        setGoals(newGoals);
    };

    const addGoal = () => {
        setGoals([...goals, { text: '', completed: false }]);
    };

    return (
        <div className="set-goals-container">
            <div className="set-goals-card">
                <h2 className="title">📌 My Goals</h2>
                <div className="goals-list">
                    {goals.map((goal, index) => (
                        <div key={index} className={`goal-item ${goal.completed ? "completed" : ""}`}>
                            <input
                                type="text"
                                value={goal.text}
                                onChange={(e) => handleGoalChange(index, e.target.value)}
                                placeholder="🎯 Enter your goal..."
                                className="goal-input"
                            />
                            <button className="check-button" onClick={() => handleGoalComplete(index)}>
                                {goal.completed ? '✅' : '✔️'}
                            </button>
                            <button className="delete-button" onClick={() => deleteGoal(index)}>
                                ❌
                            </button>
                        </div>
                    ))}
                </div>
                <button className="add-goal-btn" onClick={addGoal}>
                    ➕ Add Goal
                </button>
                <div className="notes-section">
                    <h3>📝 Notes</h3>
                    <textarea
                        rows="4"
                        placeholder="Write your thoughts here..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="notes-input"
                    />
                </div>
            </div>
        </div>
    );
};

export default SetGoals;
