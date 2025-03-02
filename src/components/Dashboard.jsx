import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRunning, FaBullseye, FaBook } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../style/Dashboard.css";
import { addNote, getNotes, updateNote, deleteNote } from "../apis/api"; // Ensure this path is correct

const Dashboard = () => {
    const [note, setNote] = useState(""); // To store the note content
    const [existingNote, setExistingNote] = useState(null); // To store existing note data (if any)
    const userId = localStorage.getItem("userId"); // Get userId dynamically from localStorage

    // Ensure that the userId is available
    if (!userId) {
        return <p>User ID is required to fetch notes. Please log in.</p>; // Display a message if no userId
    }

    // Fetch existing note when the component mounts
    useEffect(() => {
        const fetchNote = async () => {
            try {
                // Fetch notes for this specific user by passing userId
                const response = await getNotes(userId); // Pass userId here
                const userNote = response.data.find(note => note.userId === Number(userId)); // Find note for this user
                if (userNote) {
                    setExistingNote(userNote); // Set existing note data
                    setNote(userNote.Message); // Populate textarea with existing note
                }
            } catch (error) {
                console.error("Error fetching note:", error.message);
            }
        };
        fetchNote();
    }, [userId]); // Only re-run if userId changes

    // Handle note content change
    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    // Handle save button click
    const handleSaveNote = async () => {
        try {
            const noteData = { userId: Number(userId), Message: note, Date: new Date().toLocaleDateString() };

            if (existingNote) {
                // If the note exists, update it
                await updateNote(existingNote.id, noteData);
                console.log("Note updated:", note);
            } else {
                // If no note exists, create a new one
                await addNote(noteData);
                console.log("Note created:", note);
            }

            // After saving, update the state with the saved note
            setExistingNote({ ...existingNote, Message: note });
        } catch (error) {
            console.error("Error saving note:", error.message);
        }
    };

    // Handle delete button click
    const handleDeleteNote = async () => {
        try {
            if (existingNote) {
                await deleteNote(existingNote.id);
                console.log("Note deleted:", existingNote.id);
                setExistingNote(null); // Remove the note from state
                setNote(""); // Clear the note input
            }
        } catch (error) {
            console.error("Error deleting note:", error.message);
        }
    };

    return (
        <div className="dashboard">
            <div className="content">
                <aside className="sidebar">
                    <div className="quote-section">
                        <h2>Motivational Quote</h2>
                        <p>"Take care of your body. It's the only place you have to live."</p>
                    </div>
                    <h2>Write a Note</h2>
                    <textarea
                        className="note-area"
                        value={note}
                        onChange={handleNoteChange}
                        placeholder="Write your thoughts here..."
                    />
                    {/* Save Button */}
                    <button className="save-button" onClick={handleSaveNote}>
                        {existingNote ? "Update Note" : "Save Note"}
                    </button>

                    {existingNote && (
                    <button className="delete-button" onClick={handleDeleteNote}>
                        🗑️
                    </button>
                     )}

                    <h2>Calendar</h2>
                    <Calendar className="calendar-component" />
                </aside>

                <section className="options">
                    <div className="image-section">
                        <img src="imageee.png" alt="Wellness Theme" />
                    </div>

                    <h2>Recommendations</h2>
                    <div className="option-cards">
                        <div className="option-card exercises pastel-blue">
                            <FaRunning className="option-icon" />
                            <h3>Daily Exercises</h3>
                            <Link to="/DailyExercises" className="button">Start Now</Link>
                        </div>
                        <div className="option-card goals pastel-yellow">
                            <FaBullseye className="option-icon" />
                            <h3>Set Goals</h3>
                            <Link to="/SetGoals" className="button">Set Goals</Link>
                        </div>
                        <div className="option-card journaling pastel-pink">
                            <FaBook className="option-icon" />
                            <h3>Journal Entry</h3>
                            <Link to="/JournalEntry" className="button">Write Now</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
