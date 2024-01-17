import React from "react";
import "./About.css";
import { CHOOSEUS } from "../../data";

const About = () => {
    return (
        <section className="about-container">
            <div className="about-img">
                <img src="../Assets/welcome.webp" alt="about-img" />
            </div>
            <div className="about-content">
                <h6 className="subtitle">Why You Choose ALPhA MUSIX</h6>
                <h2>We Guarantee You A Better Music Experiance</h2>
                <h2 className="highlight">In ALPhA MUSIX</h2>
                <p className="about-description">
                    Kerala's First Verified Discord Music Bot With Lightning-fast Response Times And A Extensive Music
                    Library. With Advanced Commands For PlayBack Control, Custom Playlists, And Synchronized Playback WIth
                    Friends, Our Bot delivers A Seamless Music Experience. Customizable settings And a Range Of Additional
                    Features. We Belive That Every Server Deserves A Great music Experience.So We Are Introducing The
                    Ultimate Discord Music Bot - Enjoy High-Quality Audio And Easy-To-Use Commands. From Relaxing Beats To
                    Party Hits. Elevate Your Server With The Best Music Experience And Bring your Community Together Like
                    Never before.
                </p>

                <div className="choose-us-container">
                    {CHOOSEUS.map((item) => (
                        <div className="choose-us-item-content">
                            <span className="choose-us-icon">
                                <i class={item.icon}></i>
                            </span>

                            <div className="choose-us-data">
                                <h4 className="choose-us-title">{item.title}</h4>
                                <p className="description">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
