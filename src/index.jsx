import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage"; // Import the LandingPage component
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
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
      </Routes>
    </Router>
  </StrictMode>
);


