import React from "react";
import { useNavigate } from "react-router-dom";
import presentTheoryImage from "../Content/present_theory.png";
import pastTheoryImage from "../Content/past_theory.png";
import futureTheoryImage from "../Content/future_theory.png";


const Theory = () => {
    const navigate = useNavigate();

    const goToMainMenu = () => {
        navigate("/");
    };

    return (
        <div className="theory-page">
            <img src={presentTheoryImage} alt="Present Theory" className="theory-page"/>
            <img src={pastTheoryImage} alt="Past Theory" className="theory-page"/>
            <img src={futureTheoryImage} alt="Future Theory" className="theory-page"/>

            <button onClick={goToMainMenu} className="back-button">
                Список времён
            </button>
            <button onClick={goToMainMenu} className="back-button-invisible">
                Список времён
            </button>
        </div>
    );
};

export default Theory;
