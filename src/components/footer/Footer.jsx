import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaUserTag,
    FaAnchor,
    FaHome,
    FaDev,
    FaGlobe,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                "Thank you for visiting our website! Your continued support and presence on our platform are deeply appreciated. 
                We value your engagement with our content. Stay connected with us for the latest updates, exciting news, and much more. 
                We look forward to sharing our journey with you."
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a className="icon-link" href="https://github.com/Rutiktorambe" target="_blank"><FaGithub /></a>
                    </span>
                    <span className="icon">
                        <a className="icon-link" href="https://www.instagram.com/rutik__t/"><FaInstagram /></a>
                    </span>
                    <span className="icon"> 
                        <a  className="icon-link" href="https://rutiktorambe.netlify.app/"><FaGlobe /></a>
                    </span>
                    <span className="icon">
                       <a className="icon-link" href="https://www.linkedin.com/in/rutik-torambe-314230228/" target="_blank"> <FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
