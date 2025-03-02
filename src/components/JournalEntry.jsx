import React, { useState } from "react";
import "../style/JournalEntry.css";
import {
    addJournalEntry,
    getJournalEntries,
    updateJournalEntry,
    deleteJournalEntry
} from "../apis/api"; 

const JournalEntry = () => {
    const [entry, setEntry] = useState("");
    const [title, setTitle] = useState("");
    const [oldEntries, setOldEntries] = useState([]);
    const [showOldEntries, setShowOldEntries] = useState(false);
    const [editingEntry, setEditingEntry] = useState(null); // Track entry being edited
    const [editedTitle, setEditedTitle] = useState("");
    const [editedEntry, setEditedEntry] = useState("");

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
                userId,
                Date: new Date().toISOString(),
            };

            const response = await addJournalEntry(newEntry);
            
            if (response.status === 201) {
                alert("Journal entry saved! 📖");
                setEntry("");
                setTitle("");
                fetchOldEntries(); // Refresh entries after adding
            }
        } catch (error) {
            console.error("Error saving journal entry:", error);
            alert("Error saving journal entry. Please try again.");
        }
    };

    // Fetch old journal entries
    const fetchOldEntries = async () => {
        if (showOldEntries) {
            setShowOldEntries(false);
            return;
        }

        if (!userId) {
            alert("User not logged in. Please log in to view old journal entries.");
            return;
        }

        try {
            const response = await getJournalEntries();
            const entries = response.data.filter(entry => entry.userId === Number(userId));
            setOldEntries(entries);
            setShowOldEntries(true);
        } catch (error) {
            console.error("Error fetching old entries:", error);
            alert("Error fetching old entries. Please try again.");
        }
    };

    // Delete a journal entry
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this entry?")) return;

        try {
            await deleteJournalEntry(id);
            alert("Entry deleted successfully.");
            setOldEntries(oldEntries.filter(entry => entry.id !== id)); // Remove from state
        } catch (error) {
            console.error("Error deleting entry:", error);
            alert("Failed to delete entry.");
        }
    };

    // Enable edit mode
    const handleEdit = (entry) => {
        setEditingEntry(entry.id);
        setEditedTitle(entry.title);
        setEditedEntry(entry.entry);
    };

    // Save the updated entry
    const saveUpdatedEntry = async (id) => {
        if (!editedTitle || !editedEntry) {
            alert("Title and entry cannot be empty!");
            return;
        }

        try {
            await updateJournalEntry(id, { title: editedTitle, entry: editedEntry });
            alert("Entry updated successfully.");
            
            setOldEntries(oldEntries.map(entry => 
                entry.id === id ? { ...entry, title: editedTitle, entry: editedEntry } : entry
            ));

            setEditingEntry(null); // Exit edit mode
        } catch (error) {
            console.error("Error updating entry:", error);
            alert("Failed to update entry.");
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
                onChange={(e) => setTitle(e.target.value)}
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

            {showOldEntries && (
                <div className="old-entries-section">
                    <h3>Your Old Journal Entries</h3>
                    {oldEntries.length === 0 ? (
                        <p>No old entries found.</p>
                    ) : (
                        <div className="entries-grid">
                            {oldEntries.map((entry) => (
                                <div key={entry.id} className="old-entry-box">
                                    {editingEntry === entry.id ? (
                                        <>
                                            <input
                                                type="text"
                                                className="edit-title-input"
                                                value={editedTitle}
                                                onChange={(e) => setEditedTitle(e.target.value)}
                                            />
                                            <textarea
                                                className="edit-entry-textarea"
                                                value={editedEntry}
                                                onChange={(e) => setEditedEntry(e.target.value)}
                                            />
                                            <button className="save-btn" onClick={() => saveUpdatedEntry(entry.id)}>✔ Save</button>
                                            <button className="cancel-btn" onClick={() => setEditingEntry(null)}>✖ Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <h4 className="entry-title">{entry.title}</h4>
                                            <p className="entry-content">{entry.entry}</p>
                                            <small className="entry-date">{entry.Date}</small>
                                            <div className="entry-actions">
                                                <button className="edit-btn" onClick={() => handleEdit(entry)}>✏ Edit</button>
                                                <button className="delete-btn" onClick={() => handleDelete(entry.id)}>🗑 Delete</button>
                                            </div>
                                        </>
                                    )}
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
