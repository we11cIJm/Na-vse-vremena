import React from "react";
import { useNavigate } from "react-router-dom";
import pastTheoryImage from "../Content/past_theory.png";
import {useDefaultSectionFocus, useSection} from '@salutejs/spatial';

const PastTheory = () => {

    const navigate = useNavigate();
    const [theoryProps] = useSection('pastTheory');

    const goToMainMenu = () => {
        navigate("/");
    };

    useDefaultSectionFocus('pastTheory');

    return (
        <div {...theoryProps}>
            <div className="theory-page">
                <img src={pastTheoryImage} alt="Past Theory" className="theory-page"/>
                <button onClick={goToMainMenu} className="sn-section-item back-button-invisible" tabIndex={-1}>
                    Список времён
                </button>
                <button onClick={goToMainMenu} className="sn-section-item back-button" tabIndex={-1}>
                    Список времён
                </button>
            </div>
        </div>
    );
};

export default PastTheory;
