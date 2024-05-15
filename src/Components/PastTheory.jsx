import React from "react";
import { useNavigate } from "react-router-dom";
import pastTheoryImage from "../Content/past_theory.png";

const PastTheory = () => {
    const navigate = useNavigate();

    const goToMainMenu = () => {
        navigate("/");
    };

    return (
        <div className="theory-page">
            <img src={pastTheoryImage} alt="Past Theory" className="theory-page"/>
            <button onClick={goToMainMenu} className="back-button-invisible">
                Список времён
            </button>
            <button onClick={goToMainMenu} className="back-button">
                Список времён
            </button>
        </div>
    );
};

export default PastTheory;
