import React, { useState, useEffect } from 'react';
import { getGoals, setGoal, deleteGoal } from '../apis/api';  // Adjust path based on your folder structure
import '../style/SetGoals.css';

const SetGoals = () => {
    const [goals, setGoalsState] = useState([]); // Initialize goals as an empty array

    // Fetch goals from API
    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const response = await getGoals(); // Using the imported API function
                setGoalsState(response.data); // Assuming the API returns an array of goals
            } catch (error) {
                console.error('Error fetching goals:', error);
            }
        };
        fetchGoals();
    }, []);

    // Update goal's title
    const handleGoalChange = (index, value) => {
        const newGoals = [...goals];
        newGoals[index].title = value;
        setGoalsState(newGoals);
    };

    // Toggle goal completion status
    const handleGoalComplete = (index) => {
        const newGoals = [...goals];
        newGoals[index].isCompleted = !newGoals[index].isCompleted;
        setGoalsState(newGoals);
    };

    // Delete goal from API
    const handleDeleteGoal = async (index, goalId) => {
        try {
            await deleteGoal(goalId); // Using the imported API function
            setGoalsState(goals.filter((_, i) => i !== index)); // Remove goal from UI after deletion
        } catch (error) {
            console.error('Error deleting goal:', error);
        }
    };

    // Add a new goal and save to API
    const handleAddGoal = async () => {
        // Create new goal with required fields: userId, title, Date, isCompleted.
        const newGoal = { 
            userId: 1, 
            title: '', 
            Date: new Date().toISOString().slice(0, 10), 
            isCompleted: false 
        };
        try {
            const response = await setGoal(newGoal); // Using the imported API function
            setGoalsState([...goals, response.data]); // Add the new goal returned from the API
        } catch (error) {
            console.error('Error adding goal:', error);
        }
    };

    return (
        <div className="set-goals-container">
            <div className="set-goals-card">
                <h2 className="title">📌 My Goals</h2>
                <div className="goals-list">
                    {goals.map((goal, index) => (
                        <div key={goal.id || index} className={`goal-item ${goal.isCompleted ? "completed" : ""}`}>
                            <input
                                type="text"
                                value={goal.title}
                                onChange={(e) => handleGoalChange(index, e.target.value)}
                                placeholder="🎯 Enter your goal..."
                                className="goal-input"
                            />
                            <button className="check-button" onClick={() => handleGoalComplete(index)}>
                                {goal.isCompleted ? '✅' : '✔️'}
                            </button>
                            <button className="delete-button" onClick={() => handleDeleteGoal(index, goal.id)}>
                                ❌
                            </button>
                        </div>
                    ))}
                </div>
                <button className="add-goal-btn" onClick={handleAddGoal}>
                    ➕ Add Goal
                </button>
            </div>
        </div>
    );
};

export default SetGoals;
