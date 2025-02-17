import React, { useState } from "react";
import "../style/JournalEntry.css";

const JournalEntry = () => {
    const [entry, setEntry] = useState("");
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        }
    };

    const saveEntry = () => {
        alert("Journal entry saved! 📖");
        setEntry(""); // Clears the input after saving
    };

    return (
        <div className="journal-container">
            <h2 className="journal-title">📖 Daily Journal</h2>
            
            <textarea
                className="journal-entry"
                placeholder="Write your thoughts here..."
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
            />

            <div className="journal-design">
                
            </div>

            <div className="journal-buttons">
                <button className="save-btn" onClick={saveEntry}>💾 Save</button>
                <button className="old-entries-btn">📜 Old Entries</button>
            </div>
        </div>
    );
};

export default JournalEntry;
