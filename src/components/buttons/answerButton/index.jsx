import "./main.scss";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function AnswerButton({
  answer,
  handleClick,
  selectedAnswer,
  className,
  transitionDelay,
  onDragStart,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [touchDragging, setTouchDragging] = useState(false);
  const answerRef = useRef(null);
  const touchPositionRef = useRef({ x: 0, y: 0 });
  const originalPositionRef = useRef({ x: 0, y: 0 });

  // For standard mouse drag events
  const handleDragStart = (e) => {
    // Store the answer data in the dataTransfer object
    e.dataTransfer.setData("application/json", JSON.stringify(answer));
    // Set a custom drag image (optional)
    const dragImage = document.createElement("div");
    dragImage.textContent = answer.text;
    dragImage.className = "_tr_answer_drag_image";
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 0, 0);
    setTimeout(() => document.body.removeChild(dragImage), 0);

    setIsDragging(true);
    if (onDragStart) onDragStart(answer);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // For touch events
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchPositionRef.current = { x: touch.clientX, y: touch.clientY };

    if (answerRef.current) {
      const rect = answerRef.current.getBoundingClientRect();
      originalPositionRef.current = { x: rect.left, y: rect.top };
    }
  };

  const handleTouchMove = (e) => {
    if (!touchDragging && answerRef.current) {
      // Start dragging after a small threshold to avoid accidental drags
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchPositionRef.current.x;
      const deltaY = touch.clientY - touchPositionRef.current.y;

      if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
        setTouchDragging(true);
        if (onDragStart) onDragStart(answer);

        // Create a visual clone for dragging
        const clone = answerRef.current.cloneNode(true);
        clone.style.position = "fixed";
        clone.style.zIndex = "1000";
        clone.style.opacity = "0.8";
        clone.style.pointerEvents = "none";
        clone.style.width = `${answerRef.current.offsetWidth}px`;
        clone.style.left = `${originalPositionRef.current.x}px`;
        clone.style.top = `${originalPositionRef.current.y}px`;
        clone.id = "dragging-clone";
        document.body.appendChild(clone);
      }
    }

    if (touchDragging) {
      e.preventDefault(); // Prevent scrolling while dragging
      const touch = e.touches[0];
      const clone = document.getElementById("dragging-clone");

      if (clone) {
        clone.style.left = `${
          touch.clientX - answerRef.current.offsetWidth / 2
        }px`;
        clone.style.top = `${touch.clientY - 30}px`;
      }

      // Emit custom event for question container to detect
      const touchDropEvent = new CustomEvent("touchdrag", {
        bubbles: true,
        detail: {
          x: touch.clientX,
          y: touch.clientY,
          answer: answer,
        },
      });
      document.dispatchEvent(touchDropEvent);
    }
  };

  const handleTouchEnd = (e) => {
    if (touchDragging) {
      const clone = document.getElementById("dragging-clone");
      if (clone) {
        document.body.removeChild(clone);
      }

      // Emit touch drop event
      const touchEndEvent = new CustomEvent("touchdrop", {
        bubbles: true,
        detail: {
          answer: answer,
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY,
        },
      });
      document.dispatchEvent(touchEndEvent);

      setTouchDragging(false);
    } else {
      // If not dragging, treat as a click
      setTimeout(
        () => {
          handleClick(answer);
        },
        !transitionDelay ? 0 : transitionDelay
      );
    }
  };

  // Clean up any clones if component unmounts during drag
  useEffect(() => {
    return () => {
      const clone = document.getElementById("dragging-clone");
      if (clone) {
        document.body.removeChild(clone);
      }
    };
  }, []);

  return (
    <div>
      <motion.div
        ref={answerRef}
        whileTap={{ scale: touchDragging ? 1 : 0.85 }}
        className={`${selectedAnswer === answer ? className : "_tr_answer"} ${
          isDragging || touchDragging ? "_tr_answer_dragging" : ""
        }`}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => {
          // Prevent click when ending a touch drag
          if (!touchDragging) {
            setTimeout(
              () => {
                handleClick(answer);
              },
              !transitionDelay ? 0 : transitionDelay
            );
          }
        }}
      >
        <p>{answer.text}</p>
      </motion.div>
    </div>
  );
}

export default AnswerButton;
