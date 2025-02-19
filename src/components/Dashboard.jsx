import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRunning, FaBullseye, FaBook, FaChartLine, FaSmile } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../style/Dashboard.css";

const Dashboard = () => {
    const [note, setNote] = useState("");
    const [progress, setProgress] = useState(10); // Start at 10%

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 100 : prev + 10)); // Increase progress
        }, 2000); // Updates every 2 seconds

        return () => clearInterval(interval); // Cleanup
    }, []);

    const handleNoteChange = (e) => {
        setNote(e.target.value);
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
                    <h2>Calendar</h2>
                    <Calendar className="calendar-component" />
                </aside>
                

                <section className="options">
                <div className="image-section">
                            <img src="imageee.png" alt="Wellness Theme" />
                            </div>
                    {/* Gamification Progress Bar */}
                    

                    {/* Recommendations Section */}
                    <h2>Recommendations</h2>

                    <div className="option-cards">
                        
                        <div className="option-card exercises pastel-blue">
                            <FaRunning className="option-icon" />
                            <h3>Daily Exercises</h3>
                            <a href="/DailyExercises" className="button">Start Now</a>
                        </div>
                        <div className="option-card goals pastel-yellow">
                            <FaBullseye className="option-icon" />
                            <h3>Set Goals</h3>
                            <a href="/SetGoals" className="button">Set Goals</a>
                        </div>
                        <div className="option-card journaling pastel-pink">
                            <FaBook className="option-icon" />
                            <h3>Journal Entry</h3>
                            <a href="/JournalEntry" className="button">Write Now</a>
                        </div>
                        <div className="option-card reviews pastel-green">
                            <FaChartLine className="option-icon" />
                            <h3>Reviews</h3>
                            <a href="ReviewProgress" className="button">View Progress</a>
                        </div>
                        <div className="option-card mood pastel-lavender">
                            <FaSmile className="option-icon" />
                            <h3>Track Your Mood</h3>
                            <a href="/MoodTracker" className="button">Track Mood</a>
                        </div>
                        
                        </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
