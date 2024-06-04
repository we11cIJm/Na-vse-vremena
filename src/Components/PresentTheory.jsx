import React from "react";
import { useNavigate } from "react-router-dom";
import presentTheoryImage from "../Content/present_theory.png";
import {useDefaultSectionFocus, useSection} from '@salutejs/spatial';

const PresentTheory = () => {
    const navigate = useNavigate();
    const [theoryProps] = useSection('presentTheory');

    const goToMainMenu = () => {
        navigate("/");
    };

    useDefaultSectionFocus('presentTheory');

    return (
        <div {...theoryProps}>
            <div className="theory-page">
                <img src={presentTheoryImage} alt="Present Theory" className="theory-page"/>
                <button onClick={goToMainMenu} className="sn-section-item back-button" tabIndex={-1}>
                    Список времён
                </button>
                <button onClick={goToMainMenu} className="sn-section-item back-button-invisible" tabIndex={-1}>
                    Список времён
                </button>
            </div>
        </div>
    );
};

export default PresentTheory;
