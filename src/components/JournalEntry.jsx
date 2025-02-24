import React, { useState } from "react";
import "../style/JournalEntry.css";
import { addJournalEntry, getJournalEntries } from "../apis/api"; // Import the necessary API functions

const JournalEntry = () => {
    const [entry, setEntry] = useState("");
    const [title, setTitle] = useState(""); // State for the title of the journal
    const [oldEntries, setOldEntries] = useState([]); // State to hold old entries
    const [showOldEntries, setShowOldEntries] = useState(false); // State to toggle old entries visibility

    const userId = localStorage.getItem("userId");

    // Save the current journal entry
    const saveEntry = async () => {
        if (!title || !entry) {
            alert("Title and entry are required!");
            return;
        }

        try {
            const newEntry = {
                title,
                entry,
                userId, // Assuming you have the user ID available
                Date: new Date().toISOString(), // Set the current date here
            };

            // Call the API to save the journal entry
            const response = await addJournalEntry(newEntry);
            
            if (response.status === 201) {
                alert("Journal entry saved! 📖");
                setEntry(""); // Clears the input after saving
                setTitle(""); // Clears the title input after saving
            }
        } catch (error) {
            console.error("Error saving journal entry:", error);
            alert("Error saving journal entry. Please try again.");
        }
    };

    // Fetch old journal entries
    const fetchOldEntries = async () => {
        if (showOldEntries) {
            setShowOldEntries(false); // Hide old entries if they're currently visible
            return;
        }
    
        if (!userId) {
            alert("User not logged in. Please log in to view old journal entries.");
            return;
        }
    
        try {
            const response = await getJournalEntries(); // Assuming this function fetches all journal entries
            console.log("Fetched entries:", response.data); // Log all entries
            console.log("User ID from localStorage:", userId); // Log userId from localStorage
            
            // Log userId for each entry
            response.data.forEach(entry => {
                console.log("Entry userId:", entry.userId);
            });
    
            const entries = response.data.filter(entry => entry.userId === Number(userId)); // Make sure the types match
            console.log("Filtered entries:", entries); // Log the filtered entries
            
            setOldEntries(entries);
            setShowOldEntries(true); // Show the old entries section
        } catch (error) {
            console.error("Error fetching old entries:", error);
            alert("Error fetching old entries. Please try again.");
        }
    };
    
   

    return (
        <div className="journal-container">
            <h2 className="journal-title">📖 Daily Journal</h2>

            <input
                type="text"
                className="journal-title-input"
                placeholder="Enter the title of your journal"
                value={title}
                onChange={(e) => setTitle(e.target.value)} // Update title on change
            />

            <textarea
                className="journal-entry"
                placeholder="Write your thoughts here..."
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
            />

            <div className="journal-buttons">
                <button className="save-btn" onClick={saveEntry}>💾 Save</button>
                <button className="old-entries-btn" onClick={fetchOldEntries}>📜 Old Entries</button>
            </div>

            {/* Display Old Entries */}
            {showOldEntries && (
                <div className="old-entries-section">
                    <h3>Your Old Journal Entries</h3>
                    {oldEntries.length === 0 ? (
                        <p>No old entries found.</p>
                    ) : (
                        <div className="entries-grid">
                            {oldEntries.map((entry, index) => (
                                <div key={index} className="old-entry-box">
                                    <h4 className="entry-title">{entry.title}</h4>
                                    <p className="entry-content">{entry.entry}</p>
                                    <small className="entry-date">{entry.Date}</small>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default JournalEntry;
