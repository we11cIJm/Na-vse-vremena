import React from "react"
import { useNavigate } from 'react-router-dom';
import { Button } from "@salutejs/plasma-ui";
import { BodyL, bodyL } from '@salutejs/plasma-ui';

function Menu({assistant_global}) {

    const navigate = useNavigate();

    function toStartQuiz(type) {
        assistant_global(type, "choose_theme")
        //navigate('/game', { state: { Type: type } });
    }

    return (
        <div className="Menu">
            <h1 className="quiz-text">Для начала игры нужно выбрать время:</h1>
            <div className="types">
            <Button text="Past" size="l" onClick={() => toStartQuiz(1)} className="menu-btn"/>
            <Button text="Present" size="l" onClick={() => toStartQuiz(2)} className="menu-btn"/>
            <Button text="Future" size="l" onClick={() => toStartQuiz(3)} className="menu-btn"/>

            </div>
        </div>
    )
}

export default Menu