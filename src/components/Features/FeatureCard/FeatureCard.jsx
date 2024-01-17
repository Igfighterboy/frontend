import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({ title, iconUrl, isActive, onClick }) => {
    return(
        <div
        className={`feature-card ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
        >
            <div className="feature-icon">
                <img draggable="false" src={iconUrl} alt={title} />
            </div>

            <span>{title}</span>
        </div>
    )
};

export default FeatureCard;
