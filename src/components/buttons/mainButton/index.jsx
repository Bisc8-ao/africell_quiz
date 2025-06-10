import "./main.scss";

import { motion } from "framer-motion";

function MainButton({ text, handleClick, transitionDelay }) {

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      className="_mb_btn"
      onClick={() => {
        setTimeout(() => {
          handleClick()
        }, !transitionDelay ? 0 : transitionDelay)
      }}
    >
      <span>{text}</span>
    </motion.button>
  );
}

export default MainButton;
