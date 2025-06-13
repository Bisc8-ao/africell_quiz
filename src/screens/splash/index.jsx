import './main.scss'

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import logo from '../../assets/svg/logo_cloud.svg'

export default function Splash() {
  const navigate = useNavigate()
  const rand = Math.floor(Math.random() * (3 + 1))

  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 3000)
  }, [])

  return (
    <div className="_sp_wrapper">
      <div className="_sp_image_logo_container">
        <div className="_sp_rotating_bg"></div>
        <img className="_sp_logo-nossa" src={logo} alt="" />
      </div>
    </div>
  )
}
