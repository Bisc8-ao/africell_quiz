import './main.scss'

import { useNavigate } from 'react-router-dom'

import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import MainButton from '../../components/buttons/mainButton/index'

import hole from '../../assets/svg/cloud.svg'

function Intro() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/quiz')
  }

  return (
    <div className="_in_wrapper">
      <Header />
      <div className="_in_container">
        <div className="_le_hole_container">
          <p className="_le_message _le_mesage_in">
            Quanto sabes <br/>sobre a Africell? <br/> clica na resposta certa e
            habilita-te a ganhar prémios.
          </p>
        </div>
          <hr />
        <div className="_in_btn_containers">
          <MainButton text="Começar" handleClick={handleClick} transitionDelay={500} />
        </div>
        <hr />
      </div>
      <Footer />
    </div>
  )
}

export default Intro
