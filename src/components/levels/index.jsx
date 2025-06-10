import "./main.scss";

import Header from "../header/index";
import Footer from "../footer/index";
import MainButton from "../buttons/mainButton/index";

import hole from "../../assets/svg/hole.svg";

const LEVELS = ["Nível 1", "Nível 2", "Nível 3"];

function getGameLevel(questionNumber) {
  if (questionNumber <= 4) {
    return LEVELS[0];
  } else if (questionNumber <= 8) {
    return LEVELS[1];
  } else {
    return LEVELS[2];
  }
}

function Levels({ questionNumber, onContinue, onQuit }) {
  const gameLevel = getGameLevel(questionNumber);

  return (
    <div className="_le_wrapper">
      <Header />
      <div className="_le_container">
        <div className="_le_hole_container">
          <img className="_le_nossa_logo" src={hole} alt="Logo" />
          <p className="_le_message">
            Concluiu o {gameLevel}. Deseja continuar?
          </p>
        </div>
        <div className="_le_buttons">
          <MainButton text="Sim" handleClick={onContinue} transitionDelay={500}/>
          <MainButton text="Não" handleClick={onQuit} transitionDelay={500}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Levels;
