import React from "react";
import { useNavigate } from "react-router-dom";
import futureTheoryImage from "../Content/future_theory.png";

const FutureTheory = () => {
    const navigate = useNavigate();

    const goToMainMenu = () => {
        navigate("/");
    };

    return (
        <div className="theory-page">
            <img src={futureTheoryImage} alt="Future Theory" className="theory-page"/>
            <button onClick={goToMainMenu} className="back-button-invisible">
                Список времён
            </button>
            <button onClick={goToMainMenu} className="back-button">
                Список времён
            </button>
        </div>
    );
};

export default FutureTheory;
