import React, { useState, useEffect } from 'react';
import { getGoals, setGoal, updateGoal, deleteGoal } from '../apis/api';
import '../style/SetGoals.css';

const SetGoals = () => {
    const [goals, setGoalsState] = useState([]);
    const [error, setError] = useState(null);
    const [showAddGoalForm, setShowAddGoalForm] = useState(false); // State to toggle form visibility
    const [newGoalTitle, setNewGoalTitle] = useState(''); // New goal title
    const [newGoalDate, setNewGoalDate] = useState(new Date().toISOString().split('T')[0]); // New goal date
    const userId = localStorage.getItem("userId"); // Get userId from local storage

    useEffect(() => {
        if (userId) {
            fetchGoals();
        }
    }, [userId]);

    const fetchGoals = async () => {
        try {
            const response = await getGoals();
            const userGoals = response.data.filter(goal => goal.userId === userId); // Filter goals for the current user
            setGoalsState(userGoals);
        } catch (error) {
            setError("Error fetching goals");
            console.error("Error fetching goals:", error);
        }
    };
    

    const handleGoalChange = (index, value) => {
        const newGoals = [...goals];
        newGoals[index].title = value;
        setGoalsState(newGoals);
    };

    const handleGoalComplete = async (index) => {
        const updatedGoal = { ...goals[index], isCompleted: !goals[index].isCompleted };
        try {
            await updateGoal(goals[index].id, updatedGoal);
            fetchGoals();
        } catch (error) {
            console.error("Error updating goal:", error);
        }
    };

    const handleDeleteGoal = async (id) => {
        try {
            await deleteGoal(id);
            fetchGoals();
        } catch (error) {
            console.error("Error deleting goal:", error);
        }
    };

    const addNewGoal = async () => {
        if (!userId) {
            setError("User not logged in. Please log in to set goals.");
            return;
        }

        if (!newGoalTitle || !newGoalDate) {
            setError("Please provide both title and date for the new goal.");
            return;
        }

        const newGoal = { userId, title: newGoalTitle, Date: newGoalDate, isCompleted: false };
        try {
            const response = await setGoal(newGoal);
            setGoalsState([...goals, response.data]);
            setNewGoalTitle('');
            setNewGoalDate(new Date().toISOString().split('T')[0]);
            setShowAddGoalForm(false); // Close the form after adding the goal
        } catch (error) {
            console.error("Error adding goal:", error);
        }
    };

    return (
        <div className="set-goals-container">
            <div className="set-goals-card">
                <h2 className="title">📌 My Goals</h2>
                {error && <p className="error-message">{error}</p>}

                {/* Show new goal form if showAddGoalForm is true */}
                {showAddGoalForm ? (
                    <div className="add-goal-form">
                        <input
                            type="text"
                            value={newGoalTitle}
                            onChange={(e) => setNewGoalTitle(e.target.value)}
                            placeholder="🎯 Goal Title"
                            className="goal-input"
                        />
                        <input
                            type="date"
                            value={newGoalDate}
                            onChange={(e) => setNewGoalDate(e.target.value)}
                            className="goal-input"
                        />
                        <button className="save-btn" onClick={addNewGoal}>
                            Save Goal
                        </button>
                        <button className="cancel-btn" onClick={() => setShowAddGoalForm(false)}>
                            Cancel
                        </button>
                    </div>
                ) : (
                    <div className="goals-list">
                        {goals.map((goal, index) => (
                            <div key={goal.id} className={`goal-item ${goal.isCompleted ? "completed" : ""}`}>
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
                                <button className="delete-button" onClick={() => handleDeleteGoal(goal.id)}>
                                    ❌
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {!showAddGoalForm && (
                    <button className="add-goal-btn" onClick={() => setShowAddGoalForm(true)} disabled={!userId}>
                        ➕ Add Goal
                    </button>
                )}
            </div>
        </div>
    );
};

export default SetGoals;
