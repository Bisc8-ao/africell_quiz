import "./main.scss";

import { useNavigate } from "react-router-dom";

import Header from "../../components/header/index";
import Footer from "../../components/footer/index"
import MainButton from "../../components/buttons/mainButton/index"

import loseLogo from "../../assets/svg/lose.svg";

function Lose() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/')
    window.location.reload()
  }, 10000)

  function handleClick() {
      navigate('/')
      window.location.reload()
  }

  return (
    <div className="_lo_wrapper">
      <Header />
      <div className="_lo_container">
        <img className="_lo_nossa_logo" src={loseLogo} alt="" />

        <div className="_lo_btn_containers">
          <MainButton text="Jogar Novamente" handleClick={handleClick} transitionDelay={500}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Lose;
