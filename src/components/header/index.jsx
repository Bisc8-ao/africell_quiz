import "./main.scss"

import nossa_logo from "../../assets/svg/nossa_logo.svg"

function Header() {

    return (
        <div className="_he_wrapper">
            <img src={nossa_logo} alt="" />
        </div>
    )
}

export default Header;