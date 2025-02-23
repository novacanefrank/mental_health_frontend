import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { getExercises, createExercise, updateExercise, deleteExercise } from "../apis/api";

const DailyExercises = () => {
    const [exercises, setExercises] = useState([]);
    const [newExercise, setNewExercise] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchExercises();
    }, []);

    const fetchExercises = async () => {
        try {
            const response = await getExercises();
            setExercises(response.data);
        } catch (error) {
            console.error('Error fetching exercises:', error);
        }
    };

    const addExercise = async () => {
        if (!newExercise.trim()) return;

        try {
            const response = await createExercise({
                userId: 1, 
                description: newExercise,
            });

            setExercises([...exercises, response.data]);
            setNewExercise('');
        } catch (error) {
            console.error('Error adding exercise:', error);
        }
    };

    return (
        <div>
            <h2>Daily Exercises</h2>
            <input
                type="text"
                placeholder="Enter exercise..."
                value={newExercise}
                onChange={(e) => setNewExercise(e.target.value)}
            />
            <button onClick={addExercise}>
                <FaPlus /> Add
            </button>

            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                        <span>{exercise.description}</span>
                        <button onClick={() => deleteExercise(exercise.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DailyExercises;
