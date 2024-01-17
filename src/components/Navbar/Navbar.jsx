import React, {useState} from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleLogin = ()=>{
        window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1194598865530277958&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&scope=identify+guilds'
    }

    

    return (
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
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
                        
                            <button className="login-button" onClick={handleLogin}>Login</button>
                       
                           
                    </ul>


                    <button className="menu-btn" onClick={toggleMenu}>
                        <i class={openMenu ? "ri-close-fill" : "ri-menu-2-line"}></i>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
