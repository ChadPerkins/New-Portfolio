import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="navbar-link">
                        <Link to="/">
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    <li className="navbar-link">
                        <Link to="/About">
                            <span className="nav-text">About</span>
                        </Link>
                    </li>
                    <li className="navbar-link">
                        <Link to="/Projects">
                            <span className="nav-text">Projects</span>
                        </Link>
                    </li>
                    <li className="navbar-link">
                        <Link to="/Contact">
                            <span className="nav-text">Contact</span>
                        </Link>
                    </li>
                </ul>
                <div className="social-link">
                    <a href="https://github.com/ChadPerkins">
                        <FaGithub className="nav-text" />
                    </a>
                    <a href="https://www.linkedin.com/in/chad-perkins-259307231/">
                        <FaLinkedin className="nav-text" />
                    </a>
                </div>
                <div className="menue-icon" onClick={handleClick}>
                    {click ? (
                        <FaTimes className="nav-text" />
                    ) : (
                        <FaBars className="nav-text" />
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
