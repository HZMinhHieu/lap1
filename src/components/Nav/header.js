import React from "react";
import './header.css'
function Header() {
    return (
        <div className="header">
            <div className="nav-logo">
                <img src="https://i.imgur.com/GhpuGee.png"></img>
            </div>
            <div className="nav-home">
                <ul>
                    <li className="nav-home-item"><a href="">Home</a></li>
                    <li className="nav-home-item"><a href="">Courses</a></li>
                    <li className="nav-home-item"><a href="">Instuctors</a></li>
                    <li className="nav-home-item"><a href="">Schedules</a></li>
                    <li className="nav-home-item"><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div className="nav-search">
                <div className="nav-item">
                    <img src="https://i.imgur.com/xoFzAZe.png"></img>
                </div>
                <div className="nav-button">
                    <button id="login" className="nav-login">Login</button>
                    <button id="register" className="nav-login">Register</button>
                </div>
            </div>
        
        </div>

    );
}
export default Header;