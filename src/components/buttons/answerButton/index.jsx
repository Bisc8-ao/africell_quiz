import "./main.scss";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function AnswerButton({
  answer,
  handleClick,
  selectedAnswer,
  className,
  transitionDelay,
}) {
  const answerRef = useRef(null);

  // Simple touch handler for mobile
  const handleTouchEnd = () => {
    setTimeout(
      () => {
        handleClick(answer);
      },
      !transitionDelay ? 0 : transitionDelay
    );
  };

  return (
    <div>
      <motion.div
        ref={answerRef}
        whileTap={{ scale: 0.85 }}
        className={`${selectedAnswer === answer ? className : "_tr_answer"}`}
        onTouchEnd={handleTouchEnd}
        onClick={() => {
          setTimeout(
            () => {
              handleClick(answer);
            },
            !transitionDelay ? 0 : transitionDelay
          );
        }}
      >
        <p>{answer.text}</p>
      </motion.div>
    </div>
  );
}

export default AnswerButton;
