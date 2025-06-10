import "./main.scss"

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";

function Footer() {
    return (
        <div className="_fo_wrapper">
            <div>
                <ul className="_fo_social_container">
                    <li className="_fo_social_icon"><FaFacebookF /></li>
                    <li className="_fo_social_icon"><FaLinkedinIn /></li>
                    <li className="_fo_social_icon"><FaInstagram /></li>
                    <li className="_fo_social_icon"><IoMdPlay /></li>
                </ul>
            </div>
            <div className="_fo_link_container">
                <span className="_fo_link">www.nossaseguros.ao</span>
            </div>
        </div>
    )
}

export default Footer;