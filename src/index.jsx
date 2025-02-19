import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage"; // Import the LandingPage component
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import DailyExercises from "./components/DailyExercises";
import MoodTracker from "./components/MoodTracker";
import SetGoals from "./components/SetGoals";
import JournalEntry from "./components/JournalEntry";
import ReviewProgress from "./components/ReviewProgress";
import About from "./components/About";
// import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Router>
      <Header />
 
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Set LandingPage as the home route */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/DailyExercises" element={<DailyExercises />} /> {/* Add this route */}
        <Route path="/MoodTracker" element={<MoodTracker />} />
        <Route path="/SetGoals" element={<SetGoals />} />
        <Route path="/JournalEntry" element={<JournalEntry />} />
        <Route path="/ReviewProgress" element={<ReviewProgress />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  </StrictMode>
);