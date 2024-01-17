import React from "react";
import "./Mobilenav.css";
import { Link } from "react-router-dom";
const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                <Link to="/dashboard" className="logo">
                        ALPhA MUSIX
                    </Link>

                    <ul>
                        <li>
                            <Link to="/" className="menu-item">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/dashboard" className="menu-item">
                                Commands
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className="menu-item">
                                Premium
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="menu-item">
                                Documentation
                            </Link>
                        </li>

                        <button className="login-button">Login</button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
