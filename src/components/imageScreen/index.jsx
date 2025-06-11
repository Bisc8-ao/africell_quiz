import React from "react";
import "./main.scss";

/**
 * Component to display an image for a specified duration after answering a question
 * @param {Object} props - Component props
 * @param {boolean} props.show - Whether to show the image screen
 * @param {string} props.imageUrl - URL of the image to display (optional)
 * @param {function} props.onComplete - Function to call when the display time is complete
 */
function ImageScreen({ show, imageUrl, onComplete }) {
  React.useEffect(() => {
    let timer;
    if (show) {
      timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 5000); // 5 seconds
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [show, onComplete]);

  if (!show) return null;

  return (
    <div className="image-screen">
      <div className="image-container">
        {imageUrl ? (
          <img src={imageUrl} alt="Question completed" />
        ) : (
          <div className="placeholder-text">
            <h2>Question Completed!</h2>
            <p>Place your image here</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageScreen;
