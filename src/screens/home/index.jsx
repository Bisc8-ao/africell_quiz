import "./main.scss";

import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";

import MainButton from "../../components/buttons/mainButton/index";
import logo from "../../assets/images/NOSSA.png";

function Home() {
  const navigate = useNavigate();
  
  function handleClick() {
    navigate("/intro");
  }

  return (
    <div className="_hm_wrapper">
      <div className="_hm_container">
        <img className="_hm_nossa_logo" src={logo} alt="" />
        <div className="_hm_btn_containers">
          <MainButton
            text="Quero Jogar"
            handleClick={handleClick}
            transitionDelay={500}
          />
          <div className="_hm_contact">+244 923 190 860</div>
          <div className="_hm_social">
            <ul>
              <li className="_hm_social_icon">
                <FaFacebookF />
              </li>
              <li className="_hm_social_icon">
                <FaLinkedinIn />
              </li>
              <li className="_hm_social_icon">
                <FaInstagram />
              </li>
              <li className="_hm_social_icon">
                <IoMdPlay />
              </li>
            </ul>
            <span className="_hm_link">www.nossaseguros.ao</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
