import React from 'react';
import '../style/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* Removed the sidebar */}
            {/* <aside className="sidebar">
                <h2>Mental Health Help</h2>
                <ul className="menu">
                    <li>Exercises</li>
                    <li>Goals</li>
                    <li>Journaling</li>
                    <li>Reviews</li>
                    <li>Mood Tracker</li>
                </ul>
            </aside> */}
            <main className="main-content">
                <div className="header">
                    <h1>Welcome to Your Dashboard!</h1>
                    <p>You have 3 unread alerts!</p>
                </div>
                <section className="cards">
                    <div className="card exercises">
                        <div className="icon">🧘</div>
                        <h3>Daily Exercises</h3>
                        <a href="#" className="button">Start Now</a>
                    </div>
                    <div className="card goals">
                        <div className="icon">🎯</div>
                        <h3>Set Your Goals</h3>
                        <a href="#" className="button">Set Goals</a>
                    </div>
                    <div className="card journaling">
                        <div className="icon">📓</div>
                        <h3>Journal Entry</h3>
                        <a href="#" className="button">Write Now</a>
                    </div>
                    <div className="card reviews">
                        <div className="icon">📈</div>
                        <h3>Review Progress</h3>
                        <a href="#" className="button">View Progress</a>
                    </div>
                    <div className="card mood">
                        <div className="icon">😊</div>
                        <h3>Track Your Mood</h3>
                        <a href="#" className="button">Track Mood</a>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;