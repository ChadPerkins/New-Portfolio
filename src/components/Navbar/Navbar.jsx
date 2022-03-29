import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => {
                if (window.innerWidth > 660) {
                    setClick(false);
                    setShowLinks(false);
                }
            },
            false
        );
    }, []);

    return (
        <header>
            <nav className="navbar">
                <div className={showLinks ? "hidden" : "nav-links"}>
                    <ul className="navbar-nav">
                        <li className="navbar-link">
                            <Link to="/">
                                <span
                                    onClick={() => {setShowLinks(false); setClick(false)}}
                                    className="nav-text"
                                >
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className="navbar-link">
                            <Link to="/about">
                                <span
                                    onClick={() => {setShowLinks(false); setClick(false)}}
                                    className="nav-text"
                                >
                                    About
                                </span>
                            </Link>
                        </li>
                        <li className="navbar-link">
                            <Link to="/projects">
                                <span
                                    onClick={() => {setShowLinks(false); setClick(false)}}
                                    className="nav-text"
                                >
                                    Projects
                                </span>
                            </Link>
                        </li>
                        <li className="navbar-link">
                            <Link to="/contact">
                                <span
                                    onClick={() => {setShowLinks(false); setClick(false)}}
                                    className="nav-text"
                                >
                                    Contact
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="social-link">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/ChadPerkins"
                        >
                            <FaGithub
                                    onClick={() => {setShowLinks(false); setClick(false)}}
                                className="nav-text"
                            />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/chad-perkins-259307231/"
                        >
                            <FaLinkedin
                                    onClick={() => {setShowLinks(false); setClick(false)}}
                                className="nav-text"
                            />
                        </a>
                    </ul>
                </div>
                <div className="menue-icon" onClick={() => setClick(!click)}>
                    {click ? (
                        <FaTimes
                            className="nav-text"
                            onClick={() => setShowLinks(!showLinks)}
                        />
                    ) : (
                        <FaBars
                            className="nav-text"
                            onClick={() => setShowLinks(!showLinks)}
                        />
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
