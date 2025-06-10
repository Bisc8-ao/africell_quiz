import "./main.scss";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import logo from "../../assets/images/NOSSA.png";

export default function Splash() {
  const navigate = useNavigate();
  const rand = Math.floor(Math.random() * (3 + 1));

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  });

  return (
    <div className="_sp_wrapper">
      <img className="_sp_logo-nossa teste" src={logo} alt="" />
    </div>
  );
}
