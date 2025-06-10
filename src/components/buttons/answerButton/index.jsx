import "./main.scss"
import { motion } from "framer-motion";

function AnswerButton({ answer, handleClick, selectedAnswer, className, transitionDelay }) {

    return (
        <div>
            <motion.div
                whileTap={{ scale: 0.85 }}
                className={selectedAnswer === answer ? className : "_tr_answer"}
                onClick={() => {
                  setTimeout(() => {
                    handleClick(answer)
                  }, !transitionDelay ? 0 : transitionDelay)
                }}
              >
                <p>{answer.text}</p>
              </motion.div>
        </div>
    )
}

export default AnswerButton;