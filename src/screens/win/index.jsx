import "./main.scss";

import { useNavigate } from "react-router-dom";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

import Header from "../../components/header/index";
import Footer from "../../components/footer/index"
import MainButton from "../../components/buttons/mainButton/index"

import winLogo from "../../assets/svg/win.svg";

function Win() {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  function handleClick() {
      navigate('/')
      window.location.reload();
  }

  setTimeout(() => {
    navigate('/')
    window.location.reload()
  }, 20000)

  return (
    <div className="_wn_wrapper">
      <Confetti width={width} height={height} />
      <Header />
      <div className="_wn_container">
        <img className="_wn_nossa_logo" src={winLogo} alt="" />

        <div className="_wn_btn_containers">
          <MainButton text="Jogar Novamente" handleClick={handleClick} transitionDelay={500}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Win;
