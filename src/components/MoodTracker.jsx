import React, { useState } from 'react';
import "../style/MoodTracker.css";

const MoodTracker = () => {
    const [moods, setMoods] = useState([80, 70, 90, 60, 85, 75, 95]); // Example mood data

    return (
        <div className="mood-tracker">
            <header>
                <h1>Mood Tracker</h1>
                <p>Track your daily moods and reflect on your feelings!</p>
            </header>
            <main>
                <section className="mood-scale">
                    <h2>Mood Scale</h2>
                    <div className="scale">
                        {['Very Bad', 'Bad', 'Neutral', 'Good', 'Very Good'].map((mood, index) => (
                            <div key={index} className="mood-bar" style={{ height: `${moods[index]}%`, backgroundColor: getMoodColor(index) }}>
                                <span>{mood}</span>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="notes">
                    <h2>Daily Reflections</h2>
                    <textarea placeholder="Write your thoughts here..."></textarea>
                </section>
            </main>
        </div>
    );
};

const getMoodColor = (index) => {
    const colors = ['#FF677D', '#FFABAB', '#FFE5B4', '#A8E6CF', '#A0E7E2']; // Colors for mood levels
    return colors[index];
};

export default MoodTracker;