import "./main.scss";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "use-sound";

import Header from "../header/index";
import Footer from "../footer/index";
import AnswerButton from "../buttons/answerButton/index";

import Levels from "../levels";
import HorizontalTimer from "../horizontalTimer/index"; // Importa o temporizador circular

import play from "../../assets/sounds/gaming.mp3";
import correct from "../../assets/sounds/correct.mp3";
import wrong from "../../assets/sounds/wrong.mp3";

function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const duration = 30; // Defina a duração do temporizador em segundos

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [showLevel, setShowLevel] = useState(false);
  const [className, setClassName] = useState("_tr_answer");
  const [isBlocked, setIsBlocked] = useState(false);

  const [letsPlay, { stop: stopLetsPlay }] = useSound(play, { loop: true });
  const [correctAnswerSound] = useSound(correct);
  const [wrongAnswerSound] = useSound(wrong);

  useEffect(() => {
    letsPlay();
    return () => stopLetsPlay();
  }, [letsPlay, stopLetsPlay]);

  useEffect(() => {
    const currentQuestion = data[questionNumber - 1];
    setQuestion(currentQuestion);
    setCorrectAnswer(currentQuestion.answers.find(ans => ans.correct));
    if (timerRef.current) {
      timerRef.current.startTimer();
    }
  }, [data, questionNumber]);

  const handleTimerComplete = () => {
    stopLetsPlay();
    navigate("/lose");
    setStop(true);
  };

  const delay = (duration) => new Promise(resolve => setTimeout(resolve, duration));

  const handleContinue = () => {
    setShowLevel(false);
    setQuestionNumber((prev) => prev + 1);
    if (timerRef.current) {
      timerRef.current.startTimer();
    }
  };

  const handleQuit = () => {
    stopLetsPlay();
    const gameLevel = getGameLevel(questionNumber);
    navigate("/win", {
      state: { message: `Concluiu o ${gameLevel}, venha buscar o seu prémio.` },
    });
    setStop(true);
  };

  function getGameLevel(questionNumber) {
    if (questionNumber <= 4) {
      return "Nível 1";
    } else if (questionNumber <= 8) {
      return "Nível 2";
    } else {
      return "Nível 3";
    }
  }

  async function handleClick(answer) {
    if (isBlocked) return;

    if (timerRef.current) {
      timerRef.current.stopTimer(); // Pare o temporizador
    }

    setIsBlocked(true);
    setSelectedAnswer(answer);
    setClassName("_tr_answer active");

    await delay(3000);
    if (answer.correct) {
      setClassName("_tr_answer _tr_correct");
    } else {
      setClassName("_tr_answer _tr_wrong");
    }

    await delay(3000);
    if (answer.correct) {
      correctAnswerSound();
      if (questionNumber === data.length) {
        stopLetsPlay();
        navigate("/win", { state: { message: "Você venceu o Jogo" } });
        setStop(true);
      } else {
        if (questionNumber === 4 || questionNumber === 8) {
          setShowLevel(true);
        } else {
          setQuestionNumber((prev) => prev + 1);
          if (timerRef.current) {
            timerRef.current.startTimer();
          }
        }
      }
    } else {
      // Resposta Errada
      wrongAnswerSound();
      stopLetsPlay();
      navigate("/lose");
      setStop(true);
    }
    setIsBlocked(false);
    setClassName("");
  }

  return (
    <div>
      {showLevel ? (
        <Levels
          questionNumber={questionNumber}
          onContinue={handleContinue}
          onQuit={handleQuit}
        />
      ) : (
        <div className="_tr_wrapper">
          <div>
            <Header />
            <div className="_timer_container">
              <HorizontalTimer
                ref={timerRef}
                duration={duration}
                onComplete={handleTimerComplete}
              />
            </div>
            <div className="_tr_display_container">
              <span className="_tr_question">{question?.question}</span>
            </div>
          </div>
          <div className="_tr_answers_container">
            {question?.answers?.map((answer, index) => (
              <AnswerButton
                key={index}
                answer={answer}
                handleClick={handleClick}
                selectedAnswer={selectedAnswer}
                className={selectedAnswer === answer 
                  ? className 
                  : (correctAnswer === answer 
                    ? "_tr_answer _tr_correct" 
                    : "_tr_answer")}
                transitionDelay={300}
              />
            ))}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Trivia;
