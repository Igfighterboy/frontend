import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { QUICKLINKS01 } from "../../data";
import { QUICKLINKS02 } from "../../data";
import { QUICKLINKS03 } from "../../data";
import { FOOTERICON } from "../../data";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col" id="BOT">
                        <h5 className="logo">ALPhA MUSIX</h5>
                        <p>Kerala's Pionner Verifed Music Bot, Delivering Success With Every Note.</p>

                        <div className="social">
                            {FOOTERICON.map((item) => (
                                <Link to="/" className="social-icon">
                                    <i className={item.icon}></i>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col" id="BOT">
                        <h3>SUPPORT</h3>
                        <div className="links">
                            {QUICKLINKS01.map((item) => (
                                <Link to="/" className="link">
                                    {item.display}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col" id="BOT">
                        <h3>WEBSITE PAGES</h3>
                        <div className="links">
                            {QUICKLINKS02.map((item) => (
                                <Link to="/" className="link">
                                    {item.display}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col" id="BOT">
                        <h3>RULES</h3>
                        <div className="links">
                            {QUICKLINKS03.map((item) => (
                                <Link to="/" className="link">
                                    {item.display}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>Copyright Elitedevelopment</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
