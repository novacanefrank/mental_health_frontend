import React, { useState } from "react";
import { FaStar, FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import "../style/ReviewProgress.css"; // Ensure correct CSS path

const ReviewProgress = () => {
  const [reviews, setReviews] = useState([
    { name: "Emily", text: "This app is life-changing! 🍂✨", rating: 5 },
    { name: "Liam", text: "Love the design and experience! 🍁", rating: 4 },
    { name: "Sophia", text: "Very helpful for daily wellness. 🍃", rating: 5 },
  ]);

  const [newReview, setNewReview] = useState("");
  const [selectedRating, setSelectedRating] = useState(5);

  const addReview = () => {
    if (newReview.trim() !== "") {
      const newEntry = {
        name: "You",
        text: newReview,
        rating: selectedRating,
      };
      setReviews([...reviews, newEntry]);
      setNewReview("");
      setSelectedRating(5);
    }
  };

  return (
    <div className="review-container">
      <h2>🌿 User Reviews</h2>

      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h4>{review.name}</h4>
            <p>{review.text}</p>
            <div className="stars">
              {Array(review.rating).fill().map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="add-review-section">
        <h3>📝 Leave a Review</h3>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your thoughts..."
        />
        <div className="rating-section">
          <span>Rate Us:</span>
          <button onClick={() => setSelectedRating(5)}><FaSmile className="emoji happy" /></button>
          <button onClick={() => setSelectedRating(3)}><FaMeh className="emoji neutral" /></button>
          <button onClick={() => setSelectedRating(1)}><FaFrown className="emoji sad" /></button>
        </div>
        <button className="submit-review-btn" onClick={addReview}>
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewProgress;
